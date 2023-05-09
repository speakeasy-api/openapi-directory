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

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudchannelAccountsChannelPartnerLinksChannelPartnerRepricingConfigsCreateRequest;
import org.openapis.openapi.models.operations.CloudchannelAccountsChannelPartnerLinksChannelPartnerRepricingConfigsCreateResponse;
import org.openapis.openapi.models.operations.CloudchannelAccountsChannelPartnerLinksChannelPartnerRepricingConfigsCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleCloudChannelV1ChannelPartnerRepricingConfigInput;
import org.openapis.openapi.models.shared.GoogleCloudChannelV1ConditionalOverride;
import org.openapis.openapi.models.shared.GoogleCloudChannelV1ConditionalOverrideRebillingBasisEnum;
import org.openapis.openapi.models.shared.GoogleCloudChannelV1PercentageAdjustment;
import org.openapis.openapi.models.shared.GoogleCloudChannelV1RepricingAdjustment;
import org.openapis.openapi.models.shared.GoogleCloudChannelV1RepricingCondition;
import org.openapis.openapi.models.shared.GoogleCloudChannelV1RepricingConfig;
import org.openapis.openapi.models.shared.GoogleCloudChannelV1RepricingConfigEntitlementGranularity;
import org.openapis.openapi.models.shared.GoogleCloudChannelV1RepricingConfigRebillingBasisEnum;
import org.openapis.openapi.models.shared.GoogleCloudChannelV1SkuGroupCondition;
import org.openapis.openapi.models.shared.GoogleTypeDate;
import org.openapis.openapi.models.shared.GoogleTypeDecimal;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudchannelAccountsChannelPartnerLinksChannelPartnerRepricingConfigsCreateRequest req = new CloudchannelAccountsChannelPartnerLinksChannelPartnerRepricingConfigsCreateRequest("sapiente") {{
                dollarXgafv = XgafvEnum.TWO;
                googleCloudChannelV1ChannelPartnerRepricingConfigInput = new GoogleCloudChannelV1ChannelPartnerRepricingConfigInput() {{
                    repricingConfig = new GoogleCloudChannelV1RepricingConfig() {{
                        adjustment = new GoogleCloudChannelV1RepricingAdjustment() {{
                            percentageAdjustment = new GoogleCloudChannelV1PercentageAdjustment() {{
                                percentage = new GoogleTypeDecimal() {{
                                    value = "odit";
                                }};;
                            }};;
                        }};;
                        channelPartnerGranularity = new java.util.HashMap<String, Object>() {{
                            put("at", "maiores");
                            put("molestiae", "quod");
                            put("quod", "esse");
                            put("totam", "porro");
                        }};
                        conditionalOverrides = new org.openapis.openapi.models.shared.GoogleCloudChannelV1ConditionalOverride[]{{
                            add(new GoogleCloudChannelV1ConditionalOverride() {{
                                adjustment = new GoogleCloudChannelV1RepricingAdjustment() {{
                                    percentageAdjustment = new GoogleCloudChannelV1PercentageAdjustment() {{
                                        percentage = new GoogleTypeDecimal() {{
                                            value = "dicta";
                                        }};
                                    }};
                                }};
                                rebillingBasis = GoogleCloudChannelV1ConditionalOverrideRebillingBasisEnum.DIRECT_CUSTOMER_COST;
                                repricingCondition = new GoogleCloudChannelV1RepricingCondition() {{
                                    skuGroupCondition = new GoogleCloudChannelV1SkuGroupCondition() {{
                                        skuGroup = "officia";
                                    }};
                                }};
                            }}),
                            add(new GoogleCloudChannelV1ConditionalOverride() {{
                                adjustment = new GoogleCloudChannelV1RepricingAdjustment() {{
                                    percentageAdjustment = new GoogleCloudChannelV1PercentageAdjustment() {{
                                        percentage = new GoogleTypeDecimal() {{
                                            value = "occaecati";
                                        }};
                                    }};
                                }};
                                rebillingBasis = GoogleCloudChannelV1ConditionalOverrideRebillingBasisEnum.REBILLING_BASIS_UNSPECIFIED;
                                repricingCondition = new GoogleCloudChannelV1RepricingCondition() {{
                                    skuGroupCondition = new GoogleCloudChannelV1SkuGroupCondition() {{
                                        skuGroup = "deleniti";
                                    }};
                                }};
                            }}),
                            add(new GoogleCloudChannelV1ConditionalOverride() {{
                                adjustment = new GoogleCloudChannelV1RepricingAdjustment() {{
                                    percentageAdjustment = new GoogleCloudChannelV1PercentageAdjustment() {{
                                        percentage = new GoogleTypeDecimal() {{
                                            value = "hic";
                                        }};
                                    }};
                                }};
                                rebillingBasis = GoogleCloudChannelV1ConditionalOverrideRebillingBasisEnum.DIRECT_CUSTOMER_COST;
                                repricingCondition = new GoogleCloudChannelV1RepricingCondition() {{
                                    skuGroupCondition = new GoogleCloudChannelV1SkuGroupCondition() {{
                                        skuGroup = "totam";
                                    }};
                                }};
                            }}),
                        }};
                        effectiveInvoiceMonth = new GoogleTypeDate() {{
                            day = 105907;
                            month = 414662;
                            year = 473600;
                        }};;
                        entitlementGranularity = new GoogleCloudChannelV1RepricingConfigEntitlementGranularity() {{
                            entitlement = "modi";
                        }};;
                        rebillingBasis = GoogleCloudChannelV1RepricingConfigRebillingBasisEnum.REBILLING_BASIS_UNSPECIFIED;
                    }};;
                }};;
                accessToken = "impedit";
                alt = AltEnum.PROTO;
                callback = "esse";
                fields = "ipsum";
                key = "excepturi";
                oauthToken = "aspernatur";
                prettyPrint = false;
                quotaUser = "perferendis";
                uploadType = "ad";
                uploadProtocol = "natus";
            }};            

            CloudchannelAccountsChannelPartnerLinksChannelPartnerRepricingConfigsCreateResponse res = sdk.accounts.cloudchannelAccountsChannelPartnerLinksChannelPartnerRepricingConfigsCreate(req, new CloudchannelAccountsChannelPartnerLinksChannelPartnerRepricingConfigsCreateSecurity("sed", "iste") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudChannelV1ChannelPartnerRepricingConfig != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## cloudchannelAccountsChannelPartnerLinksChannelPartnerRepricingConfigsList

Lists information about how a Reseller modifies their bill before sending it to a ChannelPartner. Possible Error Codes: * PERMISSION_DENIED: If the account making the request and the account being queried are different. * NOT_FOUND: The ChannelPartnerRepricingConfig specified does not exist or is not associated with the given account. * INTERNAL: Any non-user error related to technical issues in the backend. In this case, contact Cloud Channel support. Return Value: If successful, the ChannelPartnerRepricingConfig resources. The data for each resource is displayed in the ascending order of: * Channel Partner ID * RepricingConfig.effective_invoice_month * ChannelPartnerRepricingConfig.update_time If unsuccessful, returns an error.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudchannelAccountsChannelPartnerLinksChannelPartnerRepricingConfigsListRequest;
import org.openapis.openapi.models.operations.CloudchannelAccountsChannelPartnerLinksChannelPartnerRepricingConfigsListResponse;
import org.openapis.openapi.models.operations.CloudchannelAccountsChannelPartnerLinksChannelPartnerRepricingConfigsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudchannelAccountsChannelPartnerLinksChannelPartnerRepricingConfigsListRequest req = new CloudchannelAccountsChannelPartnerLinksChannelPartnerRepricingConfigsListRequest("dolor") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "laboriosam";
                alt = AltEnum.PROTO;
                callback = "saepe";
                fields = "fuga";
                filter = "in";
                key = "corporis";
                oauthToken = "iste";
                pageSize = 437032L;
                pageToken = "saepe";
                prettyPrint = false;
                quotaUser = "quidem";
                uploadType = "architecto";
                uploadProtocol = "ipsa";
            }};            

            CloudchannelAccountsChannelPartnerLinksChannelPartnerRepricingConfigsListResponse res = sdk.accounts.cloudchannelAccountsChannelPartnerLinksChannelPartnerRepricingConfigsList(req, new CloudchannelAccountsChannelPartnerLinksChannelPartnerRepricingConfigsListSecurity("reiciendis", "est") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudChannelV1ListChannelPartnerRepricingConfigsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## cloudchannelAccountsChannelPartnerLinksCreate

Initiates a channel partner link between a distributor and a reseller, or between resellers in an n-tier reseller channel. Invited partners need to follow the invite_link_uri provided in the response to accept. After accepting the invitation, a link is set up between the two parties. You must be a distributor to call this method. Possible error codes: * PERMISSION_DENIED: The reseller account making the request is different from the reseller account in the API request. * INVALID_ARGUMENT: Required request parameters are missing or invalid. * ALREADY_EXISTS: The ChannelPartnerLink sent in the request already exists. * NOT_FOUND: No Cloud Identity customer exists for provided domain. * INTERNAL: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support. * UNKNOWN: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support. Return value: The new ChannelPartnerLink resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudchannelAccountsChannelPartnerLinksCreateRequest;
import org.openapis.openapi.models.operations.CloudchannelAccountsChannelPartnerLinksCreateResponse;
import org.openapis.openapi.models.operations.CloudchannelAccountsChannelPartnerLinksCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleCloudChannelV1ChannelPartnerLinkInput;
import org.openapis.openapi.models.shared.GoogleCloudChannelV1ChannelPartnerLinkLinkStateEnum;
import org.openapis.openapi.models.shared.GoogleCloudChannelV1CloudIdentityInfoCustomerTypeEnum;
import org.openapis.openapi.models.shared.GoogleCloudChannelV1CloudIdentityInfoInput;
import org.openapis.openapi.models.shared.GoogleCloudChannelV1EduData;
import org.openapis.openapi.models.shared.GoogleCloudChannelV1EduDataInstituteSizeEnum;
import org.openapis.openapi.models.shared.GoogleCloudChannelV1EduDataInstituteTypeEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudchannelAccountsChannelPartnerLinksCreateRequest req = new CloudchannelAccountsChannelPartnerLinksCreateRequest("mollitia") {{
                dollarXgafv = XgafvEnum.TWO;
                googleCloudChannelV1ChannelPartnerLinkInput = new GoogleCloudChannelV1ChannelPartnerLinkInput() {{
                    channelPartnerCloudIdentityInfo = new GoogleCloudChannelV1CloudIdentityInfoInput() {{
                        alternateEmail = "dolores";
                        customerType = GoogleCloudChannelV1CloudIdentityInfoCustomerTypeEnum.CUSTOMER_TYPE_UNSPECIFIED;
                        eduData = new GoogleCloudChannelV1EduData() {{
                            instituteSize = GoogleCloudChannelV1EduDataInstituteSizeEnum.SIZE101500;
                            instituteType = GoogleCloudChannelV1EduDataInstituteTypeEnum.INSTITUTE_TYPE_UNSPECIFIED;
                            website = "nobis";
                        }};;
                        languageCode = "enim";
                        phoneNumber = "omnis";
                    }};;
                    linkState = GoogleCloudChannelV1ChannelPartnerLinkLinkStateEnum.INVITED;
                    resellerCloudIdentityId = "minima";
                }};;
                accessToken = "excepturi";
                alt = AltEnum.JSON;
                callback = "iure";
                fields = "culpa";
                key = "doloribus";
                oauthToken = "sapiente";
                prettyPrint = false;
                quotaUser = "architecto";
                uploadType = "mollitia";
                uploadProtocol = "dolorem";
            }};            

            CloudchannelAccountsChannelPartnerLinksCreateResponse res = sdk.accounts.cloudchannelAccountsChannelPartnerLinksCreate(req, new CloudchannelAccountsChannelPartnerLinksCreateSecurity("culpa", "consequuntur") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudChannelV1ChannelPartnerLink != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## cloudchannelAccountsChannelPartnerLinksList

List ChannelPartnerLinks belonging to a distributor. You must be a distributor to call this method. Possible error codes: * PERMISSION_DENIED: The reseller account making the request is different from the reseller account in the API request. * INVALID_ARGUMENT: Required request parameters are missing or invalid. Return value: The list of the distributor account's ChannelPartnerLink resources.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudchannelAccountsChannelPartnerLinksListRequest;
import org.openapis.openapi.models.operations.CloudchannelAccountsChannelPartnerLinksListResponse;
import org.openapis.openapi.models.operations.CloudchannelAccountsChannelPartnerLinksListSecurity;
import org.openapis.openapi.models.operations.CloudchannelAccountsChannelPartnerLinksListViewEnum;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudchannelAccountsChannelPartnerLinksListRequest req = new CloudchannelAccountsChannelPartnerLinksListRequest("repellat") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "occaecati";
                alt = AltEnum.JSON;
                callback = "commodi";
                fields = "quam";
                key = "molestiae";
                oauthToken = "velit";
                pageSize = 623510L;
                pageToken = "quia";
                prettyPrint = false;
                quotaUser = "quis";
                uploadType = "vitae";
                uploadProtocol = "laborum";
                view = CloudchannelAccountsChannelPartnerLinksListViewEnum.BASIC;
            }};            

            CloudchannelAccountsChannelPartnerLinksListResponse res = sdk.accounts.cloudchannelAccountsChannelPartnerLinksList(req, new CloudchannelAccountsChannelPartnerLinksListSecurity("enim", "odit") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudChannelV1ListChannelPartnerLinksResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## cloudchannelAccountsCheckCloudIdentityAccountsExist

Confirms the existence of Cloud Identity accounts based on the domain and if the Cloud Identity accounts are owned by the reseller. Possible error codes: * PERMISSION_DENIED: The reseller account making the request is different from the reseller account in the API request. * INVALID_ARGUMENT: Required request parameters are missing or invalid. * INVALID_VALUE: Invalid domain value in the request. Return value: A list of CloudIdentityCustomerAccount resources for the domain (may be empty) Note: in the v1alpha1 version of the API, a NOT_FOUND error returns if no CloudIdentityCustomerAccount resources match the domain.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudchannelAccountsCheckCloudIdentityAccountsExistRequest;
import org.openapis.openapi.models.operations.CloudchannelAccountsCheckCloudIdentityAccountsExistResponse;
import org.openapis.openapi.models.operations.CloudchannelAccountsCheckCloudIdentityAccountsExistSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleCloudChannelV1CheckCloudIdentityAccountsExistRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudchannelAccountsCheckCloudIdentityAccountsExistRequest req = new CloudchannelAccountsCheckCloudIdentityAccountsExistRequest("quo") {{
                dollarXgafv = XgafvEnum.ONE;
                googleCloudChannelV1CheckCloudIdentityAccountsExistRequest = new GoogleCloudChannelV1CheckCloudIdentityAccountsExistRequest() {{
                    domain = "tenetur";
                }};;
                accessToken = "ipsam";
                alt = AltEnum.MEDIA;
                callback = "possimus";
                fields = "aut";
                key = "quasi";
                oauthToken = "error";
                prettyPrint = false;
                quotaUser = "temporibus";
                uploadType = "laborum";
                uploadProtocol = "quasi";
            }};            

            CloudchannelAccountsCheckCloudIdentityAccountsExistResponse res = sdk.accounts.cloudchannelAccountsCheckCloudIdentityAccountsExist(req, new CloudchannelAccountsCheckCloudIdentityAccountsExistSecurity("reiciendis", "voluptatibus") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudChannelV1CheckCloudIdentityAccountsExistResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## cloudchannelAccountsCustomersCreate

Creates a new Customer resource under the reseller or distributor account. Possible error codes: * PERMISSION_DENIED: The reseller account making the request is different from the reseller account in the API request. * INVALID_ARGUMENT: * Required request parameters are missing or invalid. * Domain field value doesn't match the primary email domain. Return value: The newly created Customer resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudchannelAccountsCustomersCreateRequest;
import org.openapis.openapi.models.operations.CloudchannelAccountsCustomersCreateResponse;
import org.openapis.openapi.models.operations.CloudchannelAccountsCustomersCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleCloudChannelV1CloudIdentityInfoCustomerTypeEnum;
import org.openapis.openapi.models.shared.GoogleCloudChannelV1CloudIdentityInfoInput;
import org.openapis.openapi.models.shared.GoogleCloudChannelV1ContactInfoInput;
import org.openapis.openapi.models.shared.GoogleCloudChannelV1CustomerInput;
import org.openapis.openapi.models.shared.GoogleCloudChannelV1EduData;
import org.openapis.openapi.models.shared.GoogleCloudChannelV1EduDataInstituteSizeEnum;
import org.openapis.openapi.models.shared.GoogleCloudChannelV1EduDataInstituteTypeEnum;
import org.openapis.openapi.models.shared.GoogleTypePostalAddress;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudchannelAccountsCustomersCreateRequest req = new CloudchannelAccountsCustomersCreateRequest("vero") {{
                dollarXgafv = XgafvEnum.ONE;
                googleCloudChannelV1CustomerInput = new GoogleCloudChannelV1CustomerInput() {{
                    alternateEmail = "praesentium";
                    channelPartnerId = "voluptatibus";
                    cloudIdentityInfo = new GoogleCloudChannelV1CloudIdentityInfoInput() {{
                        alternateEmail = "ipsa";
                        customerType = GoogleCloudChannelV1CloudIdentityInfoCustomerTypeEnum.DOMAIN;
                        eduData = new GoogleCloudChannelV1EduData() {{
                            instituteSize = GoogleCloudChannelV1EduDataInstituteSizeEnum.SIZE5011000;
                            instituteType = GoogleCloudChannelV1EduDataInstituteTypeEnum.UNIVERSITY;
                            website = "perferendis";
                        }};;
                        languageCode = "doloremque";
                        phoneNumber = "reprehenderit";
                    }};;
                    correlationId = "ut";
                    domain = "maiores";
                    languageCode = "dicta";
                    orgDisplayName = "corporis";
                    orgPostalAddress = new GoogleTypePostalAddress() {{
                        addressLines = new String[]{{
                            add("iusto"),
                            add("dicta"),
                        }};
                        administrativeArea = "harum";
                        languageCode = "enim";
                        locality = "accusamus";
                        organization = "commodi";
                        postalCode = "02655-8255";
                        recipients = new String[]{{
                            add("quasi"),
                            add("repudiandae"),
                            add("sint"),
                            add("veritatis"),
                        }};
                        regionCode = "itaque";
                        revision = 277718;
                        sortingCode = "enim";
                        sublocality = "consequatur";
                    }};;
                    primaryContactInfo = new GoogleCloudChannelV1ContactInfoInput() {{
                        email = "Roosevelt_Cole@hotmail.com";
                        firstName = "Ron";
                        lastName = "Green";
                        phone = "335-601-8301 x652";
                        title = "Miss";
                    }};;
                }};;
                accessToken = "tempore";
                alt = AltEnum.JSON;
                callback = "delectus";
                fields = "eum";
                key = "non";
                oauthToken = "eligendi";
                prettyPrint = false;
                quotaUser = "sint";
                uploadType = "aliquid";
                uploadProtocol = "provident";
            }};            

            CloudchannelAccountsCustomersCreateResponse res = sdk.accounts.cloudchannelAccountsCustomersCreate(req, new CloudchannelAccountsCustomersCreateSecurity("necessitatibus", "sint") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudChannelV1Customer != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## cloudchannelAccountsCustomersCustomerRepricingConfigsCreate

Creates a CustomerRepricingConfig. Call this method to set modifications for a specific customer's bill. You can only create configs if the RepricingConfig.effective_invoice_month is a future month. If needed, you can create a config for the current month, with some restrictions. When creating a config for a future month, make sure there are no existing configs for that RepricingConfig.effective_invoice_month. The following restrictions are for creating configs in the current month. * This functionality is reserved for recovering from an erroneous config, and should not be used for regular business cases. * The new config will not modify exports used with other configs. Changes to the config may be immediate, but may take up to 24 hours. * There is a limit of ten configs for any RepricingConfig.EntitlementGranularity.entitlement or RepricingConfig.effective_invoice_month. * The contained CustomerRepricingConfig.repricing_config vaule must be different from the value used in the current config for a RepricingConfig.EntitlementGranularity.entitlement. Possible Error Codes: * PERMISSION_DENIED: If the account making the request and the account being queried are different. * INVALID_ARGUMENT: Missing or invalid required parameters in the request. Also displays if the updated config is for the current month or past months. * NOT_FOUND: The CustomerRepricingConfig specified does not exist or is not associated with the given account. * INTERNAL: Any non-user error related to technical issues in the backend. In this case, contact Cloud Channel support. Return Value: If successful, the updated CustomerRepricingConfig resource, otherwise returns an error.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudchannelAccountsCustomersCustomerRepricingConfigsCreateRequest;
import org.openapis.openapi.models.operations.CloudchannelAccountsCustomersCustomerRepricingConfigsCreateResponse;
import org.openapis.openapi.models.operations.CloudchannelAccountsCustomersCustomerRepricingConfigsCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleCloudChannelV1ConditionalOverride;
import org.openapis.openapi.models.shared.GoogleCloudChannelV1ConditionalOverrideRebillingBasisEnum;
import org.openapis.openapi.models.shared.GoogleCloudChannelV1CustomerRepricingConfigInput;
import org.openapis.openapi.models.shared.GoogleCloudChannelV1PercentageAdjustment;
import org.openapis.openapi.models.shared.GoogleCloudChannelV1RepricingAdjustment;
import org.openapis.openapi.models.shared.GoogleCloudChannelV1RepricingCondition;
import org.openapis.openapi.models.shared.GoogleCloudChannelV1RepricingConfig;
import org.openapis.openapi.models.shared.GoogleCloudChannelV1RepricingConfigEntitlementGranularity;
import org.openapis.openapi.models.shared.GoogleCloudChannelV1RepricingConfigRebillingBasisEnum;
import org.openapis.openapi.models.shared.GoogleCloudChannelV1SkuGroupCondition;
import org.openapis.openapi.models.shared.GoogleTypeDate;
import org.openapis.openapi.models.shared.GoogleTypeDecimal;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudchannelAccountsCustomersCustomerRepricingConfigsCreateRequest req = new CloudchannelAccountsCustomersCustomerRepricingConfigsCreateRequest("officia") {{
                dollarXgafv = XgafvEnum.ONE;
                googleCloudChannelV1CustomerRepricingConfigInput = new GoogleCloudChannelV1CustomerRepricingConfigInput() {{
                    repricingConfig = new GoogleCloudChannelV1RepricingConfig() {{
                        adjustment = new GoogleCloudChannelV1RepricingAdjustment() {{
                            percentageAdjustment = new GoogleCloudChannelV1PercentageAdjustment() {{
                                percentage = new GoogleTypeDecimal() {{
                                    value = "debitis";
                                }};;
                            }};;
                        }};;
                        channelPartnerGranularity = new java.util.HashMap<String, Object>() {{
                            put("dolorum", "in");
                            put("in", "illum");
                            put("maiores", "rerum");
                            put("dicta", "magnam");
                        }};
                        conditionalOverrides = new org.openapis.openapi.models.shared.GoogleCloudChannelV1ConditionalOverride[]{{
                            add(new GoogleCloudChannelV1ConditionalOverride() {{
                                adjustment = new GoogleCloudChannelV1RepricingAdjustment() {{
                                    percentageAdjustment = new GoogleCloudChannelV1PercentageAdjustment() {{
                                        percentage = new GoogleTypeDecimal() {{
                                            value = "facere";
                                        }};
                                    }};
                                }};
                                rebillingBasis = GoogleCloudChannelV1ConditionalOverrideRebillingBasisEnum.COST_AT_LIST;
                                repricingCondition = new GoogleCloudChannelV1RepricingCondition() {{
                                    skuGroupCondition = new GoogleCloudChannelV1SkuGroupCondition() {{
                                        skuGroup = "aliquid";
                                    }};
                                }};
                            }}),
                            add(new GoogleCloudChannelV1ConditionalOverride() {{
                                adjustment = new GoogleCloudChannelV1RepricingAdjustment() {{
                                    percentageAdjustment = new GoogleCloudChannelV1PercentageAdjustment() {{
                                        percentage = new GoogleTypeDecimal() {{
                                            value = "laborum";
                                        }};
                                    }};
                                }};
                                rebillingBasis = GoogleCloudChannelV1ConditionalOverrideRebillingBasisEnum.DIRECT_CUSTOMER_COST;
                                repricingCondition = new GoogleCloudChannelV1RepricingCondition() {{
                                    skuGroupCondition = new GoogleCloudChannelV1SkuGroupCondition() {{
                                        skuGroup = "non";
                                    }};
                                }};
                            }}),
                            add(new GoogleCloudChannelV1ConditionalOverride() {{
                                adjustment = new GoogleCloudChannelV1RepricingAdjustment() {{
                                    percentageAdjustment = new GoogleCloudChannelV1PercentageAdjustment() {{
                                        percentage = new GoogleTypeDecimal() {{
                                            value = "occaecati";
                                        }};
                                    }};
                                }};
                                rebillingBasis = GoogleCloudChannelV1ConditionalOverrideRebillingBasisEnum.REBILLING_BASIS_UNSPECIFIED;
                                repricingCondition = new GoogleCloudChannelV1RepricingCondition() {{
                                    skuGroupCondition = new GoogleCloudChannelV1SkuGroupCondition() {{
                                        skuGroup = "accusamus";
                                    }};
                                }};
                            }}),
                            add(new GoogleCloudChannelV1ConditionalOverride() {{
                                adjustment = new GoogleCloudChannelV1RepricingAdjustment() {{
                                    percentageAdjustment = new GoogleCloudChannelV1PercentageAdjustment() {{
                                        percentage = new GoogleTypeDecimal() {{
                                            value = "delectus";
                                        }};
                                    }};
                                }};
                                rebillingBasis = GoogleCloudChannelV1ConditionalOverrideRebillingBasisEnum.DIRECT_CUSTOMER_COST;
                                repricingCondition = new GoogleCloudChannelV1RepricingCondition() {{
                                    skuGroupCondition = new GoogleCloudChannelV1SkuGroupCondition() {{
                                        skuGroup = "provident";
                                    }};
                                }};
                            }}),
                        }};
                        effectiveInvoiceMonth = new GoogleTypeDate() {{
                            day = 725255;
                            month = 659669;
                            year = 501324;
                        }};;
                        entitlementGranularity = new GoogleCloudChannelV1RepricingConfigEntitlementGranularity() {{
                            entitlement = "deleniti";
                        }};;
                        rebillingBasis = GoogleCloudChannelV1RepricingConfigRebillingBasisEnum.DIRECT_CUSTOMER_COST;
                    }};;
                }};;
                accessToken = "amet";
                alt = AltEnum.MEDIA;
                callback = "nisi";
                fields = "vel";
                key = "natus";
                oauthToken = "omnis";
                prettyPrint = false;
                quotaUser = "molestiae";
                uploadType = "perferendis";
                uploadProtocol = "nihil";
            }};            

            CloudchannelAccountsCustomersCustomerRepricingConfigsCreateResponse res = sdk.accounts.cloudchannelAccountsCustomersCustomerRepricingConfigsCreate(req, new CloudchannelAccountsCustomersCustomerRepricingConfigsCreateSecurity("magnam", "distinctio") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudChannelV1CustomerRepricingConfig != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## cloudchannelAccountsCustomersCustomerRepricingConfigsList

Lists information about how a Reseller modifies their bill before sending it to a Customer. Possible Error Codes: * PERMISSION_DENIED: If the account making the request and the account being queried are different. * NOT_FOUND: The CustomerRepricingConfig specified does not exist or is not associated with the given account. * INTERNAL: Any non-user error related to technical issues in the backend. In this case, contact Cloud Channel support. Return Value: If successful, the CustomerRepricingConfig resources. The data for each resource is displayed in the ascending order of: * Customer ID * RepricingConfig.EntitlementGranularity.entitlement * RepricingConfig.effective_invoice_month * CustomerRepricingConfig.update_time If unsuccessful, returns an error.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudchannelAccountsCustomersCustomerRepricingConfigsListRequest;
import org.openapis.openapi.models.operations.CloudchannelAccountsCustomersCustomerRepricingConfigsListResponse;
import org.openapis.openapi.models.operations.CloudchannelAccountsCustomersCustomerRepricingConfigsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudchannelAccountsCustomersCustomerRepricingConfigsListRequest req = new CloudchannelAccountsCustomersCustomerRepricingConfigsListRequest("id") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "labore";
                alt = AltEnum.MEDIA;
                callback = "natus";
                fields = "nobis";
                filter = "eum";
                key = "vero";
                oauthToken = "aspernatur";
                pageSize = 102863L;
                pageToken = "magnam";
                prettyPrint = false;
                quotaUser = "et";
                uploadType = "excepturi";
                uploadProtocol = "ullam";
            }};            

            CloudchannelAccountsCustomersCustomerRepricingConfigsListResponse res = sdk.accounts.cloudchannelAccountsCustomersCustomerRepricingConfigsList(req, new CloudchannelAccountsCustomersCustomerRepricingConfigsListSecurity("provident", "quos") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudChannelV1ListCustomerRepricingConfigsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## cloudchannelAccountsCustomersCustomerRepricingConfigsPatch

Updates a CustomerRepricingConfig. Call this method to set modifications for a specific customer's bill. This method overwrites the existing CustomerRepricingConfig. You can only update configs if the RepricingConfig.effective_invoice_month is a future month. To make changes to configs for the current month, use CreateCustomerRepricingConfig, taking note of its restrictions. You cannot update the RepricingConfig.effective_invoice_month. When updating a config in the future: * This config must already exist. Possible Error Codes: * PERMISSION_DENIED: If the account making the request and the account being queried are different. * INVALID_ARGUMENT: Missing or invalid required parameters in the request. Also displays if the updated config is for the current month or past months. * NOT_FOUND: The CustomerRepricingConfig specified does not exist or is not associated with the given account. * INTERNAL: Any non-user error related to technical issues in the backend. In this case, contact Cloud Channel support. Return Value: If successful, the updated CustomerRepricingConfig resource, otherwise returns an error.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudchannelAccountsCustomersCustomerRepricingConfigsPatchRequest;
import org.openapis.openapi.models.operations.CloudchannelAccountsCustomersCustomerRepricingConfigsPatchResponse;
import org.openapis.openapi.models.operations.CloudchannelAccountsCustomersCustomerRepricingConfigsPatchSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleCloudChannelV1ConditionalOverride;
import org.openapis.openapi.models.shared.GoogleCloudChannelV1ConditionalOverrideRebillingBasisEnum;
import org.openapis.openapi.models.shared.GoogleCloudChannelV1CustomerRepricingConfigInput;
import org.openapis.openapi.models.shared.GoogleCloudChannelV1PercentageAdjustment;
import org.openapis.openapi.models.shared.GoogleCloudChannelV1RepricingAdjustment;
import org.openapis.openapi.models.shared.GoogleCloudChannelV1RepricingCondition;
import org.openapis.openapi.models.shared.GoogleCloudChannelV1RepricingConfig;
import org.openapis.openapi.models.shared.GoogleCloudChannelV1RepricingConfigEntitlementGranularity;
import org.openapis.openapi.models.shared.GoogleCloudChannelV1RepricingConfigRebillingBasisEnum;
import org.openapis.openapi.models.shared.GoogleCloudChannelV1SkuGroupCondition;
import org.openapis.openapi.models.shared.GoogleTypeDate;
import org.openapis.openapi.models.shared.GoogleTypeDecimal;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudchannelAccountsCustomersCustomerRepricingConfigsPatchRequest req = new CloudchannelAccountsCustomersCustomerRepricingConfigsPatchRequest("sint") {{
                dollarXgafv = XgafvEnum.ONE;
                googleCloudChannelV1CustomerRepricingConfigInput = new GoogleCloudChannelV1CustomerRepricingConfigInput() {{
                    repricingConfig = new GoogleCloudChannelV1RepricingConfig() {{
                        adjustment = new GoogleCloudChannelV1RepricingAdjustment() {{
                            percentageAdjustment = new GoogleCloudChannelV1PercentageAdjustment() {{
                                percentage = new GoogleTypeDecimal() {{
                                    value = "mollitia";
                                }};;
                            }};;
                        }};;
                        channelPartnerGranularity = new java.util.HashMap<String, Object>() {{
                            put("mollitia", "ad");
                            put("eum", "dolor");
                            put("necessitatibus", "odit");
                            put("nemo", "quasi");
                        }};
                        conditionalOverrides = new org.openapis.openapi.models.shared.GoogleCloudChannelV1ConditionalOverride[]{{
                            add(new GoogleCloudChannelV1ConditionalOverride() {{
                                adjustment = new GoogleCloudChannelV1RepricingAdjustment() {{
                                    percentageAdjustment = new GoogleCloudChannelV1PercentageAdjustment() {{
                                        percentage = new GoogleTypeDecimal() {{
                                            value = "doloribus";
                                        }};
                                    }};
                                }};
                                rebillingBasis = GoogleCloudChannelV1ConditionalOverrideRebillingBasisEnum.DIRECT_CUSTOMER_COST;
                                repricingCondition = new GoogleCloudChannelV1RepricingCondition() {{
                                    skuGroupCondition = new GoogleCloudChannelV1SkuGroupCondition() {{
                                        skuGroup = "eius";
                                    }};
                                }};
                            }}),
                            add(new GoogleCloudChannelV1ConditionalOverride() {{
                                adjustment = new GoogleCloudChannelV1RepricingAdjustment() {{
                                    percentageAdjustment = new GoogleCloudChannelV1PercentageAdjustment() {{
                                        percentage = new GoogleTypeDecimal() {{
                                            value = "maxime";
                                        }};
                                    }};
                                }};
                                rebillingBasis = GoogleCloudChannelV1ConditionalOverrideRebillingBasisEnum.COST_AT_LIST;
                                repricingCondition = new GoogleCloudChannelV1RepricingCondition() {{
                                    skuGroupCondition = new GoogleCloudChannelV1SkuGroupCondition() {{
                                        skuGroup = "facilis";
                                    }};
                                }};
                            }}),
                        }};
                        effectiveInvoiceMonth = new GoogleTypeDate() {{
                            day = 447926;
                            month = 100226;
                            year = 99569;
                        }};;
                        entitlementGranularity = new GoogleCloudChannelV1RepricingConfigEntitlementGranularity() {{
                            entitlement = "repudiandae";
                        }};;
                        rebillingBasis = GoogleCloudChannelV1RepricingConfigRebillingBasisEnum.COST_AT_LIST;
                    }};;
                }};;
                accessToken = "expedita";
                alt = AltEnum.MEDIA;
                callback = "repellat";
                fields = "quibusdam";
                key = "sed";
                oauthToken = "saepe";
                prettyPrint = false;
                quotaUser = "pariatur";
                updateMask = "accusantium";
                uploadType = "consequuntur";
                uploadProtocol = "praesentium";
            }};            

            CloudchannelAccountsCustomersCustomerRepricingConfigsPatchResponse res = sdk.accounts.cloudchannelAccountsCustomersCustomerRepricingConfigsPatch(req, new CloudchannelAccountsCustomersCustomerRepricingConfigsPatchSecurity("natus", "magni") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudChannelV1CustomerRepricingConfig != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## cloudchannelAccountsCustomersEntitlementsActivate

Activates a previously suspended entitlement. Entitlements suspended for pending ToS acceptance can't be activated using this method. An entitlement activation is a long-running operation and it updates the state of the customer entitlement. Possible error codes: * PERMISSION_DENIED: The reseller account making the request is different from the reseller account in the API request. * INVALID_ARGUMENT: Required request parameters are missing or invalid. * NOT_FOUND: Entitlement resource not found. * SUSPENSION_NOT_RESELLER_INITIATED: Can only activate reseller-initiated suspensions and entitlements that have accepted the TOS. * NOT_SUSPENDED: Can only activate suspended entitlements not in an ACTIVE state. * INTERNAL: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support. * UNKNOWN: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support. Return value: The ID of a long-running operation. To get the results of the operation, call the GetOperation method of CloudChannelOperationsService. The Operation metadata will contain an instance of OperationMetadata.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudchannelAccountsCustomersEntitlementsActivateRequest;
import org.openapis.openapi.models.operations.CloudchannelAccountsCustomersEntitlementsActivateResponse;
import org.openapis.openapi.models.operations.CloudchannelAccountsCustomersEntitlementsActivateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleCloudChannelV1ActivateEntitlementRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudchannelAccountsCustomersEntitlementsActivateRequest req = new CloudchannelAccountsCustomersEntitlementsActivateRequest("sunt") {{
                dollarXgafv = XgafvEnum.TWO;
                googleCloudChannelV1ActivateEntitlementRequest = new GoogleCloudChannelV1ActivateEntitlementRequest() {{
                    requestId = "illum";
                }};;
                accessToken = "pariatur";
                alt = AltEnum.PROTO;
                callback = "ea";
                fields = "excepturi";
                key = "odit";
                oauthToken = "ea";
                prettyPrint = false;
                quotaUser = "accusantium";
                uploadType = "ab";
                uploadProtocol = "maiores";
            }};            

            CloudchannelAccountsCustomersEntitlementsActivateResponse res = sdk.accounts.cloudchannelAccountsCustomersEntitlementsActivate(req, new CloudchannelAccountsCustomersEntitlementsActivateSecurity("quidem", "ipsam") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleLongrunningOperation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## cloudchannelAccountsCustomersEntitlementsChangeOffer

Updates the Offer for an existing customer entitlement. An entitlement update is a long-running operation and it updates the entitlement as a result of fulfillment. Possible error codes: * PERMISSION_DENIED: The customer doesn't belong to the reseller. * INVALID_ARGUMENT: Required request parameters are missing or invalid. * NOT_FOUND: Offer or Entitlement resource not found. * INTERNAL: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support. * UNKNOWN: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support. Return value: The ID of a long-running operation. To get the results of the operation, call the GetOperation method of CloudChannelOperationsService. The Operation metadata will contain an instance of OperationMetadata.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudchannelAccountsCustomersEntitlementsChangeOfferRequest;
import org.openapis.openapi.models.operations.CloudchannelAccountsCustomersEntitlementsChangeOfferResponse;
import org.openapis.openapi.models.operations.CloudchannelAccountsCustomersEntitlementsChangeOfferSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleCloudChannelV1ChangeOfferRequestInput;
import org.openapis.openapi.models.shared.GoogleCloudChannelV1ParameterInput;
import org.openapis.openapi.models.shared.GoogleCloudChannelV1Value;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudchannelAccountsCustomersEntitlementsChangeOfferRequest req = new CloudchannelAccountsCustomersEntitlementsChangeOfferRequest("voluptate") {{
                dollarXgafv = XgafvEnum.ONE;
                googleCloudChannelV1ChangeOfferRequestInput = new GoogleCloudChannelV1ChangeOfferRequestInput() {{
                    offer = "nam";
                    parameters = new org.openapis.openapi.models.shared.GoogleCloudChannelV1ParameterInput[]{{
                        add(new GoogleCloudChannelV1ParameterInput() {{
                            name = "Dr. Herman Wolf";
                            value = new GoogleCloudChannelV1Value() {{
                                boolValue = false;
                                doubleValue = 117.14;
                                int64Value = "cumque";
                                protoValue = new java.util.HashMap<String, Object>() {{
                                    put("hic", "libero");
                                    put("nobis", "dolores");
                                }};
                                stringValue = "quis";
                            }};
                        }}),
                    }};
                    purchaseOrderId = "totam";
                    requestId = "dignissimos";
                }};;
                accessToken = "eaque";
                alt = AltEnum.MEDIA;
                callback = "nesciunt";
                fields = "eos";
                key = "perferendis";
                oauthToken = "dolores";
                prettyPrint = false;
                quotaUser = "minus";
                uploadType = "quam";
                uploadProtocol = "dolor";
            }};            

            CloudchannelAccountsCustomersEntitlementsChangeOfferResponse res = sdk.accounts.cloudchannelAccountsCustomersEntitlementsChangeOffer(req, new CloudchannelAccountsCustomersEntitlementsChangeOfferSecurity("vero", "nostrum") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleLongrunningOperation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## cloudchannelAccountsCustomersEntitlementsChangeParameters

Change parameters of the entitlement. An entitlement update is a long-running operation and it updates the entitlement as a result of fulfillment. Possible error codes: * PERMISSION_DENIED: The customer doesn't belong to the reseller. * INVALID_ARGUMENT: Required request parameters are missing or invalid. For example, the number of seats being changed is greater than the allowed number of max seats, or decreasing seats for a commitment based plan. * NOT_FOUND: Entitlement resource not found. * INTERNAL: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support. * UNKNOWN: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support. Return value: The ID of a long-running operation. To get the results of the operation, call the GetOperation method of CloudChannelOperationsService. The Operation metadata will contain an instance of OperationMetadata.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudchannelAccountsCustomersEntitlementsChangeParametersRequest;
import org.openapis.openapi.models.operations.CloudchannelAccountsCustomersEntitlementsChangeParametersResponse;
import org.openapis.openapi.models.operations.CloudchannelAccountsCustomersEntitlementsChangeParametersSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleCloudChannelV1ChangeParametersRequestInput;
import org.openapis.openapi.models.shared.GoogleCloudChannelV1ParameterInput;
import org.openapis.openapi.models.shared.GoogleCloudChannelV1Value;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudchannelAccountsCustomersEntitlementsChangeParametersRequest req = new CloudchannelAccountsCustomersEntitlementsChangeParametersRequest("hic") {{
                dollarXgafv = XgafvEnum.TWO;
                googleCloudChannelV1ChangeParametersRequestInput = new GoogleCloudChannelV1ChangeParametersRequestInput() {{
                    parameters = new org.openapis.openapi.models.shared.GoogleCloudChannelV1ParameterInput[]{{
                        add(new GoogleCloudChannelV1ParameterInput() {{
                            name = "Freddie Bartoletti";
                            value = new GoogleCloudChannelV1Value() {{
                                boolValue = false;
                                doubleValue = 5000.26;
                                int64Value = "error";
                                protoValue = new java.util.HashMap<String, Object>() {{
                                    put("occaecati", "rerum");
                                }};
                                stringValue = "adipisci";
                            }};
                        }}),
                        add(new GoogleCloudChannelV1ParameterInput() {{
                            name = "Merle Gleichner";
                            value = new GoogleCloudChannelV1Value() {{
                                boolValue = false;
                                doubleValue = 5356.33;
                                int64Value = "pariatur";
                                protoValue = new java.util.HashMap<String, Object>() {{
                                    put("nobis", "libero");
                                    put("delectus", "quaerat");
                                    put("quos", "aliquid");
                                }};
                                stringValue = "dolorem";
                            }};
                        }}),
                        add(new GoogleCloudChannelV1ParameterInput() {{
                            name = "Rosa Dibbert";
                            value = new GoogleCloudChannelV1Value() {{
                                boolValue = false;
                                doubleValue = 5695.74;
                                int64Value = "cum";
                                protoValue = new java.util.HashMap<String, Object>() {{
                                    put("dignissimos", "reiciendis");
                                    put("amet", "dolorum");
                                }};
                                stringValue = "numquam";
                            }};
                        }}),
                    }};
                    purchaseOrderId = "veritatis";
                    requestId = "ipsa";
                }};;
                accessToken = "ipsa";
                alt = AltEnum.MEDIA;
                callback = "odio";
                fields = "quaerat";
                key = "accusamus";
                oauthToken = "quidem";
                prettyPrint = false;
                quotaUser = "voluptatibus";
                uploadType = "voluptas";
                uploadProtocol = "natus";
            }};            

            CloudchannelAccountsCustomersEntitlementsChangeParametersResponse res = sdk.accounts.cloudchannelAccountsCustomersEntitlementsChangeParameters(req, new CloudchannelAccountsCustomersEntitlementsChangeParametersSecurity("eos", "atque") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleLongrunningOperation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## cloudchannelAccountsCustomersEntitlementsChangeRenewalSettings

Updates the renewal settings for an existing customer entitlement. An entitlement update is a long-running operation and it updates the entitlement as a result of fulfillment. Possible error codes: * PERMISSION_DENIED: The customer doesn't belong to the reseller. * INVALID_ARGUMENT: Required request parameters are missing or invalid. * NOT_FOUND: Entitlement resource not found. * NOT_COMMITMENT_PLAN: Renewal Settings are only applicable for a commitment plan. Can't enable or disable renewals for non-commitment plans. * INTERNAL: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support. * UNKNOWN: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support. Return value: The ID of a long-running operation. To get the results of the operation, call the GetOperation method of CloudChannelOperationsService. The Operation metadata will contain an instance of OperationMetadata.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudchannelAccountsCustomersEntitlementsChangeRenewalSettingsRequest;
import org.openapis.openapi.models.operations.CloudchannelAccountsCustomersEntitlementsChangeRenewalSettingsResponse;
import org.openapis.openapi.models.operations.CloudchannelAccountsCustomersEntitlementsChangeRenewalSettingsSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleCloudChannelV1ChangeRenewalSettingsRequest;
import org.openapis.openapi.models.shared.GoogleCloudChannelV1Period;
import org.openapis.openapi.models.shared.GoogleCloudChannelV1PeriodPeriodTypeEnum;
import org.openapis.openapi.models.shared.GoogleCloudChannelV1RenewalSettings;
import org.openapis.openapi.models.shared.GoogleCloudChannelV1RenewalSettingsPaymentPlanEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudchannelAccountsCustomersEntitlementsChangeRenewalSettingsRequest req = new CloudchannelAccountsCustomersEntitlementsChangeRenewalSettingsRequest("sit") {{
                dollarXgafv = XgafvEnum.TWO;
                googleCloudChannelV1ChangeRenewalSettingsRequest = new GoogleCloudChannelV1ChangeRenewalSettingsRequest() {{
                    renewalSettings = new GoogleCloudChannelV1RenewalSettings() {{
                        enableRenewal = false;
                        paymentCycle = new GoogleCloudChannelV1Period() {{
                            duration = 67249;
                            periodType = GoogleCloudChannelV1PeriodPeriodTypeEnum.MONTH;
                        }};;
                        paymentPlan = GoogleCloudChannelV1RenewalSettingsPaymentPlanEnum.TRIAL;
                        resizeUnitCount = false;
                    }};;
                    requestId = "iusto";
                }};;
                accessToken = "voluptate";
                alt = AltEnum.PROTO;
                callback = "deleniti";
                fields = "omnis";
                key = "necessitatibus";
                oauthToken = "distinctio";
                prettyPrint = false;
                quotaUser = "asperiores";
                uploadType = "nihil";
                uploadProtocol = "ipsum";
            }};            

            CloudchannelAccountsCustomersEntitlementsChangeRenewalSettingsResponse res = sdk.accounts.cloudchannelAccountsCustomersEntitlementsChangeRenewalSettings(req, new CloudchannelAccountsCustomersEntitlementsChangeRenewalSettingsSecurity("voluptate", "id") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleLongrunningOperation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## cloudchannelAccountsCustomersEntitlementsCreate

Creates an entitlement for a customer. Possible error codes: * PERMISSION_DENIED: The customer doesn't belong to the reseller. * INVALID_ARGUMENT: * Required request parameters are missing or invalid. * There is already a customer entitlement for a SKU from the same product family. * INVALID_VALUE: Make sure the OfferId is valid. If it is, contact Google Channel support for further troubleshooting. * NOT_FOUND: The customer or offer resource was not found. * ALREADY_EXISTS: * The SKU was already purchased for the customer. * The customer's primary email already exists. Retry after changing the customer's primary contact email. * CONDITION_NOT_MET or FAILED_PRECONDITION: * The domain required for purchasing a SKU has not been verified. * A pre-requisite SKU required to purchase an Add-On SKU is missing. For example, Google Workspace Business Starter is required to purchase Vault or Drive. * (Developer accounts only) Reseller and resold domain must meet the following naming requirements: * Domain names must start with goog-test. * Domain names must include the reseller domain. * INTERNAL: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support. * UNKNOWN: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support. Return value: The ID of a long-running operation. To get the results of the operation, call the GetOperation method of CloudChannelOperationsService. The Operation metadata will contain an instance of OperationMetadata.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudchannelAccountsCustomersEntitlementsCreateRequest;
import org.openapis.openapi.models.operations.CloudchannelAccountsCustomersEntitlementsCreateResponse;
import org.openapis.openapi.models.operations.CloudchannelAccountsCustomersEntitlementsCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleCloudChannelV1AssociationInfo;
import org.openapis.openapi.models.shared.GoogleCloudChannelV1CommitmentSettingsInput;
import org.openapis.openapi.models.shared.GoogleCloudChannelV1CreateEntitlementRequestInput;
import org.openapis.openapi.models.shared.GoogleCloudChannelV1EntitlementInput;
import org.openapis.openapi.models.shared.GoogleCloudChannelV1ParameterInput;
import org.openapis.openapi.models.shared.GoogleCloudChannelV1Period;
import org.openapis.openapi.models.shared.GoogleCloudChannelV1PeriodPeriodTypeEnum;
import org.openapis.openapi.models.shared.GoogleCloudChannelV1RenewalSettings;
import org.openapis.openapi.models.shared.GoogleCloudChannelV1RenewalSettingsPaymentPlanEnum;
import org.openapis.openapi.models.shared.GoogleCloudChannelV1TrialSettings;
import org.openapis.openapi.models.shared.GoogleCloudChannelV1Value;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudchannelAccountsCustomersEntitlementsCreateRequest req = new CloudchannelAccountsCustomersEntitlementsCreateRequest("saepe") {{
                dollarXgafv = XgafvEnum.ONE;
                googleCloudChannelV1CreateEntitlementRequestInput = new GoogleCloudChannelV1CreateEntitlementRequestInput() {{
                    entitlement = new GoogleCloudChannelV1EntitlementInput() {{
                        associationInfo = new GoogleCloudChannelV1AssociationInfo() {{
                            baseEntitlement = "aspernatur";
                        }};;
                        billingAccount = "perferendis";
                        commitmentSettings = new GoogleCloudChannelV1CommitmentSettingsInput() {{
                            renewalSettings = new GoogleCloudChannelV1RenewalSettings() {{
                                enableRenewal = false;
                                paymentCycle = new GoogleCloudChannelV1Period() {{
                                    duration = 229219;
                                    periodType = GoogleCloudChannelV1PeriodPeriodTypeEnum.YEAR;
                                }};;
                                paymentPlan = GoogleCloudChannelV1RenewalSettingsPaymentPlanEnum.OFFLINE;
                                resizeUnitCount = false;
                            }};;
                        }};;
                        offer = "ad";
                        parameters = new org.openapis.openapi.models.shared.GoogleCloudChannelV1ParameterInput[]{{
                            add(new GoogleCloudChannelV1ParameterInput() {{
                                name = "Rosie McKenzie";
                                value = new GoogleCloudChannelV1Value() {{
                                    boolValue = false;
                                    doubleValue = 5197.11;
                                    int64Value = "similique";
                                    protoValue = new java.util.HashMap<String, Object>() {{
                                        put("at", "quaerat");
                                    }};
                                    stringValue = "tempora";
                                }};
                            }}),
                            add(new GoogleCloudChannelV1ParameterInput() {{
                                name = "Bernadette Torp";
                                value = new GoogleCloudChannelV1Value() {{
                                    boolValue = false;
                                    doubleValue = 9527.92;
                                    int64Value = "esse";
                                    protoValue = new java.util.HashMap<String, Object>() {{
                                        put("iusto", "ipsum");
                                        put("quisquam", "tenetur");
                                        put("amet", "tempore");
                                    }};
                                    stringValue = "accusamus";
                                }};
                            }}),
                            add(new GoogleCloudChannelV1ParameterInput() {{
                                name = "Darlene Effertz";
                                value = new GoogleCloudChannelV1Value() {{
                                    boolValue = false;
                                    doubleValue = 4717.52;
                                    int64Value = "sit";
                                    protoValue = new java.util.HashMap<String, Object>() {{
                                        put("neque", "sed");
                                        put("vel", "libero");
                                        put("voluptas", "deserunt");
                                    }};
                                    stringValue = "quam";
                                }};
                            }}),
                            add(new GoogleCloudChannelV1ParameterInput() {{
                                name = "Amber Dibbert";
                                value = new GoogleCloudChannelV1Value() {{
                                    boolValue = false;
                                    doubleValue = 8638.56;
                                    int64Value = "soluta";
                                    protoValue = new java.util.HashMap<String, Object>() {{
                                        put("laborum", "totam");
                                    }};
                                    stringValue = "incidunt";
                                }};
                            }}),
                        }};
                        purchaseOrderId = "aspernatur";
                        trialSettings = new GoogleCloudChannelV1TrialSettings() {{
                            endTime = "dolores";
                            trial = false;
                        }};;
                    }};;
                    requestId = "distinctio";
                }};;
                accessToken = "facilis";
                alt = AltEnum.MEDIA;
                callback = "quam";
                fields = "molestias";
                key = "temporibus";
                oauthToken = "qui";
                prettyPrint = false;
                quotaUser = "neque";
                uploadType = "fugit";
                uploadProtocol = "magni";
            }};            

            CloudchannelAccountsCustomersEntitlementsCreateResponse res = sdk.accounts.cloudchannelAccountsCustomersEntitlementsCreate(req, new CloudchannelAccountsCustomersEntitlementsCreateSecurity("odio", "sunt") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleLongrunningOperation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## cloudchannelAccountsCustomersEntitlementsList

Lists Entitlements belonging to a customer. Possible error codes: * PERMISSION_DENIED: The customer doesn't belong to the reseller. * INVALID_ARGUMENT: Required request parameters are missing or invalid. Return value: A list of the customer's Entitlements.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudchannelAccountsCustomersEntitlementsListRequest;
import org.openapis.openapi.models.operations.CloudchannelAccountsCustomersEntitlementsListResponse;
import org.openapis.openapi.models.operations.CloudchannelAccountsCustomersEntitlementsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudchannelAccountsCustomersEntitlementsListRequest req = new CloudchannelAccountsCustomersEntitlementsListRequest("ullam") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "hic";
                alt = AltEnum.JSON;
                callback = "cumque";
                fields = "soluta";
                key = "nobis";
                oauthToken = "et";
                pageSize = 903720L;
                pageToken = "ipsum";
                prettyPrint = false;
                quotaUser = "veritatis";
                uploadType = "nobis";
                uploadProtocol = "quos";
            }};            

            CloudchannelAccountsCustomersEntitlementsListResponse res = sdk.accounts.cloudchannelAccountsCustomersEntitlementsList(req, new CloudchannelAccountsCustomersEntitlementsListSecurity("tempore", "cupiditate") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudChannelV1ListEntitlementsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## cloudchannelAccountsCustomersEntitlementsListEntitlementChanges

List entitlement history. Possible error codes: * PERMISSION_DENIED: The reseller account making the request and the provided reseller account are different. * INVALID_ARGUMENT: Missing or invalid required fields in the request. * NOT_FOUND: The parent resource doesn't exist. Usually the result of an invalid name parameter. * INTERNAL: Any non-user error related to a technical issue in the backend. In this case, contact CloudChannel support. * UNKNOWN: Any non-user error related to a technical issue in the backend. In this case, contact Cloud Channel support. Return value: List of EntitlementChanges.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudchannelAccountsCustomersEntitlementsListEntitlementChangesRequest;
import org.openapis.openapi.models.operations.CloudchannelAccountsCustomersEntitlementsListEntitlementChangesResponse;
import org.openapis.openapi.models.operations.CloudchannelAccountsCustomersEntitlementsListEntitlementChangesSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudchannelAccountsCustomersEntitlementsListEntitlementChangesRequest req = new CloudchannelAccountsCustomersEntitlementsListEntitlementChangesRequest("aperiam") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "dolorem";
                alt = AltEnum.JSON;
                callback = "labore";
                fields = "adipisci";
                filter = "dolorum";
                key = "architecto";
                oauthToken = "quae";
                pageSize = 16429L;
                pageToken = "quas";
                prettyPrint = false;
                quotaUser = "itaque";
                uploadType = "consequatur";
                uploadProtocol = "est";
            }};            

            CloudchannelAccountsCustomersEntitlementsListEntitlementChangesResponse res = sdk.accounts.cloudchannelAccountsCustomersEntitlementsListEntitlementChanges(req, new CloudchannelAccountsCustomersEntitlementsListEntitlementChangesSecurity("repellendus", "porro") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudChannelV1ListEntitlementChangesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## cloudchannelAccountsCustomersEntitlementsLookupOffer

Returns the requested Offer resource. Possible error codes: * PERMISSION_DENIED: The entitlement doesn't belong to the reseller. * INVALID_ARGUMENT: Required request parameters are missing or invalid. * NOT_FOUND: Entitlement or offer was not found. Return value: The Offer resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudchannelAccountsCustomersEntitlementsLookupOfferRequest;
import org.openapis.openapi.models.operations.CloudchannelAccountsCustomersEntitlementsLookupOfferResponse;
import org.openapis.openapi.models.operations.CloudchannelAccountsCustomersEntitlementsLookupOfferSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudchannelAccountsCustomersEntitlementsLookupOfferRequest req = new CloudchannelAccountsCustomersEntitlementsLookupOfferRequest("doloribus") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "facilis";
                alt = AltEnum.MEDIA;
                callback = "qui";
                fields = "quae";
                key = "laudantium";
                oauthToken = "odio";
                prettyPrint = false;
                quotaUser = "occaecati";
                uploadType = "voluptatibus";
                uploadProtocol = "quisquam";
            }};            

            CloudchannelAccountsCustomersEntitlementsLookupOfferResponse res = sdk.accounts.cloudchannelAccountsCustomersEntitlementsLookupOffer(req, new CloudchannelAccountsCustomersEntitlementsLookupOfferSecurity("vero", "omnis") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudChannelV1Offer != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## cloudchannelAccountsCustomersEntitlementsStartPaidService

Starts paid service for a trial entitlement. Starts paid service for a trial entitlement immediately. This method is only applicable if a plan is set up for a trial entitlement but has some trial days remaining. Possible error codes: * PERMISSION_DENIED: The customer doesn't belong to the reseller. * INVALID_ARGUMENT: Required request parameters are missing or invalid. * NOT_FOUND: Entitlement resource not found. * FAILED_PRECONDITION/NOT_IN_TRIAL: This method only works for entitlement on trial plans. * INTERNAL: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support. * UNKNOWN: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support. Return value: The ID of a long-running operation. To get the results of the operation, call the GetOperation method of CloudChannelOperationsService. The Operation metadata will contain an instance of OperationMetadata.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudchannelAccountsCustomersEntitlementsStartPaidServiceRequest;
import org.openapis.openapi.models.operations.CloudchannelAccountsCustomersEntitlementsStartPaidServiceResponse;
import org.openapis.openapi.models.operations.CloudchannelAccountsCustomersEntitlementsStartPaidServiceSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleCloudChannelV1StartPaidServiceRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudchannelAccountsCustomersEntitlementsStartPaidServiceRequest req = new CloudchannelAccountsCustomersEntitlementsStartPaidServiceRequest("quis") {{
                dollarXgafv = XgafvEnum.ONE;
                googleCloudChannelV1StartPaidServiceRequest = new GoogleCloudChannelV1StartPaidServiceRequest() {{
                    requestId = "delectus";
                }};;
                accessToken = "voluptate";
                alt = AltEnum.JSON;
                callback = "vero";
                fields = "tenetur";
                key = "dignissimos";
                oauthToken = "hic";
                prettyPrint = false;
                quotaUser = "distinctio";
                uploadType = "quod";
                uploadProtocol = "odio";
            }};            

            CloudchannelAccountsCustomersEntitlementsStartPaidServiceResponse res = sdk.accounts.cloudchannelAccountsCustomersEntitlementsStartPaidService(req, new CloudchannelAccountsCustomersEntitlementsStartPaidServiceSecurity("similique", "facilis") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleLongrunningOperation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## cloudchannelAccountsCustomersEntitlementsSuspend

Suspends a previously fulfilled entitlement. An entitlement suspension is a long-running operation. Possible error codes: * PERMISSION_DENIED: The customer doesn't belong to the reseller. * INVALID_ARGUMENT: Required request parameters are missing or invalid. * NOT_FOUND: Entitlement resource not found. * NOT_ACTIVE: Entitlement is not active. * INTERNAL: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support. * UNKNOWN: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support. Return value: The ID of a long-running operation. To get the results of the operation, call the GetOperation method of CloudChannelOperationsService. The Operation metadata will contain an instance of OperationMetadata.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudchannelAccountsCustomersEntitlementsSuspendRequest;
import org.openapis.openapi.models.operations.CloudchannelAccountsCustomersEntitlementsSuspendResponse;
import org.openapis.openapi.models.operations.CloudchannelAccountsCustomersEntitlementsSuspendSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleCloudChannelV1SuspendEntitlementRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudchannelAccountsCustomersEntitlementsSuspendRequest req = new CloudchannelAccountsCustomersEntitlementsSuspendRequest("vero") {{
                dollarXgafv = XgafvEnum.ONE;
                googleCloudChannelV1SuspendEntitlementRequest = new GoogleCloudChannelV1SuspendEntitlementRequest() {{
                    requestId = "dolore";
                }};;
                accessToken = "quibusdam";
                alt = AltEnum.PROTO;
                callback = "sequi";
                fields = "natus";
                key = "impedit";
                oauthToken = "aut";
                prettyPrint = false;
                quotaUser = "voluptatibus";
                uploadType = "exercitationem";
                uploadProtocol = "nulla";
            }};            

            CloudchannelAccountsCustomersEntitlementsSuspendResponse res = sdk.accounts.cloudchannelAccountsCustomersEntitlementsSuspend(req, new CloudchannelAccountsCustomersEntitlementsSuspendSecurity("fugit", "porro") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleLongrunningOperation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## cloudchannelAccountsCustomersImport

Imports a Customer from the Cloud Identity associated with the provided Cloud Identity ID or domain before a TransferEntitlements call. If a linked Customer already exists and overwrite_if_exists is true, it will update that Customer's data. Possible error codes: * PERMISSION_DENIED: The reseller account making the request is different from the reseller account in the API request. * NOT_FOUND: Cloud Identity doesn't exist or was deleted. * INVALID_ARGUMENT: Required parameters are missing, or the auth_token is expired or invalid. * ALREADY_EXISTS: A customer already exists and has conflicting critical fields. Requires an overwrite. Return value: The Customer.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudchannelAccountsCustomersImportRequest;
import org.openapis.openapi.models.operations.CloudchannelAccountsCustomersImportResponse;
import org.openapis.openapi.models.operations.CloudchannelAccountsCustomersImportSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleCloudChannelV1ImportCustomerRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudchannelAccountsCustomersImportRequest req = new CloudchannelAccountsCustomersImportRequest("maiores") {{
                dollarXgafv = XgafvEnum.TWO;
                googleCloudChannelV1ImportCustomerRequest = new GoogleCloudChannelV1ImportCustomerRequest() {{
                    authToken = "iusto";
                    channelPartnerId = "eligendi";
                    cloudIdentityId = "ducimus";
                    customer = "alias";
                    domain = "officia";
                    overwriteIfExists = false;
                }};;
                accessToken = "tempora";
                alt = AltEnum.MEDIA;
                callback = "ea";
                fields = "aspernatur";
                key = "vel";
                oauthToken = "possimus";
                prettyPrint = false;
                quotaUser = "magnam";
                uploadType = "ratione";
                uploadProtocol = "ex";
            }};            

            CloudchannelAccountsCustomersImportResponse res = sdk.accounts.cloudchannelAccountsCustomersImport(req, new CloudchannelAccountsCustomersImportSecurity("laudantium", "dicta") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudChannelV1Customer != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## cloudchannelAccountsCustomersList

List Customers. Possible error codes: * PERMISSION_DENIED: The reseller account making the request is different from the reseller account in the API request. * INVALID_ARGUMENT: Required request parameters are missing or invalid. Return value: List of Customers, or an empty list if there are no customers.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudchannelAccountsCustomersListRequest;
import org.openapis.openapi.models.operations.CloudchannelAccountsCustomersListResponse;
import org.openapis.openapi.models.operations.CloudchannelAccountsCustomersListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudchannelAccountsCustomersListRequest req = new CloudchannelAccountsCustomersListRequest("dolor") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "quasi";
                alt = AltEnum.MEDIA;
                callback = "nulla";
                fields = "excepturi";
                filter = "voluptatibus";
                key = "nostrum";
                oauthToken = "sapiente";
                pageSize = 788873L;
                pageToken = "saepe";
                prettyPrint = false;
                quotaUser = "ea";
                uploadType = "impedit";
                uploadProtocol = "corporis";
            }};            

            CloudchannelAccountsCustomersListResponse res = sdk.accounts.cloudchannelAccountsCustomersList(req, new CloudchannelAccountsCustomersListSecurity("veniam", "aliquid") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudChannelV1ListCustomersResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## cloudchannelAccountsCustomersListPurchasableOffers

Lists the following: * Offers that you can purchase for a customer. * Offers that you can change for an entitlement. Possible error codes: * PERMISSION_DENIED: The customer doesn't belong to the reseller * INVALID_ARGUMENT: Required request parameters are missing or invalid.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudchannelAccountsCustomersListPurchasableOffersRequest;
import org.openapis.openapi.models.operations.CloudchannelAccountsCustomersListPurchasableOffersResponse;
import org.openapis.openapi.models.operations.CloudchannelAccountsCustomersListPurchasableOffersSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudchannelAccountsCustomersListPurchasableOffersRequest req = new CloudchannelAccountsCustomersListPurchasableOffersRequest("inventore") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "ea";
                alt = AltEnum.PROTO;
                callback = "consectetur";
                changeOfferPurchaseEntitlement = "recusandae";
                changeOfferPurchaseNewSku = "aspernatur";
                createEntitlementPurchaseSku = "minima";
                fields = "eaque";
                key = "a";
                languageCode = "libero";
                oauthToken = "aut";
                pageSize = 11427L;
                pageToken = "deleniti";
                prettyPrint = false;
                quotaUser = "impedit";
                uploadType = "aliquam";
                uploadProtocol = "fugit";
            }};            

            CloudchannelAccountsCustomersListPurchasableOffersResponse res = sdk.accounts.cloudchannelAccountsCustomersListPurchasableOffers(req, new CloudchannelAccountsCustomersListPurchasableOffersSecurity("accusamus", "inventore") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudChannelV1ListPurchasableOffersResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## cloudchannelAccountsCustomersListPurchasableSkus

Lists the following: * SKUs that you can purchase for a customer * SKUs that you can upgrade or downgrade for an entitlement. Possible error codes: * PERMISSION_DENIED: The customer doesn't belong to the reseller. * INVALID_ARGUMENT: Required request parameters are missing or invalid.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudchannelAccountsCustomersListPurchasableSkusChangeOfferPurchaseChangeTypeEnum;
import org.openapis.openapi.models.operations.CloudchannelAccountsCustomersListPurchasableSkusRequest;
import org.openapis.openapi.models.operations.CloudchannelAccountsCustomersListPurchasableSkusResponse;
import org.openapis.openapi.models.operations.CloudchannelAccountsCustomersListPurchasableSkusSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudchannelAccountsCustomersListPurchasableSkusRequest req = new CloudchannelAccountsCustomersListPurchasableSkusRequest("non") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "dolorum";
                alt = AltEnum.PROTO;
                callback = "placeat";
                changeOfferPurchaseChangeType = CloudchannelAccountsCustomersListPurchasableSkusChangeOfferPurchaseChangeTypeEnum.CHANGE_TYPE_UNSPECIFIED;
                changeOfferPurchaseEntitlement = "eum";
                createEntitlementPurchaseProduct = "autem";
                fields = "nobis";
                key = "quas";
                languageCode = "assumenda";
                oauthToken = "nulla";
                pageSize = 379034L;
                pageToken = "libero";
                prettyPrint = false;
                quotaUser = "quasi";
                uploadType = "tempora";
                uploadProtocol = "numquam";
            }};            

            CloudchannelAccountsCustomersListPurchasableSkusResponse res = sdk.accounts.cloudchannelAccountsCustomersListPurchasableSkus(req, new CloudchannelAccountsCustomersListPurchasableSkusSecurity("explicabo", "provident") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudChannelV1ListPurchasableSkusResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## cloudchannelAccountsCustomersProvisionCloudIdentity

Creates a Cloud Identity for the given customer using the customer's information, or the information provided here. Possible error codes: * PERMISSION_DENIED: The customer doesn't belong to the reseller. * INVALID_ARGUMENT: Required request parameters are missing or invalid. * NOT_FOUND: The customer was not found. * ALREADY_EXISTS: The customer's primary email already exists. Retry after changing the customer's primary contact email. * INTERNAL: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support. * UNKNOWN: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support. Return value: The ID of a long-running operation. To get the results of the operation, call the GetOperation method of CloudChannelOperationsService. The Operation metadata contains an instance of OperationMetadata.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudchannelAccountsCustomersProvisionCloudIdentityRequest;
import org.openapis.openapi.models.operations.CloudchannelAccountsCustomersProvisionCloudIdentityResponse;
import org.openapis.openapi.models.operations.CloudchannelAccountsCustomersProvisionCloudIdentitySecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleCloudChannelV1AdminUser;
import org.openapis.openapi.models.shared.GoogleCloudChannelV1CloudIdentityInfoCustomerTypeEnum;
import org.openapis.openapi.models.shared.GoogleCloudChannelV1CloudIdentityInfoInput;
import org.openapis.openapi.models.shared.GoogleCloudChannelV1EduData;
import org.openapis.openapi.models.shared.GoogleCloudChannelV1EduDataInstituteSizeEnum;
import org.openapis.openapi.models.shared.GoogleCloudChannelV1EduDataInstituteTypeEnum;
import org.openapis.openapi.models.shared.GoogleCloudChannelV1ProvisionCloudIdentityRequestInput;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudchannelAccountsCustomersProvisionCloudIdentityRequest req = new CloudchannelAccountsCustomersProvisionCloudIdentityRequest("ipsa") {{
                dollarXgafv = XgafvEnum.ONE;
                googleCloudChannelV1ProvisionCloudIdentityRequestInput = new GoogleCloudChannelV1ProvisionCloudIdentityRequestInput() {{
                    cloudIdentityInfo = new GoogleCloudChannelV1CloudIdentityInfoInput() {{
                        alternateEmail = "magnam";
                        customerType = GoogleCloudChannelV1CloudIdentityInfoCustomerTypeEnum.DOMAIN;
                        eduData = new GoogleCloudChannelV1EduData() {{
                            instituteSize = GoogleCloudChannelV1EduDataInstituteSizeEnum.SIZE101500;
                            instituteType = GoogleCloudChannelV1EduDataInstituteTypeEnum.K12;
                            website = "esse";
                        }};;
                        languageCode = "rem";
                        phoneNumber = "fuga";
                    }};;
                    user = new GoogleCloudChannelV1AdminUser() {{
                        email = "Maurice43@yahoo.com";
                        familyName = "suscipit";
                        givenName = "assumenda";
                    }};;
                    validateOnly = false;
                }};;
                accessToken = "eos";
                alt = AltEnum.MEDIA;
                callback = "quisquam";
                fields = "veritatis";
                key = "ipsa";
                oauthToken = "id";
                prettyPrint = false;
                quotaUser = "quidem";
                uploadType = "neque";
                uploadProtocol = "quo";
            }};            

            CloudchannelAccountsCustomersProvisionCloudIdentityResponse res = sdk.accounts.cloudchannelAccountsCustomersProvisionCloudIdentity(req, new CloudchannelAccountsCustomersProvisionCloudIdentitySecurity("illum", "quo") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleLongrunningOperation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## cloudchannelAccountsCustomersTransferEntitlements

Transfers customer entitlements to new reseller. Possible error codes: * PERMISSION_DENIED: The customer doesn't belong to the reseller. * INVALID_ARGUMENT: Required request parameters are missing or invalid. * NOT_FOUND: The customer or offer resource was not found. * ALREADY_EXISTS: The SKU was already transferred for the customer. * CONDITION_NOT_MET or FAILED_PRECONDITION: * The SKU requires domain verification to transfer, but the domain is not verified. * An Add-On SKU (example, Vault or Drive) is missing the pre-requisite SKU (example, G Suite Basic). * (Developer accounts only) Reseller and resold domain must meet the following naming requirements: * Domain names must start with goog-test. * Domain names must include the reseller domain. * Specify all transferring entitlements. * INTERNAL: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support. * UNKNOWN: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support. Return value: The ID of a long-running operation. To get the results of the operation, call the GetOperation method of CloudChannelOperationsService. The Operation metadata will contain an instance of OperationMetadata.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudchannelAccountsCustomersTransferEntitlementsRequest;
import org.openapis.openapi.models.operations.CloudchannelAccountsCustomersTransferEntitlementsResponse;
import org.openapis.openapi.models.operations.CloudchannelAccountsCustomersTransferEntitlementsSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleCloudChannelV1AssociationInfo;
import org.openapis.openapi.models.shared.GoogleCloudChannelV1CommitmentSettingsInput;
import org.openapis.openapi.models.shared.GoogleCloudChannelV1EntitlementInput;
import org.openapis.openapi.models.shared.GoogleCloudChannelV1ParameterInput;
import org.openapis.openapi.models.shared.GoogleCloudChannelV1Period;
import org.openapis.openapi.models.shared.GoogleCloudChannelV1PeriodPeriodTypeEnum;
import org.openapis.openapi.models.shared.GoogleCloudChannelV1RenewalSettings;
import org.openapis.openapi.models.shared.GoogleCloudChannelV1RenewalSettingsPaymentPlanEnum;
import org.openapis.openapi.models.shared.GoogleCloudChannelV1TransferEntitlementsRequestInput;
import org.openapis.openapi.models.shared.GoogleCloudChannelV1TrialSettings;
import org.openapis.openapi.models.shared.GoogleCloudChannelV1Value;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudchannelAccountsCustomersTransferEntitlementsRequest req = new CloudchannelAccountsCustomersTransferEntitlementsRequest("fuga") {{
                dollarXgafv = XgafvEnum.ONE;
                googleCloudChannelV1TransferEntitlementsRequestInput = new GoogleCloudChannelV1TransferEntitlementsRequestInput() {{
                    authToken = "eos";
                    entitlements = new org.openapis.openapi.models.shared.GoogleCloudChannelV1EntitlementInput[]{{
                        add(new GoogleCloudChannelV1EntitlementInput() {{
                            associationInfo = new GoogleCloudChannelV1AssociationInfo() {{
                                baseEntitlement = "ab";
                            }};
                            billingAccount = "cupiditate";
                            commitmentSettings = new GoogleCloudChannelV1CommitmentSettingsInput() {{
                                renewalSettings = new GoogleCloudChannelV1RenewalSettings() {{
                                    enableRenewal = false;
                                    paymentCycle = new GoogleCloudChannelV1Period() {{
                                        duration = 9688;
                                        periodType = GoogleCloudChannelV1PeriodPeriodTypeEnum.DAY;
                                    }};
                                    paymentPlan = GoogleCloudChannelV1RenewalSettingsPaymentPlanEnum.OFFLINE;
                                    resizeUnitCount = false;
                                }};
                            }};
                            offer = "ipsam";
                            parameters = new org.openapis.openapi.models.shared.GoogleCloudChannelV1ParameterInput[]{{
                                add(new GoogleCloudChannelV1ParameterInput() {{
                                    name = "Angelica Koelpin MD";
                                    value = new GoogleCloudChannelV1Value() {{
                                        boolValue = false;
                                        doubleValue = 7997.96;
                                        int64Value = "dignissimos";
                                        protoValue = new java.util.HashMap<String, Object>() {{
                                            put("nihil", "totam");
                                        }};
                                        stringValue = "accusamus";
                                    }};
                                }}),
                            }};
                            purchaseOrderId = "aliquam";
                            trialSettings = new GoogleCloudChannelV1TrialSettings() {{
                                endTime = "odio";
                                trial = false;
                            }};
                        }}),
                        add(new GoogleCloudChannelV1EntitlementInput() {{
                            associationInfo = new GoogleCloudChannelV1AssociationInfo() {{
                                baseEntitlement = "occaecati";
                            }};
                            billingAccount = "commodi";
                            commitmentSettings = new GoogleCloudChannelV1CommitmentSettingsInput() {{
                                renewalSettings = new GoogleCloudChannelV1RenewalSettings() {{
                                    enableRenewal = false;
                                    paymentCycle = new GoogleCloudChannelV1Period() {{
                                        duration = 959434;
                                        periodType = GoogleCloudChannelV1PeriodPeriodTypeEnum.PERIOD_TYPE_UNSPECIFIED;
                                    }};
                                    paymentPlan = GoogleCloudChannelV1RenewalSettingsPaymentPlanEnum.FREE;
                                    resizeUnitCount = false;
                                }};
                            }};
                            offer = "molestiae";
                            parameters = new org.openapis.openapi.models.shared.GoogleCloudChannelV1ParameterInput[]{{
                                add(new GoogleCloudChannelV1ParameterInput() {{
                                    name = "Franklin Lynch";
                                    value = new GoogleCloudChannelV1Value() {{
                                        boolValue = false;
                                        doubleValue = 5361.78;
                                        int64Value = "fugit";
                                        protoValue = new java.util.HashMap<String, Object>() {{
                                            put("mollitia", "incidunt");
                                            put("atque", "explicabo");
                                            put("minima", "nisi");
                                        }};
                                        stringValue = "fugit";
                                    }};
                                }}),
                            }};
                            purchaseOrderId = "sapiente";
                            trialSettings = new GoogleCloudChannelV1TrialSettings() {{
                                endTime = "consequuntur";
                                trial = false;
                            }};
                        }}),
                    }};
                    requestId = "ratione";
                }};;
                accessToken = "explicabo";
                alt = AltEnum.PROTO;
                callback = "occaecati";
                fields = "atque";
                key = "et";
                oauthToken = "esse";
                prettyPrint = false;
                quotaUser = "eveniet";
                uploadType = "accusamus";
                uploadProtocol = "veritatis";
            }};            

            CloudchannelAccountsCustomersTransferEntitlementsResponse res = sdk.accounts.cloudchannelAccountsCustomersTransferEntitlements(req, new CloudchannelAccountsCustomersTransferEntitlementsSecurity("esse", "quod") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleLongrunningOperation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## cloudchannelAccountsCustomersTransferEntitlementsToGoogle

Transfers customer entitlements from their current reseller to Google. Possible error codes: * PERMISSION_DENIED: The customer doesn't belong to the reseller. * INVALID_ARGUMENT: Required request parameters are missing or invalid. * NOT_FOUND: The customer or offer resource was not found. * ALREADY_EXISTS: The SKU was already transferred for the customer. * CONDITION_NOT_MET or FAILED_PRECONDITION: * The SKU requires domain verification to transfer, but the domain is not verified. * An Add-On SKU (example, Vault or Drive) is missing the pre-requisite SKU (example, G Suite Basic). * (Developer accounts only) Reseller and resold domain must meet the following naming requirements: * Domain names must start with goog-test. * Domain names must include the reseller domain. * INTERNAL: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support. * UNKNOWN: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support. Return value: The ID of a long-running operation. To get the results of the operation, call the GetOperation method of CloudChannelOperationsService. The response will contain google.protobuf.Empty on success. The Operation metadata will contain an instance of OperationMetadata.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudchannelAccountsCustomersTransferEntitlementsToGoogleRequest;
import org.openapis.openapi.models.operations.CloudchannelAccountsCustomersTransferEntitlementsToGoogleResponse;
import org.openapis.openapi.models.operations.CloudchannelAccountsCustomersTransferEntitlementsToGoogleSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleCloudChannelV1AssociationInfo;
import org.openapis.openapi.models.shared.GoogleCloudChannelV1CommitmentSettingsInput;
import org.openapis.openapi.models.shared.GoogleCloudChannelV1EntitlementInput;
import org.openapis.openapi.models.shared.GoogleCloudChannelV1ParameterInput;
import org.openapis.openapi.models.shared.GoogleCloudChannelV1Period;
import org.openapis.openapi.models.shared.GoogleCloudChannelV1PeriodPeriodTypeEnum;
import org.openapis.openapi.models.shared.GoogleCloudChannelV1RenewalSettings;
import org.openapis.openapi.models.shared.GoogleCloudChannelV1RenewalSettingsPaymentPlanEnum;
import org.openapis.openapi.models.shared.GoogleCloudChannelV1TransferEntitlementsToGoogleRequestInput;
import org.openapis.openapi.models.shared.GoogleCloudChannelV1TrialSettings;
import org.openapis.openapi.models.shared.GoogleCloudChannelV1Value;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudchannelAccountsCustomersTransferEntitlementsToGoogleRequest req = new CloudchannelAccountsCustomersTransferEntitlementsToGoogleRequest("nam") {{
                dollarXgafv = XgafvEnum.TWO;
                googleCloudChannelV1TransferEntitlementsToGoogleRequestInput = new GoogleCloudChannelV1TransferEntitlementsToGoogleRequestInput() {{
                    entitlements = new org.openapis.openapi.models.shared.GoogleCloudChannelV1EntitlementInput[]{{
                        add(new GoogleCloudChannelV1EntitlementInput() {{
                            associationInfo = new GoogleCloudChannelV1AssociationInfo() {{
                                baseEntitlement = "quasi";
                            }};
                            billingAccount = "saepe";
                            commitmentSettings = new GoogleCloudChannelV1CommitmentSettingsInput() {{
                                renewalSettings = new GoogleCloudChannelV1RenewalSettings() {{
                                    enableRenewal = false;
                                    paymentCycle = new GoogleCloudChannelV1Period() {{
                                        duration = 426306;
                                        periodType = GoogleCloudChannelV1PeriodPeriodTypeEnum.MONTH;
                                    }};
                                    paymentPlan = GoogleCloudChannelV1RenewalSettingsPaymentPlanEnum.FLEXIBLE;
                                    resizeUnitCount = false;
                                }};
                            }};
                            offer = "rerum";
                            parameters = new org.openapis.openapi.models.shared.GoogleCloudChannelV1ParameterInput[]{{
                                add(new GoogleCloudChannelV1ParameterInput() {{
                                    name = "Miss Verna Roob";
                                    value = new GoogleCloudChannelV1Value() {{
                                        boolValue = false;
                                        doubleValue = 2400.2;
                                        int64Value = "cumque";
                                        protoValue = new java.util.HashMap<String, Object>() {{
                                            put("consequatur", "minus");
                                        }};
                                        stringValue = "quaerat";
                                    }};
                                }}),
                                add(new GoogleCloudChannelV1ParameterInput() {{
                                    name = "Glenn Koch";
                                    value = new GoogleCloudChannelV1Value() {{
                                        boolValue = false;
                                        doubleValue = 9537.22;
                                        int64Value = "nulla";
                                        protoValue = new java.util.HashMap<String, Object>() {{
                                            put("esse", "quasi");
                                            put("a", "error");
                                            put("sint", "pariatur");
                                        }};
                                        stringValue = "possimus";
                                    }};
                                }}),
                                add(new GoogleCloudChannelV1ParameterInput() {{
                                    name = "Laverne Zemlak Sr.";
                                    value = new GoogleCloudChannelV1Value() {{
                                        boolValue = false;
                                        doubleValue = 944.58;
                                        int64Value = "similique";
                                        protoValue = new java.util.HashMap<String, Object>() {{
                                            put("aliquid", "tenetur");
                                            put("quae", "earum");
                                            put("vel", "in");
                                        }};
                                        stringValue = "eius";
                                    }};
                                }}),
                            }};
                            purchaseOrderId = "libero";
                            trialSettings = new GoogleCloudChannelV1TrialSettings() {{
                                endTime = "illum";
                                trial = false;
                            }};
                        }}),
                        add(new GoogleCloudChannelV1EntitlementInput() {{
                            associationInfo = new GoogleCloudChannelV1AssociationInfo() {{
                                baseEntitlement = "soluta";
                            }};
                            billingAccount = "accusantium";
                            commitmentSettings = new GoogleCloudChannelV1CommitmentSettingsInput() {{
                                renewalSettings = new GoogleCloudChannelV1RenewalSettings() {{
                                    enableRenewal = false;
                                    paymentCycle = new GoogleCloudChannelV1Period() {{
                                        duration = 306986;
                                        periodType = GoogleCloudChannelV1PeriodPeriodTypeEnum.YEAR;
                                    }};
                                    paymentPlan = GoogleCloudChannelV1RenewalSettingsPaymentPlanEnum.PAYMENT_PLAN_UNSPECIFIED;
                                    resizeUnitCount = false;
                                }};
                            }};
                            offer = "ullam";
                            parameters = new org.openapis.openapi.models.shared.GoogleCloudChannelV1ParameterInput[]{{
                                add(new GoogleCloudChannelV1ParameterInput() {{
                                    name = "Alma Armstrong";
                                    value = new GoogleCloudChannelV1Value() {{
                                        boolValue = false;
                                        doubleValue = 8453.58;
                                        int64Value = "ex";
                                        protoValue = new java.util.HashMap<String, Object>() {{
                                            put("itaque", "dolorum");
                                            put("architecto", "omnis");
                                            put("tenetur", "quasi");
                                        }};
                                        stringValue = "at";
                                    }};
                                }}),
                                add(new GoogleCloudChannelV1ParameterInput() {{
                                    name = "Allison Bednar I";
                                    value = new GoogleCloudChannelV1Value() {{
                                        boolValue = false;
                                        doubleValue = 2371.73;
                                        int64Value = "iste";
                                        protoValue = new java.util.HashMap<String, Object>() {{
                                            put("accusantium", "rem");
                                            put("aut", "laudantium");
                                            put("eum", "mollitia");
                                            put("ab", "corrupti");
                                        }};
                                        stringValue = "non";
                                    }};
                                }}),
                            }};
                            purchaseOrderId = "voluptatem";
                            trialSettings = new GoogleCloudChannelV1TrialSettings() {{
                                endTime = "dolor";
                                trial = false;
                            }};
                        }}),
                    }};
                    requestId = "occaecati";
                }};;
                accessToken = "numquam";
                alt = AltEnum.PROTO;
                callback = "explicabo";
                fields = "voluptas";
                key = "aut";
                oauthToken = "dignissimos";
                prettyPrint = false;
                quotaUser = "dicta";
                uploadType = "maiores";
                uploadProtocol = "natus";
            }};            

            CloudchannelAccountsCustomersTransferEntitlementsToGoogleResponse res = sdk.accounts.cloudchannelAccountsCustomersTransferEntitlementsToGoogle(req, new CloudchannelAccountsCustomersTransferEntitlementsToGoogleSecurity("velit", "voluptatibus") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleLongrunningOperation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## cloudchannelAccountsListSubscribers

Lists service accounts with subscriber privileges on the Cloud Pub/Sub topic created for this Channel Services account. Possible error codes: * PERMISSION_DENIED: The reseller account making the request and the provided reseller account are different, or the impersonated user is not a super admin. * INVALID_ARGUMENT: Required request parameters are missing or invalid. * NOT_FOUND: The topic resource doesn't exist. * INTERNAL: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support. * UNKNOWN: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support. Return value: A list of service email addresses.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudchannelAccountsListSubscribersRequest;
import org.openapis.openapi.models.operations.CloudchannelAccountsListSubscribersResponse;
import org.openapis.openapi.models.operations.CloudchannelAccountsListSubscribersSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudchannelAccountsListSubscribersRequest req = new CloudchannelAccountsListSubscribersRequest("voluptas") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "aperiam";
                alt = AltEnum.MEDIA;
                callback = "quaerat";
                fields = "consequuntur";
                key = "repellendus";
                oauthToken = "officia";
                pageSize = 807023L;
                pageToken = "dignissimos";
                prettyPrint = false;
                quotaUser = "officia";
                uploadType = "asperiores";
                uploadProtocol = "nemo";
            }};            

            CloudchannelAccountsListSubscribersResponse res = sdk.accounts.cloudchannelAccountsListSubscribers(req, new CloudchannelAccountsListSubscribersSecurity("quae", "quaerat") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudChannelV1ListSubscribersResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## cloudchannelAccountsListTransferableOffers

List TransferableOffers of a customer based on Cloud Identity ID or Customer Name in the request. Use this method when a reseller gets the entitlement information of an unowned customer. The reseller should provide the customer's Cloud Identity ID or Customer Name. Possible error codes: * PERMISSION_DENIED: * The customer doesn't belong to the reseller and has no auth token. * The customer provided incorrect reseller information when generating auth token. * The reseller account making the request is different from the reseller account in the query. * INVALID_ARGUMENT: Required request parameters are missing or invalid. Return value: List of TransferableOffer for the given customer and SKU.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudchannelAccountsListTransferableOffersRequest;
import org.openapis.openapi.models.operations.CloudchannelAccountsListTransferableOffersResponse;
import org.openapis.openapi.models.operations.CloudchannelAccountsListTransferableOffersSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleCloudChannelV1ListTransferableOffersRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudchannelAccountsListTransferableOffersRequest req = new CloudchannelAccountsListTransferableOffersRequest("porro") {{
                dollarXgafv = XgafvEnum.TWO;
                googleCloudChannelV1ListTransferableOffersRequest = new GoogleCloudChannelV1ListTransferableOffersRequest() {{
                    cloudIdentityId = "labore";
                    customerName = "ab";
                    languageCode = "adipisci";
                    pageSize = 683573;
                    pageToken = "id";
                    sku = "suscipit";
                }};;
                accessToken = "velit";
                alt = AltEnum.MEDIA;
                callback = "est";
                fields = "recusandae";
                key = "totam";
                oauthToken = "fugiat";
                prettyPrint = false;
                quotaUser = "vel";
                uploadType = "ducimus";
                uploadProtocol = "quos";
            }};            

            CloudchannelAccountsListTransferableOffersResponse res = sdk.accounts.cloudchannelAccountsListTransferableOffers(req, new CloudchannelAccountsListTransferableOffersSecurity("vel", "labore") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudChannelV1ListTransferableOffersResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## cloudchannelAccountsListTransferableSkus

List TransferableSkus of a customer based on the Cloud Identity ID or Customer Name in the request. Use this method to list the entitlements information of an unowned customer. You should provide the customer's Cloud Identity ID or Customer Name. Possible error codes: * PERMISSION_DENIED: * The customer doesn't belong to the reseller and has no auth token. * The supplied auth token is invalid. * The reseller account making the request is different from the reseller account in the query. * INVALID_ARGUMENT: Required request parameters are missing or invalid. Return value: A list of the customer's TransferableSku.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudchannelAccountsListTransferableSkusRequest;
import org.openapis.openapi.models.operations.CloudchannelAccountsListTransferableSkusResponse;
import org.openapis.openapi.models.operations.CloudchannelAccountsListTransferableSkusSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleCloudChannelV1ListTransferableSkusRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudchannelAccountsListTransferableSkusRequest req = new CloudchannelAccountsListTransferableSkusRequest("possimus") {{
                dollarXgafv = XgafvEnum.TWO;
                googleCloudChannelV1ListTransferableSkusRequest = new GoogleCloudChannelV1ListTransferableSkusRequest() {{
                    authToken = "cum";
                    cloudIdentityId = "commodi";
                    customerName = "in";
                    languageCode = "corporis";
                    pageSize = 968904;
                    pageToken = "assumenda";
                }};;
                accessToken = "nemo";
                alt = AltEnum.PROTO;
                callback = "aliquid";
                fields = "aperiam";
                key = "cum";
                oauthToken = "consectetur";
                prettyPrint = false;
                quotaUser = "in";
                uploadType = "exercitationem";
                uploadProtocol = "earum";
            }};            

            CloudchannelAccountsListTransferableSkusResponse res = sdk.accounts.cloudchannelAccountsListTransferableSkus(req, new CloudchannelAccountsListTransferableSkusSecurity("facere", "numquam") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudChannelV1ListTransferableSkusResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## cloudchannelAccountsOffersList

Lists the Offers the reseller can sell. Possible error codes: * INVALID_ARGUMENT: Required request parameters are missing or invalid.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudchannelAccountsOffersListRequest;
import org.openapis.openapi.models.operations.CloudchannelAccountsOffersListResponse;
import org.openapis.openapi.models.operations.CloudchannelAccountsOffersListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudchannelAccountsOffersListRequest req = new CloudchannelAccountsOffersListRequest("doloribus") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "reiciendis";
                alt = AltEnum.PROTO;
                callback = "saepe";
                fields = "necessitatibus";
                filter = "dolore";
                key = "sunt";
                languageCode = "asperiores";
                oauthToken = "adipisci";
                pageSize = 249420L;
                pageToken = "amet";
                prettyPrint = false;
                quotaUser = "beatae";
                showFutureOffers = false;
                uploadType = "dignissimos";
                uploadProtocol = "a";
            }};            

            CloudchannelAccountsOffersListResponse res = sdk.accounts.cloudchannelAccountsOffersList(req, new CloudchannelAccountsOffersListSecurity("debitis", "consectetur") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudChannelV1ListOffersResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## cloudchannelAccountsRegister

Registers a service account with subscriber privileges on the Cloud Pub/Sub topic for this Channel Services account. After you create a subscriber, you get the events through SubscriberEvent Possible error codes: * PERMISSION_DENIED: The reseller account making the request and the provided reseller account are different, or the impersonated user is not a super admin. * INVALID_ARGUMENT: Required request parameters are missing or invalid. * INTERNAL: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support. * UNKNOWN: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support. Return value: The topic name with the registered service email address.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudchannelAccountsRegisterRequest;
import org.openapis.openapi.models.operations.CloudchannelAccountsRegisterResponse;
import org.openapis.openapi.models.operations.CloudchannelAccountsRegisterSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleCloudChannelV1RegisterSubscriberRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudchannelAccountsRegisterRequest req = new CloudchannelAccountsRegisterRequest("corporis") {{
                dollarXgafv = XgafvEnum.TWO;
                googleCloudChannelV1RegisterSubscriberRequest = new GoogleCloudChannelV1RegisterSubscriberRequest() {{
                    serviceAccount = "laboriosam";
                }};;
                accessToken = "ipsa";
                alt = AltEnum.PROTO;
                callback = "libero";
                fields = "vitae";
                key = "accusamus";
                oauthToken = "similique";
                prettyPrint = false;
                quotaUser = "tempora";
                uploadType = "aspernatur";
                uploadProtocol = "voluptas";
            }};            

            CloudchannelAccountsRegisterResponse res = sdk.accounts.cloudchannelAccountsRegister(req, new CloudchannelAccountsRegisterSecurity("voluptas", "voluptas") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudChannelV1RegisterSubscriberResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## cloudchannelAccountsReportJobsFetchReportResults

Retrieves data generated by CloudChannelReportsService.RunReportJob.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudchannelAccountsReportJobsFetchReportResultsRequest;
import org.openapis.openapi.models.operations.CloudchannelAccountsReportJobsFetchReportResultsResponse;
import org.openapis.openapi.models.operations.CloudchannelAccountsReportJobsFetchReportResultsSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleCloudChannelV1FetchReportResultsRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudchannelAccountsReportJobsFetchReportResultsRequest req = new CloudchannelAccountsReportJobsFetchReportResultsRequest("minima") {{
                dollarXgafv = XgafvEnum.TWO;
                googleCloudChannelV1FetchReportResultsRequest = new GoogleCloudChannelV1FetchReportResultsRequest() {{
                    pageSize = 680116;
                    pageToken = "adipisci";
                    partitionKeys = new String[]{{
                        add("dolores"),
                        add("blanditiis"),
                        add("in"),
                        add("dolore"),
                    }};
                }};;
                accessToken = "aliquam";
                alt = AltEnum.PROTO;
                callback = "temporibus";
                fields = "ullam";
                key = "adipisci";
                oauthToken = "cum";
                prettyPrint = false;
                quotaUser = "blanditiis";
                uploadType = "quas";
                uploadProtocol = "hic";
            }};            

            CloudchannelAccountsReportJobsFetchReportResultsResponse res = sdk.accounts.cloudchannelAccountsReportJobsFetchReportResults(req, new CloudchannelAccountsReportJobsFetchReportResultsSecurity("nesciunt", "culpa") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudChannelV1FetchReportResultsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## cloudchannelAccountsReportsList

Lists the reports that RunReportJob can run. These reports include an ID, a description, and the list of columns that will be in the result.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudchannelAccountsReportsListRequest;
import org.openapis.openapi.models.operations.CloudchannelAccountsReportsListResponse;
import org.openapis.openapi.models.operations.CloudchannelAccountsReportsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudchannelAccountsReportsListRequest req = new CloudchannelAccountsReportsListRequest("corrupti") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "totam";
                alt = AltEnum.PROTO;
                callback = "exercitationem";
                fields = "nobis";
                key = "sit";
                languageCode = "rerum";
                oauthToken = "sed";
                pageSize = 967966L;
                pageToken = "explicabo";
                prettyPrint = false;
                quotaUser = "asperiores";
                uploadType = "facilis";
                uploadProtocol = "voluptate";
            }};            

            CloudchannelAccountsReportsListResponse res = sdk.accounts.cloudchannelAccountsReportsList(req, new CloudchannelAccountsReportsListSecurity("expedita", "ab") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudChannelV1ListReportsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## cloudchannelAccountsReportsRun

Begins generation of data for a given report. The report identifier is a UID (for example, `613bf59q`). Possible error codes: * PERMISSION_DENIED: The user doesn't have access to this report. * INVALID_ARGUMENT: Required request parameters are missing or invalid. * NOT_FOUND: The report identifier was not found. * INTERNAL: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support. * UNKNOWN: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support. Return value: The ID of a long-running operation. To get the results of the operation, call the GetOperation method of CloudChannelOperationsService. The Operation metadata contains an instance of OperationMetadata. To get the results of report generation, call CloudChannelReportsService.FetchReportResults with the RunReportJobResponse.report_job.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudchannelAccountsReportsRunRequest;
import org.openapis.openapi.models.operations.CloudchannelAccountsReportsRunResponse;
import org.openapis.openapi.models.operations.CloudchannelAccountsReportsRunSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleCloudChannelV1DateRange;
import org.openapis.openapi.models.shared.GoogleCloudChannelV1RunReportJobRequest;
import org.openapis.openapi.models.shared.GoogleTypeDate;
import org.openapis.openapi.models.shared.GoogleTypeDateTime;
import org.openapis.openapi.models.shared.GoogleTypeTimeZone;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudchannelAccountsReportsRunRequest req = new CloudchannelAccountsReportsRunRequest("iste") {{
                dollarXgafv = XgafvEnum.ONE;
                googleCloudChannelV1RunReportJobRequest = new GoogleCloudChannelV1RunReportJobRequest() {{
                    dateRange = new GoogleCloudChannelV1DateRange() {{
                        invoiceEndDate = new GoogleTypeDate() {{
                            day = 671907;
                            month = 152354;
                            year = 447516;
                        }};;
                        invoiceStartDate = new GoogleTypeDate() {{
                            day = 417486;
                            month = 696077;
                            year = 131289;
                        }};;
                        usageEndDateTime = new GoogleTypeDateTime() {{
                            day = 378326;
                            hours = 604118;
                            minutes = 100032;
                            month = 382808;
                            nanos = 960257;
                            seconds = 895386;
                            timeZone = new GoogleTypeTimeZone() {{
                                id = "1f08f429-4e36-498f-847f-603e8b445e80";
                                version = "nobis";
                            }};;
                            utcOffset = "error";
                            year = 333507;
                        }};;
                        usageStartDateTime = new GoogleTypeDateTime() {{
                            day = 329543;
                            hours = 924159;
                            minutes = 967122;
                            month = 862319;
                            nanos = 168576;
                            seconds = 48690;
                            timeZone = new GoogleTypeTimeZone() {{
                                id = "e457e185-8b6a-489f-be3a-5aa8e4824d0a";
                                version = "expedita";
                            }};;
                            utcOffset = "magnam";
                            year = 7884;
                        }};;
                    }};;
                    filter = "esse";
                    languageCode = "ipsam";
                }};;
                accessToken = "sit";
                alt = AltEnum.MEDIA;
                callback = "quas";
                fields = "repudiandae";
                key = "corporis";
                oauthToken = "et";
                prettyPrint = false;
                quotaUser = "blanditiis";
                uploadType = "ex";
                uploadProtocol = "sed";
            }};            

            CloudchannelAccountsReportsRunResponse res = sdk.accounts.cloudchannelAccountsReportsRun(req, new CloudchannelAccountsReportsRunSecurity("sit", "vel") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleLongrunningOperation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## cloudchannelAccountsUnregister

Unregisters a service account with subscriber privileges on the Cloud Pub/Sub topic created for this Channel Services account. If there are no service accounts left with subscriber privileges, this deletes the topic. You can call ListSubscribers to check for these accounts. Possible error codes: * PERMISSION_DENIED: The reseller account making the request and the provided reseller account are different, or the impersonated user is not a super admin. * INVALID_ARGUMENT: Required request parameters are missing or invalid. * NOT_FOUND: The topic resource doesn't exist. * INTERNAL: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support. * UNKNOWN: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support. Return value: The topic name that unregistered the service email address. Returns a success response if the service email address wasn't registered with the topic.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudchannelAccountsUnregisterRequest;
import org.openapis.openapi.models.operations.CloudchannelAccountsUnregisterResponse;
import org.openapis.openapi.models.operations.CloudchannelAccountsUnregisterSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleCloudChannelV1UnregisterSubscriberRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudchannelAccountsUnregisterRequest req = new CloudchannelAccountsUnregisterRequest("nostrum") {{
                dollarXgafv = XgafvEnum.TWO;
                googleCloudChannelV1UnregisterSubscriberRequest = new GoogleCloudChannelV1UnregisterSubscriberRequest() {{
                    serviceAccount = "error";
                }};;
                accessToken = "consequatur";
                alt = AltEnum.JSON;
                callback = "reiciendis";
                fields = "dolorem";
                key = "harum";
                oauthToken = "dicta";
                prettyPrint = false;
                quotaUser = "architecto";
                uploadType = "occaecati";
                uploadProtocol = "labore";
            }};            

            CloudchannelAccountsUnregisterResponse res = sdk.accounts.cloudchannelAccountsUnregister(req, new CloudchannelAccountsUnregisterSecurity("quidem", "atque") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudChannelV1UnregisterSubscriberResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
