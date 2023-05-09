# openapi

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'org.openapis.openapi:openapi:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudbillingBillingAccountsCreateRequest;
import org.openapis.openapi.models.operations.CloudbillingBillingAccountsCreateResponse;
import org.openapis.openapi.models.operations.CloudbillingBillingAccountsCreateSecurity;
import org.openapis.openapi.models.operations.CloudbillingBillingAccountsCreateSecurityOption1;
import org.openapis.openapi.models.operations.CloudbillingBillingAccountsCreateSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.BillingAccountInput;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudbillingBillingAccountsCreateRequest req = new CloudbillingBillingAccountsCreateRequest() {{
                dollarXgafv = XgafvEnum.TWO;
                billingAccountInput = new BillingAccountInput() {{
                    displayName = "provident";
                    masterBillingAccount = "distinctio";
                }};;
                accessToken = "quibusdam";
                alt = AltEnum.MEDIA;
                callback = "nulla";
                fields = "corrupti";
                key = "illum";
                oauthToken = "vel";
                prettyPrint = false;
                quotaUser = "error";
                uploadType = "deserunt";
                uploadProtocol = "suscipit";
            }};            

            CloudbillingBillingAccountsCreateResponse res = sdk.billingAccounts.cloudbillingBillingAccountsCreate(req, new CloudbillingBillingAccountsCreateSecurity() {{
                option1 = new CloudbillingBillingAccountsCreateSecurityOption1("iure", "magnam") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.billingAccount != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [billingAccounts](docs/billingaccounts/README.md)

* [cloudbillingBillingAccountsCreate](docs/billingaccounts/README.md#cloudbillingbillingaccountscreate) - This method creates [billing subaccounts](https://cloud.google.com/billing/docs/concepts#subaccounts). Google Cloud resellers should use the Channel Services APIs, [accounts.customers.create](https://cloud.google.com/channel/docs/reference/rest/v1/accounts.customers/create) and [accounts.customers.entitlements.create](https://cloud.google.com/channel/docs/reference/rest/v1/accounts.customers.entitlements/create). When creating a subaccount, the current authenticated user must have the `billing.accounts.update` IAM permission on the parent account, which is typically given to billing account [administrators](https://cloud.google.com/billing/docs/how-to/billing-access). This method will return an error if the parent account has not been provisioned as a reseller account.
* [cloudbillingBillingAccountsGet](docs/billingaccounts/README.md#cloudbillingbillingaccountsget) - Gets information about a billing account. The current authenticated user must be a [viewer of the billing account](https://cloud.google.com/billing/docs/how-to/billing-access).
* [cloudbillingBillingAccountsGetIamPolicy](docs/billingaccounts/README.md#cloudbillingbillingaccountsgetiampolicy) - Gets the access control policy for a billing account. The caller must have the `billing.accounts.getIamPolicy` permission on the account, which is often given to billing account [viewers](https://cloud.google.com/billing/docs/how-to/billing-access).
* [cloudbillingBillingAccountsList](docs/billingaccounts/README.md#cloudbillingbillingaccountslist) - Lists the billing accounts that the current authenticated user has permission to [view](https://cloud.google.com/billing/docs/how-to/billing-access).
* [cloudbillingBillingAccountsPatch](docs/billingaccounts/README.md#cloudbillingbillingaccountspatch) - Updates a billing account's fields. Currently the only field that can be edited is `display_name`. The current authenticated user must have the `billing.accounts.update` IAM permission, which is typically given to the [administrator](https://cloud.google.com/billing/docs/how-to/billing-access) of the billing account.
* [cloudbillingBillingAccountsProjectsList](docs/billingaccounts/README.md#cloudbillingbillingaccountsprojectslist) - Lists the projects associated with a billing account. The current authenticated user must have the `billing.resourceAssociations.list` IAM permission, which is often given to billing account [viewers](https://cloud.google.com/billing/docs/how-to/billing-access).
* [cloudbillingBillingAccountsSetIamPolicy](docs/billingaccounts/README.md#cloudbillingbillingaccountssetiampolicy) - Sets the access control policy for a billing account. Replaces any existing policy. The caller must have the `billing.accounts.setIamPolicy` permission on the account, which is often given to billing account [administrators](https://cloud.google.com/billing/docs/how-to/billing-access).
* [cloudbillingBillingAccountsTestIamPermissions](docs/billingaccounts/README.md#cloudbillingbillingaccountstestiampermissions) - Tests the access control policy for a billing account. This method takes the resource and a set of permissions as input and returns the subset of the input permissions that the caller is allowed for that resource.

### [projects](docs/projects/README.md)

* [cloudbillingProjectsGetBillingInfo](docs/projects/README.md#cloudbillingprojectsgetbillinginfo) - Gets the billing information for a project. The current authenticated user must have the `resourcemanager.projects.get` permission for the project, which can be granted by assigning the [Project Viewer](https://cloud.google.com/iam/docs/understanding-roles#predefined_roles) role.
* [cloudbillingProjectsUpdateBillingInfo](docs/projects/README.md#cloudbillingprojectsupdatebillinginfo) - Sets or updates the billing account associated with a project. You specify the new billing account by setting the `billing_account_name` in the `ProjectBillingInfo` resource to the resource name of a billing account. Associating a project with an open billing account enables billing on the project and allows charges for resource usage. If the project already had a billing account, this method changes the billing account used for resource usage charges. *Note:* Incurred charges that have not yet been reported in the transaction history of the Google Cloud Console might be billed to the new billing account, even if the charge occurred before the new billing account was assigned to the project. The current authenticated user must have ownership privileges for both the [project](https://cloud.google.com/docs/permissions-overview#h.bgs0oxofvnoo ) and the [billing account](https://cloud.google.com/billing/docs/how-to/billing-access). You can disable billing on the project by setting the `billing_account_name` field to empty. This action disassociates the current billing account from the project. Any billable activity of your in-use services will stop, and your application could stop functioning as expected. Any unbilled charges to date will be billed to the previously associated account. The current authenticated user must be either an owner of the project or an owner of the billing account for the project. Note that associating a project with a *closed* billing account will have much the same effect as disabling billing on the project: any paid resources used by the project will be shut down. Thus, unless you wish to disable billing, you should always call this method with the name of an *open* billing account.

### [services](docs/services/README.md)

* [cloudbillingServicesList](docs/services/README.md#cloudbillingserviceslist) - Lists all public cloud services.
* [cloudbillingServicesSkusList](docs/services/README.md#cloudbillingservicesskuslist) - Lists all publicly available SKUs for a given cloud service.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
