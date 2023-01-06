package sdk

import (
	"net/http"

	"openapi/pkg/models/shared"
	"openapi/pkg/utils"
)

var ServerList = []string{
	"https://market.openchannel.io/v2",
}

type HTTPClient interface {
	Do(req *http.Request) (*http.Response, error)
}

type SDK struct {
	AppsFindAndModifyApps                           *AppsFindAndModifyApps
	CustomGatewayProcessPaymentsAndRefunds          *CustomGatewayProcessPaymentsAndRefunds
	DeveloperAccountsFindAndModifyDeveloperAccounts *DeveloperAccountsFindAndModifyDeveloperAccounts
	DevelopersFindAndModifyDevelopers               *DevelopersFindAndModifyDevelopers
	EventsFindEvents                                *EventsFindEvents
	FilesUploadFiles                                *FilesUploadFiles
	MarketsThisMarketplace                          *MarketsThisMarketplace
	OwnershipFindOwnership                          *OwnershipFindOwnership
	PermissionAddAndRemovePermissions               *PermissionAddAndRemovePermissions
	ReviewsFindAndModifyReviews                     *ReviewsFindAndModifyReviews
	StatsFindMarketplaceStatistics                  *StatsFindMarketplaceStatistics
	StripeGatewayProcessPaymentsAndRefunds          *StripeGatewayProcessPaymentsAndRefunds
	TransactionsFindPaymentsAndRefunds              *TransactionsFindPaymentsAndRefunds
	UserAccountsFindAndModifyUserAccounts           *UserAccountsFindAndModifyUserAccounts
	UsersFindAndModifyUsers                         *UsersFindAndModifyUsers

	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_security       *shared.Security
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

type SDKOption func(*SDK)

func WithServerURL(serverURL string, params map[string]string) SDKOption {
	return func(sdk *SDK) {
		if params != nil {
			serverURL = utils.ReplaceParameters(serverURL, params)
		}

		sdk._serverURL = serverURL
	}
}

func WithClient(client HTTPClient) SDKOption {
	return func(sdk *SDK) {
		sdk._defaultClient = client
	}
}

func WithSecurity(security shared.Security) SDKOption {
	return func(sdk *SDK) {
		sdk._security = &security
	}
}

func New(opts ...SDKOption) *SDK {
	sdk := &SDK{
		_language:   "go",
		_sdkVersion: "",
		_genVersion: "internal",
	}
	for _, opt := range opts {
		opt(sdk)
	}

	if sdk._defaultClient == nil {
		sdk._defaultClient = http.DefaultClient
	}
	if sdk._securityClient == nil {

		if sdk._security != nil {
			sdk._securityClient = utils.ConfigureSecurityClient(sdk._defaultClient, sdk._security)
		} else {
			sdk._securityClient = sdk._defaultClient
		}

	}

	if sdk._serverURL == "" {
		sdk._serverURL = ServerList[0]
	}

	sdk.AppsFindAndModifyApps = NewAppsFindAndModifyApps(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.CustomGatewayProcessPaymentsAndRefunds = NewCustomGatewayProcessPaymentsAndRefunds(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.DeveloperAccountsFindAndModifyDeveloperAccounts = NewDeveloperAccountsFindAndModifyDeveloperAccounts(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.DevelopersFindAndModifyDevelopers = NewDevelopersFindAndModifyDevelopers(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.EventsFindEvents = NewEventsFindEvents(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.FilesUploadFiles = NewFilesUploadFiles(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.MarketsThisMarketplace = NewMarketsThisMarketplace(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.OwnershipFindOwnership = NewOwnershipFindOwnership(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.PermissionAddAndRemovePermissions = NewPermissionAddAndRemovePermissions(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.ReviewsFindAndModifyReviews = NewReviewsFindAndModifyReviews(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.StatsFindMarketplaceStatistics = NewStatsFindMarketplaceStatistics(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.StripeGatewayProcessPaymentsAndRefunds = NewStripeGatewayProcessPaymentsAndRefunds(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.TransactionsFindPaymentsAndRefunds = NewTransactionsFindPaymentsAndRefunds(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.UserAccountsFindAndModifyUserAccounts = NewUserAccountsFindAndModifyUserAccounts(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.UsersFindAndModifyUsers = NewUsersFindAndModifyUsers(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	return sdk
}
