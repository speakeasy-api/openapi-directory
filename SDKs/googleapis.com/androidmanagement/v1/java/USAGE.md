<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.AndroidmanagementEnterprisesCreateSecurity;
import org.openapis.openapi.models.operations.AndroidmanagementEnterprisesCreateQueryParams;
import org.openapis.openapi.models.operations.AndroidmanagementEnterprisesCreateRequest;
import org.openapis.openapi.models.operations.AndroidmanagementEnterprisesCreateResponse;
import org.openapis.openapi.models.shared.EnterpriseEnabledNotificationTypesEnum;
import org.openapis.openapi.models.shared.Enterprise;
import org.openapis.openapi.models.shared.TermsAndConditions;
import org.openapis.openapi.models.shared.UserFacingMessage;
import org.openapis.openapi.models.shared.SigninDetailAllowPersonalUsageEnum;
import org.openapis.openapi.models.shared.SigninDetail;
import org.openapis.openapi.models.shared.ExternalData;
import org.openapis.openapi.models.shared.ContactInfo;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;
import org.openapis.openapi.models.shared.SchemeOauth2;
import org.openapis.openapi.models.shared.SchemeOauth2c;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AndroidmanagementEnterprisesCreateRequest req = new AndroidmanagementEnterprisesCreateRequest() {{
                security = new AndroidmanagementEnterprisesCreateSecurity() {{
                    oauth2 = new SchemeOauth2() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                    oauth2c = new SchemeOauth2c() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                queryParams = new AndroidmanagementEnterprisesCreateQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "provident";
                    agreementAccepted = false;
                    alt = "proto";
                    callback = "quibusdam";
                    enterpriseToken = "unde";
                    fields = "nulla";
                    key = "corrupti";
                    oauthToken = "illum";
                    prettyPrint = false;
                    projectId = "vel";
                    quotaUser = "error";
                    signupUrlName = "deserunt";
                    uploadType = "suscipit";
                    uploadProtocol = "iure";
                }};
                request = new Enterprise() {{
                    appAutoApprovalEnabled = false;
                    contactInfo = new ContactInfo() {{
                        contactEmail = "magnam";
                        dataProtectionOfficerEmail = "debitis";
                        dataProtectionOfficerName = "ipsa";
                        dataProtectionOfficerPhone = "delectus";
                        euRepresentativeEmail = "tempora";
                        euRepresentativeName = "suscipit";
                        euRepresentativePhone = "molestiae";
                    }};
                    enabledNotificationTypes = new org.openapis.openapi.models.shared.EnterpriseEnabledNotificationTypesEnum[]{{
                        add("COMMAND"),
                        add("STATUS_REPORT"),
                        add("COMPLIANCE_REPORT"),
                        add("STATUS_REPORT"),
                    }};
                    enterpriseDisplayName = "nisi";
                    logo = new ExternalData() {{
                        sha256Hash = "recusandae";
                        url = "temporibus";
                    }};
                    name = "ab";
                    primaryColor = 337396;
                    pubsubTopic = "veritatis";
                    signinDetails = new org.openapis.openapi.models.shared.SigninDetail[]{{
                        add(new SigninDetail() {{
                            allowPersonalUsage = "ALLOW_PERSONAL_USAGE_UNSPECIFIED";
                            qrCode = "ipsam";
                            signinEnrollmentToken = "repellendus";
                            signinUrl = "sapiente";
                        }}),
                        add(new SigninDetail() {{
                            allowPersonalUsage = "PERSONAL_USAGE_DISALLOWED";
                            qrCode = "odit";
                            signinEnrollmentToken = "at";
                            signinUrl = "at";
                        }}),
                        add(new SigninDetail() {{
                            allowPersonalUsage = "PERSONAL_USAGE_DISALLOWED";
                            qrCode = "molestiae";
                            signinEnrollmentToken = "quod";
                            signinUrl = "quod";
                        }}),
                    }};
                    termsAndConditions = new org.openapis.openapi.models.shared.TermsAndConditions[]{{
                        add(new TermsAndConditions() {{
                            content = new UserFacingMessage() {{
                                defaultMessage = "totam";
                                localizedMessages = new java.util.HashMap<String, String>() {{
                                    put("dolorum", "dicta");
                                    put("nam", "officia");
                                    put("occaecati", "fugit");
                                    put("deleniti", "hic");
                                }};
                            }};
                            header = new UserFacingMessage() {{
                                defaultMessage = "optio";
                                localizedMessages = new java.util.HashMap<String, String>() {{
                                    put("beatae", "commodi");
                                    put("molestiae", "modi");
                                    put("qui", "impedit");
                                }};
                            }};
                        }}),
                        add(new TermsAndConditions() {{
                            content = new UserFacingMessage() {{
                                defaultMessage = "cum";
                                localizedMessages = new java.util.HashMap<String, String>() {{
                                    put("ipsum", "excepturi");
                                    put("aspernatur", "perferendis");
                                }};
                            }};
                            header = new UserFacingMessage() {{
                                defaultMessage = "ad";
                                localizedMessages = new java.util.HashMap<String, String>() {{
                                    put("sed", "iste");
                                    put("dolor", "natus");
                                    put("laboriosam", "hic");
                                }};
                            }};
                        }}),
                    }};
                }};
            }};            

            AndroidmanagementEnterprisesCreateResponse res = sdk.enterprises.androidmanagementEnterprisesCreate(req);

            if (res.enterprise.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->