# projects

### Available Operations

* [identitytoolkitProjectsIdentityPlatformInitializeAuth](#identitytoolkitprojectsidentityplatforminitializeauth) - Initialize Identity Platform for a Cloud project. Identity Platform is an end-to-end authentication system for third-party users to access your apps and services. These could include mobile/web apps, games, APIs and beyond. This is the publicly available variant of EnableIdentityPlatform that is only available to billing-enabled projects.
* [identitytoolkitProjectsTenantsCreate](#identitytoolkitprojectstenantscreate) - Create a tenant. Requires write permission on the Agent project.
* [identitytoolkitProjectsTenantsDefaultSupportedIdpConfigsCreate](#identitytoolkitprojectstenantsdefaultsupportedidpconfigscreate) - Create a default supported Idp configuration for an Identity Toolkit project.
* [identitytoolkitProjectsTenantsDefaultSupportedIdpConfigsList](#identitytoolkitprojectstenantsdefaultsupportedidpconfigslist) - List all default supported Idp configurations for an Identity Toolkit project.
* [identitytoolkitProjectsTenantsGetIamPolicy](#identitytoolkitprojectstenantsgetiampolicy) - Gets the access control policy for a resource. An error is returned if the resource does not exist. An empty policy is returned if the resource exists but does not have a policy set on it. Caller must have the right Google IAM permission on the resource.
* [identitytoolkitProjectsTenantsInboundSamlConfigsCreate](#identitytoolkitprojectstenantsinboundsamlconfigscreate) - Create an inbound SAML configuration for an Identity Toolkit project.
* [identitytoolkitProjectsTenantsInboundSamlConfigsList](#identitytoolkitprojectstenantsinboundsamlconfigslist) - List all inbound SAML configurations for an Identity Toolkit project.
* [identitytoolkitProjectsTenantsList](#identitytoolkitprojectstenantslist) - List tenants under the given agent project. Requires read permission on the Agent project.
* [identitytoolkitProjectsTenantsOauthIdpConfigsCreate](#identitytoolkitprojectstenantsoauthidpconfigscreate) - Create an Oidc Idp configuration for an Identity Toolkit project.
* [identitytoolkitProjectsTenantsOauthIdpConfigsDelete](#identitytoolkitprojectstenantsoauthidpconfigsdelete) - Delete an Oidc Idp configuration for an Identity Toolkit project.
* [identitytoolkitProjectsTenantsOauthIdpConfigsGet](#identitytoolkitprojectstenantsoauthidpconfigsget) - Retrieve an Oidc Idp configuration for an Identity Toolkit project.
* [identitytoolkitProjectsTenantsOauthIdpConfigsList](#identitytoolkitprojectstenantsoauthidpconfigslist) - List all Oidc Idp configurations for an Identity Toolkit project.
* [identitytoolkitProjectsTenantsOauthIdpConfigsPatch](#identitytoolkitprojectstenantsoauthidpconfigspatch) - Update an Oidc Idp configuration for an Identity Toolkit project.
* [identitytoolkitProjectsTenantsSetIamPolicy](#identitytoolkitprojectstenantssetiampolicy) - Sets the access control policy for a resource. If the policy exists, it is replaced. Caller must have the right Google IAM permission on the resource.
* [identitytoolkitProjectsTenantsTestIamPermissions](#identitytoolkitprojectstenantstestiampermissions) - Returns the caller's permissions on a resource. An error is returned if the resource does not exist. A caller is not required to have Google IAM permission to make this request.

## identitytoolkitProjectsIdentityPlatformInitializeAuth

Initialize Identity Platform for a Cloud project. Identity Platform is an end-to-end authentication system for third-party users to access your apps and services. These could include mobile/web apps, games, APIs and beyond. This is the publicly available variant of EnableIdentityPlatform that is only available to billing-enabled projects.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.IdentitytoolkitProjectsIdentityPlatformInitializeAuthRequest;
import org.openapis.openapi.models.operations.IdentitytoolkitProjectsIdentityPlatformInitializeAuthResponse;
import org.openapis.openapi.models.operations.IdentitytoolkitProjectsIdentityPlatformInitializeAuthSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            IdentitytoolkitProjectsIdentityPlatformInitializeAuthRequest req = new IdentitytoolkitProjectsIdentityPlatformInitializeAuthRequest("maiores") {{
                dollarXgafv = XgafvEnum.TWO;
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("magnam", "cumque");
                }};
                accessToken = "facere";
                alt = AltEnum.MEDIA;
                callback = "aliquid";
                fields = "laborum";
                key = "accusamus";
                oauthToken = "non";
                prettyPrint = false;
                quotaUser = "occaecati";
                uploadType = "enim";
                uploadProtocol = "accusamus";
            }};            

            IdentitytoolkitProjectsIdentityPlatformInitializeAuthResponse res = sdk.projects.identitytoolkitProjectsIdentityPlatformInitializeAuth(req, new IdentitytoolkitProjectsIdentityPlatformInitializeAuthSecurity("delectus", "quidem") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudIdentitytoolkitAdminV2InitializeIdentityPlatformResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## identitytoolkitProjectsTenantsCreate

Create a tenant. Requires write permission on the Agent project.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.IdentitytoolkitProjectsTenantsCreateRequest;
import org.openapis.openapi.models.operations.IdentitytoolkitProjectsTenantsCreateResponse;
import org.openapis.openapi.models.operations.IdentitytoolkitProjectsTenantsCreateSecurity;
import org.openapis.openapi.models.operations.IdentitytoolkitProjectsTenantsCreateSecurityOption1;
import org.openapis.openapi.models.operations.IdentitytoolkitProjectsTenantsCreateSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleCloudIdentitytoolkitAdminV2AllowByDefault;
import org.openapis.openapi.models.shared.GoogleCloudIdentitytoolkitAdminV2AllowlistOnly;
import org.openapis.openapi.models.shared.GoogleCloudIdentitytoolkitAdminV2ClientPermissionConfig;
import org.openapis.openapi.models.shared.GoogleCloudIdentitytoolkitAdminV2ClientPermissions;
import org.openapis.openapi.models.shared.GoogleCloudIdentitytoolkitAdminV2EmailPrivacyConfig;
import org.openapis.openapi.models.shared.GoogleCloudIdentitytoolkitAdminV2Inheritance;
import org.openapis.openapi.models.shared.GoogleCloudIdentitytoolkitAdminV2MonitoringConfig;
import org.openapis.openapi.models.shared.GoogleCloudIdentitytoolkitAdminV2MultiFactorAuthConfig;
import org.openapis.openapi.models.shared.GoogleCloudIdentitytoolkitAdminV2MultiFactorAuthConfigEnabledProvidersEnum;
import org.openapis.openapi.models.shared.GoogleCloudIdentitytoolkitAdminV2MultiFactorAuthConfigStateEnum;
import org.openapis.openapi.models.shared.GoogleCloudIdentitytoolkitAdminV2ProviderConfig;
import org.openapis.openapi.models.shared.GoogleCloudIdentitytoolkitAdminV2ProviderConfigStateEnum;
import org.openapis.openapi.models.shared.GoogleCloudIdentitytoolkitAdminV2RecaptchaConfigEmailPasswordEnforcementStateEnum;
import org.openapis.openapi.models.shared.GoogleCloudIdentitytoolkitAdminV2RecaptchaConfigInput;
import org.openapis.openapi.models.shared.GoogleCloudIdentitytoolkitAdminV2RecaptchaManagedRule;
import org.openapis.openapi.models.shared.GoogleCloudIdentitytoolkitAdminV2RecaptchaManagedRuleActionEnum;
import org.openapis.openapi.models.shared.GoogleCloudIdentitytoolkitAdminV2RequestLogging;
import org.openapis.openapi.models.shared.GoogleCloudIdentitytoolkitAdminV2SmsRegionConfig;
import org.openapis.openapi.models.shared.GoogleCloudIdentitytoolkitAdminV2TenantInput;
import org.openapis.openapi.models.shared.GoogleCloudIdentitytoolkitAdminV2TotpMfaProviderConfig;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            IdentitytoolkitProjectsTenantsCreateRequest req = new IdentitytoolkitProjectsTenantsCreateRequest("provident") {{
                dollarXgafv = XgafvEnum.TWO;
                googleCloudIdentitytoolkitAdminV2TenantInput = new GoogleCloudIdentitytoolkitAdminV2TenantInput() {{
                    allowPasswordSignup = false;
                    autodeleteAnonymousUsers = false;
                    client = new GoogleCloudIdentitytoolkitAdminV2ClientPermissionConfig() {{
                        permissions = new GoogleCloudIdentitytoolkitAdminV2ClientPermissions() {{
                            disabledUserDeletion = false;
                            disabledUserSignup = false;
                        }};;
                    }};;
                    disableAuth = false;
                    displayName = "id";
                    emailPrivacyConfig = new GoogleCloudIdentitytoolkitAdminV2EmailPrivacyConfig() {{
                        enableImprovedEmailPrivacy = false;
                    }};;
                    enableAnonymousUser = false;
                    enableEmailLinkSignin = false;
                    inheritance = new GoogleCloudIdentitytoolkitAdminV2Inheritance() {{
                        emailSendingConfig = false;
                    }};;
                    mfaConfig = new GoogleCloudIdentitytoolkitAdminV2MultiFactorAuthConfig() {{
                        enabledProviders = new org.openapis.openapi.models.shared.GoogleCloudIdentitytoolkitAdminV2MultiFactorAuthConfigEnabledProvidersEnum[]{{
                            add(GoogleCloudIdentitytoolkitAdminV2MultiFactorAuthConfigEnabledProvidersEnum.PHONE_SMS),
                            add(GoogleCloudIdentitytoolkitAdminV2MultiFactorAuthConfigEnabledProvidersEnum.PHONE_SMS),
                            add(GoogleCloudIdentitytoolkitAdminV2MultiFactorAuthConfigEnabledProvidersEnum.PROVIDER_UNSPECIFIED),
                        }};
                        providerConfigs = new org.openapis.openapi.models.shared.GoogleCloudIdentitytoolkitAdminV2ProviderConfig[]{{
                            add(new GoogleCloudIdentitytoolkitAdminV2ProviderConfig() {{
                                state = GoogleCloudIdentitytoolkitAdminV2ProviderConfigStateEnum.DISABLED;
                                totpProviderConfig = new GoogleCloudIdentitytoolkitAdminV2TotpMfaProviderConfig() {{
                                    adjacentIntervals = 423855;
                                }};
                            }}),
                            add(new GoogleCloudIdentitytoolkitAdminV2ProviderConfig() {{
                                state = GoogleCloudIdentitytoolkitAdminV2ProviderConfigStateEnum.ENABLED;
                                totpProviderConfig = new GoogleCloudIdentitytoolkitAdminV2TotpMfaProviderConfig() {{
                                    adjacentIntervals = 606393;
                                }};
                            }}),
                            add(new GoogleCloudIdentitytoolkitAdminV2ProviderConfig() {{
                                state = GoogleCloudIdentitytoolkitAdminV2ProviderConfigStateEnum.DISABLED;
                                totpProviderConfig = new GoogleCloudIdentitytoolkitAdminV2TotpMfaProviderConfig() {{
                                    adjacentIntervals = 19193;
                                }};
                            }}),
                        }};
                        state = GoogleCloudIdentitytoolkitAdminV2MultiFactorAuthConfigStateEnum.DISABLED;
                    }};;
                    monitoring = new GoogleCloudIdentitytoolkitAdminV2MonitoringConfig() {{
                        requestLogging = new GoogleCloudIdentitytoolkitAdminV2RequestLogging() {{
                            enabled = false;
                        }};;
                    }};;
                    recaptchaConfig = new GoogleCloudIdentitytoolkitAdminV2RecaptchaConfigInput() {{
                        emailPasswordEnforcementState = GoogleCloudIdentitytoolkitAdminV2RecaptchaConfigEmailPasswordEnforcementStateEnum.OFF;
                        managedRules = new org.openapis.openapi.models.shared.GoogleCloudIdentitytoolkitAdminV2RecaptchaManagedRule[]{{
                            add(new GoogleCloudIdentitytoolkitAdminV2RecaptchaManagedRule() {{
                                action = GoogleCloudIdentitytoolkitAdminV2RecaptchaManagedRuleActionEnum.BLOCK;
                                endScore = 2879.91;
                            }}),
                            add(new GoogleCloudIdentitytoolkitAdminV2RecaptchaManagedRule() {{
                                action = GoogleCloudIdentitytoolkitAdminV2RecaptchaManagedRuleActionEnum.RECAPTCHA_ACTION_UNSPECIFIED;
                                endScore = 3834.62;
                            }}),
                            add(new GoogleCloudIdentitytoolkitAdminV2RecaptchaManagedRule() {{
                                action = GoogleCloudIdentitytoolkitAdminV2RecaptchaManagedRuleActionEnum.BLOCK;
                                endScore = 7491.7;
                            }}),
                        }};
                        useAccountDefender = false;
                    }};;
                    smsRegionConfig = new GoogleCloudIdentitytoolkitAdminV2SmsRegionConfig() {{
                        allowByDefault = new GoogleCloudIdentitytoolkitAdminV2AllowByDefault() {{
                            disallowedRegions = new String[]{{
                                add("vero"),
                                add("aspernatur"),
                            }};
                        }};;
                        allowlistOnly = new GoogleCloudIdentitytoolkitAdminV2AllowlistOnly() {{
                            allowedRegions = new String[]{{
                                add("magnam"),
                            }};
                        }};;
                    }};;
                    testPhoneNumbers = new java.util.HashMap<String, String>() {{
                        put("excepturi", "ullam");
                    }};
                }};;
                accessToken = "provident";
                alt = AltEnum.MEDIA;
                callback = "sint";
                fields = "accusantium";
                key = "mollitia";
                oauthToken = "reiciendis";
                prettyPrint = false;
                quotaUser = "mollitia";
                uploadType = "ad";
                uploadProtocol = "eum";
            }};            

            IdentitytoolkitProjectsTenantsCreateResponse res = sdk.projects.identitytoolkitProjectsTenantsCreate(req, new IdentitytoolkitProjectsTenantsCreateSecurity() {{
                option1 = new IdentitytoolkitProjectsTenantsCreateSecurityOption1("dolor", "necessitatibus") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.googleCloudIdentitytoolkitAdminV2Tenant != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## identitytoolkitProjectsTenantsDefaultSupportedIdpConfigsCreate

Create a default supported Idp configuration for an Identity Toolkit project.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.IdentitytoolkitProjectsTenantsDefaultSupportedIdpConfigsCreateRequest;
import org.openapis.openapi.models.operations.IdentitytoolkitProjectsTenantsDefaultSupportedIdpConfigsCreateResponse;
import org.openapis.openapi.models.operations.IdentitytoolkitProjectsTenantsDefaultSupportedIdpConfigsCreateSecurity;
import org.openapis.openapi.models.operations.IdentitytoolkitProjectsTenantsDefaultSupportedIdpConfigsCreateSecurityOption1;
import org.openapis.openapi.models.operations.IdentitytoolkitProjectsTenantsDefaultSupportedIdpConfigsCreateSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleCloudIdentitytoolkitAdminV2AppleSignInConfig;
import org.openapis.openapi.models.shared.GoogleCloudIdentitytoolkitAdminV2CodeFlowConfig;
import org.openapis.openapi.models.shared.GoogleCloudIdentitytoolkitAdminV2DefaultSupportedIdpConfig;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            IdentitytoolkitProjectsTenantsDefaultSupportedIdpConfigsCreateRequest req = new IdentitytoolkitProjectsTenantsDefaultSupportedIdpConfigsCreateRequest("odit") {{
                dollarXgafv = XgafvEnum.ONE;
                googleCloudIdentitytoolkitAdminV2DefaultSupportedIdpConfig = new GoogleCloudIdentitytoolkitAdminV2DefaultSupportedIdpConfig() {{
                    appleSignInConfig = new GoogleCloudIdentitytoolkitAdminV2AppleSignInConfig() {{
                        bundleIds = new String[]{{
                            add("iure"),
                        }};
                        codeFlowConfig = new GoogleCloudIdentitytoolkitAdminV2CodeFlowConfig() {{
                            keyId = "doloribus";
                            privateKey = "debitis";
                            teamId = "eius";
                        }};;
                    }};;
                    clientId = "maxime";
                    clientSecret = "deleniti";
                    enabled = false;
                    name = "Dr. Arnold Bradtke";
                }};;
                accessToken = "expedita";
                alt = AltEnum.MEDIA;
                callback = "repellat";
                fields = "quibusdam";
                idpId = "sed";
                key = "saepe";
                oauthToken = "pariatur";
                prettyPrint = false;
                quotaUser = "accusantium";
                uploadType = "consequuntur";
                uploadProtocol = "praesentium";
            }};            

            IdentitytoolkitProjectsTenantsDefaultSupportedIdpConfigsCreateResponse res = sdk.projects.identitytoolkitProjectsTenantsDefaultSupportedIdpConfigsCreate(req, new IdentitytoolkitProjectsTenantsDefaultSupportedIdpConfigsCreateSecurity() {{
                option1 = new IdentitytoolkitProjectsTenantsDefaultSupportedIdpConfigsCreateSecurityOption1("natus", "magni") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.googleCloudIdentitytoolkitAdminV2DefaultSupportedIdpConfig != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## identitytoolkitProjectsTenantsDefaultSupportedIdpConfigsList

List all default supported Idp configurations for an Identity Toolkit project.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.IdentitytoolkitProjectsTenantsDefaultSupportedIdpConfigsListRequest;
import org.openapis.openapi.models.operations.IdentitytoolkitProjectsTenantsDefaultSupportedIdpConfigsListResponse;
import org.openapis.openapi.models.operations.IdentitytoolkitProjectsTenantsDefaultSupportedIdpConfigsListSecurity;
import org.openapis.openapi.models.operations.IdentitytoolkitProjectsTenantsDefaultSupportedIdpConfigsListSecurityOption1;
import org.openapis.openapi.models.operations.IdentitytoolkitProjectsTenantsDefaultSupportedIdpConfigsListSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            IdentitytoolkitProjectsTenantsDefaultSupportedIdpConfigsListRequest req = new IdentitytoolkitProjectsTenantsDefaultSupportedIdpConfigsListRequest("sunt") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "illum";
                alt = AltEnum.PROTO;
                callback = "maxime";
                fields = "ea";
                key = "excepturi";
                oauthToken = "odit";
                pageSize = 407183L;
                pageToken = "accusantium";
                prettyPrint = false;
                quotaUser = "ab";
                uploadType = "maiores";
                uploadProtocol = "quidem";
            }};            

            IdentitytoolkitProjectsTenantsDefaultSupportedIdpConfigsListResponse res = sdk.projects.identitytoolkitProjectsTenantsDefaultSupportedIdpConfigsList(req, new IdentitytoolkitProjectsTenantsDefaultSupportedIdpConfigsListSecurity() {{
                option1 = new IdentitytoolkitProjectsTenantsDefaultSupportedIdpConfigsListSecurityOption1("ipsam", "voluptate") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.googleCloudIdentitytoolkitAdminV2ListDefaultSupportedIdpConfigsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## identitytoolkitProjectsTenantsGetIamPolicy

Gets the access control policy for a resource. An error is returned if the resource does not exist. An empty policy is returned if the resource exists but does not have a policy set on it. Caller must have the right Google IAM permission on the resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.IdentitytoolkitProjectsTenantsGetIamPolicyRequest;
import org.openapis.openapi.models.operations.IdentitytoolkitProjectsTenantsGetIamPolicyResponse;
import org.openapis.openapi.models.operations.IdentitytoolkitProjectsTenantsGetIamPolicySecurity;
import org.openapis.openapi.models.operations.IdentitytoolkitProjectsTenantsGetIamPolicySecurityOption1;
import org.openapis.openapi.models.operations.IdentitytoolkitProjectsTenantsGetIamPolicySecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleIamV1GetIamPolicyRequest;
import org.openapis.openapi.models.shared.GoogleIamV1GetPolicyOptions;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            IdentitytoolkitProjectsTenantsGetIamPolicyRequest req = new IdentitytoolkitProjectsTenantsGetIamPolicyRequest("autem") {{
                dollarXgafv = XgafvEnum.TWO;
                googleIamV1GetIamPolicyRequest = new GoogleIamV1GetIamPolicyRequest() {{
                    options = new GoogleIamV1GetPolicyOptions() {{
                        requestedPolicyVersion = 50588;
                    }};;
                }};;
                accessToken = "pariatur";
                alt = AltEnum.MEDIA;
                callback = "voluptatibus";
                fields = "perferendis";
                key = "fugiat";
                oauthToken = "amet";
                prettyPrint = false;
                quotaUser = "aut";
                uploadType = "cumque";
                uploadProtocol = "corporis";
            }};            

            IdentitytoolkitProjectsTenantsGetIamPolicyResponse res = sdk.projects.identitytoolkitProjectsTenantsGetIamPolicy(req, new IdentitytoolkitProjectsTenantsGetIamPolicySecurity() {{
                option1 = new IdentitytoolkitProjectsTenantsGetIamPolicySecurityOption1("hic", "libero") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.googleIamV1Policy != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## identitytoolkitProjectsTenantsInboundSamlConfigsCreate

Create an inbound SAML configuration for an Identity Toolkit project.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.IdentitytoolkitProjectsTenantsInboundSamlConfigsCreateRequest;
import org.openapis.openapi.models.operations.IdentitytoolkitProjectsTenantsInboundSamlConfigsCreateResponse;
import org.openapis.openapi.models.operations.IdentitytoolkitProjectsTenantsInboundSamlConfigsCreateSecurity;
import org.openapis.openapi.models.operations.IdentitytoolkitProjectsTenantsInboundSamlConfigsCreateSecurityOption1;
import org.openapis.openapi.models.operations.IdentitytoolkitProjectsTenantsInboundSamlConfigsCreateSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleCloudIdentitytoolkitAdminV2IdpCertificate;
import org.openapis.openapi.models.shared.GoogleCloudIdentitytoolkitAdminV2IdpConfig;
import org.openapis.openapi.models.shared.GoogleCloudIdentitytoolkitAdminV2InboundSamlConfigInput;
import org.openapis.openapi.models.shared.GoogleCloudIdentitytoolkitAdminV2SpConfigInput;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            IdentitytoolkitProjectsTenantsInboundSamlConfigsCreateRequest req = new IdentitytoolkitProjectsTenantsInboundSamlConfigsCreateRequest("nobis") {{
                dollarXgafv = XgafvEnum.ONE;
                googleCloudIdentitytoolkitAdminV2InboundSamlConfigInput = new GoogleCloudIdentitytoolkitAdminV2InboundSamlConfigInput() {{
                    displayName = "quis";
                    enabled = false;
                    idpConfig = new GoogleCloudIdentitytoolkitAdminV2IdpConfig() {{
                        idpCertificates = new org.openapis.openapi.models.shared.GoogleCloudIdentitytoolkitAdminV2IdpCertificate[]{{
                            add(new GoogleCloudIdentitytoolkitAdminV2IdpCertificate() {{
                                x509Certificate = "dignissimos";
                            }}),
                            add(new GoogleCloudIdentitytoolkitAdminV2IdpCertificate() {{
                                x509Certificate = "eaque";
                            }}),
                            add(new GoogleCloudIdentitytoolkitAdminV2IdpCertificate() {{
                                x509Certificate = "quis";
                            }}),
                        }};
                        idpEntityId = "nesciunt";
                        signRequest = false;
                        ssoUrl = "eos";
                    }};;
                    name = "Jacqueline Schimmel";
                    spConfig = new GoogleCloudIdentitytoolkitAdminV2SpConfigInput() {{
                        callbackUri = "vero";
                        spEntityId = "nostrum";
                    }};;
                }};;
                accessToken = "hic";
                alt = AltEnum.PROTO;
                callback = "omnis";
                fields = "facilis";
                inboundSamlConfigId = "perspiciatis";
                key = "voluptatem";
                oauthToken = "porro";
                prettyPrint = false;
                quotaUser = "consequuntur";
                uploadType = "blanditiis";
                uploadProtocol = "error";
            }};            

            IdentitytoolkitProjectsTenantsInboundSamlConfigsCreateResponse res = sdk.projects.identitytoolkitProjectsTenantsInboundSamlConfigsCreate(req, new IdentitytoolkitProjectsTenantsInboundSamlConfigsCreateSecurity() {{
                option1 = new IdentitytoolkitProjectsTenantsInboundSamlConfigsCreateSecurityOption1("eaque", "occaecati") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.googleCloudIdentitytoolkitAdminV2InboundSamlConfig != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## identitytoolkitProjectsTenantsInboundSamlConfigsList

List all inbound SAML configurations for an Identity Toolkit project.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.IdentitytoolkitProjectsTenantsInboundSamlConfigsListRequest;
import org.openapis.openapi.models.operations.IdentitytoolkitProjectsTenantsInboundSamlConfigsListResponse;
import org.openapis.openapi.models.operations.IdentitytoolkitProjectsTenantsInboundSamlConfigsListSecurity;
import org.openapis.openapi.models.operations.IdentitytoolkitProjectsTenantsInboundSamlConfigsListSecurityOption1;
import org.openapis.openapi.models.operations.IdentitytoolkitProjectsTenantsInboundSamlConfigsListSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            IdentitytoolkitProjectsTenantsInboundSamlConfigsListRequest req = new IdentitytoolkitProjectsTenantsInboundSamlConfigsListRequest("rerum") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "asperiores";
                alt = AltEnum.PROTO;
                callback = "modi";
                fields = "iste";
                key = "dolorum";
                oauthToken = "deleniti";
                pageSize = 864282L;
                pageToken = "provident";
                prettyPrint = false;
                quotaUser = "nobis";
                uploadType = "libero";
                uploadProtocol = "delectus";
            }};            

            IdentitytoolkitProjectsTenantsInboundSamlConfigsListResponse res = sdk.projects.identitytoolkitProjectsTenantsInboundSamlConfigsList(req, new IdentitytoolkitProjectsTenantsInboundSamlConfigsListSecurity() {{
                option1 = new IdentitytoolkitProjectsTenantsInboundSamlConfigsListSecurityOption1("quaerat", "quos") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.googleCloudIdentitytoolkitAdminV2ListInboundSamlConfigsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## identitytoolkitProjectsTenantsList

List tenants under the given agent project. Requires read permission on the Agent project.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.IdentitytoolkitProjectsTenantsListRequest;
import org.openapis.openapi.models.operations.IdentitytoolkitProjectsTenantsListResponse;
import org.openapis.openapi.models.operations.IdentitytoolkitProjectsTenantsListSecurity;
import org.openapis.openapi.models.operations.IdentitytoolkitProjectsTenantsListSecurityOption1;
import org.openapis.openapi.models.operations.IdentitytoolkitProjectsTenantsListSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            IdentitytoolkitProjectsTenantsListRequest req = new IdentitytoolkitProjectsTenantsListRequest("aliquid") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "dolorem";
                alt = AltEnum.JSON;
                callback = "qui";
                fields = "ipsum";
                key = "hic";
                oauthToken = "excepturi";
                pageSize = 739551L;
                pageToken = "voluptate";
                prettyPrint = false;
                quotaUser = "dignissimos";
                uploadType = "reiciendis";
                uploadProtocol = "amet";
            }};            

            IdentitytoolkitProjectsTenantsListResponse res = sdk.projects.identitytoolkitProjectsTenantsList(req, new IdentitytoolkitProjectsTenantsListSecurity() {{
                option1 = new IdentitytoolkitProjectsTenantsListSecurityOption1("dolorum", "numquam") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.googleCloudIdentitytoolkitAdminV2ListTenantsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## identitytoolkitProjectsTenantsOauthIdpConfigsCreate

Create an Oidc Idp configuration for an Identity Toolkit project.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.IdentitytoolkitProjectsTenantsOauthIdpConfigsCreateRequest;
import org.openapis.openapi.models.operations.IdentitytoolkitProjectsTenantsOauthIdpConfigsCreateResponse;
import org.openapis.openapi.models.operations.IdentitytoolkitProjectsTenantsOauthIdpConfigsCreateSecurity;
import org.openapis.openapi.models.operations.IdentitytoolkitProjectsTenantsOauthIdpConfigsCreateSecurityOption1;
import org.openapis.openapi.models.operations.IdentitytoolkitProjectsTenantsOauthIdpConfigsCreateSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleCloudIdentitytoolkitAdminV2OAuthIdpConfig;
import org.openapis.openapi.models.shared.GoogleCloudIdentitytoolkitAdminV2OAuthResponseType;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            IdentitytoolkitProjectsTenantsOauthIdpConfigsCreateRequest req = new IdentitytoolkitProjectsTenantsOauthIdpConfigsCreateRequest("veritatis") {{
                dollarXgafv = XgafvEnum.ONE;
                googleCloudIdentitytoolkitAdminV2OAuthIdpConfig = new GoogleCloudIdentitytoolkitAdminV2OAuthIdpConfig() {{
                    clientId = "ipsa";
                    clientSecret = "iure";
                    displayName = "odio";
                    enabled = false;
                    issuer = "quaerat";
                    name = "Rickey Wolf";
                    responseType = new GoogleCloudIdentitytoolkitAdminV2OAuthResponseType() {{
                        code = false;
                        idToken = false;
                        token = false;
                    }};;
                }};;
                accessToken = "eos";
                alt = AltEnum.MEDIA;
                callback = "sit";
                fields = "fugiat";
                key = "ab";
                oauthIdpConfigId = "soluta";
                oauthToken = "dolorum";
                prettyPrint = false;
                quotaUser = "iusto";
                uploadType = "voluptate";
                uploadProtocol = "dolorum";
            }};            

            IdentitytoolkitProjectsTenantsOauthIdpConfigsCreateResponse res = sdk.projects.identitytoolkitProjectsTenantsOauthIdpConfigsCreate(req, new IdentitytoolkitProjectsTenantsOauthIdpConfigsCreateSecurity() {{
                option1 = new IdentitytoolkitProjectsTenantsOauthIdpConfigsCreateSecurityOption1("deleniti", "omnis") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.googleCloudIdentitytoolkitAdminV2OAuthIdpConfig != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## identitytoolkitProjectsTenantsOauthIdpConfigsDelete

Delete an Oidc Idp configuration for an Identity Toolkit project.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.IdentitytoolkitProjectsTenantsOauthIdpConfigsDeleteRequest;
import org.openapis.openapi.models.operations.IdentitytoolkitProjectsTenantsOauthIdpConfigsDeleteResponse;
import org.openapis.openapi.models.operations.IdentitytoolkitProjectsTenantsOauthIdpConfigsDeleteSecurity;
import org.openapis.openapi.models.operations.IdentitytoolkitProjectsTenantsOauthIdpConfigsDeleteSecurityOption1;
import org.openapis.openapi.models.operations.IdentitytoolkitProjectsTenantsOauthIdpConfigsDeleteSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            IdentitytoolkitProjectsTenantsOauthIdpConfigsDeleteRequest req = new IdentitytoolkitProjectsTenantsOauthIdpConfigsDeleteRequest("necessitatibus") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "asperiores";
                alt = AltEnum.MEDIA;
                callback = "ipsum";
                fields = "voluptate";
                key = "id";
                oauthToken = "saepe";
                prettyPrint = false;
                quotaUser = "eius";
                uploadType = "aspernatur";
                uploadProtocol = "perferendis";
            }};            

            IdentitytoolkitProjectsTenantsOauthIdpConfigsDeleteResponse res = sdk.projects.identitytoolkitProjectsTenantsOauthIdpConfigsDelete(req, new IdentitytoolkitProjectsTenantsOauthIdpConfigsDeleteSecurity() {{
                option1 = new IdentitytoolkitProjectsTenantsOauthIdpConfigsDeleteSecurityOption1("amet", "optio") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.googleProtobufEmpty != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## identitytoolkitProjectsTenantsOauthIdpConfigsGet

Retrieve an Oidc Idp configuration for an Identity Toolkit project.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.IdentitytoolkitProjectsTenantsOauthIdpConfigsGetRequest;
import org.openapis.openapi.models.operations.IdentitytoolkitProjectsTenantsOauthIdpConfigsGetResponse;
import org.openapis.openapi.models.operations.IdentitytoolkitProjectsTenantsOauthIdpConfigsGetSecurity;
import org.openapis.openapi.models.operations.IdentitytoolkitProjectsTenantsOauthIdpConfigsGetSecurityOption1;
import org.openapis.openapi.models.operations.IdentitytoolkitProjectsTenantsOauthIdpConfigsGetSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            IdentitytoolkitProjectsTenantsOauthIdpConfigsGetRequest req = new IdentitytoolkitProjectsTenantsOauthIdpConfigsGetRequest("accusamus") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "saepe";
                alt = AltEnum.MEDIA;
                callback = "deserunt";
                fields = "provident";
                key = "minima";
                oauthToken = "repellendus";
                prettyPrint = false;
                quotaUser = "totam";
                uploadType = "similique";
                uploadProtocol = "alias";
            }};            

            IdentitytoolkitProjectsTenantsOauthIdpConfigsGetResponse res = sdk.projects.identitytoolkitProjectsTenantsOauthIdpConfigsGet(req, new IdentitytoolkitProjectsTenantsOauthIdpConfigsGetSecurity() {{
                option1 = new IdentitytoolkitProjectsTenantsOauthIdpConfigsGetSecurityOption1("at", "quaerat") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.googleCloudIdentitytoolkitAdminV2OAuthIdpConfig != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## identitytoolkitProjectsTenantsOauthIdpConfigsList

List all Oidc Idp configurations for an Identity Toolkit project.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.IdentitytoolkitProjectsTenantsOauthIdpConfigsListRequest;
import org.openapis.openapi.models.operations.IdentitytoolkitProjectsTenantsOauthIdpConfigsListResponse;
import org.openapis.openapi.models.operations.IdentitytoolkitProjectsTenantsOauthIdpConfigsListSecurity;
import org.openapis.openapi.models.operations.IdentitytoolkitProjectsTenantsOauthIdpConfigsListSecurityOption1;
import org.openapis.openapi.models.operations.IdentitytoolkitProjectsTenantsOauthIdpConfigsListSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            IdentitytoolkitProjectsTenantsOauthIdpConfigsListRequest req = new IdentitytoolkitProjectsTenantsOauthIdpConfigsListRequest("tempora") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "quod";
                alt = AltEnum.PROTO;
                callback = "qui";
                fields = "dolorum";
                key = "a";
                oauthToken = "esse";
                pageSize = 687488L;
                pageToken = "iusto";
                prettyPrint = false;
                quotaUser = "ipsum";
                uploadType = "quisquam";
                uploadProtocol = "tenetur";
            }};            

            IdentitytoolkitProjectsTenantsOauthIdpConfigsListResponse res = sdk.projects.identitytoolkitProjectsTenantsOauthIdpConfigsList(req, new IdentitytoolkitProjectsTenantsOauthIdpConfigsListSecurity() {{
                option1 = new IdentitytoolkitProjectsTenantsOauthIdpConfigsListSecurityOption1("amet", "tempore") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.googleCloudIdentitytoolkitAdminV2ListOAuthIdpConfigsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## identitytoolkitProjectsTenantsOauthIdpConfigsPatch

Update an Oidc Idp configuration for an Identity Toolkit project.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.IdentitytoolkitProjectsTenantsOauthIdpConfigsPatchRequest;
import org.openapis.openapi.models.operations.IdentitytoolkitProjectsTenantsOauthIdpConfigsPatchResponse;
import org.openapis.openapi.models.operations.IdentitytoolkitProjectsTenantsOauthIdpConfigsPatchSecurity;
import org.openapis.openapi.models.operations.IdentitytoolkitProjectsTenantsOauthIdpConfigsPatchSecurityOption1;
import org.openapis.openapi.models.operations.IdentitytoolkitProjectsTenantsOauthIdpConfigsPatchSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleCloudIdentitytoolkitAdminV2OAuthIdpConfig;
import org.openapis.openapi.models.shared.GoogleCloudIdentitytoolkitAdminV2OAuthResponseType;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            IdentitytoolkitProjectsTenantsOauthIdpConfigsPatchRequest req = new IdentitytoolkitProjectsTenantsOauthIdpConfigsPatchRequest("accusamus") {{
                dollarXgafv = XgafvEnum.ONE;
                googleCloudIdentitytoolkitAdminV2OAuthIdpConfig = new GoogleCloudIdentitytoolkitAdminV2OAuthIdpConfig() {{
                    clientId = "enim";
                    clientSecret = "dolorem";
                    displayName = "sapiente";
                    enabled = false;
                    issuer = "totam";
                    name = "Karen Rath";
                    responseType = new GoogleCloudIdentitytoolkitAdminV2OAuthResponseType() {{
                        code = false;
                        idToken = false;
                        token = false;
                    }};;
                }};;
                accessToken = "vel";
                alt = AltEnum.PROTO;
                callback = "voluptas";
                fields = "deserunt";
                key = "quam";
                oauthToken = "ipsum";
                prettyPrint = false;
                quotaUser = "incidunt";
                updateMask = "qui";
                uploadType = "cupiditate";
                uploadProtocol = "maxime";
            }};            

            IdentitytoolkitProjectsTenantsOauthIdpConfigsPatchResponse res = sdk.projects.identitytoolkitProjectsTenantsOauthIdpConfigsPatch(req, new IdentitytoolkitProjectsTenantsOauthIdpConfigsPatchSecurity() {{
                option1 = new IdentitytoolkitProjectsTenantsOauthIdpConfigsPatchSecurityOption1("pariatur", "soluta") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.googleCloudIdentitytoolkitAdminV2OAuthIdpConfig != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## identitytoolkitProjectsTenantsSetIamPolicy

Sets the access control policy for a resource. If the policy exists, it is replaced. Caller must have the right Google IAM permission on the resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.IdentitytoolkitProjectsTenantsSetIamPolicyRequest;
import org.openapis.openapi.models.operations.IdentitytoolkitProjectsTenantsSetIamPolicyResponse;
import org.openapis.openapi.models.operations.IdentitytoolkitProjectsTenantsSetIamPolicySecurity;
import org.openapis.openapi.models.operations.IdentitytoolkitProjectsTenantsSetIamPolicySecurityOption1;
import org.openapis.openapi.models.operations.IdentitytoolkitProjectsTenantsSetIamPolicySecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleIamV1AuditConfig;
import org.openapis.openapi.models.shared.GoogleIamV1AuditLogConfig;
import org.openapis.openapi.models.shared.GoogleIamV1AuditLogConfigLogTypeEnum;
import org.openapis.openapi.models.shared.GoogleIamV1Binding;
import org.openapis.openapi.models.shared.GoogleIamV1Policy;
import org.openapis.openapi.models.shared.GoogleIamV1SetIamPolicyRequest;
import org.openapis.openapi.models.shared.GoogleTypeExpr;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            IdentitytoolkitProjectsTenantsSetIamPolicyRequest req = new IdentitytoolkitProjectsTenantsSetIamPolicyRequest("dicta") {{
                dollarXgafv = XgafvEnum.TWO;
                googleIamV1SetIamPolicyRequest = new GoogleIamV1SetIamPolicyRequest() {{
                    policy = new GoogleIamV1Policy() {{
                        auditConfigs = new org.openapis.openapi.models.shared.GoogleIamV1AuditConfig[]{{
                            add(new GoogleIamV1AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.GoogleIamV1AuditLogConfig[]{{
                                    add(new GoogleIamV1AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("dolores"),
                                        }};
                                        logType = GoogleIamV1AuditLogConfigLogTypeEnum.DATA_WRITE;
                                    }}),
                                    add(new GoogleIamV1AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("aliquid"),
                                            add("quam"),
                                            add("molestias"),
                                        }};
                                        logType = GoogleIamV1AuditLogConfigLogTypeEnum.DATA_READ;
                                    }}),
                                }};
                                service = "qui";
                            }}),
                            add(new GoogleIamV1AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.GoogleIamV1AuditLogConfig[]{{
                                    add(new GoogleIamV1AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("magni"),
                                        }};
                                        logType = GoogleIamV1AuditLogConfigLogTypeEnum.ADMIN_READ;
                                    }}),
                                }};
                                service = "sunt";
                            }}),
                            add(new GoogleIamV1AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.GoogleIamV1AuditLogConfig[]{{
                                    add(new GoogleIamV1AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("hic"),
                                            add("voluptatem"),
                                            add("cumque"),
                                        }};
                                        logType = GoogleIamV1AuditLogConfigLogTypeEnum.DATA_WRITE;
                                    }}),
                                    add(new GoogleIamV1AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("et"),
                                            add("saepe"),
                                            add("ipsum"),
                                        }};
                                        logType = GoogleIamV1AuditLogConfigLogTypeEnum.LOG_TYPE_UNSPECIFIED;
                                    }}),
                                }};
                                service = "nobis";
                            }}),
                        }};
                        bindings = new org.openapis.openapi.models.shared.GoogleIamV1Binding[]{{
                            add(new GoogleIamV1Binding() {{
                                condition = new GoogleTypeExpr() {{
                                    description = "tempore";
                                    expression = "cupiditate";
                                    location = "aperiam";
                                    title = "Dr.";
                                }};
                                members = new String[]{{
                                    add("dolore"),
                                }};
                                role = "labore";
                            }}),
                            add(new GoogleIamV1Binding() {{
                                condition = new GoogleTypeExpr() {{
                                    description = "adipisci";
                                    expression = "dolorum";
                                    location = "architecto";
                                    title = "Mr.";
                                }};
                                members = new String[]{{
                                    add("quas"),
                                }};
                                role = "itaque";
                            }}),
                            add(new GoogleIamV1Binding() {{
                                condition = new GoogleTypeExpr() {{
                                    description = "consequatur";
                                    expression = "est";
                                    location = "repellendus";
                                    title = "Miss";
                                }};
                                members = new String[]{{
                                    add("ut"),
                                    add("facilis"),
                                    add("cupiditate"),
                                    add("qui"),
                                }};
                                role = "quae";
                            }}),
                        }};
                        etag = "laudantium";
                        version = 485628;
                    }};;
                    updateMask = "occaecati";
                }};;
                accessToken = "voluptatibus";
                alt = AltEnum.PROTO;
                callback = "vero";
                fields = "omnis";
                key = "quis";
                oauthToken = "ipsum";
                prettyPrint = false;
                quotaUser = "delectus";
                uploadType = "voluptate";
                uploadProtocol = "consectetur";
            }};            

            IdentitytoolkitProjectsTenantsSetIamPolicyResponse res = sdk.projects.identitytoolkitProjectsTenantsSetIamPolicy(req, new IdentitytoolkitProjectsTenantsSetIamPolicySecurity() {{
                option1 = new IdentitytoolkitProjectsTenantsSetIamPolicySecurityOption1("vero", "tenetur") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.googleIamV1Policy != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## identitytoolkitProjectsTenantsTestIamPermissions

Returns the caller's permissions on a resource. An error is returned if the resource does not exist. A caller is not required to have Google IAM permission to make this request.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.IdentitytoolkitProjectsTenantsTestIamPermissionsRequest;
import org.openapis.openapi.models.operations.IdentitytoolkitProjectsTenantsTestIamPermissionsResponse;
import org.openapis.openapi.models.operations.IdentitytoolkitProjectsTenantsTestIamPermissionsSecurity;
import org.openapis.openapi.models.operations.IdentitytoolkitProjectsTenantsTestIamPermissionsSecurityOption1;
import org.openapis.openapi.models.operations.IdentitytoolkitProjectsTenantsTestIamPermissionsSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleIamV1TestIamPermissionsRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            IdentitytoolkitProjectsTenantsTestIamPermissionsRequest req = new IdentitytoolkitProjectsTenantsTestIamPermissionsRequest("dignissimos") {{
                dollarXgafv = XgafvEnum.TWO;
                googleIamV1TestIamPermissionsRequest = new GoogleIamV1TestIamPermissionsRequest() {{
                    permissions = new String[]{{
                        add("quod"),
                        add("odio"),
                        add("similique"),
                    }};
                }};;
                accessToken = "facilis";
                alt = AltEnum.PROTO;
                callback = "ducimus";
                fields = "dolore";
                key = "quibusdam";
                oauthToken = "illum";
                prettyPrint = false;
                quotaUser = "sequi";
                uploadType = "natus";
                uploadProtocol = "impedit";
            }};            

            IdentitytoolkitProjectsTenantsTestIamPermissionsResponse res = sdk.projects.identitytoolkitProjectsTenantsTestIamPermissions(req, new IdentitytoolkitProjectsTenantsTestIamPermissionsSecurity() {{
                option1 = new IdentitytoolkitProjectsTenantsTestIamPermissionsSecurityOption1("aut", "voluptatibus") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.googleIamV1TestIamPermissionsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
