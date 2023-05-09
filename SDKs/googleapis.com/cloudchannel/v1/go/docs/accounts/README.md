# Accounts

### Available Operations

* [CloudchannelAccountsChannelPartnerLinksChannelPartnerRepricingConfigsCreate](#cloudchannelaccountschannelpartnerlinkschannelpartnerrepricingconfigscreate) - Creates a ChannelPartnerRepricingConfig. Call this method to set modifications for a specific ChannelPartner's bill. You can only create configs if the RepricingConfig.effective_invoice_month is a future month. If needed, you can create a config for the current month, with some restrictions. When creating a config for a future month, make sure there are no existing configs for that RepricingConfig.effective_invoice_month. The following restrictions are for creating configs in the current month. * This functionality is reserved for recovering from an erroneous config, and should not be used for regular business cases. * The new config will not modify exports used with other configs. Changes to the config may be immediate, but may take up to 24 hours. * There is a limit of ten configs for any ChannelPartner or RepricingConfig.effective_invoice_month. * The contained ChannelPartnerRepricingConfig.repricing_config vaule must be different from the value used in the current config for a ChannelPartner. Possible Error Codes: * PERMISSION_DENIED: If the account making the request and the account being queried are different. * INVALID_ARGUMENT: Missing or invalid required parameters in the request. Also displays if the updated config is for the current month or past months. * NOT_FOUND: The ChannelPartnerRepricingConfig specified does not exist or is not associated with the given account. * INTERNAL: Any non-user error related to technical issues in the backend. In this case, contact Cloud Channel support. Return Value: If successful, the updated ChannelPartnerRepricingConfig resource, otherwise returns an error.
* [CloudchannelAccountsChannelPartnerLinksChannelPartnerRepricingConfigsList](#cloudchannelaccountschannelpartnerlinkschannelpartnerrepricingconfigslist) - Lists information about how a Reseller modifies their bill before sending it to a ChannelPartner. Possible Error Codes: * PERMISSION_DENIED: If the account making the request and the account being queried are different. * NOT_FOUND: The ChannelPartnerRepricingConfig specified does not exist or is not associated with the given account. * INTERNAL: Any non-user error related to technical issues in the backend. In this case, contact Cloud Channel support. Return Value: If successful, the ChannelPartnerRepricingConfig resources. The data for each resource is displayed in the ascending order of: * Channel Partner ID * RepricingConfig.effective_invoice_month * ChannelPartnerRepricingConfig.update_time If unsuccessful, returns an error.
* [CloudchannelAccountsChannelPartnerLinksCreate](#cloudchannelaccountschannelpartnerlinkscreate) - Initiates a channel partner link between a distributor and a reseller, or between resellers in an n-tier reseller channel. Invited partners need to follow the invite_link_uri provided in the response to accept. After accepting the invitation, a link is set up between the two parties. You must be a distributor to call this method. Possible error codes: * PERMISSION_DENIED: The reseller account making the request is different from the reseller account in the API request. * INVALID_ARGUMENT: Required request parameters are missing or invalid. * ALREADY_EXISTS: The ChannelPartnerLink sent in the request already exists. * NOT_FOUND: No Cloud Identity customer exists for provided domain. * INTERNAL: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support. * UNKNOWN: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support. Return value: The new ChannelPartnerLink resource.
* [CloudchannelAccountsChannelPartnerLinksList](#cloudchannelaccountschannelpartnerlinkslist) - List ChannelPartnerLinks belonging to a distributor. You must be a distributor to call this method. Possible error codes: * PERMISSION_DENIED: The reseller account making the request is different from the reseller account in the API request. * INVALID_ARGUMENT: Required request parameters are missing or invalid. Return value: The list of the distributor account's ChannelPartnerLink resources.
* [CloudchannelAccountsCheckCloudIdentityAccountsExist](#cloudchannelaccountscheckcloudidentityaccountsexist) - Confirms the existence of Cloud Identity accounts based on the domain and if the Cloud Identity accounts are owned by the reseller. Possible error codes: * PERMISSION_DENIED: The reseller account making the request is different from the reseller account in the API request. * INVALID_ARGUMENT: Required request parameters are missing or invalid. * INVALID_VALUE: Invalid domain value in the request. Return value: A list of CloudIdentityCustomerAccount resources for the domain (may be empty) Note: in the v1alpha1 version of the API, a NOT_FOUND error returns if no CloudIdentityCustomerAccount resources match the domain.
* [CloudchannelAccountsCustomersCreate](#cloudchannelaccountscustomerscreate) - Creates a new Customer resource under the reseller or distributor account. Possible error codes: * PERMISSION_DENIED: The reseller account making the request is different from the reseller account in the API request. * INVALID_ARGUMENT: * Required request parameters are missing or invalid. * Domain field value doesn't match the primary email domain. Return value: The newly created Customer resource.
* [CloudchannelAccountsCustomersCustomerRepricingConfigsCreate](#cloudchannelaccountscustomerscustomerrepricingconfigscreate) - Creates a CustomerRepricingConfig. Call this method to set modifications for a specific customer's bill. You can only create configs if the RepricingConfig.effective_invoice_month is a future month. If needed, you can create a config for the current month, with some restrictions. When creating a config for a future month, make sure there are no existing configs for that RepricingConfig.effective_invoice_month. The following restrictions are for creating configs in the current month. * This functionality is reserved for recovering from an erroneous config, and should not be used for regular business cases. * The new config will not modify exports used with other configs. Changes to the config may be immediate, but may take up to 24 hours. * There is a limit of ten configs for any RepricingConfig.EntitlementGranularity.entitlement or RepricingConfig.effective_invoice_month. * The contained CustomerRepricingConfig.repricing_config vaule must be different from the value used in the current config for a RepricingConfig.EntitlementGranularity.entitlement. Possible Error Codes: * PERMISSION_DENIED: If the account making the request and the account being queried are different. * INVALID_ARGUMENT: Missing or invalid required parameters in the request. Also displays if the updated config is for the current month or past months. * NOT_FOUND: The CustomerRepricingConfig specified does not exist or is not associated with the given account. * INTERNAL: Any non-user error related to technical issues in the backend. In this case, contact Cloud Channel support. Return Value: If successful, the updated CustomerRepricingConfig resource, otherwise returns an error.
* [CloudchannelAccountsCustomersCustomerRepricingConfigsList](#cloudchannelaccountscustomerscustomerrepricingconfigslist) - Lists information about how a Reseller modifies their bill before sending it to a Customer. Possible Error Codes: * PERMISSION_DENIED: If the account making the request and the account being queried are different. * NOT_FOUND: The CustomerRepricingConfig specified does not exist or is not associated with the given account. * INTERNAL: Any non-user error related to technical issues in the backend. In this case, contact Cloud Channel support. Return Value: If successful, the CustomerRepricingConfig resources. The data for each resource is displayed in the ascending order of: * Customer ID * RepricingConfig.EntitlementGranularity.entitlement * RepricingConfig.effective_invoice_month * CustomerRepricingConfig.update_time If unsuccessful, returns an error.
* [CloudchannelAccountsCustomersCustomerRepricingConfigsPatch](#cloudchannelaccountscustomerscustomerrepricingconfigspatch) - Updates a CustomerRepricingConfig. Call this method to set modifications for a specific customer's bill. This method overwrites the existing CustomerRepricingConfig. You can only update configs if the RepricingConfig.effective_invoice_month is a future month. To make changes to configs for the current month, use CreateCustomerRepricingConfig, taking note of its restrictions. You cannot update the RepricingConfig.effective_invoice_month. When updating a config in the future: * This config must already exist. Possible Error Codes: * PERMISSION_DENIED: If the account making the request and the account being queried are different. * INVALID_ARGUMENT: Missing or invalid required parameters in the request. Also displays if the updated config is for the current month or past months. * NOT_FOUND: The CustomerRepricingConfig specified does not exist or is not associated with the given account. * INTERNAL: Any non-user error related to technical issues in the backend. In this case, contact Cloud Channel support. Return Value: If successful, the updated CustomerRepricingConfig resource, otherwise returns an error.
* [CloudchannelAccountsCustomersEntitlementsActivate](#cloudchannelaccountscustomersentitlementsactivate) - Activates a previously suspended entitlement. Entitlements suspended for pending ToS acceptance can't be activated using this method. An entitlement activation is a long-running operation and it updates the state of the customer entitlement. Possible error codes: * PERMISSION_DENIED: The reseller account making the request is different from the reseller account in the API request. * INVALID_ARGUMENT: Required request parameters are missing or invalid. * NOT_FOUND: Entitlement resource not found. * SUSPENSION_NOT_RESELLER_INITIATED: Can only activate reseller-initiated suspensions and entitlements that have accepted the TOS. * NOT_SUSPENDED: Can only activate suspended entitlements not in an ACTIVE state. * INTERNAL: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support. * UNKNOWN: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support. Return value: The ID of a long-running operation. To get the results of the operation, call the GetOperation method of CloudChannelOperationsService. The Operation metadata will contain an instance of OperationMetadata.
* [CloudchannelAccountsCustomersEntitlementsChangeOffer](#cloudchannelaccountscustomersentitlementschangeoffer) - Updates the Offer for an existing customer entitlement. An entitlement update is a long-running operation and it updates the entitlement as a result of fulfillment. Possible error codes: * PERMISSION_DENIED: The customer doesn't belong to the reseller. * INVALID_ARGUMENT: Required request parameters are missing or invalid. * NOT_FOUND: Offer or Entitlement resource not found. * INTERNAL: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support. * UNKNOWN: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support. Return value: The ID of a long-running operation. To get the results of the operation, call the GetOperation method of CloudChannelOperationsService. The Operation metadata will contain an instance of OperationMetadata.
* [CloudchannelAccountsCustomersEntitlementsChangeParameters](#cloudchannelaccountscustomersentitlementschangeparameters) - Change parameters of the entitlement. An entitlement update is a long-running operation and it updates the entitlement as a result of fulfillment. Possible error codes: * PERMISSION_DENIED: The customer doesn't belong to the reseller. * INVALID_ARGUMENT: Required request parameters are missing or invalid. For example, the number of seats being changed is greater than the allowed number of max seats, or decreasing seats for a commitment based plan. * NOT_FOUND: Entitlement resource not found. * INTERNAL: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support. * UNKNOWN: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support. Return value: The ID of a long-running operation. To get the results of the operation, call the GetOperation method of CloudChannelOperationsService. The Operation metadata will contain an instance of OperationMetadata.
* [CloudchannelAccountsCustomersEntitlementsChangeRenewalSettings](#cloudchannelaccountscustomersentitlementschangerenewalsettings) - Updates the renewal settings for an existing customer entitlement. An entitlement update is a long-running operation and it updates the entitlement as a result of fulfillment. Possible error codes: * PERMISSION_DENIED: The customer doesn't belong to the reseller. * INVALID_ARGUMENT: Required request parameters are missing or invalid. * NOT_FOUND: Entitlement resource not found. * NOT_COMMITMENT_PLAN: Renewal Settings are only applicable for a commitment plan. Can't enable or disable renewals for non-commitment plans. * INTERNAL: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support. * UNKNOWN: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support. Return value: The ID of a long-running operation. To get the results of the operation, call the GetOperation method of CloudChannelOperationsService. The Operation metadata will contain an instance of OperationMetadata.
* [CloudchannelAccountsCustomersEntitlementsCreate](#cloudchannelaccountscustomersentitlementscreate) - Creates an entitlement for a customer. Possible error codes: * PERMISSION_DENIED: The customer doesn't belong to the reseller. * INVALID_ARGUMENT: * Required request parameters are missing or invalid. * There is already a customer entitlement for a SKU from the same product family. * INVALID_VALUE: Make sure the OfferId is valid. If it is, contact Google Channel support for further troubleshooting. * NOT_FOUND: The customer or offer resource was not found. * ALREADY_EXISTS: * The SKU was already purchased for the customer. * The customer's primary email already exists. Retry after changing the customer's primary contact email. * CONDITION_NOT_MET or FAILED_PRECONDITION: * The domain required for purchasing a SKU has not been verified. * A pre-requisite SKU required to purchase an Add-On SKU is missing. For example, Google Workspace Business Starter is required to purchase Vault or Drive. * (Developer accounts only) Reseller and resold domain must meet the following naming requirements: * Domain names must start with goog-test. * Domain names must include the reseller domain. * INTERNAL: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support. * UNKNOWN: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support. Return value: The ID of a long-running operation. To get the results of the operation, call the GetOperation method of CloudChannelOperationsService. The Operation metadata will contain an instance of OperationMetadata.
* [CloudchannelAccountsCustomersEntitlementsList](#cloudchannelaccountscustomersentitlementslist) - Lists Entitlements belonging to a customer. Possible error codes: * PERMISSION_DENIED: The customer doesn't belong to the reseller. * INVALID_ARGUMENT: Required request parameters are missing or invalid. Return value: A list of the customer's Entitlements.
* [CloudchannelAccountsCustomersEntitlementsListEntitlementChanges](#cloudchannelaccountscustomersentitlementslistentitlementchanges) - List entitlement history. Possible error codes: * PERMISSION_DENIED: The reseller account making the request and the provided reseller account are different. * INVALID_ARGUMENT: Missing or invalid required fields in the request. * NOT_FOUND: The parent resource doesn't exist. Usually the result of an invalid name parameter. * INTERNAL: Any non-user error related to a technical issue in the backend. In this case, contact CloudChannel support. * UNKNOWN: Any non-user error related to a technical issue in the backend. In this case, contact Cloud Channel support. Return value: List of EntitlementChanges.
* [CloudchannelAccountsCustomersEntitlementsLookupOffer](#cloudchannelaccountscustomersentitlementslookupoffer) - Returns the requested Offer resource. Possible error codes: * PERMISSION_DENIED: The entitlement doesn't belong to the reseller. * INVALID_ARGUMENT: Required request parameters are missing or invalid. * NOT_FOUND: Entitlement or offer was not found. Return value: The Offer resource.
* [CloudchannelAccountsCustomersEntitlementsStartPaidService](#cloudchannelaccountscustomersentitlementsstartpaidservice) - Starts paid service for a trial entitlement. Starts paid service for a trial entitlement immediately. This method is only applicable if a plan is set up for a trial entitlement but has some trial days remaining. Possible error codes: * PERMISSION_DENIED: The customer doesn't belong to the reseller. * INVALID_ARGUMENT: Required request parameters are missing or invalid. * NOT_FOUND: Entitlement resource not found. * FAILED_PRECONDITION/NOT_IN_TRIAL: This method only works for entitlement on trial plans. * INTERNAL: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support. * UNKNOWN: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support. Return value: The ID of a long-running operation. To get the results of the operation, call the GetOperation method of CloudChannelOperationsService. The Operation metadata will contain an instance of OperationMetadata.
* [CloudchannelAccountsCustomersEntitlementsSuspend](#cloudchannelaccountscustomersentitlementssuspend) - Suspends a previously fulfilled entitlement. An entitlement suspension is a long-running operation. Possible error codes: * PERMISSION_DENIED: The customer doesn't belong to the reseller. * INVALID_ARGUMENT: Required request parameters are missing or invalid. * NOT_FOUND: Entitlement resource not found. * NOT_ACTIVE: Entitlement is not active. * INTERNAL: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support. * UNKNOWN: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support. Return value: The ID of a long-running operation. To get the results of the operation, call the GetOperation method of CloudChannelOperationsService. The Operation metadata will contain an instance of OperationMetadata.
* [CloudchannelAccountsCustomersImport](#cloudchannelaccountscustomersimport) - Imports a Customer from the Cloud Identity associated with the provided Cloud Identity ID or domain before a TransferEntitlements call. If a linked Customer already exists and overwrite_if_exists is true, it will update that Customer's data. Possible error codes: * PERMISSION_DENIED: The reseller account making the request is different from the reseller account in the API request. * NOT_FOUND: Cloud Identity doesn't exist or was deleted. * INVALID_ARGUMENT: Required parameters are missing, or the auth_token is expired or invalid. * ALREADY_EXISTS: A customer already exists and has conflicting critical fields. Requires an overwrite. Return value: The Customer.
* [CloudchannelAccountsCustomersList](#cloudchannelaccountscustomerslist) - List Customers. Possible error codes: * PERMISSION_DENIED: The reseller account making the request is different from the reseller account in the API request. * INVALID_ARGUMENT: Required request parameters are missing or invalid. Return value: List of Customers, or an empty list if there are no customers.
* [CloudchannelAccountsCustomersListPurchasableOffers](#cloudchannelaccountscustomerslistpurchasableoffers) - Lists the following: * Offers that you can purchase for a customer. * Offers that you can change for an entitlement. Possible error codes: * PERMISSION_DENIED: The customer doesn't belong to the reseller * INVALID_ARGUMENT: Required request parameters are missing or invalid.
* [CloudchannelAccountsCustomersListPurchasableSkus](#cloudchannelaccountscustomerslistpurchasableskus) - Lists the following: * SKUs that you can purchase for a customer * SKUs that you can upgrade or downgrade for an entitlement. Possible error codes: * PERMISSION_DENIED: The customer doesn't belong to the reseller. * INVALID_ARGUMENT: Required request parameters are missing or invalid.
* [CloudchannelAccountsCustomersProvisionCloudIdentity](#cloudchannelaccountscustomersprovisioncloudidentity) - Creates a Cloud Identity for the given customer using the customer's information, or the information provided here. Possible error codes: * PERMISSION_DENIED: The customer doesn't belong to the reseller. * INVALID_ARGUMENT: Required request parameters are missing or invalid. * NOT_FOUND: The customer was not found. * ALREADY_EXISTS: The customer's primary email already exists. Retry after changing the customer's primary contact email. * INTERNAL: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support. * UNKNOWN: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support. Return value: The ID of a long-running operation. To get the results of the operation, call the GetOperation method of CloudChannelOperationsService. The Operation metadata contains an instance of OperationMetadata.
* [CloudchannelAccountsCustomersTransferEntitlements](#cloudchannelaccountscustomerstransferentitlements) - Transfers customer entitlements to new reseller. Possible error codes: * PERMISSION_DENIED: The customer doesn't belong to the reseller. * INVALID_ARGUMENT: Required request parameters are missing or invalid. * NOT_FOUND: The customer or offer resource was not found. * ALREADY_EXISTS: The SKU was already transferred for the customer. * CONDITION_NOT_MET or FAILED_PRECONDITION: * The SKU requires domain verification to transfer, but the domain is not verified. * An Add-On SKU (example, Vault or Drive) is missing the pre-requisite SKU (example, G Suite Basic). * (Developer accounts only) Reseller and resold domain must meet the following naming requirements: * Domain names must start with goog-test. * Domain names must include the reseller domain. * Specify all transferring entitlements. * INTERNAL: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support. * UNKNOWN: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support. Return value: The ID of a long-running operation. To get the results of the operation, call the GetOperation method of CloudChannelOperationsService. The Operation metadata will contain an instance of OperationMetadata.
* [CloudchannelAccountsCustomersTransferEntitlementsToGoogle](#cloudchannelaccountscustomerstransferentitlementstogoogle) - Transfers customer entitlements from their current reseller to Google. Possible error codes: * PERMISSION_DENIED: The customer doesn't belong to the reseller. * INVALID_ARGUMENT: Required request parameters are missing or invalid. * NOT_FOUND: The customer or offer resource was not found. * ALREADY_EXISTS: The SKU was already transferred for the customer. * CONDITION_NOT_MET or FAILED_PRECONDITION: * The SKU requires domain verification to transfer, but the domain is not verified. * An Add-On SKU (example, Vault or Drive) is missing the pre-requisite SKU (example, G Suite Basic). * (Developer accounts only) Reseller and resold domain must meet the following naming requirements: * Domain names must start with goog-test. * Domain names must include the reseller domain. * INTERNAL: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support. * UNKNOWN: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support. Return value: The ID of a long-running operation. To get the results of the operation, call the GetOperation method of CloudChannelOperationsService. The response will contain google.protobuf.Empty on success. The Operation metadata will contain an instance of OperationMetadata.
* [CloudchannelAccountsListSubscribers](#cloudchannelaccountslistsubscribers) - Lists service accounts with subscriber privileges on the Cloud Pub/Sub topic created for this Channel Services account. Possible error codes: * PERMISSION_DENIED: The reseller account making the request and the provided reseller account are different, or the impersonated user is not a super admin. * INVALID_ARGUMENT: Required request parameters are missing or invalid. * NOT_FOUND: The topic resource doesn't exist. * INTERNAL: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support. * UNKNOWN: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support. Return value: A list of service email addresses.
* [CloudchannelAccountsListTransferableOffers](#cloudchannelaccountslisttransferableoffers) - List TransferableOffers of a customer based on Cloud Identity ID or Customer Name in the request. Use this method when a reseller gets the entitlement information of an unowned customer. The reseller should provide the customer's Cloud Identity ID or Customer Name. Possible error codes: * PERMISSION_DENIED: * The customer doesn't belong to the reseller and has no auth token. * The customer provided incorrect reseller information when generating auth token. * The reseller account making the request is different from the reseller account in the query. * INVALID_ARGUMENT: Required request parameters are missing or invalid. Return value: List of TransferableOffer for the given customer and SKU.
* [CloudchannelAccountsListTransferableSkus](#cloudchannelaccountslisttransferableskus) - List TransferableSkus of a customer based on the Cloud Identity ID or Customer Name in the request. Use this method to list the entitlements information of an unowned customer. You should provide the customer's Cloud Identity ID or Customer Name. Possible error codes: * PERMISSION_DENIED: * The customer doesn't belong to the reseller and has no auth token. * The supplied auth token is invalid. * The reseller account making the request is different from the reseller account in the query. * INVALID_ARGUMENT: Required request parameters are missing or invalid. Return value: A list of the customer's TransferableSku.
* [CloudchannelAccountsOffersList](#cloudchannelaccountsofferslist) - Lists the Offers the reseller can sell. Possible error codes: * INVALID_ARGUMENT: Required request parameters are missing or invalid.
* [CloudchannelAccountsRegister](#cloudchannelaccountsregister) - Registers a service account with subscriber privileges on the Cloud Pub/Sub topic for this Channel Services account. After you create a subscriber, you get the events through SubscriberEvent Possible error codes: * PERMISSION_DENIED: The reseller account making the request and the provided reseller account are different, or the impersonated user is not a super admin. * INVALID_ARGUMENT: Required request parameters are missing or invalid. * INTERNAL: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support. * UNKNOWN: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support. Return value: The topic name with the registered service email address.
* [CloudchannelAccountsReportJobsFetchReportResults](#cloudchannelaccountsreportjobsfetchreportresults) - Retrieves data generated by CloudChannelReportsService.RunReportJob.
* [CloudchannelAccountsReportsList](#cloudchannelaccountsreportslist) - Lists the reports that RunReportJob can run. These reports include an ID, a description, and the list of columns that will be in the result.
* [CloudchannelAccountsReportsRun](#cloudchannelaccountsreportsrun) - Begins generation of data for a given report. The report identifier is a UID (for example, `613bf59q`). Possible error codes: * PERMISSION_DENIED: The user doesn't have access to this report. * INVALID_ARGUMENT: Required request parameters are missing or invalid. * NOT_FOUND: The report identifier was not found. * INTERNAL: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support. * UNKNOWN: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support. Return value: The ID of a long-running operation. To get the results of the operation, call the GetOperation method of CloudChannelOperationsService. The Operation metadata contains an instance of OperationMetadata. To get the results of report generation, call CloudChannelReportsService.FetchReportResults with the RunReportJobResponse.report_job.
* [CloudchannelAccountsUnregister](#cloudchannelaccountsunregister) - Unregisters a service account with subscriber privileges on the Cloud Pub/Sub topic created for this Channel Services account. If there are no service accounts left with subscriber privileges, this deletes the topic. You can call ListSubscribers to check for these accounts. Possible error codes: * PERMISSION_DENIED: The reseller account making the request and the provided reseller account are different, or the impersonated user is not a super admin. * INVALID_ARGUMENT: Required request parameters are missing or invalid. * NOT_FOUND: The topic resource doesn't exist. * INTERNAL: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support. * UNKNOWN: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support. Return value: The topic name that unregistered the service email address. Returns a success response if the service email address wasn't registered with the topic.

## CloudchannelAccountsChannelPartnerLinksChannelPartnerRepricingConfigsCreate

Creates a ChannelPartnerRepricingConfig. Call this method to set modifications for a specific ChannelPartner's bill. You can only create configs if the RepricingConfig.effective_invoice_month is a future month. If needed, you can create a config for the current month, with some restrictions. When creating a config for a future month, make sure there are no existing configs for that RepricingConfig.effective_invoice_month. The following restrictions are for creating configs in the current month. * This functionality is reserved for recovering from an erroneous config, and should not be used for regular business cases. * The new config will not modify exports used with other configs. Changes to the config may be immediate, but may take up to 24 hours. * There is a limit of ten configs for any ChannelPartner or RepricingConfig.effective_invoice_month. * The contained ChannelPartnerRepricingConfig.repricing_config vaule must be different from the value used in the current config for a ChannelPartner. Possible Error Codes: * PERMISSION_DENIED: If the account making the request and the account being queried are different. * INVALID_ARGUMENT: Missing or invalid required parameters in the request. Also displays if the updated config is for the current month or past months. * NOT_FOUND: The ChannelPartnerRepricingConfig specified does not exist or is not associated with the given account. * INTERNAL: Any non-user error related to technical issues in the backend. In this case, contact Cloud Channel support. Return Value: If successful, the updated ChannelPartnerRepricingConfig resource, otherwise returns an error.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Accounts.CloudchannelAccountsChannelPartnerLinksChannelPartnerRepricingConfigsCreate(ctx, operations.CloudchannelAccountsChannelPartnerLinksChannelPartnerRepricingConfigsCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        GoogleCloudChannelV1ChannelPartnerRepricingConfigInput: &shared.GoogleCloudChannelV1ChannelPartnerRepricingConfigInput{
            RepricingConfig: &shared.GoogleCloudChannelV1RepricingConfig{
                Adjustment: &shared.GoogleCloudChannelV1RepricingAdjustment{
                    PercentageAdjustment: &shared.GoogleCloudChannelV1PercentageAdjustment{
                        Percentage: &shared.GoogleTypeDecimal{
                            Value: sdk.String("sapiente"),
                        },
                    },
                },
                ChannelPartnerGranularity: map[string]interface{}{
                    "odit": "at",
                    "at": "maiores",
                    "molestiae": "quod",
                    "quod": "esse",
                },
                ConditionalOverrides: []shared.GoogleCloudChannelV1ConditionalOverride{
                    shared.GoogleCloudChannelV1ConditionalOverride{
                        Adjustment: &shared.GoogleCloudChannelV1RepricingAdjustment{
                            PercentageAdjustment: &shared.GoogleCloudChannelV1PercentageAdjustment{
                                Percentage: &shared.GoogleTypeDecimal{
                                    Value: sdk.String("porro"),
                                },
                            },
                        },
                        RebillingBasis: shared.GoogleCloudChannelV1ConditionalOverrideRebillingBasisEnumDirectCustomerCost.ToPointer(),
                        RepricingCondition: &shared.GoogleCloudChannelV1RepricingCondition{
                            SkuGroupCondition: &shared.GoogleCloudChannelV1SkuGroupCondition{
                                SkuGroup: sdk.String("dicta"),
                            },
                        },
                    },
                    shared.GoogleCloudChannelV1ConditionalOverride{
                        Adjustment: &shared.GoogleCloudChannelV1RepricingAdjustment{
                            PercentageAdjustment: &shared.GoogleCloudChannelV1PercentageAdjustment{
                                Percentage: &shared.GoogleTypeDecimal{
                                    Value: sdk.String("nam"),
                                },
                            },
                        },
                        RebillingBasis: shared.GoogleCloudChannelV1ConditionalOverrideRebillingBasisEnumCostAtList.ToPointer(),
                        RepricingCondition: &shared.GoogleCloudChannelV1RepricingCondition{
                            SkuGroupCondition: &shared.GoogleCloudChannelV1SkuGroupCondition{
                                SkuGroup: sdk.String("occaecati"),
                            },
                        },
                    },
                    shared.GoogleCloudChannelV1ConditionalOverride{
                        Adjustment: &shared.GoogleCloudChannelV1RepricingAdjustment{
                            PercentageAdjustment: &shared.GoogleCloudChannelV1PercentageAdjustment{
                                Percentage: &shared.GoogleTypeDecimal{
                                    Value: sdk.String("fugit"),
                                },
                            },
                        },
                        RebillingBasis: shared.GoogleCloudChannelV1ConditionalOverrideRebillingBasisEnumCostAtList.ToPointer(),
                        RepricingCondition: &shared.GoogleCloudChannelV1RepricingCondition{
                            SkuGroupCondition: &shared.GoogleCloudChannelV1SkuGroupCondition{
                                SkuGroup: sdk.String("hic"),
                            },
                        },
                    },
                },
                EffectiveInvoiceMonth: &shared.GoogleTypeDate{
                    Day: sdk.Int(758616),
                    Month: sdk.Int(521848),
                    Year: sdk.Int(105907),
                },
                EntitlementGranularity: &shared.GoogleCloudChannelV1RepricingConfigEntitlementGranularity{
                    Entitlement: sdk.String("commodi"),
                },
                RebillingBasis: shared.GoogleCloudChannelV1RepricingConfigRebillingBasisEnumCostAtList.ToPointer(),
            },
        },
        AccessToken: sdk.String("modi"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("impedit"),
        Fields: sdk.String("cum"),
        Key: sdk.String("esse"),
        OauthToken: sdk.String("ipsum"),
        Parent: "excepturi",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("aspernatur"),
        UploadType: sdk.String("perferendis"),
        UploadProtocol: sdk.String("ad"),
    }, operations.CloudchannelAccountsChannelPartnerLinksChannelPartnerRepricingConfigsCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudChannelV1ChannelPartnerRepricingConfig != nil {
        // handle response
    }
}
```

## CloudchannelAccountsChannelPartnerLinksChannelPartnerRepricingConfigsList

Lists information about how a Reseller modifies their bill before sending it to a ChannelPartner. Possible Error Codes: * PERMISSION_DENIED: If the account making the request and the account being queried are different. * NOT_FOUND: The ChannelPartnerRepricingConfig specified does not exist or is not associated with the given account. * INTERNAL: Any non-user error related to technical issues in the backend. In this case, contact Cloud Channel support. Return Value: If successful, the ChannelPartnerRepricingConfig resources. The data for each resource is displayed in the ascending order of: * Channel Partner ID * RepricingConfig.effective_invoice_month * ChannelPartnerRepricingConfig.update_time If unsuccessful, returns an error.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Accounts.CloudchannelAccountsChannelPartnerLinksChannelPartnerRepricingConfigsList(ctx, operations.CloudchannelAccountsChannelPartnerLinksChannelPartnerRepricingConfigsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("sed"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("dolor"),
        Fields: sdk.String("natus"),
        Filter: sdk.String("laboriosam"),
        Key: sdk.String("hic"),
        OauthToken: sdk.String("saepe"),
        PageSize: sdk.Int64(681820),
        PageToken: sdk.String("in"),
        Parent: "corporis",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("iste"),
        UploadType: sdk.String("iure"),
        UploadProtocol: sdk.String("saepe"),
    }, operations.CloudchannelAccountsChannelPartnerLinksChannelPartnerRepricingConfigsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudChannelV1ListChannelPartnerRepricingConfigsResponse != nil {
        // handle response
    }
}
```

## CloudchannelAccountsChannelPartnerLinksCreate

Initiates a channel partner link between a distributor and a reseller, or between resellers in an n-tier reseller channel. Invited partners need to follow the invite_link_uri provided in the response to accept. After accepting the invitation, a link is set up between the two parties. You must be a distributor to call this method. Possible error codes: * PERMISSION_DENIED: The reseller account making the request is different from the reseller account in the API request. * INVALID_ARGUMENT: Required request parameters are missing or invalid. * ALREADY_EXISTS: The ChannelPartnerLink sent in the request already exists. * NOT_FOUND: No Cloud Identity customer exists for provided domain. * INTERNAL: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support. * UNKNOWN: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support. Return value: The new ChannelPartnerLink resource.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Accounts.CloudchannelAccountsChannelPartnerLinksCreate(ctx, operations.CloudchannelAccountsChannelPartnerLinksCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        GoogleCloudChannelV1ChannelPartnerLinkInput: &shared.GoogleCloudChannelV1ChannelPartnerLinkInput{
            ChannelPartnerCloudIdentityInfo: &shared.GoogleCloudChannelV1CloudIdentityInfoInput{
                AlternateEmail: sdk.String("architecto"),
                CustomerType: shared.GoogleCloudChannelV1CloudIdentityInfoCustomerTypeEnumCustomerTypeUnspecified.ToPointer(),
                EduData: &shared.GoogleCloudChannelV1EduData{
                    InstituteSize: shared.GoogleCloudChannelV1EduDataInstituteSizeEnumSize10001OrMore.ToPointer(),
                    InstituteType: shared.GoogleCloudChannelV1EduDataInstituteTypeEnumUniversity.ToPointer(),
                    Website: sdk.String("mollitia"),
                },
                LanguageCode: sdk.String("laborum"),
                PhoneNumber: sdk.String("dolores"),
            },
            LinkState: shared.GoogleCloudChannelV1ChannelPartnerLinkLinkStateEnumInvited.ToPointer(),
            ResellerCloudIdentityID: sdk.String("corporis"),
        },
        AccessToken: sdk.String("explicabo"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("enim"),
        Fields: sdk.String("omnis"),
        Key: sdk.String("nemo"),
        OauthToken: sdk.String("minima"),
        Parent: "excepturi",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("accusantium"),
        UploadType: sdk.String("iure"),
        UploadProtocol: sdk.String("culpa"),
    }, operations.CloudchannelAccountsChannelPartnerLinksCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudChannelV1ChannelPartnerLink != nil {
        // handle response
    }
}
```

## CloudchannelAccountsChannelPartnerLinksList

List ChannelPartnerLinks belonging to a distributor. You must be a distributor to call this method. Possible error codes: * PERMISSION_DENIED: The reseller account making the request is different from the reseller account in the API request. * INVALID_ARGUMENT: Required request parameters are missing or invalid. Return value: The list of the distributor account's ChannelPartnerLink resources.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Accounts.CloudchannelAccountsChannelPartnerLinksList(ctx, operations.CloudchannelAccountsChannelPartnerLinksListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("sapiente"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("mollitia"),
        Fields: sdk.String("dolorem"),
        Key: sdk.String("culpa"),
        OauthToken: sdk.String("consequuntur"),
        PageSize: sdk.Int64(995300),
        PageToken: sdk.String("mollitia"),
        Parent: "occaecati",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("numquam"),
        UploadType: sdk.String("commodi"),
        UploadProtocol: sdk.String("quam"),
        View: operations.CloudchannelAccountsChannelPartnerLinksListViewEnumBasic.ToPointer(),
    }, operations.CloudchannelAccountsChannelPartnerLinksListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudChannelV1ListChannelPartnerLinksResponse != nil {
        // handle response
    }
}
```

## CloudchannelAccountsCheckCloudIdentityAccountsExist

Confirms the existence of Cloud Identity accounts based on the domain and if the Cloud Identity accounts are owned by the reseller. Possible error codes: * PERMISSION_DENIED: The reseller account making the request is different from the reseller account in the API request. * INVALID_ARGUMENT: Required request parameters are missing or invalid. * INVALID_VALUE: Invalid domain value in the request. Return value: A list of CloudIdentityCustomerAccount resources for the domain (may be empty) Note: in the v1alpha1 version of the API, a NOT_FOUND error returns if no CloudIdentityCustomerAccount resources match the domain.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Accounts.CloudchannelAccountsCheckCloudIdentityAccountsExist(ctx, operations.CloudchannelAccountsCheckCloudIdentityAccountsExistRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        GoogleCloudChannelV1CheckCloudIdentityAccountsExistRequest: &shared.GoogleCloudChannelV1CheckCloudIdentityAccountsExistRequest{
            Domain: sdk.String("error"),
        },
        AccessToken: sdk.String("quia"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("vitae"),
        Fields: sdk.String("laborum"),
        Key: sdk.String("animi"),
        OauthToken: sdk.String("enim"),
        Parent: "odit",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quo"),
        UploadType: sdk.String("sequi"),
        UploadProtocol: sdk.String("tenetur"),
    }, operations.CloudchannelAccountsCheckCloudIdentityAccountsExistSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudChannelV1CheckCloudIdentityAccountsExistResponse != nil {
        // handle response
    }
}
```

## CloudchannelAccountsCustomersCreate

Creates a new Customer resource under the reseller or distributor account. Possible error codes: * PERMISSION_DENIED: The reseller account making the request is different from the reseller account in the API request. * INVALID_ARGUMENT: * Required request parameters are missing or invalid. * Domain field value doesn't match the primary email domain. Return value: The newly created Customer resource.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Accounts.CloudchannelAccountsCustomersCreate(ctx, operations.CloudchannelAccountsCustomersCreateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        GoogleCloudChannelV1CustomerInput: &shared.GoogleCloudChannelV1CustomerInput{
            AlternateEmail: sdk.String("id"),
            ChannelPartnerID: sdk.String("possimus"),
            CloudIdentityInfo: &shared.GoogleCloudChannelV1CloudIdentityInfoInput{
                AlternateEmail: sdk.String("aut"),
                CustomerType: shared.GoogleCloudChannelV1CloudIdentityInfoCustomerTypeEnumCustomerTypeUnspecified.ToPointer(),
                EduData: &shared.GoogleCloudChannelV1EduData{
                    InstituteSize: shared.GoogleCloudChannelV1EduDataInstituteSizeEnumSize10012000.ToPointer(),
                    InstituteType: shared.GoogleCloudChannelV1EduDataInstituteTypeEnumUniversity.ToPointer(),
                    Website: sdk.String("laborum"),
                },
                LanguageCode: sdk.String("quasi"),
                PhoneNumber: sdk.String("reiciendis"),
            },
            CorrelationID: sdk.String("voluptatibus"),
            Domain: sdk.String("vero"),
            LanguageCode: sdk.String("nihil"),
            OrgDisplayName: sdk.String("praesentium"),
            OrgPostalAddress: &shared.GoogleTypePostalAddress{
                AddressLines: []string{
                    "ipsa",
                    "omnis",
                    "voluptate",
                    "cum",
                },
                AdministrativeArea: sdk.String("perferendis"),
                LanguageCode: sdk.String("doloremque"),
                Locality: sdk.String("reprehenderit"),
                Organization: sdk.String("ut"),
                PostalCode: sdk.String("13241-6384"),
                Recipients: []string{
                    "quae",
                    "ipsum",
                    "quidem",
                    "molestias",
                },
                RegionCode: sdk.String("excepturi"),
                Revision: sdk.Int(865103),
                SortingCode: sdk.String("modi"),
                Sublocality: sdk.String("praesentium"),
            },
            PrimaryContactInfo: &shared.GoogleCloudChannelV1ContactInfoInput{
                Email: sdk.String("Terence_Botsford8@yahoo.com"),
                FirstName: sdk.String("Tobin"),
                LastName: sdk.String("Gottlieb"),
                Phone: sdk.String("(268) 367-8221 x355"),
                Title: sdk.String("Mr."),
            },
        },
        AccessToken: sdk.String("magni"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("ipsam"),
        Fields: sdk.String("alias"),
        Key: sdk.String("fugit"),
        OauthToken: sdk.String("dolorum"),
        Parent: "excepturi",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("tempora"),
        UploadType: sdk.String("facilis"),
        UploadProtocol: sdk.String("tempore"),
    }, operations.CloudchannelAccountsCustomersCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudChannelV1Customer != nil {
        // handle response
    }
}
```

## CloudchannelAccountsCustomersCustomerRepricingConfigsCreate

Creates a CustomerRepricingConfig. Call this method to set modifications for a specific customer's bill. You can only create configs if the RepricingConfig.effective_invoice_month is a future month. If needed, you can create a config for the current month, with some restrictions. When creating a config for a future month, make sure there are no existing configs for that RepricingConfig.effective_invoice_month. The following restrictions are for creating configs in the current month. * This functionality is reserved for recovering from an erroneous config, and should not be used for regular business cases. * The new config will not modify exports used with other configs. Changes to the config may be immediate, but may take up to 24 hours. * There is a limit of ten configs for any RepricingConfig.EntitlementGranularity.entitlement or RepricingConfig.effective_invoice_month. * The contained CustomerRepricingConfig.repricing_config vaule must be different from the value used in the current config for a RepricingConfig.EntitlementGranularity.entitlement. Possible Error Codes: * PERMISSION_DENIED: If the account making the request and the account being queried are different. * INVALID_ARGUMENT: Missing or invalid required parameters in the request. Also displays if the updated config is for the current month or past months. * NOT_FOUND: The CustomerRepricingConfig specified does not exist or is not associated with the given account. * INTERNAL: Any non-user error related to technical issues in the backend. In this case, contact Cloud Channel support. Return Value: If successful, the updated CustomerRepricingConfig resource, otherwise returns an error.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Accounts.CloudchannelAccountsCustomersCustomerRepricingConfigsCreate(ctx, operations.CloudchannelAccountsCustomersCustomerRepricingConfigsCreateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        GoogleCloudChannelV1CustomerRepricingConfigInput: &shared.GoogleCloudChannelV1CustomerRepricingConfigInput{
            RepricingConfig: &shared.GoogleCloudChannelV1RepricingConfig{
                Adjustment: &shared.GoogleCloudChannelV1RepricingAdjustment{
                    PercentageAdjustment: &shared.GoogleCloudChannelV1PercentageAdjustment{
                        Percentage: &shared.GoogleTypeDecimal{
                            Value: sdk.String("delectus"),
                        },
                    },
                },
                ChannelPartnerGranularity: map[string]interface{}{
                    "non": "eligendi",
                    "sint": "aliquid",
                },
                ConditionalOverrides: []shared.GoogleCloudChannelV1ConditionalOverride{
                    shared.GoogleCloudChannelV1ConditionalOverride{
                        Adjustment: &shared.GoogleCloudChannelV1RepricingAdjustment{
                            PercentageAdjustment: &shared.GoogleCloudChannelV1PercentageAdjustment{
                                Percentage: &shared.GoogleTypeDecimal{
                                    Value: sdk.String("necessitatibus"),
                                },
                            },
                        },
                        RebillingBasis: shared.GoogleCloudChannelV1ConditionalOverrideRebillingBasisEnumCostAtList.ToPointer(),
                        RepricingCondition: &shared.GoogleCloudChannelV1RepricingCondition{
                            SkuGroupCondition: &shared.GoogleCloudChannelV1SkuGroupCondition{
                                SkuGroup: sdk.String("officia"),
                            },
                        },
                    },
                    shared.GoogleCloudChannelV1ConditionalOverride{
                        Adjustment: &shared.GoogleCloudChannelV1RepricingAdjustment{
                            PercentageAdjustment: &shared.GoogleCloudChannelV1PercentageAdjustment{
                                Percentage: &shared.GoogleTypeDecimal{
                                    Value: sdk.String("dolor"),
                                },
                            },
                        },
                        RebillingBasis: shared.GoogleCloudChannelV1ConditionalOverrideRebillingBasisEnumDirectCustomerCost.ToPointer(),
                        RepricingCondition: &shared.GoogleCloudChannelV1RepricingCondition{
                            SkuGroupCondition: &shared.GoogleCloudChannelV1SkuGroupCondition{
                                SkuGroup: sdk.String("a"),
                            },
                        },
                    },
                    shared.GoogleCloudChannelV1ConditionalOverride{
                        Adjustment: &shared.GoogleCloudChannelV1RepricingAdjustment{
                            PercentageAdjustment: &shared.GoogleCloudChannelV1PercentageAdjustment{
                                Percentage: &shared.GoogleTypeDecimal{
                                    Value: sdk.String("dolorum"),
                                },
                            },
                        },
                        RebillingBasis: shared.GoogleCloudChannelV1ConditionalOverrideRebillingBasisEnumCostAtList.ToPointer(),
                        RepricingCondition: &shared.GoogleCloudChannelV1RepricingCondition{
                            SkuGroupCondition: &shared.GoogleCloudChannelV1SkuGroupCondition{
                                SkuGroup: sdk.String("in"),
                            },
                        },
                    },
                },
                EffectiveInvoiceMonth: &shared.GoogleTypeDate{
                    Day: sdk.Int(846409),
                    Month: sdk.Int(978571),
                    Year: sdk.Int(699479),
                },
                EntitlementGranularity: &shared.GoogleCloudChannelV1RepricingConfigEntitlementGranularity{
                    Entitlement: sdk.String("dicta"),
                },
                RebillingBasis: shared.GoogleCloudChannelV1RepricingConfigRebillingBasisEnumRebillingBasisUnspecified.ToPointer(),
            },
        },
        AccessToken: sdk.String("cumque"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("ea"),
        Fields: sdk.String("aliquid"),
        Key: sdk.String("laborum"),
        OauthToken: sdk.String("accusamus"),
        Parent: "non",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("occaecati"),
        UploadType: sdk.String("enim"),
        UploadProtocol: sdk.String("accusamus"),
    }, operations.CloudchannelAccountsCustomersCustomerRepricingConfigsCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudChannelV1CustomerRepricingConfig != nil {
        // handle response
    }
}
```

## CloudchannelAccountsCustomersCustomerRepricingConfigsList

Lists information about how a Reseller modifies their bill before sending it to a Customer. Possible Error Codes: * PERMISSION_DENIED: If the account making the request and the account being queried are different. * NOT_FOUND: The CustomerRepricingConfig specified does not exist or is not associated with the given account. * INTERNAL: Any non-user error related to technical issues in the backend. In this case, contact Cloud Channel support. Return Value: If successful, the CustomerRepricingConfig resources. The data for each resource is displayed in the ascending order of: * Customer ID * RepricingConfig.EntitlementGranularity.entitlement * RepricingConfig.effective_invoice_month * CustomerRepricingConfig.update_time If unsuccessful, returns an error.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Accounts.CloudchannelAccountsCustomersCustomerRepricingConfigsList(ctx, operations.CloudchannelAccountsCustomersCustomerRepricingConfigsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("quidem"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("nam"),
        Fields: sdk.String("id"),
        Filter: sdk.String("blanditiis"),
        Key: sdk.String("deleniti"),
        OauthToken: sdk.String("sapiente"),
        PageSize: sdk.Int64(230533),
        PageToken: sdk.String("deserunt"),
        Parent: "nisi",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("vel"),
        UploadType: sdk.String("natus"),
        UploadProtocol: sdk.String("omnis"),
    }, operations.CloudchannelAccountsCustomersCustomerRepricingConfigsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudChannelV1ListCustomerRepricingConfigsResponse != nil {
        // handle response
    }
}
```

## CloudchannelAccountsCustomersCustomerRepricingConfigsPatch

Updates a CustomerRepricingConfig. Call this method to set modifications for a specific customer's bill. This method overwrites the existing CustomerRepricingConfig. You can only update configs if the RepricingConfig.effective_invoice_month is a future month. To make changes to configs for the current month, use CreateCustomerRepricingConfig, taking note of its restrictions. You cannot update the RepricingConfig.effective_invoice_month. When updating a config in the future: * This config must already exist. Possible Error Codes: * PERMISSION_DENIED: If the account making the request and the account being queried are different. * INVALID_ARGUMENT: Missing or invalid required parameters in the request. Also displays if the updated config is for the current month or past months. * NOT_FOUND: The CustomerRepricingConfig specified does not exist or is not associated with the given account. * INTERNAL: Any non-user error related to technical issues in the backend. In this case, contact Cloud Channel support. Return Value: If successful, the updated CustomerRepricingConfig resource, otherwise returns an error.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Accounts.CloudchannelAccountsCustomersCustomerRepricingConfigsPatch(ctx, operations.CloudchannelAccountsCustomersCustomerRepricingConfigsPatchRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        GoogleCloudChannelV1CustomerRepricingConfigInput: &shared.GoogleCloudChannelV1CustomerRepricingConfigInput{
            RepricingConfig: &shared.GoogleCloudChannelV1RepricingConfig{
                Adjustment: &shared.GoogleCloudChannelV1RepricingAdjustment{
                    PercentageAdjustment: &shared.GoogleCloudChannelV1PercentageAdjustment{
                        Percentage: &shared.GoogleTypeDecimal{
                            Value: sdk.String("perferendis"),
                        },
                    },
                },
                ChannelPartnerGranularity: map[string]interface{}{
                    "magnam": "distinctio",
                    "id": "labore",
                },
                ConditionalOverrides: []shared.GoogleCloudChannelV1ConditionalOverride{
                    shared.GoogleCloudChannelV1ConditionalOverride{
                        Adjustment: &shared.GoogleCloudChannelV1RepricingAdjustment{
                            PercentageAdjustment: &shared.GoogleCloudChannelV1PercentageAdjustment{
                                Percentage: &shared.GoogleTypeDecimal{
                                    Value: sdk.String("suscipit"),
                                },
                            },
                        },
                        RebillingBasis: shared.GoogleCloudChannelV1ConditionalOverrideRebillingBasisEnumCostAtList.ToPointer(),
                        RepricingCondition: &shared.GoogleCloudChannelV1RepricingCondition{
                            SkuGroupCondition: &shared.GoogleCloudChannelV1SkuGroupCondition{
                                SkuGroup: sdk.String("nobis"),
                            },
                        },
                    },
                    shared.GoogleCloudChannelV1ConditionalOverride{
                        Adjustment: &shared.GoogleCloudChannelV1RepricingAdjustment{
                            PercentageAdjustment: &shared.GoogleCloudChannelV1PercentageAdjustment{
                                Percentage: &shared.GoogleTypeDecimal{
                                    Value: sdk.String("eum"),
                                },
                            },
                        },
                        RebillingBasis: shared.GoogleCloudChannelV1ConditionalOverrideRebillingBasisEnumDirectCustomerCost.ToPointer(),
                        RepricingCondition: &shared.GoogleCloudChannelV1RepricingCondition{
                            SkuGroupCondition: &shared.GoogleCloudChannelV1SkuGroupCondition{
                                SkuGroup: sdk.String("aspernatur"),
                            },
                        },
                    },
                },
                EffectiveInvoiceMonth: &shared.GoogleTypeDate{
                    Day: sdk.Int(102863),
                    Month: sdk.Int(298282),
                    Year: sdk.Int(92373),
                },
                EntitlementGranularity: &shared.GoogleCloudChannelV1RepricingConfigEntitlementGranularity{
                    Entitlement: sdk.String("excepturi"),
                },
                RebillingBasis: shared.GoogleCloudChannelV1RepricingConfigRebillingBasisEnumCostAtList.ToPointer(),
            },
        },
        AccessToken: sdk.String("provident"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("sint"),
        Fields: sdk.String("accusantium"),
        Key: sdk.String("mollitia"),
        Name: "Shaun Hammes",
        OauthToken: sdk.String("necessitatibus"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("odit"),
        UpdateMask: sdk.String("nemo"),
        UploadType: sdk.String("quasi"),
        UploadProtocol: sdk.String("iure"),
    }, operations.CloudchannelAccountsCustomersCustomerRepricingConfigsPatchSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudChannelV1CustomerRepricingConfig != nil {
        // handle response
    }
}
```

## CloudchannelAccountsCustomersEntitlementsActivate

Activates a previously suspended entitlement. Entitlements suspended for pending ToS acceptance can't be activated using this method. An entitlement activation is a long-running operation and it updates the state of the customer entitlement. Possible error codes: * PERMISSION_DENIED: The reseller account making the request is different from the reseller account in the API request. * INVALID_ARGUMENT: Required request parameters are missing or invalid. * NOT_FOUND: Entitlement resource not found. * SUSPENSION_NOT_RESELLER_INITIATED: Can only activate reseller-initiated suspensions and entitlements that have accepted the TOS. * NOT_SUSPENDED: Can only activate suspended entitlements not in an ACTIVE state. * INTERNAL: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support. * UNKNOWN: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support. Return value: The ID of a long-running operation. To get the results of the operation, call the GetOperation method of CloudChannelOperationsService. The Operation metadata will contain an instance of OperationMetadata.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Accounts.CloudchannelAccountsCustomersEntitlementsActivate(ctx, operations.CloudchannelAccountsCustomersEntitlementsActivateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        GoogleCloudChannelV1ActivateEntitlementRequest: &shared.GoogleCloudChannelV1ActivateEntitlementRequest{
            RequestID: sdk.String("debitis"),
        },
        AccessToken: sdk.String("eius"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("deleniti"),
        Fields: sdk.String("facilis"),
        Key: sdk.String("in"),
        Name: "Diane VonRueden",
        OauthToken: sdk.String("nihil"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("repellat"),
        UploadType: sdk.String("quibusdam"),
        UploadProtocol: sdk.String("sed"),
    }, operations.CloudchannelAccountsCustomersEntitlementsActivateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleLongrunningOperation != nil {
        // handle response
    }
}
```

## CloudchannelAccountsCustomersEntitlementsChangeOffer

Updates the Offer for an existing customer entitlement. An entitlement update is a long-running operation and it updates the entitlement as a result of fulfillment. Possible error codes: * PERMISSION_DENIED: The customer doesn't belong to the reseller. * INVALID_ARGUMENT: Required request parameters are missing or invalid. * NOT_FOUND: Offer or Entitlement resource not found. * INTERNAL: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support. * UNKNOWN: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support. Return value: The ID of a long-running operation. To get the results of the operation, call the GetOperation method of CloudChannelOperationsService. The Operation metadata will contain an instance of OperationMetadata.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Accounts.CloudchannelAccountsCustomersEntitlementsChangeOffer(ctx, operations.CloudchannelAccountsCustomersEntitlementsChangeOfferRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        GoogleCloudChannelV1ChangeOfferRequestInput: &shared.GoogleCloudChannelV1ChangeOfferRequestInput{
            Offer: sdk.String("pariatur"),
            Parameters: []shared.GoogleCloudChannelV1ParameterInput{
                shared.GoogleCloudChannelV1ParameterInput{
                    Name: sdk.String("Irma Morissette DDS"),
                    Value: &shared.GoogleCloudChannelV1Value{
                        BoolValue: sdk.Bool(false),
                        DoubleValue: sdk.Float64(8480.09),
                        Int64Value: sdk.String("pariatur"),
                        ProtoValue: map[string]interface{}{
                            "ea": "excepturi",
                            "odit": "ea",
                            "accusantium": "ab",
                            "maiores": "quidem",
                        },
                        StringValue: sdk.String("ipsam"),
                    },
                },
            },
            PurchaseOrderID: sdk.String("voluptate"),
            RequestID: sdk.String("autem"),
        },
        AccessToken: sdk.String("nam"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("pariatur"),
        Fields: sdk.String("nemo"),
        Key: sdk.String("voluptatibus"),
        Name: "Miss Ginger Feeney",
        OauthToken: sdk.String("hic"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("libero"),
        UploadType: sdk.String("nobis"),
        UploadProtocol: sdk.String("dolores"),
    }, operations.CloudchannelAccountsCustomersEntitlementsChangeOfferSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleLongrunningOperation != nil {
        // handle response
    }
}
```

## CloudchannelAccountsCustomersEntitlementsChangeParameters

Change parameters of the entitlement. An entitlement update is a long-running operation and it updates the entitlement as a result of fulfillment. Possible error codes: * PERMISSION_DENIED: The customer doesn't belong to the reseller. * INVALID_ARGUMENT: Required request parameters are missing or invalid. For example, the number of seats being changed is greater than the allowed number of max seats, or decreasing seats for a commitment based plan. * NOT_FOUND: Entitlement resource not found. * INTERNAL: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support. * UNKNOWN: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support. Return value: The ID of a long-running operation. To get the results of the operation, call the GetOperation method of CloudChannelOperationsService. The Operation metadata will contain an instance of OperationMetadata.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Accounts.CloudchannelAccountsCustomersEntitlementsChangeParameters(ctx, operations.CloudchannelAccountsCustomersEntitlementsChangeParametersRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        GoogleCloudChannelV1ChangeParametersRequestInput: &shared.GoogleCloudChannelV1ChangeParametersRequestInput{
            Parameters: []shared.GoogleCloudChannelV1ParameterInput{
                shared.GoogleCloudChannelV1ParameterInput{
                    Name: sdk.String("Cynthia Hayes"),
                    Value: &shared.GoogleCloudChannelV1Value{
                        BoolValue: sdk.Bool(false),
                        DoubleValue: sdk.Float64(185.21),
                        Int64Value: sdk.String("dolores"),
                        ProtoValue: map[string]interface{}{
                            "quam": "dolor",
                            "vero": "nostrum",
                            "hic": "recusandae",
                            "omnis": "facilis",
                        },
                        StringValue: sdk.String("perspiciatis"),
                    },
                },
                shared.GoogleCloudChannelV1ParameterInput{
                    Name: sdk.String("Robyn Cruickshank"),
                    Value: &shared.GoogleCloudChannelV1Value{
                        BoolValue: sdk.Bool(false),
                        DoubleValue: sdk.Float64(503.7),
                        Int64Value: sdk.String("occaecati"),
                        ProtoValue: map[string]interface{}{
                            "adipisci": "asperiores",
                            "earum": "modi",
                            "iste": "dolorum",
                        },
                        StringValue: sdk.String("deleniti"),
                    },
                },
                shared.GoogleCloudChannelV1ParameterInput{
                    Name: sdk.String("Rene Rolfson"),
                    Value: &shared.GoogleCloudChannelV1Value{
                        BoolValue: sdk.Bool(false),
                        DoubleValue: sdk.Float64(3119.45),
                        Int64Value: sdk.String("quos"),
                        ProtoValue: map[string]interface{}{
                            "dolorem": "dolorem",
                            "dolor": "qui",
                        },
                        StringValue: sdk.String("ipsum"),
                    },
                },
            },
            PurchaseOrderID: sdk.String("hic"),
            RequestID: sdk.String("excepturi"),
        },
        AccessToken: sdk.String("cum"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("dignissimos"),
        Fields: sdk.String("reiciendis"),
        Key: sdk.String("amet"),
        Name: "Mr. Bradley Bogan",
        OauthToken: sdk.String("odio"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quaerat"),
        UploadType: sdk.String("accusamus"),
        UploadProtocol: sdk.String("quidem"),
    }, operations.CloudchannelAccountsCustomersEntitlementsChangeParametersSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleLongrunningOperation != nil {
        // handle response
    }
}
```

## CloudchannelAccountsCustomersEntitlementsChangeRenewalSettings

Updates the renewal settings for an existing customer entitlement. An entitlement update is a long-running operation and it updates the entitlement as a result of fulfillment. Possible error codes: * PERMISSION_DENIED: The customer doesn't belong to the reseller. * INVALID_ARGUMENT: Required request parameters are missing or invalid. * NOT_FOUND: Entitlement resource not found. * NOT_COMMITMENT_PLAN: Renewal Settings are only applicable for a commitment plan. Can't enable or disable renewals for non-commitment plans. * INTERNAL: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support. * UNKNOWN: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support. Return value: The ID of a long-running operation. To get the results of the operation, call the GetOperation method of CloudChannelOperationsService. The Operation metadata will contain an instance of OperationMetadata.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Accounts.CloudchannelAccountsCustomersEntitlementsChangeRenewalSettings(ctx, operations.CloudchannelAccountsCustomersEntitlementsChangeRenewalSettingsRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        GoogleCloudChannelV1ChangeRenewalSettingsRequest: &shared.GoogleCloudChannelV1ChangeRenewalSettingsRequest{
            RenewalSettings: &shared.GoogleCloudChannelV1RenewalSettings{
                EnableRenewal: sdk.Bool(false),
                PaymentCycle: &shared.GoogleCloudChannelV1Period{
                    Duration: sdk.Int(377752),
                    PeriodType: shared.GoogleCloudChannelV1PeriodPeriodTypeEnumMonth.ToPointer(),
                },
                PaymentPlan: shared.GoogleCloudChannelV1RenewalSettingsPaymentPlanEnumCommitment.ToPointer(),
                ResizeUnitCount: sdk.Bool(false),
            },
            RequestID: sdk.String("atque"),
        },
        AccessToken: sdk.String("sit"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("ab"),
        Fields: sdk.String("soluta"),
        Key: sdk.String("dolorum"),
        Name: "Colleen Pagac",
        OauthToken: sdk.String("necessitatibus"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("distinctio"),
        UploadType: sdk.String("asperiores"),
        UploadProtocol: sdk.String("nihil"),
    }, operations.CloudchannelAccountsCustomersEntitlementsChangeRenewalSettingsSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleLongrunningOperation != nil {
        // handle response
    }
}
```

## CloudchannelAccountsCustomersEntitlementsCreate

Creates an entitlement for a customer. Possible error codes: * PERMISSION_DENIED: The customer doesn't belong to the reseller. * INVALID_ARGUMENT: * Required request parameters are missing or invalid. * There is already a customer entitlement for a SKU from the same product family. * INVALID_VALUE: Make sure the OfferId is valid. If it is, contact Google Channel support for further troubleshooting. * NOT_FOUND: The customer or offer resource was not found. * ALREADY_EXISTS: * The SKU was already purchased for the customer. * The customer's primary email already exists. Retry after changing the customer's primary contact email. * CONDITION_NOT_MET or FAILED_PRECONDITION: * The domain required for purchasing a SKU has not been verified. * A pre-requisite SKU required to purchase an Add-On SKU is missing. For example, Google Workspace Business Starter is required to purchase Vault or Drive. * (Developer accounts only) Reseller and resold domain must meet the following naming requirements: * Domain names must start with goog-test. * Domain names must include the reseller domain. * INTERNAL: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support. * UNKNOWN: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support. Return value: The ID of a long-running operation. To get the results of the operation, call the GetOperation method of CloudChannelOperationsService. The Operation metadata will contain an instance of OperationMetadata.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Accounts.CloudchannelAccountsCustomersEntitlementsCreate(ctx, operations.CloudchannelAccountsCustomersEntitlementsCreateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        GoogleCloudChannelV1CreateEntitlementRequestInput: &shared.GoogleCloudChannelV1CreateEntitlementRequestInput{
            Entitlement: &shared.GoogleCloudChannelV1EntitlementInput{
                AssociationInfo: &shared.GoogleCloudChannelV1AssociationInfo{
                    BaseEntitlement: sdk.String("voluptate"),
                },
                BillingAccount: sdk.String("id"),
                CommitmentSettings: &shared.GoogleCloudChannelV1CommitmentSettingsInput{
                    RenewalSettings: &shared.GoogleCloudChannelV1RenewalSettings{
                        EnableRenewal: sdk.Bool(false),
                        PaymentCycle: &shared.GoogleCloudChannelV1Period{
                            Duration: sdk.Int(906418),
                            PeriodType: shared.GoogleCloudChannelV1PeriodPeriodTypeEnumDay.ToPointer(),
                        },
                        PaymentPlan: shared.GoogleCloudChannelV1RenewalSettingsPaymentPlanEnumPaymentPlanUnspecified.ToPointer(),
                        ResizeUnitCount: sdk.Bool(false),
                    },
                },
                Offer: sdk.String("perferendis"),
                Parameters: []shared.GoogleCloudChannelV1ParameterInput{
                    shared.GoogleCloudChannelV1ParameterInput{
                        Name: sdk.String("Tomas Hammes"),
                        Value: &shared.GoogleCloudChannelV1Value{
                            BoolValue: sdk.Bool(false),
                            DoubleValue: sdk.Float64(6457.85),
                            Int64Value: sdk.String("provident"),
                            ProtoValue: map[string]interface{}{
                                "repellendus": "totam",
                                "similique": "alias",
                            },
                            StringValue: sdk.String("at"),
                        },
                    },
                },
                PurchaseOrderID: sdk.String("quaerat"),
                TrialSettings: &shared.GoogleCloudChannelV1TrialSettings{
                    EndTime: sdk.String("tempora"),
                    Trial: sdk.Bool(false),
                },
            },
            RequestID: sdk.String("vel"),
        },
        AccessToken: sdk.String("quod"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("qui"),
        Fields: sdk.String("dolorum"),
        Key: sdk.String("a"),
        OauthToken: sdk.String("esse"),
        Parent: "harum",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("iusto"),
        UploadType: sdk.String("ipsum"),
        UploadProtocol: sdk.String("quisquam"),
    }, operations.CloudchannelAccountsCustomersEntitlementsCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleLongrunningOperation != nil {
        // handle response
    }
}
```

## CloudchannelAccountsCustomersEntitlementsList

Lists Entitlements belonging to a customer. Possible error codes: * PERMISSION_DENIED: The customer doesn't belong to the reseller. * INVALID_ARGUMENT: Required request parameters are missing or invalid. Return value: A list of the customer's Entitlements.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Accounts.CloudchannelAccountsCustomersEntitlementsList(ctx, operations.CloudchannelAccountsCustomersEntitlementsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("amet"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("accusamus"),
        Fields: sdk.String("numquam"),
        Key: sdk.String("enim"),
        OauthToken: sdk.String("dolorem"),
        PageSize: sdk.Int64(957451),
        PageToken: sdk.String("totam"),
        Parent: "nihil",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("sit"),
        UploadType: sdk.String("expedita"),
        UploadProtocol: sdk.String("neque"),
    }, operations.CloudchannelAccountsCustomersEntitlementsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudChannelV1ListEntitlementsResponse != nil {
        // handle response
    }
}
```

## CloudchannelAccountsCustomersEntitlementsListEntitlementChanges

List entitlement history. Possible error codes: * PERMISSION_DENIED: The reseller account making the request and the provided reseller account are different. * INVALID_ARGUMENT: Missing or invalid required fields in the request. * NOT_FOUND: The parent resource doesn't exist. Usually the result of an invalid name parameter. * INTERNAL: Any non-user error related to a technical issue in the backend. In this case, contact CloudChannel support. * UNKNOWN: Any non-user error related to a technical issue in the backend. In this case, contact Cloud Channel support. Return value: List of EntitlementChanges.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Accounts.CloudchannelAccountsCustomersEntitlementsListEntitlementChanges(ctx, operations.CloudchannelAccountsCustomersEntitlementsListEntitlementChangesRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("vel"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("voluptas"),
        Fields: sdk.String("deserunt"),
        Filter: sdk.String("quam"),
        Key: sdk.String("ipsum"),
        OauthToken: sdk.String("incidunt"),
        PageSize: sdk.Int64(186458),
        PageToken: sdk.String("cupiditate"),
        Parent: "maxime",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("pariatur"),
        UploadType: sdk.String("soluta"),
        UploadProtocol: sdk.String("dicta"),
    }, operations.CloudchannelAccountsCustomersEntitlementsListEntitlementChangesSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudChannelV1ListEntitlementChangesResponse != nil {
        // handle response
    }
}
```

## CloudchannelAccountsCustomersEntitlementsLookupOffer

Returns the requested Offer resource. Possible error codes: * PERMISSION_DENIED: The entitlement doesn't belong to the reseller. * INVALID_ARGUMENT: Required request parameters are missing or invalid. * NOT_FOUND: Entitlement or offer was not found. Return value: The Offer resource.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Accounts.CloudchannelAccountsCustomersEntitlementsLookupOffer(ctx, operations.CloudchannelAccountsCustomersEntitlementsLookupOfferRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("totam"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("aspernatur"),
        Entitlement: "dolores",
        Fields: sdk.String("distinctio"),
        Key: sdk.String("facilis"),
        OauthToken: sdk.String("aliquid"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quam"),
        UploadType: sdk.String("molestias"),
        UploadProtocol: sdk.String("temporibus"),
    }, operations.CloudchannelAccountsCustomersEntitlementsLookupOfferSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudChannelV1Offer != nil {
        // handle response
    }
}
```

## CloudchannelAccountsCustomersEntitlementsStartPaidService

Starts paid service for a trial entitlement. Starts paid service for a trial entitlement immediately. This method is only applicable if a plan is set up for a trial entitlement but has some trial days remaining. Possible error codes: * PERMISSION_DENIED: The customer doesn't belong to the reseller. * INVALID_ARGUMENT: Required request parameters are missing or invalid. * NOT_FOUND: Entitlement resource not found. * FAILED_PRECONDITION/NOT_IN_TRIAL: This method only works for entitlement on trial plans. * INTERNAL: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support. * UNKNOWN: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support. Return value: The ID of a long-running operation. To get the results of the operation, call the GetOperation method of CloudChannelOperationsService. The Operation metadata will contain an instance of OperationMetadata.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Accounts.CloudchannelAccountsCustomersEntitlementsStartPaidService(ctx, operations.CloudchannelAccountsCustomersEntitlementsStartPaidServiceRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        GoogleCloudChannelV1StartPaidServiceRequest: &shared.GoogleCloudChannelV1StartPaidServiceRequest{
            RequestID: sdk.String("neque"),
        },
        AccessToken: sdk.String("fugit"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("odio"),
        Fields: sdk.String("sunt"),
        Key: sdk.String("ullam"),
        Name: "Terrell Bartell",
        OauthToken: sdk.String("nobis"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("et"),
        UploadType: sdk.String("saepe"),
        UploadProtocol: sdk.String("ipsum"),
    }, operations.CloudchannelAccountsCustomersEntitlementsStartPaidServiceSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleLongrunningOperation != nil {
        // handle response
    }
}
```

## CloudchannelAccountsCustomersEntitlementsSuspend

Suspends a previously fulfilled entitlement. An entitlement suspension is a long-running operation. Possible error codes: * PERMISSION_DENIED: The customer doesn't belong to the reseller. * INVALID_ARGUMENT: Required request parameters are missing or invalid. * NOT_FOUND: Entitlement resource not found. * NOT_ACTIVE: Entitlement is not active. * INTERNAL: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support. * UNKNOWN: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support. Return value: The ID of a long-running operation. To get the results of the operation, call the GetOperation method of CloudChannelOperationsService. The Operation metadata will contain an instance of OperationMetadata.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Accounts.CloudchannelAccountsCustomersEntitlementsSuspend(ctx, operations.CloudchannelAccountsCustomersEntitlementsSuspendRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        GoogleCloudChannelV1SuspendEntitlementRequest: &shared.GoogleCloudChannelV1SuspendEntitlementRequest{
            RequestID: sdk.String("nobis"),
        },
        AccessToken: sdk.String("quos"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("cupiditate"),
        Fields: sdk.String("aperiam"),
        Key: sdk.String("delectus"),
        Name: "Joanne Grant",
        OauthToken: sdk.String("architecto"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quae"),
        UploadType: sdk.String("aut"),
        UploadProtocol: sdk.String("quas"),
    }, operations.CloudchannelAccountsCustomersEntitlementsSuspendSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleLongrunningOperation != nil {
        // handle response
    }
}
```

## CloudchannelAccountsCustomersImport

Imports a Customer from the Cloud Identity associated with the provided Cloud Identity ID or domain before a TransferEntitlements call. If a linked Customer already exists and overwrite_if_exists is true, it will update that Customer's data. Possible error codes: * PERMISSION_DENIED: The reseller account making the request is different from the reseller account in the API request. * NOT_FOUND: Cloud Identity doesn't exist or was deleted. * INVALID_ARGUMENT: Required parameters are missing, or the auth_token is expired or invalid. * ALREADY_EXISTS: A customer already exists and has conflicting critical fields. Requires an overwrite. Return value: The Customer.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Accounts.CloudchannelAccountsCustomersImport(ctx, operations.CloudchannelAccountsCustomersImportRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        GoogleCloudChannelV1ImportCustomerRequest: &shared.GoogleCloudChannelV1ImportCustomerRequest{
            AuthToken: sdk.String("consequatur"),
            ChannelPartnerID: sdk.String("est"),
            CloudIdentityID: sdk.String("repellendus"),
            Customer: sdk.String("porro"),
            Domain: sdk.String("doloribus"),
            OverwriteIfExists: sdk.Bool(false),
        },
        AccessToken: sdk.String("ut"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("cupiditate"),
        Fields: sdk.String("qui"),
        Key: sdk.String("quae"),
        OauthToken: sdk.String("laudantium"),
        Parent: "odio",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("occaecati"),
        UploadType: sdk.String("voluptatibus"),
        UploadProtocol: sdk.String("quisquam"),
    }, operations.CloudchannelAccountsCustomersImportSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudChannelV1Customer != nil {
        // handle response
    }
}
```

## CloudchannelAccountsCustomersList

List Customers. Possible error codes: * PERMISSION_DENIED: The reseller account making the request is different from the reseller account in the API request. * INVALID_ARGUMENT: Required request parameters are missing or invalid. Return value: List of Customers, or an empty list if there are no customers.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Accounts.CloudchannelAccountsCustomersList(ctx, operations.CloudchannelAccountsCustomersListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("omnis"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("ipsum"),
        Fields: sdk.String("delectus"),
        Filter: sdk.String("voluptate"),
        Key: sdk.String("consectetur"),
        OauthToken: sdk.String("vero"),
        PageSize: sdk.Int64(949319),
        PageToken: sdk.String("dignissimos"),
        Parent: "hic",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("distinctio"),
        UploadType: sdk.String("quod"),
        UploadProtocol: sdk.String("odio"),
    }, operations.CloudchannelAccountsCustomersListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudChannelV1ListCustomersResponse != nil {
        // handle response
    }
}
```

## CloudchannelAccountsCustomersListPurchasableOffers

Lists the following: * Offers that you can purchase for a customer. * Offers that you can change for an entitlement. Possible error codes: * PERMISSION_DENIED: The customer doesn't belong to the reseller * INVALID_ARGUMENT: Required request parameters are missing or invalid.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Accounts.CloudchannelAccountsCustomersListPurchasableOffers(ctx, operations.CloudchannelAccountsCustomersListPurchasableOffersRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("facilis"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("ducimus"),
        ChangeOfferPurchaseEntitlement: sdk.String("dolore"),
        ChangeOfferPurchaseNewSku: sdk.String("quibusdam"),
        CreateEntitlementPurchaseSku: sdk.String("illum"),
        Customer: "sequi",
        Fields: sdk.String("natus"),
        Key: sdk.String("impedit"),
        LanguageCode: sdk.String("aut"),
        OauthToken: sdk.String("voluptatibus"),
        PageSize: sdk.Int64(347233),
        PageToken: sdk.String("nulla"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("fugit"),
        UploadType: sdk.String("porro"),
        UploadProtocol: sdk.String("maiores"),
    }, operations.CloudchannelAccountsCustomersListPurchasableOffersSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudChannelV1ListPurchasableOffersResponse != nil {
        // handle response
    }
}
```

## CloudchannelAccountsCustomersListPurchasableSkus

Lists the following: * SKUs that you can purchase for a customer * SKUs that you can upgrade or downgrade for an entitlement. Possible error codes: * PERMISSION_DENIED: The customer doesn't belong to the reseller. * INVALID_ARGUMENT: Required request parameters are missing or invalid.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Accounts.CloudchannelAccountsCustomersListPurchasableSkus(ctx, operations.CloudchannelAccountsCustomersListPurchasableSkusRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("iusto"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("ducimus"),
        ChangeOfferPurchaseChangeType: operations.CloudchannelAccountsCustomersListPurchasableSkusChangeOfferPurchaseChangeTypeEnumChangeTypeUnspecified.ToPointer(),
        ChangeOfferPurchaseEntitlement: sdk.String("officia"),
        CreateEntitlementPurchaseProduct: sdk.String("tempora"),
        Customer: "ipsam",
        Fields: sdk.String("ea"),
        Key: sdk.String("aspernatur"),
        LanguageCode: sdk.String("vel"),
        OauthToken: sdk.String("possimus"),
        PageSize: sdk.Int64(297842),
        PageToken: sdk.String("ratione"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("ex"),
        UploadType: sdk.String("laudantium"),
        UploadProtocol: sdk.String("dicta"),
    }, operations.CloudchannelAccountsCustomersListPurchasableSkusSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudChannelV1ListPurchasableSkusResponse != nil {
        // handle response
    }
}
```

## CloudchannelAccountsCustomersProvisionCloudIdentity

Creates a Cloud Identity for the given customer using the customer's information, or the information provided here. Possible error codes: * PERMISSION_DENIED: The customer doesn't belong to the reseller. * INVALID_ARGUMENT: Required request parameters are missing or invalid. * NOT_FOUND: The customer was not found. * ALREADY_EXISTS: The customer's primary email already exists. Retry after changing the customer's primary contact email. * INTERNAL: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support. * UNKNOWN: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support. Return value: The ID of a long-running operation. To get the results of the operation, call the GetOperation method of CloudChannelOperationsService. The Operation metadata contains an instance of OperationMetadata.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Accounts.CloudchannelAccountsCustomersProvisionCloudIdentity(ctx, operations.CloudchannelAccountsCustomersProvisionCloudIdentityRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        GoogleCloudChannelV1ProvisionCloudIdentityRequestInput: &shared.GoogleCloudChannelV1ProvisionCloudIdentityRequestInput{
            CloudIdentityInfo: &shared.GoogleCloudChannelV1CloudIdentityInfoInput{
                AlternateEmail: sdk.String("maiores"),
                CustomerType: shared.GoogleCloudChannelV1CloudIdentityInfoCustomerTypeEnumCustomerTypeUnspecified.ToPointer(),
                EduData: &shared.GoogleCloudChannelV1EduData{
                    InstituteSize: shared.GoogleCloudChannelV1EduDataInstituteSizeEnumSize5011000.ToPointer(),
                    InstituteType: shared.GoogleCloudChannelV1EduDataInstituteTypeEnumUniversity.ToPointer(),
                    Website: sdk.String("excepturi"),
                },
                LanguageCode: sdk.String("voluptatibus"),
                PhoneNumber: sdk.String("nostrum"),
            },
            User: &shared.GoogleCloudChannelV1AdminUser{
                Email: sdk.String("Pat_Ullrich@hotmail.com"),
                FamilyName: sdk.String("corporis"),
                GivenName: sdk.String("veniam"),
            },
            ValidateOnly: sdk.Bool(false),
        },
        AccessToken: sdk.String("aliquid"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("magnam"),
        Customer: "ea",
        Fields: sdk.String("quo"),
        Key: sdk.String("consectetur"),
        OauthToken: sdk.String("recusandae"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("aspernatur"),
        UploadType: sdk.String("minima"),
        UploadProtocol: sdk.String("eaque"),
    }, operations.CloudchannelAccountsCustomersProvisionCloudIdentitySecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleLongrunningOperation != nil {
        // handle response
    }
}
```

## CloudchannelAccountsCustomersTransferEntitlements

Transfers customer entitlements to new reseller. Possible error codes: * PERMISSION_DENIED: The customer doesn't belong to the reseller. * INVALID_ARGUMENT: Required request parameters are missing or invalid. * NOT_FOUND: The customer or offer resource was not found. * ALREADY_EXISTS: The SKU was already transferred for the customer. * CONDITION_NOT_MET or FAILED_PRECONDITION: * The SKU requires domain verification to transfer, but the domain is not verified. * An Add-On SKU (example, Vault or Drive) is missing the pre-requisite SKU (example, G Suite Basic). * (Developer accounts only) Reseller and resold domain must meet the following naming requirements: * Domain names must start with goog-test. * Domain names must include the reseller domain. * Specify all transferring entitlements. * INTERNAL: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support. * UNKNOWN: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support. Return value: The ID of a long-running operation. To get the results of the operation, call the GetOperation method of CloudChannelOperationsService. The Operation metadata will contain an instance of OperationMetadata.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Accounts.CloudchannelAccountsCustomersTransferEntitlements(ctx, operations.CloudchannelAccountsCustomersTransferEntitlementsRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        GoogleCloudChannelV1TransferEntitlementsRequestInput: &shared.GoogleCloudChannelV1TransferEntitlementsRequestInput{
            AuthToken: sdk.String("libero"),
            Entitlements: []shared.GoogleCloudChannelV1EntitlementInput{
                shared.GoogleCloudChannelV1EntitlementInput{
                    AssociationInfo: &shared.GoogleCloudChannelV1AssociationInfo{
                        BaseEntitlement: sdk.String("aut"),
                    },
                    BillingAccount: sdk.String("deleniti"),
                    CommitmentSettings: &shared.GoogleCloudChannelV1CommitmentSettingsInput{
                        RenewalSettings: &shared.GoogleCloudChannelV1RenewalSettings{
                            EnableRenewal: sdk.Bool(false),
                            PaymentCycle: &shared.GoogleCloudChannelV1Period{
                                Duration: sdk.Int(770581),
                                PeriodType: shared.GoogleCloudChannelV1PeriodPeriodTypeEnumDay.ToPointer(),
                            },
                            PaymentPlan: shared.GoogleCloudChannelV1RenewalSettingsPaymentPlanEnumPaymentPlanUnspecified.ToPointer(),
                            ResizeUnitCount: sdk.Bool(false),
                        },
                    },
                    Offer: sdk.String("accusamus"),
                    Parameters: []shared.GoogleCloudChannelV1ParameterInput{
                        shared.GoogleCloudChannelV1ParameterInput{
                            Name: sdk.String("Janet Pagac"),
                            Value: &shared.GoogleCloudChannelV1Value{
                                BoolValue: sdk.Bool(false),
                                DoubleValue: sdk.Float64(2453.67),
                                Int64Value: sdk.String("eum"),
                                ProtoValue: map[string]interface{}{
                                    "nobis": "quas",
                                    "assumenda": "nulla",
                                },
                                StringValue: sdk.String("voluptas"),
                            },
                        },
                    },
                    PurchaseOrderID: sdk.String("libero"),
                    TrialSettings: &shared.GoogleCloudChannelV1TrialSettings{
                        EndTime: sdk.String("quasi"),
                        Trial: sdk.Bool(false),
                    },
                },
            },
            RequestID: sdk.String("tempora"),
        },
        AccessToken: sdk.String("numquam"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("provident"),
        Fields: sdk.String("ipsa"),
        Key: sdk.String("molestiae"),
        OauthToken: sdk.String("magnam"),
        Parent: "odio",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("eius"),
        UploadType: sdk.String("esse"),
        UploadProtocol: sdk.String("esse"),
    }, operations.CloudchannelAccountsCustomersTransferEntitlementsSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleLongrunningOperation != nil {
        // handle response
    }
}
```

## CloudchannelAccountsCustomersTransferEntitlementsToGoogle

Transfers customer entitlements from their current reseller to Google. Possible error codes: * PERMISSION_DENIED: The customer doesn't belong to the reseller. * INVALID_ARGUMENT: Required request parameters are missing or invalid. * NOT_FOUND: The customer or offer resource was not found. * ALREADY_EXISTS: The SKU was already transferred for the customer. * CONDITION_NOT_MET or FAILED_PRECONDITION: * The SKU requires domain verification to transfer, but the domain is not verified. * An Add-On SKU (example, Vault or Drive) is missing the pre-requisite SKU (example, G Suite Basic). * (Developer accounts only) Reseller and resold domain must meet the following naming requirements: * Domain names must start with goog-test. * Domain names must include the reseller domain. * INTERNAL: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support. * UNKNOWN: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support. Return value: The ID of a long-running operation. To get the results of the operation, call the GetOperation method of CloudChannelOperationsService. The response will contain google.protobuf.Empty on success. The Operation metadata will contain an instance of OperationMetadata.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Accounts.CloudchannelAccountsCustomersTransferEntitlementsToGoogle(ctx, operations.CloudchannelAccountsCustomersTransferEntitlementsToGoogleRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        GoogleCloudChannelV1TransferEntitlementsToGoogleRequestInput: &shared.GoogleCloudChannelV1TransferEntitlementsToGoogleRequestInput{
            Entitlements: []shared.GoogleCloudChannelV1EntitlementInput{
                shared.GoogleCloudChannelV1EntitlementInput{
                    AssociationInfo: &shared.GoogleCloudChannelV1AssociationInfo{
                        BaseEntitlement: sdk.String("reprehenderit"),
                    },
                    BillingAccount: sdk.String("quidem"),
                    CommitmentSettings: &shared.GoogleCloudChannelV1CommitmentSettingsInput{
                        RenewalSettings: &shared.GoogleCloudChannelV1RenewalSettings{
                            EnableRenewal: sdk.Bool(false),
                            PaymentCycle: &shared.GoogleCloudChannelV1Period{
                                Duration: sdk.Int(852635),
                                PeriodType: shared.GoogleCloudChannelV1PeriodPeriodTypeEnumDay.ToPointer(),
                            },
                            PaymentPlan: shared.GoogleCloudChannelV1RenewalSettingsPaymentPlanEnumFlexible.ToPointer(),
                            ResizeUnitCount: sdk.Bool(false),
                        },
                    },
                    Offer: sdk.String("suscipit"),
                    Parameters: []shared.GoogleCloudChannelV1ParameterInput{
                        shared.GoogleCloudChannelV1ParameterInput{
                            Name: sdk.String("Mr. Irma Schaefer"),
                            Value: &shared.GoogleCloudChannelV1Value{
                                BoolValue: sdk.Bool(false),
                                DoubleValue: sdk.Float64(6969.97),
                                Int64Value: sdk.String("neque"),
                                ProtoValue: map[string]interface{}{
                                    "illum": "quo",
                                    "fuga": "eius",
                                    "eos": "voluptas",
                                    "ab": "cupiditate",
                                },
                                StringValue: sdk.String("consequatur"),
                            },
                        },
                        shared.GoogleCloudChannelV1ParameterInput{
                            Name: sdk.String("Henrietta Hilpert"),
                            Value: &shared.GoogleCloudChannelV1Value{
                                BoolValue: sdk.Bool(false),
                                DoubleValue: sdk.Float64(7791.92),
                                Int64Value: sdk.String("esse"),
                                ProtoValue: map[string]interface{}{
                                    "aperiam": "distinctio",
                                    "quod": "dignissimos",
                                    "inventore": "nihil",
                                    "totam": "accusamus",
                                },
                                StringValue: sdk.String("aliquam"),
                            },
                        },
                        shared.GoogleCloudChannelV1ParameterInput{
                            Name: sdk.String("Violet Johns"),
                            Value: &shared.GoogleCloudChannelV1Value{
                                BoolValue: sdk.Bool(false),
                                DoubleValue: sdk.Float64(6455.7),
                                Int64Value: sdk.String("molestiae"),
                                ProtoValue: map[string]interface{}{
                                    "porro": "eum",
                                },
                                StringValue: sdk.String("quas"),
                            },
                        },
                        shared.GoogleCloudChannelV1ParameterInput{
                            Name: sdk.String("Eugene Leuschke"),
                            Value: &shared.GoogleCloudChannelV1Value{
                                BoolValue: sdk.Bool(false),
                                DoubleValue: sdk.Float64(6494.63),
                                Int64Value: sdk.String("incidunt"),
                                ProtoValue: map[string]interface{}{
                                    "explicabo": "minima",
                                    "nisi": "fugit",
                                    "sapiente": "consequuntur",
                                },
                                StringValue: sdk.String("ratione"),
                            },
                        },
                    },
                    PurchaseOrderID: sdk.String("explicabo"),
                    TrialSettings: &shared.GoogleCloudChannelV1TrialSettings{
                        EndTime: sdk.String("saepe"),
                        Trial: sdk.Bool(false),
                    },
                },
                shared.GoogleCloudChannelV1EntitlementInput{
                    AssociationInfo: &shared.GoogleCloudChannelV1AssociationInfo{
                        BaseEntitlement: sdk.String("occaecati"),
                    },
                    BillingAccount: sdk.String("atque"),
                    CommitmentSettings: &shared.GoogleCloudChannelV1CommitmentSettingsInput{
                        RenewalSettings: &shared.GoogleCloudChannelV1RenewalSettings{
                            EnableRenewal: sdk.Bool(false),
                            PaymentCycle: &shared.GoogleCloudChannelV1Period{
                                Duration: sdk.Int(92260),
                                PeriodType: shared.GoogleCloudChannelV1PeriodPeriodTypeEnumDay.ToPointer(),
                            },
                            PaymentPlan: shared.GoogleCloudChannelV1RenewalSettingsPaymentPlanEnumOffline.ToPointer(),
                            ResizeUnitCount: sdk.Bool(false),
                        },
                    },
                    Offer: sdk.String("accusamus"),
                    Parameters: []shared.GoogleCloudChannelV1ParameterInput{
                        shared.GoogleCloudChannelV1ParameterInput{
                            Name: sdk.String("Traci Reilly"),
                            Value: &shared.GoogleCloudChannelV1Value{
                                BoolValue: sdk.Bool(false),
                                DoubleValue: sdk.Float64(934.59),
                                Int64Value: sdk.String("saepe"),
                                ProtoValue: map[string]interface{}{
                                    "harum": "molestiae",
                                    "rerum": "occaecati",
                                },
                                StringValue: sdk.String("minima"),
                            },
                        },
                    },
                    PurchaseOrderID: sdk.String("distinctio"),
                    TrialSettings: &shared.GoogleCloudChannelV1TrialSettings{
                        EndTime: sdk.String("eligendi"),
                        Trial: sdk.Bool(false),
                    },
                },
                shared.GoogleCloudChannelV1EntitlementInput{
                    AssociationInfo: &shared.GoogleCloudChannelV1AssociationInfo{
                        BaseEntitlement: sdk.String("sit"),
                    },
                    BillingAccount: sdk.String("culpa"),
                    CommitmentSettings: &shared.GoogleCloudChannelV1CommitmentSettingsInput{
                        RenewalSettings: &shared.GoogleCloudChannelV1RenewalSettings{
                            EnableRenewal: sdk.Bool(false),
                            PaymentCycle: &shared.GoogleCloudChannelV1Period{
                                Duration: sdk.Int(731398),
                                PeriodType: shared.GoogleCloudChannelV1PeriodPeriodTypeEnumPeriodTypeUnspecified.ToPointer(),
                            },
                            PaymentPlan: shared.GoogleCloudChannelV1RenewalSettingsPaymentPlanEnumTrial.ToPointer(),
                            ResizeUnitCount: sdk.Bool(false),
                        },
                    },
                    Offer: sdk.String("consequuntur"),
                    Parameters: []shared.GoogleCloudChannelV1ParameterInput{
                        shared.GoogleCloudChannelV1ParameterInput{
                            Name: sdk.String("Calvin Williamson"),
                            Value: &shared.GoogleCloudChannelV1Value{
                                BoolValue: sdk.Bool(false),
                                DoubleValue: sdk.Float64(5034.27),
                                Int64Value: sdk.String("provident"),
                                ProtoValue: map[string]interface{}{
                                    "nulla": "quas",
                                    "esse": "quasi",
                                    "a": "error",
                                    "sint": "pariatur",
                                },
                                StringValue: sdk.String("possimus"),
                            },
                        },
                    },
                    PurchaseOrderID: sdk.String("quia"),
                    TrialSettings: &shared.GoogleCloudChannelV1TrialSettings{
                        EndTime: sdk.String("eveniet"),
                        Trial: sdk.Bool(false),
                    },
                },
            },
            RequestID: sdk.String("asperiores"),
        },
        AccessToken: sdk.String("facere"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("consequuntur"),
        Fields: sdk.String("quasi"),
        Key: sdk.String("similique"),
        OauthToken: sdk.String("culpa"),
        Parent: "aliquid",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("tenetur"),
        UploadType: sdk.String("quae"),
        UploadProtocol: sdk.String("earum"),
    }, operations.CloudchannelAccountsCustomersTransferEntitlementsToGoogleSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleLongrunningOperation != nil {
        // handle response
    }
}
```

## CloudchannelAccountsListSubscribers

Lists service accounts with subscriber privileges on the Cloud Pub/Sub topic created for this Channel Services account. Possible error codes: * PERMISSION_DENIED: The reseller account making the request and the provided reseller account are different, or the impersonated user is not a super admin. * INVALID_ARGUMENT: Required request parameters are missing or invalid. * NOT_FOUND: The topic resource doesn't exist. * INTERNAL: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support. * UNKNOWN: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support. Return value: A list of service email addresses.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Accounts.CloudchannelAccountsListSubscribers(ctx, operations.CloudchannelAccountsListSubscribersRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("in"),
        Account: "eius",
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("illum"),
        Fields: sdk.String("soluta"),
        Key: sdk.String("accusantium"),
        OauthToken: sdk.String("aliquam"),
        PageSize: sdk.Int64(958983),
        PageToken: sdk.String("dicta"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("ullam"),
        UploadType: sdk.String("reprehenderit"),
        UploadProtocol: sdk.String("ullam"),
    }, operations.CloudchannelAccountsListSubscribersSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudChannelV1ListSubscribersResponse != nil {
        // handle response
    }
}
```

## CloudchannelAccountsListTransferableOffers

List TransferableOffers of a customer based on Cloud Identity ID or Customer Name in the request. Use this method when a reseller gets the entitlement information of an unowned customer. The reseller should provide the customer's Cloud Identity ID or Customer Name. Possible error codes: * PERMISSION_DENIED: * The customer doesn't belong to the reseller and has no auth token. * The customer provided incorrect reseller information when generating auth token. * The reseller account making the request is different from the reseller account in the query. * INVALID_ARGUMENT: Required request parameters are missing or invalid. Return value: List of TransferableOffer for the given customer and SKU.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Accounts.CloudchannelAccountsListTransferableOffers(ctx, operations.CloudchannelAccountsListTransferableOffersRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        GoogleCloudChannelV1ListTransferableOffersRequest: &shared.GoogleCloudChannelV1ListTransferableOffersRequest{
            CloudIdentityID: sdk.String("aut"),
            CustomerName: sdk.String("voluptatum"),
            LanguageCode: sdk.String("qui"),
            PageSize: sdk.Int(845358),
            PageToken: sdk.String("ex"),
            Sku: sdk.String("deleniti"),
        },
        AccessToken: sdk.String("itaque"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("architecto"),
        Fields: sdk.String("omnis"),
        Key: sdk.String("tenetur"),
        OauthToken: sdk.String("quasi"),
        Parent: "at",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("et"),
        UploadType: sdk.String("voluptate"),
        UploadProtocol: sdk.String("ipsa"),
    }, operations.CloudchannelAccountsListTransferableOffersSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudChannelV1ListTransferableOffersResponse != nil {
        // handle response
    }
}
```

## CloudchannelAccountsListTransferableSkus

List TransferableSkus of a customer based on the Cloud Identity ID or Customer Name in the request. Use this method to list the entitlements information of an unowned customer. You should provide the customer's Cloud Identity ID or Customer Name. Possible error codes: * PERMISSION_DENIED: * The customer doesn't belong to the reseller and has no auth token. * The supplied auth token is invalid. * The reseller account making the request is different from the reseller account in the query. * INVALID_ARGUMENT: Required request parameters are missing or invalid. Return value: A list of the customer's TransferableSku.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Accounts.CloudchannelAccountsListTransferableSkus(ctx, operations.CloudchannelAccountsListTransferableSkusRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        GoogleCloudChannelV1ListTransferableSkusRequest: &shared.GoogleCloudChannelV1ListTransferableSkusRequest{
            AuthToken: sdk.String("veritatis"),
            CloudIdentityID: sdk.String("consectetur"),
            CustomerName: sdk.String("adipisci"),
            LanguageCode: sdk.String("iste"),
            PageSize: sdk.Int(839513),
            PageToken: sdk.String("accusantium"),
        },
        AccessToken: sdk.String("rem"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("laudantium"),
        Fields: sdk.String("eum"),
        Key: sdk.String("mollitia"),
        OauthToken: sdk.String("ab"),
        Parent: "corrupti",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("non"),
        UploadType: sdk.String("voluptatem"),
        UploadProtocol: sdk.String("dolor"),
    }, operations.CloudchannelAccountsListTransferableSkusSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudChannelV1ListTransferableSkusResponse != nil {
        // handle response
    }
}
```

## CloudchannelAccountsOffersList

Lists the Offers the reseller can sell. Possible error codes: * INVALID_ARGUMENT: Required request parameters are missing or invalid.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Accounts.CloudchannelAccountsOffersList(ctx, operations.CloudchannelAccountsOffersListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("numquam"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("explicabo"),
        Fields: sdk.String("voluptas"),
        Filter: sdk.String("aut"),
        Key: sdk.String("dignissimos"),
        LanguageCode: sdk.String("dicta"),
        OauthToken: sdk.String("maiores"),
        PageSize: sdk.Int64(618480),
        PageToken: sdk.String("velit"),
        Parent: "voluptatibus",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("voluptas"),
        ShowFutureOffers: sdk.Bool(false),
        UploadType: sdk.String("asperiores"),
        UploadProtocol: sdk.String("aperiam"),
    }, operations.CloudchannelAccountsOffersListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudChannelV1ListOffersResponse != nil {
        // handle response
    }
}
```

## CloudchannelAccountsRegister

Registers a service account with subscriber privileges on the Cloud Pub/Sub topic for this Channel Services account. After you create a subscriber, you get the events through SubscriberEvent Possible error codes: * PERMISSION_DENIED: The reseller account making the request and the provided reseller account are different, or the impersonated user is not a super admin. * INVALID_ARGUMENT: Required request parameters are missing or invalid. * INTERNAL: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support. * UNKNOWN: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support. Return value: The topic name with the registered service email address.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Accounts.CloudchannelAccountsRegister(ctx, operations.CloudchannelAccountsRegisterRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        GoogleCloudChannelV1RegisterSubscriberRequest: &shared.GoogleCloudChannelV1RegisterSubscriberRequest{
            ServiceAccount: sdk.String("quaerat"),
        },
        AccessToken: sdk.String("consequuntur"),
        Account: "repellendus",
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("maxime"),
        Fields: sdk.String("dignissimos"),
        Key: sdk.String("officia"),
        OauthToken: sdk.String("asperiores"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("nemo"),
        UploadType: sdk.String("quae"),
        UploadProtocol: sdk.String("quaerat"),
    }, operations.CloudchannelAccountsRegisterSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudChannelV1RegisterSubscriberResponse != nil {
        // handle response
    }
}
```

## CloudchannelAccountsReportJobsFetchReportResults

Retrieves data generated by CloudChannelReportsService.RunReportJob.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Accounts.CloudchannelAccountsReportJobsFetchReportResults(ctx, operations.CloudchannelAccountsReportJobsFetchReportResultsRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        GoogleCloudChannelV1FetchReportResultsRequest: &shared.GoogleCloudChannelV1FetchReportResultsRequest{
            PageSize: sdk.Int(801836),
            PageToken: sdk.String("labore"),
            PartitionKeys: []string{
                "adipisci",
            },
        },
        AccessToken: sdk.String("fuga"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("suscipit"),
        Fields: sdk.String("velit"),
        Key: sdk.String("culpa"),
        OauthToken: sdk.String("est"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("recusandae"),
        ReportJob: "totam",
        UploadType: sdk.String("fugiat"),
        UploadProtocol: sdk.String("vel"),
    }, operations.CloudchannelAccountsReportJobsFetchReportResultsSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudChannelV1FetchReportResultsResponse != nil {
        // handle response
    }
}
```

## CloudchannelAccountsReportsList

Lists the reports that RunReportJob can run. These reports include an ID, a description, and the list of columns that will be in the result.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Accounts.CloudchannelAccountsReportsList(ctx, operations.CloudchannelAccountsReportsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("quos"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("labore"),
        Fields: sdk.String("possimus"),
        Key: sdk.String("facilis"),
        LanguageCode: sdk.String("cum"),
        OauthToken: sdk.String("commodi"),
        PageSize: sdk.Int64(447144),
        PageToken: sdk.String("corporis"),
        Parent: "reiciendis",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("assumenda"),
        UploadType: sdk.String("nemo"),
        UploadProtocol: sdk.String("recusandae"),
    }, operations.CloudchannelAccountsReportsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudChannelV1ListReportsResponse != nil {
        // handle response
    }
}
```

## CloudchannelAccountsReportsRun

Begins generation of data for a given report. The report identifier is a UID (for example, `613bf59q`). Possible error codes: * PERMISSION_DENIED: The user doesn't have access to this report. * INVALID_ARGUMENT: Required request parameters are missing or invalid. * NOT_FOUND: The report identifier was not found. * INTERNAL: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support. * UNKNOWN: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support. Return value: The ID of a long-running operation. To get the results of the operation, call the GetOperation method of CloudChannelOperationsService. The Operation metadata contains an instance of OperationMetadata. To get the results of report generation, call CloudChannelReportsService.FetchReportResults with the RunReportJobResponse.report_job.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Accounts.CloudchannelAccountsReportsRun(ctx, operations.CloudchannelAccountsReportsRunRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        GoogleCloudChannelV1RunReportJobRequest: &shared.GoogleCloudChannelV1RunReportJobRequest{
            DateRange: &shared.GoogleCloudChannelV1DateRange{
                InvoiceEndDate: &shared.GoogleTypeDate{
                    Day: sdk.Int(46007),
                    Month: sdk.Int(738683),
                    Year: sdk.Int(232627),
                },
                InvoiceStartDate: &shared.GoogleTypeDate{
                    Day: sdk.Int(449083),
                    Month: sdk.Int(348519),
                    Year: sdk.Int(937285),
                },
                UsageEndDateTime: &shared.GoogleTypeDateTime{
                    Day: sdk.Int(814967),
                    Hours: sdk.Int(257233),
                    Minutes: sdk.Int(985492),
                    Month: sdk.Int(381760),
                    Nanos: sdk.Int(968972),
                    Seconds: sdk.Int(697142),
                    TimeZone: &shared.GoogleTypeTimeZone{
                        ID: sdk.String("ee41f333-17fe-435b-a0eb-1ea426555ba3"),
                        Version: sdk.String("minus"),
                    },
                    UtcOffset: sdk.String("dolores"),
                    Year: sdk.Int(503934),
                },
                UsageStartDateTime: &shared.GoogleTypeDateTime{
                    Day: sdk.Int(449292),
                    Hours: sdk.Int(296242),
                    Minutes: sdk.Int(304468),
                    Month: sdk.Int(885963),
                    Nanos: sdk.Int(839189),
                    Seconds: sdk.Int(351870),
                    TimeZone: &shared.GoogleTypeTimeZone{
                        ID: sdk.String("3b88f3a8-d8f5-4c0b-af2f-b7b194a276b2"),
                        Version: sdk.String("voluptas"),
                    },
                    UtcOffset: sdk.String("unde"),
                    Year: sdk.Int(100032),
                },
            },
            Filter: sdk.String("suscipit"),
            LanguageCode: sdk.String("sapiente"),
        },
        AccessToken: sdk.String("debitis"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("reiciendis"),
        Fields: sdk.String("perferendis"),
        Key: sdk.String("corrupti"),
        Name: "Troy Cormier",
        OauthToken: sdk.String("necessitatibus"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("ipsum"),
        UploadType: sdk.String("ea"),
        UploadProtocol: sdk.String("occaecati"),
    }, operations.CloudchannelAccountsReportsRunSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleLongrunningOperation != nil {
        // handle response
    }
}
```

## CloudchannelAccountsUnregister

Unregisters a service account with subscriber privileges on the Cloud Pub/Sub topic created for this Channel Services account. If there are no service accounts left with subscriber privileges, this deletes the topic. You can call ListSubscribers to check for these accounts. Possible error codes: * PERMISSION_DENIED: The reseller account making the request and the provided reseller account are different, or the impersonated user is not a super admin. * INVALID_ARGUMENT: Required request parameters are missing or invalid. * NOT_FOUND: The topic resource doesn't exist. * INTERNAL: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support. * UNKNOWN: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support. Return value: The topic name that unregistered the service email address. Returns a success response if the service email address wasn't registered with the topic.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Accounts.CloudchannelAccountsUnregister(ctx, operations.CloudchannelAccountsUnregisterRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        GoogleCloudChannelV1UnregisterSubscriberRequest: &shared.GoogleCloudChannelV1UnregisterSubscriberRequest{
            ServiceAccount: sdk.String("voluptatibus"),
        },
        AccessToken: sdk.String("tempora"),
        Account: "tempora",
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("reiciendis"),
        Fields: sdk.String("ex"),
        Key: sdk.String("sit"),
        OauthToken: sdk.String("non"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("officiis"),
        UploadType: sdk.String("praesentium"),
        UploadProtocol: sdk.String("facilis"),
    }, operations.CloudchannelAccountsUnregisterSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudChannelV1UnregisterSubscriberResponse != nil {
        // handle response
    }
}
```
