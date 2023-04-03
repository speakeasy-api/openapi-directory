<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.AndroidmanagementEnterprisesCreateSecurity;
import org.openapis.openapi.models.operations.AndroidmanagementEnterprisesCreateRequest;
import org.openapis.openapi.models.operations.AndroidmanagementEnterprisesCreateResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.EnterpriseEnabledNotificationTypesEnum;
import org.openapis.openapi.models.shared.Enterprise;
import org.openapis.openapi.models.shared.TermsAndConditions;
import org.openapis.openapi.models.shared.UserFacingMessage;
import org.openapis.openapi.models.shared.SigninDetailAllowPersonalUsageEnum;
import org.openapis.openapi.models.shared.SigninDetail;
import org.openapis.openapi.models.shared.ExternalData;
import org.openapis.openapi.models.shared.ContactInfo;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AndroidmanagementEnterprisesCreateRequest req = new AndroidmanagementEnterprisesCreateRequest() {{
                dollarXgafv = "2";
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
                    }};
                    enabledNotificationTypes = new org.openapis.openapi.models.shared.EnterpriseEnabledNotificationTypesEnum[]{{
                        add("STATUS_REPORT"),
                        add("STATUS_REPORT"),
                    }};
                    enterpriseDisplayName = "suscipit";
                    logo = new ExternalData() {{
                        sha256Hash = "iure";
                        url = "magnam";
                    }};
                    name = "debitis";
                    primaryColor = 56713;
                    pubsubTopic = "delectus";
                    signinDetails = new org.openapis.openapi.models.shared.SigninDetail[]{{
                        add(new SigninDetail() {{
                            allowPersonalUsage = "PERSONAL_USAGE_ALLOWED";
                            qrCode = "molestiae";
                            signinEnrollmentToken = "minus";
                            signinUrl = "placeat";
                        }}),
                        add(new SigninDetail() {{
                            allowPersonalUsage = "PERSONAL_USAGE_ALLOWED";
                            qrCode = "iusto";
                            signinEnrollmentToken = "excepturi";
                            signinUrl = "nisi";
                        }}),
                    }};
                    termsAndConditions = new org.openapis.openapi.models.shared.TermsAndConditions[]{{
                        add(new TermsAndConditions() {{
                            content = new UserFacingMessage() {{
                                defaultMessage = "temporibus";
                                localizedMessages = new java.util.HashMap<String, String>() {{
                                    put("quis", "veritatis");
                                }};
                            }};
                            header = new UserFacingMessage() {{
                                defaultMessage = "deserunt";
                                localizedMessages = new java.util.HashMap<String, String>() {{
                                    put("ipsam", "repellendus");
                                }};
                            }};
                        }}),
                        add(new TermsAndConditions() {{
                            content = new UserFacingMessage() {{
                                defaultMessage = "sapiente";
                                localizedMessages = new java.util.HashMap<String, String>() {{
                                    put("odit", "at");
                                    put("at", "maiores");
                                    put("molestiae", "quod");
                                    put("quod", "esse");
                                }};
                            }};
                            header = new UserFacingMessage() {{
                                defaultMessage = "totam";
                                localizedMessages = new java.util.HashMap<String, String>() {{
                                    put("dolorum", "dicta");
                                    put("nam", "officia");
                                    put("occaecati", "fugit");
                                    put("deleniti", "hic");
                                }};
                            }};
                        }}),
                        add(new TermsAndConditions() {{
                            content = new UserFacingMessage() {{
                                defaultMessage = "optio";
                                localizedMessages = new java.util.HashMap<String, String>() {{
                                    put("beatae", "commodi");
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
                    }};
                }};
                accessToken = "architecto";
                agreementAccepted = false;
                alt = "json";
                callback = "reiciendis";
                enterpriseToken = "est";
                fields = "mollitia";
                key = "laborum";
                oauthToken = "dolores";
                prettyPrint = false;
                projectId = "dolorem";
                quotaUser = "corporis";
                signupUrlName = "explicabo";
                uploadType = "nobis";
                uploadProtocol = "enim";
            }}            

            AndroidmanagementEnterprisesCreateResponse res = sdk.enterprises.androidmanagementEnterprisesCreate(req, new AndroidmanagementEnterprisesCreateSecurity() {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.enterprise.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->