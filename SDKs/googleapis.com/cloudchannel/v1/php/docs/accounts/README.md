# accounts

### Available Operations

* [cloudchannelAccountsChannelPartnerLinksChannelPartnerRepricingConfigsCreate](#cloudchannelaccountschannelpartnerlinkschannelpartnerrepricingconfigscreate) - Creates a ChannelPartnerRepricingConfig. Call this method to set modifications for a specific ChannelPartner's bill. You can only create configs if the RepricingConfig.effective_invoice_month is a future month. If needed, you can create a config for the current month, with some restrictions. When creating a config for a future month, make sure there are no existing configs for that RepricingConfig.effective_invoice_month. The following restrictions are for creating configs in the current month. * This functionality is reserved for recovering from an erroneous config, and should not be used for regular business cases. * The new config will not modify exports used with other configs. Changes to the config may be immediate, but may take up to 24 hours. * There is a limit of ten configs for any ChannelPartner or RepricingConfig.effective_invoice_month. * The contained ChannelPartnerRepricingConfig.repricing_config vaule must be different from the value used in the current config for a ChannelPartner. Possible Error Codes: * PERMISSION_DENIED: If the account making the request and the account being queried are different. * INVALID_ARGUMENT: Missing or invalid required parameters in the request. Also displays if the updated config is for the current month or past months. * NOT_FOUND: The ChannelPartnerRepricingConfig specified does not exist or is not associated with the given account. * INTERNAL: Any non-user error related to technical issues in the backend. In this case, contact Cloud Channel support. Return Value: If successful, the updated ChannelPartnerRepricingConfig resource, otherwise returns an error.
* [cloudchannelAccountsChannelPartnerLinksChannelPartnerRepricingConfigsList](#cloudchannelaccountschannelpartnerlinkschannelpartnerrepricingconfigslist) - Lists information about how a Reseller modifies their bill before sending it to a ChannelPartner. Possible Error Codes: * PERMISSION_DENIED: If the account making the request and the account being queried are different. * NOT_FOUND: The ChannelPartnerRepricingConfig specified does not exist or is not associated with the given account. * INTERNAL: Any non-user error related to technical issues in the backend. In this case, contact Cloud Channel support. Return Value: If successful, the ChannelPartnerRepricingConfig resources. The data for each resource is displayed in the ascending order of: * Channel Partner ID * RepricingConfig.effective_invoice_month * ChannelPartnerRepricingConfig.update_time If unsuccessful, returns an error.
* [cloudchannelAccountsChannelPartnerLinksCreate](#cloudchannelaccountschannelpartnerlinkscreate) - Initiates a channel partner link between a distributor and a reseller, or between resellers in an n-tier reseller channel. Invited partners need to follow the invite_link_uri provided in the response to accept. After accepting the invitation, a link is set up between the two parties. You must be a distributor to call this method. Possible error codes: * PERMISSION_DENIED: The reseller account making the request is different from the reseller account in the API request. * INVALID_ARGUMENT: Required request parameters are missing or invalid. * ALREADY_EXISTS: The ChannelPartnerLink sent in the request already exists. * NOT_FOUND: No Cloud Identity customer exists for provided domain. * INTERNAL: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support. * UNKNOWN: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support. Return value: The new ChannelPartnerLink resource.
* [cloudchannelAccountsChannelPartnerLinksList](#cloudchannelaccountschannelpartnerlinkslist) - List ChannelPartnerLinks belonging to a distributor. You must be a distributor to call this method. Possible error codes: * PERMISSION_DENIED: The reseller account making the request is different from the reseller account in the API request. * INVALID_ARGUMENT: Required request parameters are missing or invalid. Return value: The list of the distributor account's ChannelPartnerLink resources.
* [cloudchannelAccountsCheckCloudIdentityAccountsExist](#cloudchannelaccountscheckcloudidentityaccountsexist) - Confirms the existence of Cloud Identity accounts based on the domain and if the Cloud Identity accounts are owned by the reseller. Possible error codes: * PERMISSION_DENIED: The reseller account making the request is different from the reseller account in the API request. * INVALID_ARGUMENT: Required request parameters are missing or invalid. * INVALID_VALUE: Invalid domain value in the request. Return value: A list of CloudIdentityCustomerAccount resources for the domain (may be empty) Note: in the v1alpha1 version of the API, a NOT_FOUND error returns if no CloudIdentityCustomerAccount resources match the domain.
* [cloudchannelAccountsCustomersCreate](#cloudchannelaccountscustomerscreate) - Creates a new Customer resource under the reseller or distributor account. Possible error codes: * PERMISSION_DENIED: The reseller account making the request is different from the reseller account in the API request. * INVALID_ARGUMENT: * Required request parameters are missing or invalid. * Domain field value doesn't match the primary email domain. Return value: The newly created Customer resource.
* [cloudchannelAccountsCustomersCustomerRepricingConfigsCreate](#cloudchannelaccountscustomerscustomerrepricingconfigscreate) - Creates a CustomerRepricingConfig. Call this method to set modifications for a specific customer's bill. You can only create configs if the RepricingConfig.effective_invoice_month is a future month. If needed, you can create a config for the current month, with some restrictions. When creating a config for a future month, make sure there are no existing configs for that RepricingConfig.effective_invoice_month. The following restrictions are for creating configs in the current month. * This functionality is reserved for recovering from an erroneous config, and should not be used for regular business cases. * The new config will not modify exports used with other configs. Changes to the config may be immediate, but may take up to 24 hours. * There is a limit of ten configs for any RepricingConfig.EntitlementGranularity.entitlement or RepricingConfig.effective_invoice_month. * The contained CustomerRepricingConfig.repricing_config vaule must be different from the value used in the current config for a RepricingConfig.EntitlementGranularity.entitlement. Possible Error Codes: * PERMISSION_DENIED: If the account making the request and the account being queried are different. * INVALID_ARGUMENT: Missing or invalid required parameters in the request. Also displays if the updated config is for the current month or past months. * NOT_FOUND: The CustomerRepricingConfig specified does not exist or is not associated with the given account. * INTERNAL: Any non-user error related to technical issues in the backend. In this case, contact Cloud Channel support. Return Value: If successful, the updated CustomerRepricingConfig resource, otherwise returns an error.
* [cloudchannelAccountsCustomersCustomerRepricingConfigsList](#cloudchannelaccountscustomerscustomerrepricingconfigslist) - Lists information about how a Reseller modifies their bill before sending it to a Customer. Possible Error Codes: * PERMISSION_DENIED: If the account making the request and the account being queried are different. * NOT_FOUND: The CustomerRepricingConfig specified does not exist or is not associated with the given account. * INTERNAL: Any non-user error related to technical issues in the backend. In this case, contact Cloud Channel support. Return Value: If successful, the CustomerRepricingConfig resources. The data for each resource is displayed in the ascending order of: * Customer ID * RepricingConfig.EntitlementGranularity.entitlement * RepricingConfig.effective_invoice_month * CustomerRepricingConfig.update_time If unsuccessful, returns an error.
* [cloudchannelAccountsCustomersCustomerRepricingConfigsPatch](#cloudchannelaccountscustomerscustomerrepricingconfigspatch) - Updates a CustomerRepricingConfig. Call this method to set modifications for a specific customer's bill. This method overwrites the existing CustomerRepricingConfig. You can only update configs if the RepricingConfig.effective_invoice_month is a future month. To make changes to configs for the current month, use CreateCustomerRepricingConfig, taking note of its restrictions. You cannot update the RepricingConfig.effective_invoice_month. When updating a config in the future: * This config must already exist. Possible Error Codes: * PERMISSION_DENIED: If the account making the request and the account being queried are different. * INVALID_ARGUMENT: Missing or invalid required parameters in the request. Also displays if the updated config is for the current month or past months. * NOT_FOUND: The CustomerRepricingConfig specified does not exist or is not associated with the given account. * INTERNAL: Any non-user error related to technical issues in the backend. In this case, contact Cloud Channel support. Return Value: If successful, the updated CustomerRepricingConfig resource, otherwise returns an error.
* [cloudchannelAccountsCustomersEntitlementsActivate](#cloudchannelaccountscustomersentitlementsactivate) - Activates a previously suspended entitlement. Entitlements suspended for pending ToS acceptance can't be activated using this method. An entitlement activation is a long-running operation and it updates the state of the customer entitlement. Possible error codes: * PERMISSION_DENIED: The reseller account making the request is different from the reseller account in the API request. * INVALID_ARGUMENT: Required request parameters are missing or invalid. * NOT_FOUND: Entitlement resource not found. * SUSPENSION_NOT_RESELLER_INITIATED: Can only activate reseller-initiated suspensions and entitlements that have accepted the TOS. * NOT_SUSPENDED: Can only activate suspended entitlements not in an ACTIVE state. * INTERNAL: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support. * UNKNOWN: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support. Return value: The ID of a long-running operation. To get the results of the operation, call the GetOperation method of CloudChannelOperationsService. The Operation metadata will contain an instance of OperationMetadata.
* [cloudchannelAccountsCustomersEntitlementsChangeOffer](#cloudchannelaccountscustomersentitlementschangeoffer) - Updates the Offer for an existing customer entitlement. An entitlement update is a long-running operation and it updates the entitlement as a result of fulfillment. Possible error codes: * PERMISSION_DENIED: The customer doesn't belong to the reseller. * INVALID_ARGUMENT: Required request parameters are missing or invalid. * NOT_FOUND: Offer or Entitlement resource not found. * INTERNAL: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support. * UNKNOWN: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support. Return value: The ID of a long-running operation. To get the results of the operation, call the GetOperation method of CloudChannelOperationsService. The Operation metadata will contain an instance of OperationMetadata.
* [cloudchannelAccountsCustomersEntitlementsChangeParameters](#cloudchannelaccountscustomersentitlementschangeparameters) - Change parameters of the entitlement. An entitlement update is a long-running operation and it updates the entitlement as a result of fulfillment. Possible error codes: * PERMISSION_DENIED: The customer doesn't belong to the reseller. * INVALID_ARGUMENT: Required request parameters are missing or invalid. For example, the number of seats being changed is greater than the allowed number of max seats, or decreasing seats for a commitment based plan. * NOT_FOUND: Entitlement resource not found. * INTERNAL: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support. * UNKNOWN: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support. Return value: The ID of a long-running operation. To get the results of the operation, call the GetOperation method of CloudChannelOperationsService. The Operation metadata will contain an instance of OperationMetadata.
* [cloudchannelAccountsCustomersEntitlementsChangeRenewalSettings](#cloudchannelaccountscustomersentitlementschangerenewalsettings) - Updates the renewal settings for an existing customer entitlement. An entitlement update is a long-running operation and it updates the entitlement as a result of fulfillment. Possible error codes: * PERMISSION_DENIED: The customer doesn't belong to the reseller. * INVALID_ARGUMENT: Required request parameters are missing or invalid. * NOT_FOUND: Entitlement resource not found. * NOT_COMMITMENT_PLAN: Renewal Settings are only applicable for a commitment plan. Can't enable or disable renewals for non-commitment plans. * INTERNAL: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support. * UNKNOWN: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support. Return value: The ID of a long-running operation. To get the results of the operation, call the GetOperation method of CloudChannelOperationsService. The Operation metadata will contain an instance of OperationMetadata.
* [cloudchannelAccountsCustomersEntitlementsCreate](#cloudchannelaccountscustomersentitlementscreate) - Creates an entitlement for a customer. Possible error codes: * PERMISSION_DENIED: The customer doesn't belong to the reseller. * INVALID_ARGUMENT: * Required request parameters are missing or invalid. * There is already a customer entitlement for a SKU from the same product family. * INVALID_VALUE: Make sure the OfferId is valid. If it is, contact Google Channel support for further troubleshooting. * NOT_FOUND: The customer or offer resource was not found. * ALREADY_EXISTS: * The SKU was already purchased for the customer. * The customer's primary email already exists. Retry after changing the customer's primary contact email. * CONDITION_NOT_MET or FAILED_PRECONDITION: * The domain required for purchasing a SKU has not been verified. * A pre-requisite SKU required to purchase an Add-On SKU is missing. For example, Google Workspace Business Starter is required to purchase Vault or Drive. * (Developer accounts only) Reseller and resold domain must meet the following naming requirements: * Domain names must start with goog-test. * Domain names must include the reseller domain. * INTERNAL: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support. * UNKNOWN: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support. Return value: The ID of a long-running operation. To get the results of the operation, call the GetOperation method of CloudChannelOperationsService. The Operation metadata will contain an instance of OperationMetadata.
* [cloudchannelAccountsCustomersEntitlementsList](#cloudchannelaccountscustomersentitlementslist) - Lists Entitlements belonging to a customer. Possible error codes: * PERMISSION_DENIED: The customer doesn't belong to the reseller. * INVALID_ARGUMENT: Required request parameters are missing or invalid. Return value: A list of the customer's Entitlements.
* [cloudchannelAccountsCustomersEntitlementsListEntitlementChanges](#cloudchannelaccountscustomersentitlementslistentitlementchanges) - List entitlement history. Possible error codes: * PERMISSION_DENIED: The reseller account making the request and the provided reseller account are different. * INVALID_ARGUMENT: Missing or invalid required fields in the request. * NOT_FOUND: The parent resource doesn't exist. Usually the result of an invalid name parameter. * INTERNAL: Any non-user error related to a technical issue in the backend. In this case, contact CloudChannel support. * UNKNOWN: Any non-user error related to a technical issue in the backend. In this case, contact Cloud Channel support. Return value: List of EntitlementChanges.
* [cloudchannelAccountsCustomersEntitlementsLookupOffer](#cloudchannelaccountscustomersentitlementslookupoffer) - Returns the requested Offer resource. Possible error codes: * PERMISSION_DENIED: The entitlement doesn't belong to the reseller. * INVALID_ARGUMENT: Required request parameters are missing or invalid. * NOT_FOUND: Entitlement or offer was not found. Return value: The Offer resource.
* [cloudchannelAccountsCustomersEntitlementsStartPaidService](#cloudchannelaccountscustomersentitlementsstartpaidservice) - Starts paid service for a trial entitlement. Starts paid service for a trial entitlement immediately. This method is only applicable if a plan is set up for a trial entitlement but has some trial days remaining. Possible error codes: * PERMISSION_DENIED: The customer doesn't belong to the reseller. * INVALID_ARGUMENT: Required request parameters are missing or invalid. * NOT_FOUND: Entitlement resource not found. * FAILED_PRECONDITION/NOT_IN_TRIAL: This method only works for entitlement on trial plans. * INTERNAL: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support. * UNKNOWN: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support. Return value: The ID of a long-running operation. To get the results of the operation, call the GetOperation method of CloudChannelOperationsService. The Operation metadata will contain an instance of OperationMetadata.
* [cloudchannelAccountsCustomersEntitlementsSuspend](#cloudchannelaccountscustomersentitlementssuspend) - Suspends a previously fulfilled entitlement. An entitlement suspension is a long-running operation. Possible error codes: * PERMISSION_DENIED: The customer doesn't belong to the reseller. * INVALID_ARGUMENT: Required request parameters are missing or invalid. * NOT_FOUND: Entitlement resource not found. * NOT_ACTIVE: Entitlement is not active. * INTERNAL: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support. * UNKNOWN: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support. Return value: The ID of a long-running operation. To get the results of the operation, call the GetOperation method of CloudChannelOperationsService. The Operation metadata will contain an instance of OperationMetadata.
* [cloudchannelAccountsCustomersImport](#cloudchannelaccountscustomersimport) - Imports a Customer from the Cloud Identity associated with the provided Cloud Identity ID or domain before a TransferEntitlements call. If a linked Customer already exists and overwrite_if_exists is true, it will update that Customer's data. Possible error codes: * PERMISSION_DENIED: The reseller account making the request is different from the reseller account in the API request. * NOT_FOUND: Cloud Identity doesn't exist or was deleted. * INVALID_ARGUMENT: Required parameters are missing, or the auth_token is expired or invalid. * ALREADY_EXISTS: A customer already exists and has conflicting critical fields. Requires an overwrite. Return value: The Customer.
* [cloudchannelAccountsCustomersList](#cloudchannelaccountscustomerslist) - List Customers. Possible error codes: * PERMISSION_DENIED: The reseller account making the request is different from the reseller account in the API request. * INVALID_ARGUMENT: Required request parameters are missing or invalid. Return value: List of Customers, or an empty list if there are no customers.
* [cloudchannelAccountsCustomersListPurchasableOffers](#cloudchannelaccountscustomerslistpurchasableoffers) - Lists the following: * Offers that you can purchase for a customer. * Offers that you can change for an entitlement. Possible error codes: * PERMISSION_DENIED: The customer doesn't belong to the reseller * INVALID_ARGUMENT: Required request parameters are missing or invalid.
* [cloudchannelAccountsCustomersListPurchasableSkus](#cloudchannelaccountscustomerslistpurchasableskus) - Lists the following: * SKUs that you can purchase for a customer * SKUs that you can upgrade or downgrade for an entitlement. Possible error codes: * PERMISSION_DENIED: The customer doesn't belong to the reseller. * INVALID_ARGUMENT: Required request parameters are missing or invalid.
* [cloudchannelAccountsCustomersProvisionCloudIdentity](#cloudchannelaccountscustomersprovisioncloudidentity) - Creates a Cloud Identity for the given customer using the customer's information, or the information provided here. Possible error codes: * PERMISSION_DENIED: The customer doesn't belong to the reseller. * INVALID_ARGUMENT: Required request parameters are missing or invalid. * NOT_FOUND: The customer was not found. * ALREADY_EXISTS: The customer's primary email already exists. Retry after changing the customer's primary contact email. * INTERNAL: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support. * UNKNOWN: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support. Return value: The ID of a long-running operation. To get the results of the operation, call the GetOperation method of CloudChannelOperationsService. The Operation metadata contains an instance of OperationMetadata.
* [cloudchannelAccountsCustomersTransferEntitlements](#cloudchannelaccountscustomerstransferentitlements) - Transfers customer entitlements to new reseller. Possible error codes: * PERMISSION_DENIED: The customer doesn't belong to the reseller. * INVALID_ARGUMENT: Required request parameters are missing or invalid. * NOT_FOUND: The customer or offer resource was not found. * ALREADY_EXISTS: The SKU was already transferred for the customer. * CONDITION_NOT_MET or FAILED_PRECONDITION: * The SKU requires domain verification to transfer, but the domain is not verified. * An Add-On SKU (example, Vault or Drive) is missing the pre-requisite SKU (example, G Suite Basic). * (Developer accounts only) Reseller and resold domain must meet the following naming requirements: * Domain names must start with goog-test. * Domain names must include the reseller domain. * Specify all transferring entitlements. * INTERNAL: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support. * UNKNOWN: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support. Return value: The ID of a long-running operation. To get the results of the operation, call the GetOperation method of CloudChannelOperationsService. The Operation metadata will contain an instance of OperationMetadata.
* [cloudchannelAccountsCustomersTransferEntitlementsToGoogle](#cloudchannelaccountscustomerstransferentitlementstogoogle) - Transfers customer entitlements from their current reseller to Google. Possible error codes: * PERMISSION_DENIED: The customer doesn't belong to the reseller. * INVALID_ARGUMENT: Required request parameters are missing or invalid. * NOT_FOUND: The customer or offer resource was not found. * ALREADY_EXISTS: The SKU was already transferred for the customer. * CONDITION_NOT_MET or FAILED_PRECONDITION: * The SKU requires domain verification to transfer, but the domain is not verified. * An Add-On SKU (example, Vault or Drive) is missing the pre-requisite SKU (example, G Suite Basic). * (Developer accounts only) Reseller and resold domain must meet the following naming requirements: * Domain names must start with goog-test. * Domain names must include the reseller domain. * INTERNAL: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support. * UNKNOWN: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support. Return value: The ID of a long-running operation. To get the results of the operation, call the GetOperation method of CloudChannelOperationsService. The response will contain google.protobuf.Empty on success. The Operation metadata will contain an instance of OperationMetadata.
* [cloudchannelAccountsListSubscribers](#cloudchannelaccountslistsubscribers) - Lists service accounts with subscriber privileges on the Cloud Pub/Sub topic created for this Channel Services account. Possible error codes: * PERMISSION_DENIED: The reseller account making the request and the provided reseller account are different, or the impersonated user is not a super admin. * INVALID_ARGUMENT: Required request parameters are missing or invalid. * NOT_FOUND: The topic resource doesn't exist. * INTERNAL: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support. * UNKNOWN: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support. Return value: A list of service email addresses.
* [cloudchannelAccountsListTransferableOffers](#cloudchannelaccountslisttransferableoffers) - List TransferableOffers of a customer based on Cloud Identity ID or Customer Name in the request. Use this method when a reseller gets the entitlement information of an unowned customer. The reseller should provide the customer's Cloud Identity ID or Customer Name. Possible error codes: * PERMISSION_DENIED: * The customer doesn't belong to the reseller and has no auth token. * The customer provided incorrect reseller information when generating auth token. * The reseller account making the request is different from the reseller account in the query. * INVALID_ARGUMENT: Required request parameters are missing or invalid. Return value: List of TransferableOffer for the given customer and SKU.
* [cloudchannelAccountsListTransferableSkus](#cloudchannelaccountslisttransferableskus) - List TransferableSkus of a customer based on the Cloud Identity ID or Customer Name in the request. Use this method to list the entitlements information of an unowned customer. You should provide the customer's Cloud Identity ID or Customer Name. Possible error codes: * PERMISSION_DENIED: * The customer doesn't belong to the reseller and has no auth token. * The supplied auth token is invalid. * The reseller account making the request is different from the reseller account in the query. * INVALID_ARGUMENT: Required request parameters are missing or invalid. Return value: A list of the customer's TransferableSku.
* [cloudchannelAccountsOffersList](#cloudchannelaccountsofferslist) - Lists the Offers the reseller can sell. Possible error codes: * INVALID_ARGUMENT: Required request parameters are missing or invalid.
* [cloudchannelAccountsRegister](#cloudchannelaccountsregister) - Registers a service account with subscriber privileges on the Cloud Pub/Sub topic for this Channel Services account. After you create a subscriber, you get the events through SubscriberEvent Possible error codes: * PERMISSION_DENIED: The reseller account making the request and the provided reseller account are different, or the impersonated user is not a super admin. * INVALID_ARGUMENT: Required request parameters are missing or invalid. * INTERNAL: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support. * UNKNOWN: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support. Return value: The topic name with the registered service email address.
* [cloudchannelAccountsReportJobsFetchReportResults](#cloudchannelaccountsreportjobsfetchreportresults) - Retrieves data generated by CloudChannelReportsService.RunReportJob.
* [cloudchannelAccountsReportsList](#cloudchannelaccountsreportslist) - Lists the reports that RunReportJob can run. These reports include an ID, a description, and the list of columns that will be in the result.
* [cloudchannelAccountsReportsRun](#cloudchannelaccountsreportsrun) - Begins generation of data for a given report. The report identifier is a UID (for example, `613bf59q`). Possible error codes: * PERMISSION_DENIED: The user doesn't have access to this report. * INVALID_ARGUMENT: Required request parameters are missing or invalid. * NOT_FOUND: The report identifier was not found. * INTERNAL: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support. * UNKNOWN: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support. Return value: The ID of a long-running operation. To get the results of the operation, call the GetOperation method of CloudChannelOperationsService. The Operation metadata contains an instance of OperationMetadata. To get the results of report generation, call CloudChannelReportsService.FetchReportResults with the RunReportJobResponse.report_job.
* [cloudchannelAccountsUnregister](#cloudchannelaccountsunregister) - Unregisters a service account with subscriber privileges on the Cloud Pub/Sub topic created for this Channel Services account. If there are no service accounts left with subscriber privileges, this deletes the topic. You can call ListSubscribers to check for these accounts. Possible error codes: * PERMISSION_DENIED: The reseller account making the request and the provided reseller account are different, or the impersonated user is not a super admin. * INVALID_ARGUMENT: Required request parameters are missing or invalid. * NOT_FOUND: The topic resource doesn't exist. * INTERNAL: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support. * UNKNOWN: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support. Return value: The topic name that unregistered the service email address. Returns a success response if the service email address wasn't registered with the topic.

## cloudchannelAccountsChannelPartnerLinksChannelPartnerRepricingConfigsCreate

Creates a ChannelPartnerRepricingConfig. Call this method to set modifications for a specific ChannelPartner's bill. You can only create configs if the RepricingConfig.effective_invoice_month is a future month. If needed, you can create a config for the current month, with some restrictions. When creating a config for a future month, make sure there are no existing configs for that RepricingConfig.effective_invoice_month. The following restrictions are for creating configs in the current month. * This functionality is reserved for recovering from an erroneous config, and should not be used for regular business cases. * The new config will not modify exports used with other configs. Changes to the config may be immediate, but may take up to 24 hours. * There is a limit of ten configs for any ChannelPartner or RepricingConfig.effective_invoice_month. * The contained ChannelPartnerRepricingConfig.repricing_config vaule must be different from the value used in the current config for a ChannelPartner. Possible Error Codes: * PERMISSION_DENIED: If the account making the request and the account being queried are different. * INVALID_ARGUMENT: Missing or invalid required parameters in the request. Also displays if the updated config is for the current month or past months. * NOT_FOUND: The ChannelPartnerRepricingConfig specified does not exist or is not associated with the given account. * INTERNAL: Any non-user error related to technical issues in the backend. In this case, contact Cloud Channel support. Return Value: If successful, the updated ChannelPartnerRepricingConfig resource, otherwise returns an error.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudchannelAccountsChannelPartnerLinksChannelPartnerRepricingConfigsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudChannelV1ChannelPartnerRepricingConfigInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudChannelV1RepricingConfig;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudChannelV1RepricingAdjustment;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudChannelV1PercentageAdjustment;
use \OpenAPI\OpenAPI\Models\Shared\GoogleTypeDecimal;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudChannelV1ConditionalOverride;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudChannelV1ConditionalOverrideRebillingBasisEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudChannelV1RepricingCondition;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudChannelV1SkuGroupCondition;
use \OpenAPI\OpenAPI\Models\Shared\GoogleTypeDate;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudChannelV1RepricingConfigEntitlementGranularity;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudChannelV1RepricingConfigRebillingBasisEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudchannelAccountsChannelPartnerLinksChannelPartnerRepricingConfigsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudchannelAccountsChannelPartnerLinksChannelPartnerRepricingConfigsCreateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->googleCloudChannelV1ChannelPartnerRepricingConfigInput = new GoogleCloudChannelV1ChannelPartnerRepricingConfigInput();
    $request->googleCloudChannelV1ChannelPartnerRepricingConfigInput->repricingConfig = new GoogleCloudChannelV1RepricingConfig();
    $request->googleCloudChannelV1ChannelPartnerRepricingConfigInput->repricingConfig->adjustment = new GoogleCloudChannelV1RepricingAdjustment();
    $request->googleCloudChannelV1ChannelPartnerRepricingConfigInput->repricingConfig->adjustment->percentageAdjustment = new GoogleCloudChannelV1PercentageAdjustment();
    $request->googleCloudChannelV1ChannelPartnerRepricingConfigInput->repricingConfig->adjustment->percentageAdjustment->percentage = new GoogleTypeDecimal();
    $request->googleCloudChannelV1ChannelPartnerRepricingConfigInput->repricingConfig->adjustment->percentageAdjustment->percentage->value = 'recusandae';
    $request->googleCloudChannelV1ChannelPartnerRepricingConfigInput->repricingConfig->channelPartnerGranularity = [
        'ab' => 'quis',
        'veritatis' => 'deserunt',
        'perferendis' => 'ipsam',
        'repellendus' => 'sapiente',
    ];
    $request->googleCloudChannelV1ChannelPartnerRepricingConfigInput->repricingConfig->conditionalOverrides = [
        new GoogleCloudChannelV1ConditionalOverride(),
        new GoogleCloudChannelV1ConditionalOverride(),
        new GoogleCloudChannelV1ConditionalOverride(),
        new GoogleCloudChannelV1ConditionalOverride(),
    ];
    $request->googleCloudChannelV1ChannelPartnerRepricingConfigInput->repricingConfig->effectiveInvoiceMonth = new GoogleTypeDate();
    $request->googleCloudChannelV1ChannelPartnerRepricingConfigInput->repricingConfig->effectiveInvoiceMonth->day = 140350;
    $request->googleCloudChannelV1ChannelPartnerRepricingConfigInput->repricingConfig->effectiveInvoiceMonth->month = 870013;
    $request->googleCloudChannelV1ChannelPartnerRepricingConfigInput->repricingConfig->effectiveInvoiceMonth->year = 870088;
    $request->googleCloudChannelV1ChannelPartnerRepricingConfigInput->repricingConfig->entitlementGranularity = new GoogleCloudChannelV1RepricingConfigEntitlementGranularity();
    $request->googleCloudChannelV1ChannelPartnerRepricingConfigInput->repricingConfig->entitlementGranularity->entitlement = 'maiores';
    $request->googleCloudChannelV1ChannelPartnerRepricingConfigInput->repricingConfig->rebillingBasis = GoogleCloudChannelV1RepricingConfigRebillingBasisEnum::COST_AT_LIST;
    $request->accessToken = 'quod';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'esse';
    $request->fields = 'totam';
    $request->key = 'porro';
    $request->oauthToken = 'dolorum';
    $request->parent = 'dicta';
    $request->prettyPrint = false;
    $request->quotaUser = 'nam';
    $request->uploadType = 'officia';
    $request->uploadProtocol = 'occaecati';

    $requestSecurity = new CloudchannelAccountsChannelPartnerLinksChannelPartnerRepricingConfigsCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accounts->cloudchannelAccountsChannelPartnerLinksChannelPartnerRepricingConfigsCreate($request, $requestSecurity);

    if ($response->googleCloudChannelV1ChannelPartnerRepricingConfig !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cloudchannelAccountsChannelPartnerLinksChannelPartnerRepricingConfigsList

Lists information about how a Reseller modifies their bill before sending it to a ChannelPartner. Possible Error Codes: * PERMISSION_DENIED: If the account making the request and the account being queried are different. * NOT_FOUND: The ChannelPartnerRepricingConfig specified does not exist or is not associated with the given account. * INTERNAL: Any non-user error related to technical issues in the backend. In this case, contact Cloud Channel support. Return Value: If successful, the ChannelPartnerRepricingConfig resources. The data for each resource is displayed in the ascending order of: * Channel Partner ID * RepricingConfig.effective_invoice_month * ChannelPartnerRepricingConfig.update_time If unsuccessful, returns an error.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudchannelAccountsChannelPartnerLinksChannelPartnerRepricingConfigsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudchannelAccountsChannelPartnerLinksChannelPartnerRepricingConfigsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudchannelAccountsChannelPartnerLinksChannelPartnerRepricingConfigsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'deleniti';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'optio';
    $request->fields = 'totam';
    $request->filter = 'beatae';
    $request->key = 'commodi';
    $request->oauthToken = 'molestiae';
    $request->pageSize = 264555;
    $request->pageToken = 'qui';
    $request->parent = 'impedit';
    $request->prettyPrint = false;
    $request->quotaUser = 'cum';
    $request->uploadType = 'esse';
    $request->uploadProtocol = 'ipsum';

    $requestSecurity = new CloudchannelAccountsChannelPartnerLinksChannelPartnerRepricingConfigsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accounts->cloudchannelAccountsChannelPartnerLinksChannelPartnerRepricingConfigsList($request, $requestSecurity);

    if ($response->googleCloudChannelV1ListChannelPartnerRepricingConfigsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cloudchannelAccountsChannelPartnerLinksCreate

Initiates a channel partner link between a distributor and a reseller, or between resellers in an n-tier reseller channel. Invited partners need to follow the invite_link_uri provided in the response to accept. After accepting the invitation, a link is set up between the two parties. You must be a distributor to call this method. Possible error codes: * PERMISSION_DENIED: The reseller account making the request is different from the reseller account in the API request. * INVALID_ARGUMENT: Required request parameters are missing or invalid. * ALREADY_EXISTS: The ChannelPartnerLink sent in the request already exists. * NOT_FOUND: No Cloud Identity customer exists for provided domain. * INTERNAL: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support. * UNKNOWN: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support. Return value: The new ChannelPartnerLink resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudchannelAccountsChannelPartnerLinksCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudChannelV1ChannelPartnerLinkInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudChannelV1CloudIdentityInfoInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudChannelV1CloudIdentityInfoCustomerTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudChannelV1EduData;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudChannelV1EduDataInstituteSizeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudChannelV1EduDataInstituteTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudChannelV1ChannelPartnerLinkLinkStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudchannelAccountsChannelPartnerLinksCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudchannelAccountsChannelPartnerLinksCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleCloudChannelV1ChannelPartnerLinkInput = new GoogleCloudChannelV1ChannelPartnerLinkInput();
    $request->googleCloudChannelV1ChannelPartnerLinkInput->channelPartnerCloudIdentityInfo = new GoogleCloudChannelV1CloudIdentityInfoInput();
    $request->googleCloudChannelV1ChannelPartnerLinkInput->channelPartnerCloudIdentityInfo->alternateEmail = 'aspernatur';
    $request->googleCloudChannelV1ChannelPartnerLinkInput->channelPartnerCloudIdentityInfo->customerType = GoogleCloudChannelV1CloudIdentityInfoCustomerTypeEnum::CUSTOMER_TYPE_UNSPECIFIED;
    $request->googleCloudChannelV1ChannelPartnerLinkInput->channelPartnerCloudIdentityInfo->eduData = new GoogleCloudChannelV1EduData();
    $request->googleCloudChannelV1ChannelPartnerLinkInput->channelPartnerCloudIdentityInfo->eduData->instituteSize = GoogleCloudChannelV1EduDataInstituteSizeEnum::SIZE101500;
    $request->googleCloudChannelV1ChannelPartnerLinkInput->channelPartnerCloudIdentityInfo->eduData->instituteType = GoogleCloudChannelV1EduDataInstituteTypeEnum::K12;
    $request->googleCloudChannelV1ChannelPartnerLinkInput->channelPartnerCloudIdentityInfo->eduData->website = 'sed';
    $request->googleCloudChannelV1ChannelPartnerLinkInput->channelPartnerCloudIdentityInfo->languageCode = 'iste';
    $request->googleCloudChannelV1ChannelPartnerLinkInput->channelPartnerCloudIdentityInfo->phoneNumber = 'dolor';
    $request->googleCloudChannelV1ChannelPartnerLinkInput->linkState = GoogleCloudChannelV1ChannelPartnerLinkLinkStateEnum::REVOKED;
    $request->googleCloudChannelV1ChannelPartnerLinkInput->resellerCloudIdentityId = 'laboriosam';
    $request->accessToken = 'hic';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'fuga';
    $request->fields = 'in';
    $request->key = 'corporis';
    $request->oauthToken = 'iste';
    $request->parent = 'iure';
    $request->prettyPrint = false;
    $request->quotaUser = 'saepe';
    $request->uploadType = 'quidem';
    $request->uploadProtocol = 'architecto';

    $requestSecurity = new CloudchannelAccountsChannelPartnerLinksCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accounts->cloudchannelAccountsChannelPartnerLinksCreate($request, $requestSecurity);

    if ($response->googleCloudChannelV1ChannelPartnerLink !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cloudchannelAccountsChannelPartnerLinksList

List ChannelPartnerLinks belonging to a distributor. You must be a distributor to call this method. Possible error codes: * PERMISSION_DENIED: The reseller account making the request is different from the reseller account in the API request. * INVALID_ARGUMENT: Required request parameters are missing or invalid. Return value: The list of the distributor account's ChannelPartnerLink resources.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudchannelAccountsChannelPartnerLinksListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudchannelAccountsChannelPartnerLinksListViewEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudchannelAccountsChannelPartnerLinksListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudchannelAccountsChannelPartnerLinksListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'reiciendis';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'mollitia';
    $request->fields = 'laborum';
    $request->key = 'dolores';
    $request->oauthToken = 'dolorem';
    $request->pageSize = 358152;
    $request->pageToken = 'explicabo';
    $request->parent = 'nobis';
    $request->prettyPrint = false;
    $request->quotaUser = 'enim';
    $request->uploadType = 'omnis';
    $request->uploadProtocol = 'nemo';
    $request->view = CloudchannelAccountsChannelPartnerLinksListViewEnum::UNSPECIFIED;

    $requestSecurity = new CloudchannelAccountsChannelPartnerLinksListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accounts->cloudchannelAccountsChannelPartnerLinksList($request, $requestSecurity);

    if ($response->googleCloudChannelV1ListChannelPartnerLinksResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cloudchannelAccountsCheckCloudIdentityAccountsExist

Confirms the existence of Cloud Identity accounts based on the domain and if the Cloud Identity accounts are owned by the reseller. Possible error codes: * PERMISSION_DENIED: The reseller account making the request is different from the reseller account in the API request. * INVALID_ARGUMENT: Required request parameters are missing or invalid. * INVALID_VALUE: Invalid domain value in the request. Return value: A list of CloudIdentityCustomerAccount resources for the domain (may be empty) Note: in the v1alpha1 version of the API, a NOT_FOUND error returns if no CloudIdentityCustomerAccount resources match the domain.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudchannelAccountsCheckCloudIdentityAccountsExistRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudChannelV1CheckCloudIdentityAccountsExistRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudchannelAccountsCheckCloudIdentityAccountsExistSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudchannelAccountsCheckCloudIdentityAccountsExistRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleCloudChannelV1CheckCloudIdentityAccountsExistRequest = new GoogleCloudChannelV1CheckCloudIdentityAccountsExistRequest();
    $request->googleCloudChannelV1CheckCloudIdentityAccountsExistRequest->domain = 'accusantium';
    $request->accessToken = 'iure';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'doloribus';
    $request->fields = 'sapiente';
    $request->key = 'architecto';
    $request->oauthToken = 'mollitia';
    $request->parent = 'dolorem';
    $request->prettyPrint = false;
    $request->quotaUser = 'culpa';
    $request->uploadType = 'consequuntur';
    $request->uploadProtocol = 'repellat';

    $requestSecurity = new CloudchannelAccountsCheckCloudIdentityAccountsExistSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accounts->cloudchannelAccountsCheckCloudIdentityAccountsExist($request, $requestSecurity);

    if ($response->googleCloudChannelV1CheckCloudIdentityAccountsExistResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cloudchannelAccountsCustomersCreate

Creates a new Customer resource under the reseller or distributor account. Possible error codes: * PERMISSION_DENIED: The reseller account making the request is different from the reseller account in the API request. * INVALID_ARGUMENT: * Required request parameters are missing or invalid. * Domain field value doesn't match the primary email domain. Return value: The newly created Customer resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudchannelAccountsCustomersCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudChannelV1CustomerInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudChannelV1CloudIdentityInfoInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudChannelV1CloudIdentityInfoCustomerTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudChannelV1EduData;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudChannelV1EduDataInstituteSizeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudChannelV1EduDataInstituteTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleTypePostalAddress;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudChannelV1ContactInfoInput;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudchannelAccountsCustomersCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudchannelAccountsCustomersCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleCloudChannelV1CustomerInput = new GoogleCloudChannelV1CustomerInput();
    $request->googleCloudChannelV1CustomerInput->alternateEmail = 'occaecati';
    $request->googleCloudChannelV1CustomerInput->channelPartnerId = 'numquam';
    $request->googleCloudChannelV1CustomerInput->cloudIdentityInfo = new GoogleCloudChannelV1CloudIdentityInfoInput();
    $request->googleCloudChannelV1CustomerInput->cloudIdentityInfo->alternateEmail = 'commodi';
    $request->googleCloudChannelV1CustomerInput->cloudIdentityInfo->customerType = GoogleCloudChannelV1CloudIdentityInfoCustomerTypeEnum::DOMAIN;
    $request->googleCloudChannelV1CustomerInput->cloudIdentityInfo->eduData = new GoogleCloudChannelV1EduData();
    $request->googleCloudChannelV1CustomerInput->cloudIdentityInfo->eduData->instituteSize = GoogleCloudChannelV1EduDataInstituteSizeEnum::SIZE5011000;
    $request->googleCloudChannelV1CustomerInput->cloudIdentityInfo->eduData->instituteType = GoogleCloudChannelV1EduDataInstituteTypeEnum::INSTITUTE_TYPE_UNSPECIFIED;
    $request->googleCloudChannelV1CustomerInput->cloudIdentityInfo->eduData->website = 'error';
    $request->googleCloudChannelV1CustomerInput->cloudIdentityInfo->languageCode = 'quia';
    $request->googleCloudChannelV1CustomerInput->cloudIdentityInfo->phoneNumber = 'quis';
    $request->googleCloudChannelV1CustomerInput->correlationId = 'vitae';
    $request->googleCloudChannelV1CustomerInput->domain = 'laborum';
    $request->googleCloudChannelV1CustomerInput->languageCode = 'animi';
    $request->googleCloudChannelV1CustomerInput->orgDisplayName = 'enim';
    $request->googleCloudChannelV1CustomerInput->orgPostalAddress = new GoogleTypePostalAddress();
    $request->googleCloudChannelV1CustomerInput->orgPostalAddress->addressLines = [
        'quo',
    ];
    $request->googleCloudChannelV1CustomerInput->orgPostalAddress->administrativeArea = 'sequi';
    $request->googleCloudChannelV1CustomerInput->orgPostalAddress->languageCode = 'tenetur';
    $request->googleCloudChannelV1CustomerInput->orgPostalAddress->locality = 'ipsam';
    $request->googleCloudChannelV1CustomerInput->orgPostalAddress->organization = 'id';
    $request->googleCloudChannelV1CustomerInput->orgPostalAddress->postalCode = '00686-0998';
    $request->googleCloudChannelV1CustomerInput->orgPostalAddress->recipients = [
        'praesentium',
        'voluptatibus',
    ];
    $request->googleCloudChannelV1CustomerInput->orgPostalAddress->regionCode = 'ipsa';
    $request->googleCloudChannelV1CustomerInput->orgPostalAddress->revision = 604846;
    $request->googleCloudChannelV1CustomerInput->orgPostalAddress->sortingCode = 'voluptate';
    $request->googleCloudChannelV1CustomerInput->orgPostalAddress->sublocality = 'cum';
    $request->googleCloudChannelV1CustomerInput->primaryContactInfo = new GoogleCloudChannelV1ContactInfoInput();
    $request->googleCloudChannelV1CustomerInput->primaryContactInfo->email = 'Alison97@gmail.com';
    $request->googleCloudChannelV1CustomerInput->primaryContactInfo->firstName = 'Blanche';
    $request->googleCloudChannelV1CustomerInput->primaryContactInfo->lastName = 'Hessel';
    $request->googleCloudChannelV1CustomerInput->primaryContactInfo->phone = '516-484-9026 x558';
    $request->googleCloudChannelV1CustomerInput->primaryContactInfo->title = 'Mrs.';
    $request->accessToken = 'praesentium';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'voluptates';
    $request->fields = 'quasi';
    $request->key = 'repudiandae';
    $request->oauthToken = 'sint';
    $request->parent = 'veritatis';
    $request->prettyPrint = false;
    $request->quotaUser = 'itaque';
    $request->uploadType = 'incidunt';
    $request->uploadProtocol = 'enim';

    $requestSecurity = new CloudchannelAccountsCustomersCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accounts->cloudchannelAccountsCustomersCreate($request, $requestSecurity);

    if ($response->googleCloudChannelV1Customer !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cloudchannelAccountsCustomersCustomerRepricingConfigsCreate

Creates a CustomerRepricingConfig. Call this method to set modifications for a specific customer's bill. You can only create configs if the RepricingConfig.effective_invoice_month is a future month. If needed, you can create a config for the current month, with some restrictions. When creating a config for a future month, make sure there are no existing configs for that RepricingConfig.effective_invoice_month. The following restrictions are for creating configs in the current month. * This functionality is reserved for recovering from an erroneous config, and should not be used for regular business cases. * The new config will not modify exports used with other configs. Changes to the config may be immediate, but may take up to 24 hours. * There is a limit of ten configs for any RepricingConfig.EntitlementGranularity.entitlement or RepricingConfig.effective_invoice_month. * The contained CustomerRepricingConfig.repricing_config vaule must be different from the value used in the current config for a RepricingConfig.EntitlementGranularity.entitlement. Possible Error Codes: * PERMISSION_DENIED: If the account making the request and the account being queried are different. * INVALID_ARGUMENT: Missing or invalid required parameters in the request. Also displays if the updated config is for the current month or past months. * NOT_FOUND: The CustomerRepricingConfig specified does not exist or is not associated with the given account. * INTERNAL: Any non-user error related to technical issues in the backend. In this case, contact Cloud Channel support. Return Value: If successful, the updated CustomerRepricingConfig resource, otherwise returns an error.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudchannelAccountsCustomersCustomerRepricingConfigsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudChannelV1CustomerRepricingConfigInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudChannelV1RepricingConfig;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudChannelV1RepricingAdjustment;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudChannelV1PercentageAdjustment;
use \OpenAPI\OpenAPI\Models\Shared\GoogleTypeDecimal;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudChannelV1ConditionalOverride;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudChannelV1ConditionalOverrideRebillingBasisEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudChannelV1RepricingCondition;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudChannelV1SkuGroupCondition;
use \OpenAPI\OpenAPI\Models\Shared\GoogleTypeDate;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudChannelV1RepricingConfigEntitlementGranularity;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudChannelV1RepricingConfigRebillingBasisEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudchannelAccountsCustomersCustomerRepricingConfigsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudchannelAccountsCustomersCustomerRepricingConfigsCreateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->googleCloudChannelV1CustomerRepricingConfigInput = new GoogleCloudChannelV1CustomerRepricingConfigInput();
    $request->googleCloudChannelV1CustomerRepricingConfigInput->repricingConfig = new GoogleCloudChannelV1RepricingConfig();
    $request->googleCloudChannelV1CustomerRepricingConfigInput->repricingConfig->adjustment = new GoogleCloudChannelV1RepricingAdjustment();
    $request->googleCloudChannelV1CustomerRepricingConfigInput->repricingConfig->adjustment->percentageAdjustment = new GoogleCloudChannelV1PercentageAdjustment();
    $request->googleCloudChannelV1CustomerRepricingConfigInput->repricingConfig->adjustment->percentageAdjustment->percentage = new GoogleTypeDecimal();
    $request->googleCloudChannelV1CustomerRepricingConfigInput->repricingConfig->adjustment->percentageAdjustment->percentage->value = 'est';
    $request->googleCloudChannelV1CustomerRepricingConfigInput->repricingConfig->channelPartnerGranularity = [
        'explicabo' => 'deserunt',
        'distinctio' => 'quibusdam',
        'labore' => 'modi',
        'qui' => 'aliquid',
    ];
    $request->googleCloudChannelV1CustomerRepricingConfigInput->repricingConfig->conditionalOverrides = [
        new GoogleCloudChannelV1ConditionalOverride(),
        new GoogleCloudChannelV1ConditionalOverride(),
        new GoogleCloudChannelV1ConditionalOverride(),
    ];
    $request->googleCloudChannelV1CustomerRepricingConfigInput->repricingConfig->effectiveInvoiceMonth = new GoogleTypeDate();
    $request->googleCloudChannelV1CustomerRepricingConfigInput->repricingConfig->effectiveInvoiceMonth->day = 552822;
    $request->googleCloudChannelV1CustomerRepricingConfigInput->repricingConfig->effectiveInvoiceMonth->month = 20107;
    $request->googleCloudChannelV1CustomerRepricingConfigInput->repricingConfig->effectiveInvoiceMonth->year = 164940;
    $request->googleCloudChannelV1CustomerRepricingConfigInput->repricingConfig->entitlementGranularity = new GoogleCloudChannelV1RepricingConfigEntitlementGranularity();
    $request->googleCloudChannelV1CustomerRepricingConfigInput->repricingConfig->entitlementGranularity->entitlement = 'assumenda';
    $request->googleCloudChannelV1CustomerRepricingConfigInput->repricingConfig->rebillingBasis = GoogleCloudChannelV1RepricingConfigRebillingBasisEnum::COST_AT_LIST;
    $request->accessToken = 'alias';
    $request->alt = AltEnum::JSON;
    $request->callback = 'dolorum';
    $request->fields = 'excepturi';
    $request->key = 'tempora';
    $request->oauthToken = 'facilis';
    $request->parent = 'tempore';
    $request->prettyPrint = false;
    $request->quotaUser = 'labore';
    $request->uploadType = 'delectus';
    $request->uploadProtocol = 'eum';

    $requestSecurity = new CloudchannelAccountsCustomersCustomerRepricingConfigsCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accounts->cloudchannelAccountsCustomersCustomerRepricingConfigsCreate($request, $requestSecurity);

    if ($response->googleCloudChannelV1CustomerRepricingConfig !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cloudchannelAccountsCustomersCustomerRepricingConfigsList

Lists information about how a Reseller modifies their bill before sending it to a Customer. Possible Error Codes: * PERMISSION_DENIED: If the account making the request and the account being queried are different. * NOT_FOUND: The CustomerRepricingConfig specified does not exist or is not associated with the given account. * INTERNAL: Any non-user error related to technical issues in the backend. In this case, contact Cloud Channel support. Return Value: If successful, the CustomerRepricingConfig resources. The data for each resource is displayed in the ascending order of: * Customer ID * RepricingConfig.EntitlementGranularity.entitlement * RepricingConfig.effective_invoice_month * CustomerRepricingConfig.update_time If unsuccessful, returns an error.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudchannelAccountsCustomersCustomerRepricingConfigsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudchannelAccountsCustomersCustomerRepricingConfigsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudchannelAccountsCustomersCustomerRepricingConfigsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'eligendi';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'aliquid';
    $request->fields = 'provident';
    $request->filter = 'necessitatibus';
    $request->key = 'sint';
    $request->oauthToken = 'officia';
    $request->pageSize = 223081;
    $request->pageToken = 'debitis';
    $request->parent = 'a';
    $request->prettyPrint = false;
    $request->quotaUser = 'dolorum';
    $request->uploadType = 'in';
    $request->uploadProtocol = 'in';

    $requestSecurity = new CloudchannelAccountsCustomersCustomerRepricingConfigsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accounts->cloudchannelAccountsCustomersCustomerRepricingConfigsList($request, $requestSecurity);

    if ($response->googleCloudChannelV1ListCustomerRepricingConfigsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cloudchannelAccountsCustomersCustomerRepricingConfigsPatch

Updates a CustomerRepricingConfig. Call this method to set modifications for a specific customer's bill. This method overwrites the existing CustomerRepricingConfig. You can only update configs if the RepricingConfig.effective_invoice_month is a future month. To make changes to configs for the current month, use CreateCustomerRepricingConfig, taking note of its restrictions. You cannot update the RepricingConfig.effective_invoice_month. When updating a config in the future: * This config must already exist. Possible Error Codes: * PERMISSION_DENIED: If the account making the request and the account being queried are different. * INVALID_ARGUMENT: Missing or invalid required parameters in the request. Also displays if the updated config is for the current month or past months. * NOT_FOUND: The CustomerRepricingConfig specified does not exist or is not associated with the given account. * INTERNAL: Any non-user error related to technical issues in the backend. In this case, contact Cloud Channel support. Return Value: If successful, the updated CustomerRepricingConfig resource, otherwise returns an error.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudchannelAccountsCustomersCustomerRepricingConfigsPatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudChannelV1CustomerRepricingConfigInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudChannelV1RepricingConfig;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudChannelV1RepricingAdjustment;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudChannelV1PercentageAdjustment;
use \OpenAPI\OpenAPI\Models\Shared\GoogleTypeDecimal;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudChannelV1ConditionalOverride;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudChannelV1ConditionalOverrideRebillingBasisEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudChannelV1RepricingCondition;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudChannelV1SkuGroupCondition;
use \OpenAPI\OpenAPI\Models\Shared\GoogleTypeDate;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudChannelV1RepricingConfigEntitlementGranularity;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudChannelV1RepricingConfigRebillingBasisEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudchannelAccountsCustomersCustomerRepricingConfigsPatchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudchannelAccountsCustomersCustomerRepricingConfigsPatchRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleCloudChannelV1CustomerRepricingConfigInput = new GoogleCloudChannelV1CustomerRepricingConfigInput();
    $request->googleCloudChannelV1CustomerRepricingConfigInput->repricingConfig = new GoogleCloudChannelV1RepricingConfig();
    $request->googleCloudChannelV1CustomerRepricingConfigInput->repricingConfig->adjustment = new GoogleCloudChannelV1RepricingAdjustment();
    $request->googleCloudChannelV1CustomerRepricingConfigInput->repricingConfig->adjustment->percentageAdjustment = new GoogleCloudChannelV1PercentageAdjustment();
    $request->googleCloudChannelV1CustomerRepricingConfigInput->repricingConfig->adjustment->percentageAdjustment->percentage = new GoogleTypeDecimal();
    $request->googleCloudChannelV1CustomerRepricingConfigInput->repricingConfig->adjustment->percentageAdjustment->percentage->value = 'maiores';
    $request->googleCloudChannelV1CustomerRepricingConfigInput->repricingConfig->channelPartnerGranularity = [
        'dicta' => 'magnam',
        'cumque' => 'facere',
        'ea' => 'aliquid',
    ];
    $request->googleCloudChannelV1CustomerRepricingConfigInput->repricingConfig->conditionalOverrides = [
        new GoogleCloudChannelV1ConditionalOverride(),
        new GoogleCloudChannelV1ConditionalOverride(),
        new GoogleCloudChannelV1ConditionalOverride(),
    ];
    $request->googleCloudChannelV1CustomerRepricingConfigInput->repricingConfig->effectiveInvoiceMonth = new GoogleTypeDate();
    $request->googleCloudChannelV1CustomerRepricingConfigInput->repricingConfig->effectiveInvoiceMonth->day = 881104;
    $request->googleCloudChannelV1CustomerRepricingConfigInput->repricingConfig->effectiveInvoiceMonth->month = 249796;
    $request->googleCloudChannelV1CustomerRepricingConfigInput->repricingConfig->effectiveInvoiceMonth->year = 581273;
    $request->googleCloudChannelV1CustomerRepricingConfigInput->repricingConfig->entitlementGranularity = new GoogleCloudChannelV1RepricingConfigEntitlementGranularity();
    $request->googleCloudChannelV1CustomerRepricingConfigInput->repricingConfig->entitlementGranularity->entitlement = 'enim';
    $request->googleCloudChannelV1CustomerRepricingConfigInput->repricingConfig->rebillingBasis = GoogleCloudChannelV1RepricingConfigRebillingBasisEnum::DIRECT_CUSTOMER_COST;
    $request->accessToken = 'delectus';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'provident';
    $request->fields = 'nam';
    $request->key = 'id';
    $request->name = 'Jaime Will';
    $request->oauthToken = 'nisi';
    $request->prettyPrint = false;
    $request->quotaUser = 'vel';
    $request->updateMask = 'natus';
    $request->uploadType = 'omnis';
    $request->uploadProtocol = 'molestiae';

    $requestSecurity = new CloudchannelAccountsCustomersCustomerRepricingConfigsPatchSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accounts->cloudchannelAccountsCustomersCustomerRepricingConfigsPatch($request, $requestSecurity);

    if ($response->googleCloudChannelV1CustomerRepricingConfig !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cloudchannelAccountsCustomersEntitlementsActivate

Activates a previously suspended entitlement. Entitlements suspended for pending ToS acceptance can't be activated using this method. An entitlement activation is a long-running operation and it updates the state of the customer entitlement. Possible error codes: * PERMISSION_DENIED: The reseller account making the request is different from the reseller account in the API request. * INVALID_ARGUMENT: Required request parameters are missing or invalid. * NOT_FOUND: Entitlement resource not found. * SUSPENSION_NOT_RESELLER_INITIATED: Can only activate reseller-initiated suspensions and entitlements that have accepted the TOS. * NOT_SUSPENDED: Can only activate suspended entitlements not in an ACTIVE state. * INTERNAL: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support. * UNKNOWN: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support. Return value: The ID of a long-running operation. To get the results of the operation, call the GetOperation method of CloudChannelOperationsService. The Operation metadata will contain an instance of OperationMetadata.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudchannelAccountsCustomersEntitlementsActivateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudChannelV1ActivateEntitlementRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudchannelAccountsCustomersEntitlementsActivateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudchannelAccountsCustomersEntitlementsActivateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->googleCloudChannelV1ActivateEntitlementRequest = new GoogleCloudChannelV1ActivateEntitlementRequest();
    $request->googleCloudChannelV1ActivateEntitlementRequest->requestId = 'nihil';
    $request->accessToken = 'magnam';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'id';
    $request->fields = 'labore';
    $request->key = 'labore';
    $request->name = 'Ada Rohan';
    $request->oauthToken = 'aspernatur';
    $request->prettyPrint = false;
    $request->quotaUser = 'architecto';
    $request->uploadType = 'magnam';
    $request->uploadProtocol = 'et';

    $requestSecurity = new CloudchannelAccountsCustomersEntitlementsActivateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accounts->cloudchannelAccountsCustomersEntitlementsActivate($request, $requestSecurity);

    if ($response->googleLongrunningOperation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cloudchannelAccountsCustomersEntitlementsChangeOffer

Updates the Offer for an existing customer entitlement. An entitlement update is a long-running operation and it updates the entitlement as a result of fulfillment. Possible error codes: * PERMISSION_DENIED: The customer doesn't belong to the reseller. * INVALID_ARGUMENT: Required request parameters are missing or invalid. * NOT_FOUND: Offer or Entitlement resource not found. * INTERNAL: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support. * UNKNOWN: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support. Return value: The ID of a long-running operation. To get the results of the operation, call the GetOperation method of CloudChannelOperationsService. The Operation metadata will contain an instance of OperationMetadata.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudchannelAccountsCustomersEntitlementsChangeOfferRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudChannelV1ChangeOfferRequestInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudChannelV1ParameterInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudChannelV1Value;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudchannelAccountsCustomersEntitlementsChangeOfferSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudchannelAccountsCustomersEntitlementsChangeOfferRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleCloudChannelV1ChangeOfferRequestInput = new GoogleCloudChannelV1ChangeOfferRequestInput();
    $request->googleCloudChannelV1ChangeOfferRequestInput->offer = 'ullam';
    $request->googleCloudChannelV1ChangeOfferRequestInput->parameters = [
        new GoogleCloudChannelV1ParameterInput(),
        new GoogleCloudChannelV1ParameterInput(),
        new GoogleCloudChannelV1ParameterInput(),
    ];
    $request->googleCloudChannelV1ChangeOfferRequestInput->purchaseOrderId = 'quos';
    $request->googleCloudChannelV1ChangeOfferRequestInput->requestId = 'sint';
    $request->accessToken = 'accusantium';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'reiciendis';
    $request->fields = 'mollitia';
    $request->key = 'ad';
    $request->name = 'Carmen Treutel';
    $request->oauthToken = 'quasi';
    $request->prettyPrint = false;
    $request->quotaUser = 'iure';
    $request->uploadType = 'doloribus';
    $request->uploadProtocol = 'debitis';

    $requestSecurity = new CloudchannelAccountsCustomersEntitlementsChangeOfferSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accounts->cloudchannelAccountsCustomersEntitlementsChangeOffer($request, $requestSecurity);

    if ($response->googleLongrunningOperation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cloudchannelAccountsCustomersEntitlementsChangeParameters

Change parameters of the entitlement. An entitlement update is a long-running operation and it updates the entitlement as a result of fulfillment. Possible error codes: * PERMISSION_DENIED: The customer doesn't belong to the reseller. * INVALID_ARGUMENT: Required request parameters are missing or invalid. For example, the number of seats being changed is greater than the allowed number of max seats, or decreasing seats for a commitment based plan. * NOT_FOUND: Entitlement resource not found. * INTERNAL: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support. * UNKNOWN: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support. Return value: The ID of a long-running operation. To get the results of the operation, call the GetOperation method of CloudChannelOperationsService. The Operation metadata will contain an instance of OperationMetadata.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudchannelAccountsCustomersEntitlementsChangeParametersRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudChannelV1ChangeParametersRequestInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudChannelV1ParameterInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudChannelV1Value;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudchannelAccountsCustomersEntitlementsChangeParametersSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudchannelAccountsCustomersEntitlementsChangeParametersRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->googleCloudChannelV1ChangeParametersRequestInput = new GoogleCloudChannelV1ChangeParametersRequestInput();
    $request->googleCloudChannelV1ChangeParametersRequestInput->parameters = [
        new GoogleCloudChannelV1ParameterInput(),
        new GoogleCloudChannelV1ParameterInput(),
        new GoogleCloudChannelV1ParameterInput(),
        new GoogleCloudChannelV1ParameterInput(),
    ];
    $request->googleCloudChannelV1ChangeParametersRequestInput->purchaseOrderId = 'deleniti';
    $request->googleCloudChannelV1ChangeParametersRequestInput->requestId = 'facilis';
    $request->accessToken = 'in';
    $request->alt = AltEnum::JSON;
    $request->callback = 'architecto';
    $request->fields = 'repudiandae';
    $request->key = 'ullam';
    $request->name = 'Jessie Zulauf';
    $request->oauthToken = 'saepe';
    $request->prettyPrint = false;
    $request->quotaUser = 'pariatur';
    $request->uploadType = 'accusantium';
    $request->uploadProtocol = 'consequuntur';

    $requestSecurity = new CloudchannelAccountsCustomersEntitlementsChangeParametersSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accounts->cloudchannelAccountsCustomersEntitlementsChangeParameters($request, $requestSecurity);

    if ($response->googleLongrunningOperation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cloudchannelAccountsCustomersEntitlementsChangeRenewalSettings

Updates the renewal settings for an existing customer entitlement. An entitlement update is a long-running operation and it updates the entitlement as a result of fulfillment. Possible error codes: * PERMISSION_DENIED: The customer doesn't belong to the reseller. * INVALID_ARGUMENT: Required request parameters are missing or invalid. * NOT_FOUND: Entitlement resource not found. * NOT_COMMITMENT_PLAN: Renewal Settings are only applicable for a commitment plan. Can't enable or disable renewals for non-commitment plans. * INTERNAL: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support. * UNKNOWN: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support. Return value: The ID of a long-running operation. To get the results of the operation, call the GetOperation method of CloudChannelOperationsService. The Operation metadata will contain an instance of OperationMetadata.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudchannelAccountsCustomersEntitlementsChangeRenewalSettingsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudChannelV1ChangeRenewalSettingsRequest;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudChannelV1RenewalSettings;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudChannelV1Period;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudChannelV1PeriodPeriodTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudChannelV1RenewalSettingsPaymentPlanEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudchannelAccountsCustomersEntitlementsChangeRenewalSettingsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudchannelAccountsCustomersEntitlementsChangeRenewalSettingsRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleCloudChannelV1ChangeRenewalSettingsRequest = new GoogleCloudChannelV1ChangeRenewalSettingsRequest();
    $request->googleCloudChannelV1ChangeRenewalSettingsRequest->renewalSettings = new GoogleCloudChannelV1RenewalSettings();
    $request->googleCloudChannelV1ChangeRenewalSettingsRequest->renewalSettings->enableRenewal = false;
    $request->googleCloudChannelV1ChangeRenewalSettingsRequest->renewalSettings->paymentCycle = new GoogleCloudChannelV1Period();
    $request->googleCloudChannelV1ChangeRenewalSettingsRequest->renewalSettings->paymentCycle->duration = 615560;
    $request->googleCloudChannelV1ChangeRenewalSettingsRequest->renewalSettings->paymentCycle->periodType = GoogleCloudChannelV1PeriodPeriodTypeEnum::PERIOD_TYPE_UNSPECIFIED;
    $request->googleCloudChannelV1ChangeRenewalSettingsRequest->renewalSettings->paymentPlan = GoogleCloudChannelV1RenewalSettingsPaymentPlanEnum::PAYMENT_PLAN_UNSPECIFIED;
    $request->googleCloudChannelV1ChangeRenewalSettingsRequest->renewalSettings->resizeUnitCount = false;
    $request->googleCloudChannelV1ChangeRenewalSettingsRequest->requestId = 'quo';
    $request->accessToken = 'illum';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'maxime';
    $request->fields = 'ea';
    $request->key = 'excepturi';
    $request->name = 'Dr. Rosemary Bartoletti';
    $request->oauthToken = 'ipsam';
    $request->prettyPrint = false;
    $request->quotaUser = 'voluptate';
    $request->uploadType = 'autem';
    $request->uploadProtocol = 'nam';

    $requestSecurity = new CloudchannelAccountsCustomersEntitlementsChangeRenewalSettingsSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accounts->cloudchannelAccountsCustomersEntitlementsChangeRenewalSettings($request, $requestSecurity);

    if ($response->googleLongrunningOperation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cloudchannelAccountsCustomersEntitlementsCreate

Creates an entitlement for a customer. Possible error codes: * PERMISSION_DENIED: The customer doesn't belong to the reseller. * INVALID_ARGUMENT: * Required request parameters are missing or invalid. * There is already a customer entitlement for a SKU from the same product family. * INVALID_VALUE: Make sure the OfferId is valid. If it is, contact Google Channel support for further troubleshooting. * NOT_FOUND: The customer or offer resource was not found. * ALREADY_EXISTS: * The SKU was already purchased for the customer. * The customer's primary email already exists. Retry after changing the customer's primary contact email. * CONDITION_NOT_MET or FAILED_PRECONDITION: * The domain required for purchasing a SKU has not been verified. * A pre-requisite SKU required to purchase an Add-On SKU is missing. For example, Google Workspace Business Starter is required to purchase Vault or Drive. * (Developer accounts only) Reseller and resold domain must meet the following naming requirements: * Domain names must start with goog-test. * Domain names must include the reseller domain. * INTERNAL: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support. * UNKNOWN: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support. Return value: The ID of a long-running operation. To get the results of the operation, call the GetOperation method of CloudChannelOperationsService. The Operation metadata will contain an instance of OperationMetadata.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudchannelAccountsCustomersEntitlementsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudChannelV1CreateEntitlementRequestInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudChannelV1EntitlementInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudChannelV1AssociationInfo;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudChannelV1CommitmentSettingsInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudChannelV1RenewalSettings;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudChannelV1Period;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudChannelV1PeriodPeriodTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudChannelV1RenewalSettingsPaymentPlanEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudChannelV1ParameterInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudChannelV1Value;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudChannelV1TrialSettings;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudchannelAccountsCustomersEntitlementsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudchannelAccountsCustomersEntitlementsCreateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->googleCloudChannelV1CreateEntitlementRequestInput = new GoogleCloudChannelV1CreateEntitlementRequestInput();
    $request->googleCloudChannelV1CreateEntitlementRequestInput->entitlement = new GoogleCloudChannelV1EntitlementInput();
    $request->googleCloudChannelV1CreateEntitlementRequestInput->entitlement->associationInfo = new GoogleCloudChannelV1AssociationInfo();
    $request->googleCloudChannelV1CreateEntitlementRequestInput->entitlement->associationInfo->baseEntitlement = 'pariatur';
    $request->googleCloudChannelV1CreateEntitlementRequestInput->entitlement->billingAccount = 'nemo';
    $request->googleCloudChannelV1CreateEntitlementRequestInput->entitlement->commitmentSettings = new GoogleCloudChannelV1CommitmentSettingsInput();
    $request->googleCloudChannelV1CreateEntitlementRequestInput->entitlement->commitmentSettings->renewalSettings = new GoogleCloudChannelV1RenewalSettings();
    $request->googleCloudChannelV1CreateEntitlementRequestInput->entitlement->commitmentSettings->renewalSettings->enableRenewal = false;
    $request->googleCloudChannelV1CreateEntitlementRequestInput->entitlement->commitmentSettings->renewalSettings->paymentCycle = new GoogleCloudChannelV1Period();
    $request->googleCloudChannelV1CreateEntitlementRequestInput->entitlement->commitmentSettings->renewalSettings->paymentCycle->duration = 975522;
    $request->googleCloudChannelV1CreateEntitlementRequestInput->entitlement->commitmentSettings->renewalSettings->paymentCycle->periodType = GoogleCloudChannelV1PeriodPeriodTypeEnum::PERIOD_TYPE_UNSPECIFIED;
    $request->googleCloudChannelV1CreateEntitlementRequestInput->entitlement->commitmentSettings->renewalSettings->paymentPlan = GoogleCloudChannelV1RenewalSettingsPaymentPlanEnum::OFFLINE;
    $request->googleCloudChannelV1CreateEntitlementRequestInput->entitlement->commitmentSettings->renewalSettings->resizeUnitCount = false;
    $request->googleCloudChannelV1CreateEntitlementRequestInput->entitlement->offer = 'amet';
    $request->googleCloudChannelV1CreateEntitlementRequestInput->entitlement->parameters = [
        new GoogleCloudChannelV1ParameterInput(),
    ];
    $request->googleCloudChannelV1CreateEntitlementRequestInput->entitlement->purchaseOrderId = 'cumque';
    $request->googleCloudChannelV1CreateEntitlementRequestInput->entitlement->trialSettings = new GoogleCloudChannelV1TrialSettings();
    $request->googleCloudChannelV1CreateEntitlementRequestInput->entitlement->trialSettings->endTime = 'corporis';
    $request->googleCloudChannelV1CreateEntitlementRequestInput->entitlement->trialSettings->trial = false;
    $request->googleCloudChannelV1CreateEntitlementRequestInput->requestId = 'hic';
    $request->accessToken = 'libero';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'dolores';
    $request->fields = 'quis';
    $request->key = 'totam';
    $request->oauthToken = 'dignissimos';
    $request->parent = 'eaque';
    $request->prettyPrint = false;
    $request->quotaUser = 'quis';
    $request->uploadType = 'nesciunt';
    $request->uploadProtocol = 'eos';

    $requestSecurity = new CloudchannelAccountsCustomersEntitlementsCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accounts->cloudchannelAccountsCustomersEntitlementsCreate($request, $requestSecurity);

    if ($response->googleLongrunningOperation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cloudchannelAccountsCustomersEntitlementsList

Lists Entitlements belonging to a customer. Possible error codes: * PERMISSION_DENIED: The customer doesn't belong to the reseller. * INVALID_ARGUMENT: Required request parameters are missing or invalid. Return value: A list of the customer's Entitlements.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudchannelAccountsCustomersEntitlementsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudchannelAccountsCustomersEntitlementsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudchannelAccountsCustomersEntitlementsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'dolores';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'quam';
    $request->fields = 'dolor';
    $request->key = 'vero';
    $request->oauthToken = 'nostrum';
    $request->pageSize = 944120;
    $request->pageToken = 'recusandae';
    $request->parent = 'omnis';
    $request->prettyPrint = false;
    $request->quotaUser = 'facilis';
    $request->uploadType = 'perspiciatis';
    $request->uploadProtocol = 'voluptatem';

    $requestSecurity = new CloudchannelAccountsCustomersEntitlementsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accounts->cloudchannelAccountsCustomersEntitlementsList($request, $requestSecurity);

    if ($response->googleCloudChannelV1ListEntitlementsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cloudchannelAccountsCustomersEntitlementsListEntitlementChanges

List entitlement history. Possible error codes: * PERMISSION_DENIED: The reseller account making the request and the provided reseller account are different. * INVALID_ARGUMENT: Missing or invalid required fields in the request. * NOT_FOUND: The parent resource doesn't exist. Usually the result of an invalid name parameter. * INTERNAL: Any non-user error related to a technical issue in the backend. In this case, contact CloudChannel support. * UNKNOWN: Any non-user error related to a technical issue in the backend. In this case, contact Cloud Channel support. Return value: List of EntitlementChanges.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudchannelAccountsCustomersEntitlementsListEntitlementChangesRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudchannelAccountsCustomersEntitlementsListEntitlementChangesSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudchannelAccountsCustomersEntitlementsListEntitlementChangesRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'consequuntur';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'error';
    $request->fields = 'eaque';
    $request->filter = 'occaecati';
    $request->key = 'rerum';
    $request->oauthToken = 'adipisci';
    $request->pageSize = 992397;
    $request->pageToken = 'earum';
    $request->parent = 'modi';
    $request->prettyPrint = false;
    $request->quotaUser = 'iste';
    $request->uploadType = 'dolorum';
    $request->uploadProtocol = 'deleniti';

    $requestSecurity = new CloudchannelAccountsCustomersEntitlementsListEntitlementChangesSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accounts->cloudchannelAccountsCustomersEntitlementsListEntitlementChanges($request, $requestSecurity);

    if ($response->googleCloudChannelV1ListEntitlementChangesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cloudchannelAccountsCustomersEntitlementsLookupOffer

Returns the requested Offer resource. Possible error codes: * PERMISSION_DENIED: The entitlement doesn't belong to the reseller. * INVALID_ARGUMENT: Required request parameters are missing or invalid. * NOT_FOUND: Entitlement or offer was not found. Return value: The Offer resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudchannelAccountsCustomersEntitlementsLookupOfferRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudchannelAccountsCustomersEntitlementsLookupOfferSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudchannelAccountsCustomersEntitlementsLookupOfferRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'provident';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'libero';
    $request->entitlement = 'delectus';
    $request->fields = 'quaerat';
    $request->key = 'quos';
    $request->oauthToken = 'aliquid';
    $request->prettyPrint = false;
    $request->quotaUser = 'dolorem';
    $request->uploadType = 'dolorem';
    $request->uploadProtocol = 'dolor';

    $requestSecurity = new CloudchannelAccountsCustomersEntitlementsLookupOfferSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accounts->cloudchannelAccountsCustomersEntitlementsLookupOffer($request, $requestSecurity);

    if ($response->googleCloudChannelV1Offer !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cloudchannelAccountsCustomersEntitlementsStartPaidService

Starts paid service for a trial entitlement. Starts paid service for a trial entitlement immediately. This method is only applicable if a plan is set up for a trial entitlement but has some trial days remaining. Possible error codes: * PERMISSION_DENIED: The customer doesn't belong to the reseller. * INVALID_ARGUMENT: Required request parameters are missing or invalid. * NOT_FOUND: Entitlement resource not found. * FAILED_PRECONDITION/NOT_IN_TRIAL: This method only works for entitlement on trial plans. * INTERNAL: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support. * UNKNOWN: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support. Return value: The ID of a long-running operation. To get the results of the operation, call the GetOperation method of CloudChannelOperationsService. The Operation metadata will contain an instance of OperationMetadata.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudchannelAccountsCustomersEntitlementsStartPaidServiceRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudChannelV1StartPaidServiceRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudchannelAccountsCustomersEntitlementsStartPaidServiceSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudchannelAccountsCustomersEntitlementsStartPaidServiceRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->googleCloudChannelV1StartPaidServiceRequest = new GoogleCloudChannelV1StartPaidServiceRequest();
    $request->googleCloudChannelV1StartPaidServiceRequest->requestId = 'ipsum';
    $request->accessToken = 'hic';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'cum';
    $request->fields = 'voluptate';
    $request->key = 'dignissimos';
    $request->name = 'Allen Parisian Jr.';
    $request->oauthToken = 'ipsa';
    $request->prettyPrint = false;
    $request->quotaUser = 'iure';
    $request->uploadType = 'odio';
    $request->uploadProtocol = 'quaerat';

    $requestSecurity = new CloudchannelAccountsCustomersEntitlementsStartPaidServiceSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accounts->cloudchannelAccountsCustomersEntitlementsStartPaidService($request, $requestSecurity);

    if ($response->googleLongrunningOperation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cloudchannelAccountsCustomersEntitlementsSuspend

Suspends a previously fulfilled entitlement. An entitlement suspension is a long-running operation. Possible error codes: * PERMISSION_DENIED: The customer doesn't belong to the reseller. * INVALID_ARGUMENT: Required request parameters are missing or invalid. * NOT_FOUND: Entitlement resource not found. * NOT_ACTIVE: Entitlement is not active. * INTERNAL: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support. * UNKNOWN: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support. Return value: The ID of a long-running operation. To get the results of the operation, call the GetOperation method of CloudChannelOperationsService. The Operation metadata will contain an instance of OperationMetadata.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudchannelAccountsCustomersEntitlementsSuspendRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudChannelV1SuspendEntitlementRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudchannelAccountsCustomersEntitlementsSuspendSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudchannelAccountsCustomersEntitlementsSuspendRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleCloudChannelV1SuspendEntitlementRequest = new GoogleCloudChannelV1SuspendEntitlementRequest();
    $request->googleCloudChannelV1SuspendEntitlementRequest->requestId = 'quidem';
    $request->accessToken = 'voluptatibus';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'natus';
    $request->fields = 'eos';
    $request->key = 'atque';
    $request->name = 'Ginger Bergstrom';
    $request->oauthToken = 'iusto';
    $request->prettyPrint = false;
    $request->quotaUser = 'voluptate';
    $request->uploadType = 'dolorum';
    $request->uploadProtocol = 'deleniti';

    $requestSecurity = new CloudchannelAccountsCustomersEntitlementsSuspendSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accounts->cloudchannelAccountsCustomersEntitlementsSuspend($request, $requestSecurity);

    if ($response->googleLongrunningOperation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cloudchannelAccountsCustomersImport

Imports a Customer from the Cloud Identity associated with the provided Cloud Identity ID or domain before a TransferEntitlements call. If a linked Customer already exists and overwrite_if_exists is true, it will update that Customer's data. Possible error codes: * PERMISSION_DENIED: The reseller account making the request is different from the reseller account in the API request. * NOT_FOUND: Cloud Identity doesn't exist or was deleted. * INVALID_ARGUMENT: Required parameters are missing, or the auth_token is expired or invalid. * ALREADY_EXISTS: A customer already exists and has conflicting critical fields. Requires an overwrite. Return value: The Customer.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudchannelAccountsCustomersImportRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudChannelV1ImportCustomerRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudchannelAccountsCustomersImportSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudchannelAccountsCustomersImportRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleCloudChannelV1ImportCustomerRequest = new GoogleCloudChannelV1ImportCustomerRequest();
    $request->googleCloudChannelV1ImportCustomerRequest->authToken = 'necessitatibus';
    $request->googleCloudChannelV1ImportCustomerRequest->channelPartnerId = 'distinctio';
    $request->googleCloudChannelV1ImportCustomerRequest->cloudIdentityId = 'asperiores';
    $request->googleCloudChannelV1ImportCustomerRequest->customer = 'nihil';
    $request->googleCloudChannelV1ImportCustomerRequest->domain = 'ipsum';
    $request->googleCloudChannelV1ImportCustomerRequest->overwriteIfExists = false;
    $request->accessToken = 'voluptate';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'saepe';
    $request->fields = 'eius';
    $request->key = 'aspernatur';
    $request->oauthToken = 'perferendis';
    $request->parent = 'amet';
    $request->prettyPrint = false;
    $request->quotaUser = 'optio';
    $request->uploadType = 'accusamus';
    $request->uploadProtocol = 'ad';

    $requestSecurity = new CloudchannelAccountsCustomersImportSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accounts->cloudchannelAccountsCustomersImport($request, $requestSecurity);

    if ($response->googleCloudChannelV1Customer !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cloudchannelAccountsCustomersList

List Customers. Possible error codes: * PERMISSION_DENIED: The reseller account making the request is different from the reseller account in the API request. * INVALID_ARGUMENT: Required request parameters are missing or invalid. Return value: List of Customers, or an empty list if there are no customers.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudchannelAccountsCustomersListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudchannelAccountsCustomersListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudchannelAccountsCustomersListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'suscipit';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'provident';
    $request->fields = 'minima';
    $request->filter = 'repellendus';
    $request->key = 'totam';
    $request->oauthToken = 'similique';
    $request->pageSize = 55;
    $request->pageToken = 'at';
    $request->parent = 'quaerat';
    $request->prettyPrint = false;
    $request->quotaUser = 'tempora';
    $request->uploadType = 'vel';
    $request->uploadProtocol = 'quod';

    $requestSecurity = new CloudchannelAccountsCustomersListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accounts->cloudchannelAccountsCustomersList($request, $requestSecurity);

    if ($response->googleCloudChannelV1ListCustomersResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cloudchannelAccountsCustomersListPurchasableOffers

Lists the following: * Offers that you can purchase for a customer. * Offers that you can change for an entitlement. Possible error codes: * PERMISSION_DENIED: The customer doesn't belong to the reseller * INVALID_ARGUMENT: Required request parameters are missing or invalid.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudchannelAccountsCustomersListPurchasableOffersRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudchannelAccountsCustomersListPurchasableOffersSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudchannelAccountsCustomersListPurchasableOffersRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'qui';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'a';
    $request->changeOfferPurchaseEntitlement = 'esse';
    $request->changeOfferPurchaseNewSku = 'harum';
    $request->createEntitlementPurchaseSku = 'iusto';
    $request->customer = 'ipsum';
    $request->fields = 'quisquam';
    $request->key = 'tenetur';
    $request->languageCode = 'amet';
    $request->oauthToken = 'tempore';
    $request->pageSize = 880298;
    $request->pageToken = 'numquam';
    $request->prettyPrint = false;
    $request->quotaUser = 'enim';
    $request->uploadType = 'dolorem';
    $request->uploadProtocol = 'sapiente';

    $requestSecurity = new CloudchannelAccountsCustomersListPurchasableOffersSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accounts->cloudchannelAccountsCustomersListPurchasableOffers($request, $requestSecurity);

    if ($response->googleCloudChannelV1ListPurchasableOffersResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cloudchannelAccountsCustomersListPurchasableSkus

Lists the following: * SKUs that you can purchase for a customer * SKUs that you can upgrade or downgrade for an entitlement. Possible error codes: * PERMISSION_DENIED: The customer doesn't belong to the reseller. * INVALID_ARGUMENT: Required request parameters are missing or invalid.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudchannelAccountsCustomersListPurchasableSkusRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudchannelAccountsCustomersListPurchasableSkusChangeOfferPurchaseChangeTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudchannelAccountsCustomersListPurchasableSkusSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudchannelAccountsCustomersListPurchasableSkusRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'nihil';
    $request->alt = AltEnum::JSON;
    $request->callback = 'expedita';
    $request->changeOfferPurchaseChangeType = CloudchannelAccountsCustomersListPurchasableSkusChangeOfferPurchaseChangeTypeEnum::CHANGE_TYPE_UNSPECIFIED;
    $request->changeOfferPurchaseEntitlement = 'sed';
    $request->createEntitlementPurchaseProduct = 'vel';
    $request->customer = 'libero';
    $request->fields = 'voluptas';
    $request->key = 'deserunt';
    $request->languageCode = 'quam';
    $request->oauthToken = 'ipsum';
    $request->pageSize = 277628;
    $request->pageToken = 'qui';
    $request->prettyPrint = false;
    $request->quotaUser = 'cupiditate';
    $request->uploadType = 'maxime';
    $request->uploadProtocol = 'pariatur';

    $requestSecurity = new CloudchannelAccountsCustomersListPurchasableSkusSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accounts->cloudchannelAccountsCustomersListPurchasableSkus($request, $requestSecurity);

    if ($response->googleCloudChannelV1ListPurchasableSkusResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cloudchannelAccountsCustomersProvisionCloudIdentity

Creates a Cloud Identity for the given customer using the customer's information, or the information provided here. Possible error codes: * PERMISSION_DENIED: The customer doesn't belong to the reseller. * INVALID_ARGUMENT: Required request parameters are missing or invalid. * NOT_FOUND: The customer was not found. * ALREADY_EXISTS: The customer's primary email already exists. Retry after changing the customer's primary contact email. * INTERNAL: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support. * UNKNOWN: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support. Return value: The ID of a long-running operation. To get the results of the operation, call the GetOperation method of CloudChannelOperationsService. The Operation metadata contains an instance of OperationMetadata.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudchannelAccountsCustomersProvisionCloudIdentityRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudChannelV1ProvisionCloudIdentityRequestInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudChannelV1CloudIdentityInfoInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudChannelV1CloudIdentityInfoCustomerTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudChannelV1EduData;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudChannelV1EduDataInstituteSizeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudChannelV1EduDataInstituteTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudChannelV1AdminUser;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudchannelAccountsCustomersProvisionCloudIdentitySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudchannelAccountsCustomersProvisionCloudIdentityRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleCloudChannelV1ProvisionCloudIdentityRequestInput = new GoogleCloudChannelV1ProvisionCloudIdentityRequestInput();
    $request->googleCloudChannelV1ProvisionCloudIdentityRequestInput->cloudIdentityInfo = new GoogleCloudChannelV1CloudIdentityInfoInput();
    $request->googleCloudChannelV1ProvisionCloudIdentityRequestInput->cloudIdentityInfo->alternateEmail = 'dicta';
    $request->googleCloudChannelV1ProvisionCloudIdentityRequestInput->cloudIdentityInfo->customerType = GoogleCloudChannelV1CloudIdentityInfoCustomerTypeEnum::TEAM;
    $request->googleCloudChannelV1ProvisionCloudIdentityRequestInput->cloudIdentityInfo->eduData = new GoogleCloudChannelV1EduData();
    $request->googleCloudChannelV1ProvisionCloudIdentityRequestInput->cloudIdentityInfo->eduData->instituteSize = GoogleCloudChannelV1EduDataInstituteSizeEnum::SIZE10012000;
    $request->googleCloudChannelV1ProvisionCloudIdentityRequestInput->cloudIdentityInfo->eduData->instituteType = GoogleCloudChannelV1EduDataInstituteTypeEnum::INSTITUTE_TYPE_UNSPECIFIED;
    $request->googleCloudChannelV1ProvisionCloudIdentityRequestInput->cloudIdentityInfo->eduData->website = 'aspernatur';
    $request->googleCloudChannelV1ProvisionCloudIdentityRequestInput->cloudIdentityInfo->languageCode = 'dolores';
    $request->googleCloudChannelV1ProvisionCloudIdentityRequestInput->cloudIdentityInfo->phoneNumber = 'distinctio';
    $request->googleCloudChannelV1ProvisionCloudIdentityRequestInput->user = new GoogleCloudChannelV1AdminUser();
    $request->googleCloudChannelV1ProvisionCloudIdentityRequestInput->user->email = 'Grace_Kohler@hotmail.com';
    $request->googleCloudChannelV1ProvisionCloudIdentityRequestInput->user->familyName = 'qui';
    $request->googleCloudChannelV1ProvisionCloudIdentityRequestInput->user->givenName = 'neque';
    $request->googleCloudChannelV1ProvisionCloudIdentityRequestInput->validateOnly = false;
    $request->accessToken = 'fugit';
    $request->alt = AltEnum::JSON;
    $request->callback = 'odio';
    $request->customer = 'sunt';
    $request->fields = 'ullam';
    $request->key = 'nam';
    $request->oauthToken = 'hic';
    $request->prettyPrint = false;
    $request->quotaUser = 'voluptatem';
    $request->uploadType = 'cumque';
    $request->uploadProtocol = 'soluta';

    $requestSecurity = new CloudchannelAccountsCustomersProvisionCloudIdentitySecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accounts->cloudchannelAccountsCustomersProvisionCloudIdentity($request, $requestSecurity);

    if ($response->googleLongrunningOperation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cloudchannelAccountsCustomersTransferEntitlements

Transfers customer entitlements to new reseller. Possible error codes: * PERMISSION_DENIED: The customer doesn't belong to the reseller. * INVALID_ARGUMENT: Required request parameters are missing or invalid. * NOT_FOUND: The customer or offer resource was not found. * ALREADY_EXISTS: The SKU was already transferred for the customer. * CONDITION_NOT_MET or FAILED_PRECONDITION: * The SKU requires domain verification to transfer, but the domain is not verified. * An Add-On SKU (example, Vault or Drive) is missing the pre-requisite SKU (example, G Suite Basic). * (Developer accounts only) Reseller and resold domain must meet the following naming requirements: * Domain names must start with goog-test. * Domain names must include the reseller domain. * Specify all transferring entitlements. * INTERNAL: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support. * UNKNOWN: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support. Return value: The ID of a long-running operation. To get the results of the operation, call the GetOperation method of CloudChannelOperationsService. The Operation metadata will contain an instance of OperationMetadata.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudchannelAccountsCustomersTransferEntitlementsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudChannelV1TransferEntitlementsRequestInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudChannelV1EntitlementInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudChannelV1AssociationInfo;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudChannelV1CommitmentSettingsInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudChannelV1RenewalSettings;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudChannelV1Period;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudChannelV1PeriodPeriodTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudChannelV1RenewalSettingsPaymentPlanEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudChannelV1ParameterInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudChannelV1Value;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudChannelV1TrialSettings;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudchannelAccountsCustomersTransferEntitlementsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudchannelAccountsCustomersTransferEntitlementsRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleCloudChannelV1TransferEntitlementsRequestInput = new GoogleCloudChannelV1TransferEntitlementsRequestInput();
    $request->googleCloudChannelV1TransferEntitlementsRequestInput->authToken = 'et';
    $request->googleCloudChannelV1TransferEntitlementsRequestInput->entitlements = [
        new GoogleCloudChannelV1EntitlementInput(),
        new GoogleCloudChannelV1EntitlementInput(),
        new GoogleCloudChannelV1EntitlementInput(),
        new GoogleCloudChannelV1EntitlementInput(),
    ];
    $request->googleCloudChannelV1TransferEntitlementsRequestInput->requestId = 'ipsum';
    $request->accessToken = 'veritatis';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'quos';
    $request->fields = 'tempore';
    $request->key = 'cupiditate';
    $request->oauthToken = 'aperiam';
    $request->parent = 'delectus';
    $request->prettyPrint = false;
    $request->quotaUser = 'dolorem';
    $request->uploadType = 'dolore';
    $request->uploadProtocol = 'labore';

    $requestSecurity = new CloudchannelAccountsCustomersTransferEntitlementsSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accounts->cloudchannelAccountsCustomersTransferEntitlements($request, $requestSecurity);

    if ($response->googleLongrunningOperation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cloudchannelAccountsCustomersTransferEntitlementsToGoogle

Transfers customer entitlements from their current reseller to Google. Possible error codes: * PERMISSION_DENIED: The customer doesn't belong to the reseller. * INVALID_ARGUMENT: Required request parameters are missing or invalid. * NOT_FOUND: The customer or offer resource was not found. * ALREADY_EXISTS: The SKU was already transferred for the customer. * CONDITION_NOT_MET or FAILED_PRECONDITION: * The SKU requires domain verification to transfer, but the domain is not verified. * An Add-On SKU (example, Vault or Drive) is missing the pre-requisite SKU (example, G Suite Basic). * (Developer accounts only) Reseller and resold domain must meet the following naming requirements: * Domain names must start with goog-test. * Domain names must include the reseller domain. * INTERNAL: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support. * UNKNOWN: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support. Return value: The ID of a long-running operation. To get the results of the operation, call the GetOperation method of CloudChannelOperationsService. The response will contain google.protobuf.Empty on success. The Operation metadata will contain an instance of OperationMetadata.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudchannelAccountsCustomersTransferEntitlementsToGoogleRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudChannelV1TransferEntitlementsToGoogleRequestInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudChannelV1EntitlementInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudChannelV1AssociationInfo;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudChannelV1CommitmentSettingsInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudChannelV1RenewalSettings;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudChannelV1Period;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudChannelV1PeriodPeriodTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudChannelV1RenewalSettingsPaymentPlanEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudChannelV1ParameterInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudChannelV1Value;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudChannelV1TrialSettings;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudchannelAccountsCustomersTransferEntitlementsToGoogleSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudchannelAccountsCustomersTransferEntitlementsToGoogleRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->googleCloudChannelV1TransferEntitlementsToGoogleRequestInput = new GoogleCloudChannelV1TransferEntitlementsToGoogleRequestInput();
    $request->googleCloudChannelV1TransferEntitlementsToGoogleRequestInput->entitlements = [
        new GoogleCloudChannelV1EntitlementInput(),
        new GoogleCloudChannelV1EntitlementInput(),
        new GoogleCloudChannelV1EntitlementInput(),
    ];
    $request->googleCloudChannelV1TransferEntitlementsToGoogleRequestInput->requestId = 'architecto';
    $request->accessToken = 'quae';
    $request->alt = AltEnum::JSON;
    $request->callback = 'quas';
    $request->fields = 'itaque';
    $request->key = 'consequatur';
    $request->oauthToken = 'est';
    $request->parent = 'repellendus';
    $request->prettyPrint = false;
    $request->quotaUser = 'porro';
    $request->uploadType = 'doloribus';
    $request->uploadProtocol = 'ut';

    $requestSecurity = new CloudchannelAccountsCustomersTransferEntitlementsToGoogleSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accounts->cloudchannelAccountsCustomersTransferEntitlementsToGoogle($request, $requestSecurity);

    if ($response->googleLongrunningOperation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cloudchannelAccountsListSubscribers

Lists service accounts with subscriber privileges on the Cloud Pub/Sub topic created for this Channel Services account. Possible error codes: * PERMISSION_DENIED: The reseller account making the request and the provided reseller account are different, or the impersonated user is not a super admin. * INVALID_ARGUMENT: Required request parameters are missing or invalid. * NOT_FOUND: The topic resource doesn't exist. * INTERNAL: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support. * UNKNOWN: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support. Return value: A list of service email addresses.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudchannelAccountsListSubscribersRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudchannelAccountsListSubscribersSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudchannelAccountsListSubscribersRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'cupiditate';
    $request->account = 'qui';
    $request->alt = AltEnum::JSON;
    $request->callback = 'laudantium';
    $request->fields = 'odio';
    $request->key = 'occaecati';
    $request->oauthToken = 'voluptatibus';
    $request->pageSize = 787542;
    $request->pageToken = 'vero';
    $request->prettyPrint = false;
    $request->quotaUser = 'omnis';
    $request->uploadType = 'quis';
    $request->uploadProtocol = 'ipsum';

    $requestSecurity = new CloudchannelAccountsListSubscribersSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accounts->cloudchannelAccountsListSubscribers($request, $requestSecurity);

    if ($response->googleCloudChannelV1ListSubscribersResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cloudchannelAccountsListTransferableOffers

List TransferableOffers of a customer based on Cloud Identity ID or Customer Name in the request. Use this method when a reseller gets the entitlement information of an unowned customer. The reseller should provide the customer's Cloud Identity ID or Customer Name. Possible error codes: * PERMISSION_DENIED: * The customer doesn't belong to the reseller and has no auth token. * The customer provided incorrect reseller information when generating auth token. * The reseller account making the request is different from the reseller account in the query. * INVALID_ARGUMENT: Required request parameters are missing or invalid. Return value: List of TransferableOffer for the given customer and SKU.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudchannelAccountsListTransferableOffersRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudChannelV1ListTransferableOffersRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudchannelAccountsListTransferableOffersSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudchannelAccountsListTransferableOffersRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleCloudChannelV1ListTransferableOffersRequest = new GoogleCloudChannelV1ListTransferableOffersRequest();
    $request->googleCloudChannelV1ListTransferableOffersRequest->cloudIdentityId = 'voluptate';
    $request->googleCloudChannelV1ListTransferableOffersRequest->customerName = 'consectetur';
    $request->googleCloudChannelV1ListTransferableOffersRequest->languageCode = 'vero';
    $request->googleCloudChannelV1ListTransferableOffersRequest->pageSize = 949319;
    $request->googleCloudChannelV1ListTransferableOffersRequest->pageToken = 'dignissimos';
    $request->googleCloudChannelV1ListTransferableOffersRequest->sku = 'hic';
    $request->accessToken = 'distinctio';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'odio';
    $request->fields = 'similique';
    $request->key = 'facilis';
    $request->oauthToken = 'vero';
    $request->parent = 'ducimus';
    $request->prettyPrint = false;
    $request->quotaUser = 'dolore';
    $request->uploadType = 'quibusdam';
    $request->uploadProtocol = 'illum';

    $requestSecurity = new CloudchannelAccountsListTransferableOffersSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accounts->cloudchannelAccountsListTransferableOffers($request, $requestSecurity);

    if ($response->googleCloudChannelV1ListTransferableOffersResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cloudchannelAccountsListTransferableSkus

List TransferableSkus of a customer based on the Cloud Identity ID or Customer Name in the request. Use this method to list the entitlements information of an unowned customer. You should provide the customer's Cloud Identity ID or Customer Name. Possible error codes: * PERMISSION_DENIED: * The customer doesn't belong to the reseller and has no auth token. * The supplied auth token is invalid. * The reseller account making the request is different from the reseller account in the query. * INVALID_ARGUMENT: Required request parameters are missing or invalid. Return value: A list of the customer's TransferableSku.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudchannelAccountsListTransferableSkusRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudChannelV1ListTransferableSkusRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudchannelAccountsListTransferableSkusSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudchannelAccountsListTransferableSkusRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->googleCloudChannelV1ListTransferableSkusRequest = new GoogleCloudChannelV1ListTransferableSkusRequest();
    $request->googleCloudChannelV1ListTransferableSkusRequest->authToken = 'natus';
    $request->googleCloudChannelV1ListTransferableSkusRequest->cloudIdentityId = 'impedit';
    $request->googleCloudChannelV1ListTransferableSkusRequest->customerName = 'aut';
    $request->googleCloudChannelV1ListTransferableSkusRequest->languageCode = 'voluptatibus';
    $request->googleCloudChannelV1ListTransferableSkusRequest->pageSize = 347233;
    $request->googleCloudChannelV1ListTransferableSkusRequest->pageToken = 'nulla';
    $request->accessToken = 'fugit';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'maiores';
    $request->fields = 'doloribus';
    $request->key = 'iusto';
    $request->oauthToken = 'eligendi';
    $request->parent = 'ducimus';
    $request->prettyPrint = false;
    $request->quotaUser = 'alias';
    $request->uploadType = 'officia';
    $request->uploadProtocol = 'tempora';

    $requestSecurity = new CloudchannelAccountsListTransferableSkusSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accounts->cloudchannelAccountsListTransferableSkus($request, $requestSecurity);

    if ($response->googleCloudChannelV1ListTransferableSkusResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cloudchannelAccountsOffersList

Lists the Offers the reseller can sell. Possible error codes: * INVALID_ARGUMENT: Required request parameters are missing or invalid.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudchannelAccountsOffersListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudchannelAccountsOffersListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudchannelAccountsOffersListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'ea';
    $request->alt = AltEnum::JSON;
    $request->callback = 'vel';
    $request->fields = 'possimus';
    $request->filter = 'magnam';
    $request->key = 'ratione';
    $request->languageCode = 'ex';
    $request->oauthToken = 'laudantium';
    $request->pageSize = 120657;
    $request->pageToken = 'dolor';
    $request->parent = 'maiores';
    $request->prettyPrint = false;
    $request->quotaUser = 'quasi';
    $request->showFutureOffers = false;
    $request->uploadType = 'ex';
    $request->uploadProtocol = 'nulla';

    $requestSecurity = new CloudchannelAccountsOffersListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accounts->cloudchannelAccountsOffersList($request, $requestSecurity);

    if ($response->googleCloudChannelV1ListOffersResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cloudchannelAccountsRegister

Registers a service account with subscriber privileges on the Cloud Pub/Sub topic for this Channel Services account. After you create a subscriber, you get the events through SubscriberEvent Possible error codes: * PERMISSION_DENIED: The reseller account making the request and the provided reseller account are different, or the impersonated user is not a super admin. * INVALID_ARGUMENT: Required request parameters are missing or invalid. * INTERNAL: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support. * UNKNOWN: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support. Return value: The topic name with the registered service email address.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudchannelAccountsRegisterRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudChannelV1RegisterSubscriberRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudchannelAccountsRegisterSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudchannelAccountsRegisterRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleCloudChannelV1RegisterSubscriberRequest = new GoogleCloudChannelV1RegisterSubscriberRequest();
    $request->googleCloudChannelV1RegisterSubscriberRequest->serviceAccount = 'voluptatibus';
    $request->accessToken = 'nostrum';
    $request->account = 'sapiente';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'saepe';
    $request->fields = 'ea';
    $request->key = 'impedit';
    $request->oauthToken = 'corporis';
    $request->prettyPrint = false;
    $request->quotaUser = 'veniam';
    $request->uploadType = 'aliquid';
    $request->uploadProtocol = 'inventore';

    $requestSecurity = new CloudchannelAccountsRegisterSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accounts->cloudchannelAccountsRegister($request, $requestSecurity);

    if ($response->googleCloudChannelV1RegisterSubscriberResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cloudchannelAccountsReportJobsFetchReportResults

Retrieves data generated by CloudChannelReportsService.RunReportJob.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudchannelAccountsReportJobsFetchReportResultsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudChannelV1FetchReportResultsRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudchannelAccountsReportJobsFetchReportResultsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudchannelAccountsReportJobsFetchReportResultsRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->googleCloudChannelV1FetchReportResultsRequest = new GoogleCloudChannelV1FetchReportResultsRequest();
    $request->googleCloudChannelV1FetchReportResultsRequest->pageSize = 407241;
    $request->googleCloudChannelV1FetchReportResultsRequest->pageToken = 'quo';
    $request->googleCloudChannelV1FetchReportResultsRequest->partitionKeys = [
        'recusandae',
    ];
    $request->accessToken = 'aspernatur';
    $request->alt = AltEnum::JSON;
    $request->callback = 'eaque';
    $request->fields = 'a';
    $request->key = 'libero';
    $request->oauthToken = 'aut';
    $request->prettyPrint = false;
    $request->quotaUser = 'aut';
    $request->reportJob = 'deleniti';
    $request->uploadType = 'impedit';
    $request->uploadProtocol = 'aliquam';

    $requestSecurity = new CloudchannelAccountsReportJobsFetchReportResultsSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accounts->cloudchannelAccountsReportJobsFetchReportResults($request, $requestSecurity);

    if ($response->googleCloudChannelV1FetchReportResultsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cloudchannelAccountsReportsList

Lists the reports that RunReportJob can run. These reports include an ID, a description, and the list of columns that will be in the result.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudchannelAccountsReportsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudchannelAccountsReportsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudchannelAccountsReportsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'accusamus';
    $request->alt = AltEnum::JSON;
    $request->callback = 'non';
    $request->fields = 'et';
    $request->key = 'dolorum';
    $request->languageCode = 'laborum';
    $request->oauthToken = 'placeat';
    $request->pageSize = 245367;
    $request->pageToken = 'eum';
    $request->parent = 'autem';
    $request->prettyPrint = false;
    $request->quotaUser = 'nobis';
    $request->uploadType = 'quas';
    $request->uploadProtocol = 'assumenda';

    $requestSecurity = new CloudchannelAccountsReportsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accounts->cloudchannelAccountsReportsList($request, $requestSecurity);

    if ($response->googleCloudChannelV1ListReportsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cloudchannelAccountsReportsRun

Begins generation of data for a given report. The report identifier is a UID (for example, `613bf59q`). Possible error codes: * PERMISSION_DENIED: The user doesn't have access to this report. * INVALID_ARGUMENT: Required request parameters are missing or invalid. * NOT_FOUND: The report identifier was not found. * INTERNAL: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support. * UNKNOWN: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support. Return value: The ID of a long-running operation. To get the results of the operation, call the GetOperation method of CloudChannelOperationsService. The Operation metadata contains an instance of OperationMetadata. To get the results of report generation, call CloudChannelReportsService.FetchReportResults with the RunReportJobResponse.report_job.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudchannelAccountsReportsRunRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudChannelV1RunReportJobRequest;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudChannelV1DateRange;
use \OpenAPI\OpenAPI\Models\Shared\GoogleTypeDate;
use \OpenAPI\OpenAPI\Models\Shared\GoogleTypeDateTime;
use \OpenAPI\OpenAPI\Models\Shared\GoogleTypeTimeZone;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudchannelAccountsReportsRunSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudchannelAccountsReportsRunRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleCloudChannelV1RunReportJobRequest = new GoogleCloudChannelV1RunReportJobRequest();
    $request->googleCloudChannelV1RunReportJobRequest->dateRange = new GoogleCloudChannelV1DateRange();
    $request->googleCloudChannelV1RunReportJobRequest->dateRange->invoiceEndDate = new GoogleTypeDate();
    $request->googleCloudChannelV1RunReportJobRequest->dateRange->invoiceEndDate->day = 379034;
    $request->googleCloudChannelV1RunReportJobRequest->dateRange->invoiceEndDate->month = 727044;
    $request->googleCloudChannelV1RunReportJobRequest->dateRange->invoiceEndDate->year = 96549;
    $request->googleCloudChannelV1RunReportJobRequest->dateRange->invoiceStartDate = new GoogleTypeDate();
    $request->googleCloudChannelV1RunReportJobRequest->dateRange->invoiceStartDate->day = 270328;
    $request->googleCloudChannelV1RunReportJobRequest->dateRange->invoiceStartDate->month = 256139;
    $request->googleCloudChannelV1RunReportJobRequest->dateRange->invoiceStartDate->year = 131482;
    $request->googleCloudChannelV1RunReportJobRequest->dateRange->usageEndDateTime = new GoogleTypeDateTime();
    $request->googleCloudChannelV1RunReportJobRequest->dateRange->usageEndDateTime->day = 591935;
    $request->googleCloudChannelV1RunReportJobRequest->dateRange->usageEndDateTime->hours = 55374;
    $request->googleCloudChannelV1RunReportJobRequest->dateRange->usageEndDateTime->minutes = 476477;
    $request->googleCloudChannelV1RunReportJobRequest->dateRange->usageEndDateTime->month = 301598;
    $request->googleCloudChannelV1RunReportJobRequest->dateRange->usageEndDateTime->nanos = 487935;
    $request->googleCloudChannelV1RunReportJobRequest->dateRange->usageEndDateTime->seconds = 262118;
    $request->googleCloudChannelV1RunReportJobRequest->dateRange->usageEndDateTime->timeZone = new GoogleTypeTimeZone();
    $request->googleCloudChannelV1RunReportJobRequest->dateRange->usageEndDateTime->timeZone->id = '778a7bd4-66d2-48c1-8ab3-cdca4251904e';
    $request->googleCloudChannelV1RunReportJobRequest->dateRange->usageEndDateTime->timeZone->version = 'ipsam';
    $request->googleCloudChannelV1RunReportJobRequest->dateRange->usageEndDateTime->utcOffset = 'aspernatur';
    $request->googleCloudChannelV1RunReportJobRequest->dateRange->usageEndDateTime->year = 197054;
    $request->googleCloudChannelV1RunReportJobRequest->dateRange->usageStartDateTime = new GoogleTypeDateTime();
    $request->googleCloudChannelV1RunReportJobRequest->dateRange->usageStartDateTime->day = 779192;
    $request->googleCloudChannelV1RunReportJobRequest->dateRange->usageStartDateTime->hours = 459856;
    $request->googleCloudChannelV1RunReportJobRequest->dateRange->usageStartDateTime->minutes = 925164;
    $request->googleCloudChannelV1RunReportJobRequest->dateRange->usageStartDateTime->month = 44612;
    $request->googleCloudChannelV1RunReportJobRequest->dateRange->usageStartDateTime->nanos = 715179;
    $request->googleCloudChannelV1RunReportJobRequest->dateRange->usageStartDateTime->seconds = 799796;
    $request->googleCloudChannelV1RunReportJobRequest->dateRange->usageStartDateTime->timeZone = new GoogleTypeTimeZone();
    $request->googleCloudChannelV1RunReportJobRequest->dateRange->usageStartDateTime->timeZone->id = '7178e479-6f2a-470c-a882-82aa482562f2';
    $request->googleCloudChannelV1RunReportJobRequest->dateRange->usageStartDateTime->timeZone->version = 'ratione';
    $request->googleCloudChannelV1RunReportJobRequest->dateRange->usageStartDateTime->utcOffset = 'explicabo';
    $request->googleCloudChannelV1RunReportJobRequest->dateRange->usageStartDateTime->year = 903984;
    $request->googleCloudChannelV1RunReportJobRequest->filter = 'occaecati';
    $request->googleCloudChannelV1RunReportJobRequest->languageCode = 'atque';
    $request->accessToken = 'et';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'eveniet';
    $request->fields = 'accusamus';
    $request->key = 'veritatis';
    $request->name = 'Traci Reilly';
    $request->oauthToken = 'quasi';
    $request->prettyPrint = false;
    $request->quotaUser = 'saepe';
    $request->uploadType = 'vel';
    $request->uploadProtocol = 'harum';

    $requestSecurity = new CloudchannelAccountsReportsRunSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accounts->cloudchannelAccountsReportsRun($request, $requestSecurity);

    if ($response->googleLongrunningOperation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cloudchannelAccountsUnregister

Unregisters a service account with subscriber privileges on the Cloud Pub/Sub topic created for this Channel Services account. If there are no service accounts left with subscriber privileges, this deletes the topic. You can call ListSubscribers to check for these accounts. Possible error codes: * PERMISSION_DENIED: The reseller account making the request and the provided reseller account are different, or the impersonated user is not a super admin. * INVALID_ARGUMENT: Required request parameters are missing or invalid. * NOT_FOUND: The topic resource doesn't exist. * INTERNAL: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support. * UNKNOWN: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support. Return value: The topic name that unregistered the service email address. Returns a success response if the service email address wasn't registered with the topic.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudchannelAccountsUnregisterRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudChannelV1UnregisterSubscriberRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudchannelAccountsUnregisterSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudchannelAccountsUnregisterRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->googleCloudChannelV1UnregisterSubscriberRequest = new GoogleCloudChannelV1UnregisterSubscriberRequest();
    $request->googleCloudChannelV1UnregisterSubscriberRequest->serviceAccount = 'rerum';
    $request->accessToken = 'occaecati';
    $request->account = 'minima';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'eligendi';
    $request->fields = 'sit';
    $request->key = 'culpa';
    $request->oauthToken = 'tempore';
    $request->prettyPrint = false;
    $request->quotaUser = 'adipisci';
    $request->uploadType = 'cumque';
    $request->uploadProtocol = 'consequuntur';

    $requestSecurity = new CloudchannelAccountsUnregisterSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accounts->cloudchannelAccountsUnregister($request, $requestSecurity);

    if ($response->googleCloudChannelV1UnregisterSubscriberResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
