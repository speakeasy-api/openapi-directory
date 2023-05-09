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