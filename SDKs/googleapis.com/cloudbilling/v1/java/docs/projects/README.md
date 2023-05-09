# projects

### Available Operations

* [cloudbillingProjectsGetBillingInfo](#cloudbillingprojectsgetbillinginfo) - Gets the billing information for a project. The current authenticated user must have the `resourcemanager.projects.get` permission for the project, which can be granted by assigning the [Project Viewer](https://cloud.google.com/iam/docs/understanding-roles#predefined_roles) role.
* [cloudbillingProjectsUpdateBillingInfo](#cloudbillingprojectsupdatebillinginfo) - Sets or updates the billing account associated with a project. You specify the new billing account by setting the `billing_account_name` in the `ProjectBillingInfo` resource to the resource name of a billing account. Associating a project with an open billing account enables billing on the project and allows charges for resource usage. If the project already had a billing account, this method changes the billing account used for resource usage charges. *Note:* Incurred charges that have not yet been reported in the transaction history of the Google Cloud Console might be billed to the new billing account, even if the charge occurred before the new billing account was assigned to the project. The current authenticated user must have ownership privileges for both the [project](https://cloud.google.com/docs/permissions-overview#h.bgs0oxofvnoo ) and the [billing account](https://cloud.google.com/billing/docs/how-to/billing-access). You can disable billing on the project by setting the `billing_account_name` field to empty. This action disassociates the current billing account from the project. Any billable activity of your in-use services will stop, and your application could stop functioning as expected. Any unbilled charges to date will be billed to the previously associated account. The current authenticated user must be either an owner of the project or an owner of the billing account for the project. Note that associating a project with a *closed* billing account will have much the same effect as disabling billing on the project: any paid resources used by the project will be shut down. Thus, unless you wish to disable billing, you should always call this method with the name of an *open* billing account.

## cloudbillingProjectsGetBillingInfo

Gets the billing information for a project. The current authenticated user must have the `resourcemanager.projects.get` permission for the project, which can be granted by assigning the [Project Viewer](https://cloud.google.com/iam/docs/understanding-roles#predefined_roles) role.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudbillingProjectsGetBillingInfoRequest;
import org.openapis.openapi.models.operations.CloudbillingProjectsGetBillingInfoResponse;
import org.openapis.openapi.models.operations.CloudbillingProjectsGetBillingInfoSecurity;
import org.openapis.openapi.models.operations.CloudbillingProjectsGetBillingInfoSecurityOption1;
import org.openapis.openapi.models.operations.CloudbillingProjectsGetBillingInfoSecurityOption2;
import org.openapis.openapi.models.operations.CloudbillingProjectsGetBillingInfoSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudbillingProjectsGetBillingInfoRequest req = new CloudbillingProjectsGetBillingInfoRequest("non") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "sint";
                alt = AltEnum.MEDIA;
                callback = "provident";
                fields = "necessitatibus";
                key = "sint";
                oauthToken = "officia";
                prettyPrint = false;
                quotaUser = "dolor";
                uploadType = "debitis";
                uploadProtocol = "a";
            }};            

            CloudbillingProjectsGetBillingInfoResponse res = sdk.projects.cloudbillingProjectsGetBillingInfo(req, new CloudbillingProjectsGetBillingInfoSecurity() {{
                option1 = new CloudbillingProjectsGetBillingInfoSecurityOption1("dolorum", "in") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.projectBillingInfo != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## cloudbillingProjectsUpdateBillingInfo

Sets or updates the billing account associated with a project. You specify the new billing account by setting the `billing_account_name` in the `ProjectBillingInfo` resource to the resource name of a billing account. Associating a project with an open billing account enables billing on the project and allows charges for resource usage. If the project already had a billing account, this method changes the billing account used for resource usage charges. *Note:* Incurred charges that have not yet been reported in the transaction history of the Google Cloud Console might be billed to the new billing account, even if the charge occurred before the new billing account was assigned to the project. The current authenticated user must have ownership privileges for both the [project](https://cloud.google.com/docs/permissions-overview#h.bgs0oxofvnoo ) and the [billing account](https://cloud.google.com/billing/docs/how-to/billing-access). You can disable billing on the project by setting the `billing_account_name` field to empty. This action disassociates the current billing account from the project. Any billable activity of your in-use services will stop, and your application could stop functioning as expected. Any unbilled charges to date will be billed to the previously associated account. The current authenticated user must be either an owner of the project or an owner of the billing account for the project. Note that associating a project with a *closed* billing account will have much the same effect as disabling billing on the project: any paid resources used by the project will be shut down. Thus, unless you wish to disable billing, you should always call this method with the name of an *open* billing account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudbillingProjectsUpdateBillingInfoRequest;
import org.openapis.openapi.models.operations.CloudbillingProjectsUpdateBillingInfoResponse;
import org.openapis.openapi.models.operations.CloudbillingProjectsUpdateBillingInfoSecurity;
import org.openapis.openapi.models.operations.CloudbillingProjectsUpdateBillingInfoSecurityOption1;
import org.openapis.openapi.models.operations.CloudbillingProjectsUpdateBillingInfoSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ProjectBillingInfo;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudbillingProjectsUpdateBillingInfoRequest req = new CloudbillingProjectsUpdateBillingInfoRequest("in") {{
                dollarXgafv = XgafvEnum.TWO;
                projectBillingInfo = new ProjectBillingInfo() {{
                    billingAccountName = "maiores";
                    billingEnabled = false;
                    name = "Keith Gulgowski";
                    projectId = "ea";
                }};;
                accessToken = "aliquid";
                alt = AltEnum.PROTO;
                callback = "accusamus";
                fields = "non";
                key = "occaecati";
                oauthToken = "enim";
                prettyPrint = false;
                quotaUser = "accusamus";
                uploadType = "delectus";
                uploadProtocol = "quidem";
            }};            

            CloudbillingProjectsUpdateBillingInfoResponse res = sdk.projects.cloudbillingProjectsUpdateBillingInfo(req, new CloudbillingProjectsUpdateBillingInfoSecurity() {{
                option1 = new CloudbillingProjectsUpdateBillingInfoSecurityOption1("provident", "nam") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.projectBillingInfo != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
