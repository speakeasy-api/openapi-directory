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
import org.openapis.openapi.models.operations.AndroidmanagementEnterprisesCreateRequest;
import org.openapis.openapi.models.operations.AndroidmanagementEnterprisesCreateResponse;
import org.openapis.openapi.models.operations.AndroidmanagementEnterprisesCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ContactInfo;
import org.openapis.openapi.models.shared.Enterprise;
import org.openapis.openapi.models.shared.EnterpriseEnabledNotificationTypesEnum;
import org.openapis.openapi.models.shared.ExternalData;
import org.openapis.openapi.models.shared.SigninDetail;
import org.openapis.openapi.models.shared.SigninDetailAllowPersonalUsageEnum;
import org.openapis.openapi.models.shared.TermsAndConditions;
import org.openapis.openapi.models.shared.UserFacingMessage;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AndroidmanagementEnterprisesCreateRequest req = new AndroidmanagementEnterprisesCreateRequest() {{
                dollarXgafv = XgafvEnum.TWO;
                enterprise = new Enterprise() {{
                    appAutoApprovalEnabled = false;
                    contactInfo = new ContactInfo() {{
                        contactEmail = "provident";
                        dataProtectionOfficerEmail = "distinctio";
                        dataProtectionOfficerName = "quibusdam";
                        dataProtectionOfficerPhone = "unde";
                        euRepresentativeEmail = "nulla";
                        euRepresentativeName = "corrupti";
                        euRepresentativePhone = "illum";
                    }};;
                    enabledNotificationTypes = new org.openapis.openapi.models.shared.EnterpriseEnabledNotificationTypesEnum[]{{
                        add(EnterpriseEnabledNotificationTypesEnum.STATUS_REPORT),
                        add(EnterpriseEnabledNotificationTypesEnum.STATUS_REPORT),
                    }};
                    enterpriseDisplayName = "suscipit";
                    logo = new ExternalData() {{
                        sha256Hash = "iure";
                        url = "magnam";
                    }};;
                    name = "Larry Windler";
                    primaryColor = 477665;
                    pubsubTopic = "minus";
                    signinDetails = new org.openapis.openapi.models.shared.SigninDetail[]{{
                        add(new SigninDetail() {{
                            allowPersonalUsage = SigninDetailAllowPersonalUsageEnum.PERSONAL_USAGE_ALLOWED;
                            qrCode = "iusto";
                            signinEnrollmentToken = "excepturi";
                            signinUrl = "nisi";
                        }}),
                        add(new SigninDetail() {{
                            allowPersonalUsage = SigninDetailAllowPersonalUsageEnum.PERSONAL_USAGE_DISALLOWED;
                            qrCode = "temporibus";
                            signinEnrollmentToken = "ab";
                            signinUrl = "quis";
                        }}),
                        add(new SigninDetail() {{
                            allowPersonalUsage = SigninDetailAllowPersonalUsageEnum.ALLOW_PERSONAL_USAGE_UNSPECIFIED;
                            qrCode = "deserunt";
                            signinEnrollmentToken = "perferendis";
                            signinUrl = "ipsam";
                        }}),
                        add(new SigninDetail() {{
                            allowPersonalUsage = SigninDetailAllowPersonalUsageEnum.PERSONAL_USAGE_DISALLOWED;
                            qrCode = "sapiente";
                            signinEnrollmentToken = "quo";
                            signinUrl = "odit";
                        }}),
                    }};
                    termsAndConditions = new org.openapis.openapi.models.shared.TermsAndConditions[]{{
                        add(new TermsAndConditions() {{
                            content = new UserFacingMessage() {{
                                defaultMessage = "at";
                                localizedMessages = new java.util.HashMap<String, String>() {{
                                    put("molestiae", "quod");
                                    put("quod", "esse");
                                    put("totam", "porro");
                                    put("dolorum", "dicta");
                                }};
                            }};
                            header = new UserFacingMessage() {{
                                defaultMessage = "nam";
                                localizedMessages = new java.util.HashMap<String, String>() {{
                                    put("occaecati", "fugit");
                                    put("deleniti", "hic");
                                    put("optio", "totam");
                                }};
                            }};
                        }}),
                        add(new TermsAndConditions() {{
                            content = new UserFacingMessage() {{
                                defaultMessage = "beatae";
                                localizedMessages = new java.util.HashMap<String, String>() {{
                                    put("molestiae", "modi");
                                    put("qui", "impedit");
                                }};
                            }};
                            header = new UserFacingMessage() {{
                                defaultMessage = "cum";
                                localizedMessages = new java.util.HashMap<String, String>() {{
                                    put("ipsum", "excepturi");
                                    put("aspernatur", "perferendis");
                                }};
                            }};
                        }}),
                        add(new TermsAndConditions() {{
                            content = new UserFacingMessage() {{
                                defaultMessage = "ad";
                                localizedMessages = new java.util.HashMap<String, String>() {{
                                    put("sed", "iste");
                                    put("dolor", "natus");
                                    put("laboriosam", "hic");
                                }};
                            }};
                            header = new UserFacingMessage() {{
                                defaultMessage = "saepe";
                                localizedMessages = new java.util.HashMap<String, String>() {{
                                    put("in", "corporis");
                                    put("iste", "iure");
                                    put("saepe", "quidem");
                                }};
                            }};
                        }}),
                        add(new TermsAndConditions() {{
                            content = new UserFacingMessage() {{
                                defaultMessage = "architecto";
                                localizedMessages = new java.util.HashMap<String, String>() {{
                                    put("reiciendis", "est");
                                }};
                            }};
                            header = new UserFacingMessage() {{
                                defaultMessage = "mollitia";
                                localizedMessages = new java.util.HashMap<String, String>() {{
                                    put("dolores", "dolorem");
                                    put("corporis", "explicabo");
                                    put("nobis", "enim");
                                }};
                            }};
                        }}),
                    }};
                }};;
                accessToken = "omnis";
                agreementAccepted = false;
                alt = AltEnum.MEDIA;
                callback = "minima";
                enterpriseToken = "excepturi";
                fields = "accusantium";
                key = "iure";
                oauthToken = "culpa";
                prettyPrint = false;
                projectId = "doloribus";
                quotaUser = "sapiente";
                signupUrlName = "architecto";
                uploadType = "mollitia";
                uploadProtocol = "dolorem";
            }};            

            AndroidmanagementEnterprisesCreateResponse res = sdk.enterprises.androidmanagementEnterprisesCreate(req, new AndroidmanagementEnterprisesCreateSecurity("culpa", "consequuntur") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.enterprise != null) {
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


### [enterprises](docs/enterprises/README.md)

* [androidmanagementEnterprisesCreate](docs/enterprises/README.md#androidmanagemententerprisescreate) - Creates an enterprise. This is the last step in the enterprise signup flow. See also: SigninDetail
* [androidmanagementEnterprisesDevicesIssueCommand](docs/enterprises/README.md#androidmanagemententerprisesdevicesissuecommand) - Issues a command to a device. The Operation resource returned contains a Command in its metadata field. Use the get operation method to get the status of the command.
* [androidmanagementEnterprisesDevicesList](docs/enterprises/README.md#androidmanagemententerprisesdeviceslist) - Lists devices for a given enterprise. Deleted devices are not returned in the response.
* [androidmanagementEnterprisesDevicesOperationsCancel](docs/enterprises/README.md#androidmanagemententerprisesdevicesoperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns google.rpc.Code.UNIMPLEMENTED. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to Code.CANCELLED.
* [androidmanagementEnterprisesEnrollmentTokensCreate](docs/enterprises/README.md#androidmanagemententerprisesenrollmenttokenscreate) - Creates an enrollment token for a given enterprise. It's up to the caller's responsibility to manage the lifecycle of newly created tokens and deleting them when they're not intended to be used anymore. Once an enrollment token has been created, it's not possible to retrieve the token's content anymore using AM API. It is recommended for EMMs to securely store the token if it's intended to be reused.
* [androidmanagementEnterprisesEnrollmentTokensList](docs/enterprises/README.md#androidmanagemententerprisesenrollmenttokenslist) - Lists active, unexpired enrollment tokens for a given enterprise. The list items contain only a partial view of EnrollmentToken: all the fields but name and expiration_timestamp are empty. This method is meant to help manage active enrollment tokens lifecycle. For security reasons, it's recommended to delete active enrollment tokens as soon as they're not intended to be used anymore.
* [androidmanagementEnterprisesList](docs/enterprises/README.md#androidmanagemententerpriseslist) - Lists EMM-managed enterprises. Only BASIC fields are returned.
* [androidmanagementEnterprisesPoliciesList](docs/enterprises/README.md#androidmanagemententerprisespolicieslist) - Lists policies for a given enterprise.
* [androidmanagementEnterprisesWebAppsCreate](docs/enterprises/README.md#androidmanagemententerpriseswebappscreate) - Creates a web app.
* [androidmanagementEnterprisesWebAppsDelete](docs/enterprises/README.md#androidmanagemententerpriseswebappsdelete) - Deletes a web app.
* [androidmanagementEnterprisesWebAppsGet](docs/enterprises/README.md#androidmanagemententerpriseswebappsget) - Gets a web app.
* [androidmanagementEnterprisesWebAppsList](docs/enterprises/README.md#androidmanagemententerpriseswebappslist) - Lists web apps for a given enterprise.
* [androidmanagementEnterprisesWebAppsPatch](docs/enterprises/README.md#androidmanagemententerpriseswebappspatch) - Updates a web app.
* [androidmanagementEnterprisesWebTokensCreate](docs/enterprises/README.md#androidmanagemententerpriseswebtokenscreate) - Creates a web token to access an embeddable managed Google Play web UI for a given enterprise.

### [signupUrls](docs/signupurls/README.md)

* [androidmanagementSignupUrlsCreate](docs/signupurls/README.md#androidmanagementsignupurlscreate) - Creates an enterprise signup URL.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
