# Projects

### Available Operations

* [IdentitytoolkitProjectsIdentityPlatformInitializeAuth](#identitytoolkitprojectsidentityplatforminitializeauth) - Initialize Identity Platform for a Cloud project. Identity Platform is an end-to-end authentication system for third-party users to access your apps and services. These could include mobile/web apps, games, APIs and beyond. This is the publicly available variant of EnableIdentityPlatform that is only available to billing-enabled projects.
* [IdentitytoolkitProjectsTenantsCreate](#identitytoolkitprojectstenantscreate) - Create a tenant. Requires write permission on the Agent project.
* [IdentitytoolkitProjectsTenantsDefaultSupportedIdpConfigsCreate](#identitytoolkitprojectstenantsdefaultsupportedidpconfigscreate) - Create a default supported Idp configuration for an Identity Toolkit project.
* [IdentitytoolkitProjectsTenantsDefaultSupportedIdpConfigsList](#identitytoolkitprojectstenantsdefaultsupportedidpconfigslist) - List all default supported Idp configurations for an Identity Toolkit project.
* [IdentitytoolkitProjectsTenantsGetIamPolicy](#identitytoolkitprojectstenantsgetiampolicy) - Gets the access control policy for a resource. An error is returned if the resource does not exist. An empty policy is returned if the resource exists but does not have a policy set on it. Caller must have the right Google IAM permission on the resource.
* [IdentitytoolkitProjectsTenantsInboundSamlConfigsCreate](#identitytoolkitprojectstenantsinboundsamlconfigscreate) - Create an inbound SAML configuration for an Identity Toolkit project.
* [IdentitytoolkitProjectsTenantsInboundSamlConfigsList](#identitytoolkitprojectstenantsinboundsamlconfigslist) - List all inbound SAML configurations for an Identity Toolkit project.
* [IdentitytoolkitProjectsTenantsList](#identitytoolkitprojectstenantslist) - List tenants under the given agent project. Requires read permission on the Agent project.
* [IdentitytoolkitProjectsTenantsOauthIdpConfigsCreate](#identitytoolkitprojectstenantsoauthidpconfigscreate) - Create an Oidc Idp configuration for an Identity Toolkit project.
* [IdentitytoolkitProjectsTenantsOauthIdpConfigsDelete](#identitytoolkitprojectstenantsoauthidpconfigsdelete) - Delete an Oidc Idp configuration for an Identity Toolkit project.
* [IdentitytoolkitProjectsTenantsOauthIdpConfigsGet](#identitytoolkitprojectstenantsoauthidpconfigsget) - Retrieve an Oidc Idp configuration for an Identity Toolkit project.
* [IdentitytoolkitProjectsTenantsOauthIdpConfigsList](#identitytoolkitprojectstenantsoauthidpconfigslist) - List all Oidc Idp configurations for an Identity Toolkit project.
* [IdentitytoolkitProjectsTenantsOauthIdpConfigsPatch](#identitytoolkitprojectstenantsoauthidpconfigspatch) - Update an Oidc Idp configuration for an Identity Toolkit project.
* [IdentitytoolkitProjectsTenantsSetIamPolicy](#identitytoolkitprojectstenantssetiampolicy) - Sets the access control policy for a resource. If the policy exists, it is replaced. Caller must have the right Google IAM permission on the resource.
* [IdentitytoolkitProjectsTenantsTestIamPermissions](#identitytoolkitprojectstenantstestiampermissions) - Returns the caller's permissions on a resource. An error is returned if the resource does not exist. A caller is not required to have Google IAM permission to make this request.

## IdentitytoolkitProjectsIdentityPlatformInitializeAuth

Initialize Identity Platform for a Cloud project. Identity Platform is an end-to-end authentication system for third-party users to access your apps and services. These could include mobile/web apps, games, APIs and beyond. This is the publicly available variant of EnableIdentityPlatform that is only available to billing-enabled projects.

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
    res, err := s.Projects.IdentitytoolkitProjectsIdentityPlatformInitializeAuth(ctx, operations.IdentitytoolkitProjectsIdentityPlatformInitializeAuthRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        RequestBody: map[string]interface{}{
            "tempora": "facilis",
            "tempore": "labore",
            "delectus": "eum",
        },
        AccessToken: sdk.String("non"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("sint"),
        Fields: sdk.String("aliquid"),
        Key: sdk.String("provident"),
        OauthToken: sdk.String("necessitatibus"),
        PrettyPrint: sdk.Bool(false),
        Project: "sint",
        QuotaUser: sdk.String("officia"),
        UploadType: sdk.String("dolor"),
        UploadProtocol: sdk.String("debitis"),
    }, operations.IdentitytoolkitProjectsIdentityPlatformInitializeAuthSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudIdentitytoolkitAdminV2InitializeIdentityPlatformResponse != nil {
        // handle response
    }
}
```

## IdentitytoolkitProjectsTenantsCreate

Create a tenant. Requires write permission on the Agent project.

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
    res, err := s.Projects.IdentitytoolkitProjectsTenantsCreate(ctx, operations.IdentitytoolkitProjectsTenantsCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        GoogleCloudIdentitytoolkitAdminV2TenantInput: &shared.GoogleCloudIdentitytoolkitAdminV2TenantInput{
            AllowPasswordSignup: sdk.Bool(false),
            AutodeleteAnonymousUsers: sdk.Bool(false),
            Client: &shared.GoogleCloudIdentitytoolkitAdminV2ClientPermissionConfig{
                Permissions: &shared.GoogleCloudIdentitytoolkitAdminV2ClientPermissions{
                    DisabledUserDeletion: sdk.Bool(false),
                    DisabledUserSignup: sdk.Bool(false),
                },
            },
            DisableAuth: sdk.Bool(false),
            DisplayName: sdk.String("dolorum"),
            EmailPrivacyConfig: &shared.GoogleCloudIdentitytoolkitAdminV2EmailPrivacyConfig{
                EnableImprovedEmailPrivacy: sdk.Bool(false),
            },
            EnableAnonymousUser: sdk.Bool(false),
            EnableEmailLinkSignin: sdk.Bool(false),
            Inheritance: &shared.GoogleCloudIdentitytoolkitAdminV2Inheritance{
                EmailSendingConfig: sdk.Bool(false),
            },
            MfaConfig: &shared.GoogleCloudIdentitytoolkitAdminV2MultiFactorAuthConfig{
                EnabledProviders: []shared.GoogleCloudIdentitytoolkitAdminV2MultiFactorAuthConfigEnabledProvidersEnum{
                    shared.GoogleCloudIdentitytoolkitAdminV2MultiFactorAuthConfigEnabledProvidersEnumProviderUnspecified,
                    shared.GoogleCloudIdentitytoolkitAdminV2MultiFactorAuthConfigEnabledProvidersEnumPhoneSms,
                },
                ProviderConfigs: []shared.GoogleCloudIdentitytoolkitAdminV2ProviderConfig{
                    shared.GoogleCloudIdentitytoolkitAdminV2ProviderConfig{
                        State: shared.GoogleCloudIdentitytoolkitAdminV2ProviderConfigStateEnumEnabled.ToPointer(),
                        TotpProviderConfig: &shared.GoogleCloudIdentitytoolkitAdminV2TotpMfaProviderConfig{
                            AdjacentIntervals: sdk.Int(116202),
                        },
                    },
                    shared.GoogleCloudIdentitytoolkitAdminV2ProviderConfig{
                        State: shared.GoogleCloudIdentitytoolkitAdminV2ProviderConfigStateEnumDisabled.ToPointer(),
                        TotpProviderConfig: &shared.GoogleCloudIdentitytoolkitAdminV2TotpMfaProviderConfig{
                            AdjacentIntervals: sdk.Int(767024),
                        },
                    },
                    shared.GoogleCloudIdentitytoolkitAdminV2ProviderConfig{
                        State: shared.GoogleCloudIdentitytoolkitAdminV2ProviderConfigStateEnumMandatory.ToPointer(),
                        TotpProviderConfig: &shared.GoogleCloudIdentitytoolkitAdminV2TotpMfaProviderConfig{
                            AdjacentIntervals: sdk.Int(411820),
                        },
                    },
                    shared.GoogleCloudIdentitytoolkitAdminV2ProviderConfig{
                        State: shared.GoogleCloudIdentitytoolkitAdminV2ProviderConfigStateEnumDisabled.ToPointer(),
                        TotpProviderConfig: &shared.GoogleCloudIdentitytoolkitAdminV2TotpMfaProviderConfig{
                            AdjacentIntervals: sdk.Int(675439),
                        },
                    },
                },
                State: shared.GoogleCloudIdentitytoolkitAdminV2MultiFactorAuthConfigStateEnumMandatory.ToPointer(),
            },
            Monitoring: &shared.GoogleCloudIdentitytoolkitAdminV2MonitoringConfig{
                RequestLogging: &shared.GoogleCloudIdentitytoolkitAdminV2RequestLogging{
                    Enabled: sdk.Bool(false),
                },
            },
            RecaptchaConfig: &shared.GoogleCloudIdentitytoolkitAdminV2RecaptchaConfigInput{
                EmailPasswordEnforcementState: shared.GoogleCloudIdentitytoolkitAdminV2RecaptchaConfigEmailPasswordEnforcementStateEnumRecaptchaProviderEnforcementStateUnspecified.ToPointer(),
                ManagedRules: []shared.GoogleCloudIdentitytoolkitAdminV2RecaptchaManagedRule{
                    shared.GoogleCloudIdentitytoolkitAdminV2RecaptchaManagedRule{
                        Action: shared.GoogleCloudIdentitytoolkitAdminV2RecaptchaManagedRuleActionEnumRecaptchaActionUnspecified.ToPointer(),
                        EndScore: sdk.Float32(8817.36),
                    },
                    shared.GoogleCloudIdentitytoolkitAdminV2RecaptchaManagedRule{
                        Action: shared.GoogleCloudIdentitytoolkitAdminV2RecaptchaManagedRuleActionEnumBlock.ToPointer(),
                        EndScore: sdk.Float32(6925.32),
                    },
                    shared.GoogleCloudIdentitytoolkitAdminV2RecaptchaManagedRule{
                        Action: shared.GoogleCloudIdentitytoolkitAdminV2RecaptchaManagedRuleActionEnumBlock.ToPointer(),
                        EndScore: sdk.Float32(7252.55),
                    },
                },
                UseAccountDefender: sdk.Bool(false),
            },
            SmsRegionConfig: &shared.GoogleCloudIdentitytoolkitAdminV2SmsRegionConfig{
                AllowByDefault: &shared.GoogleCloudIdentitytoolkitAdminV2AllowByDefault{
                    DisallowedRegions: []string{
                        "blanditiis",
                        "deleniti",
                        "sapiente",
                    },
                },
                AllowlistOnly: &shared.GoogleCloudIdentitytoolkitAdminV2AllowlistOnly{
                    AllowedRegions: []string{
                        "deserunt",
                    },
                },
            },
            TestPhoneNumbers: map[string]string{
                "vel": "natus",
                "omnis": "molestiae",
            },
        },
        AccessToken: sdk.String("perferendis"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("magnam"),
        Fields: sdk.String("distinctio"),
        Key: sdk.String("id"),
        OauthToken: sdk.String("labore"),
        Parent: "labore",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("suscipit"),
        UploadType: sdk.String("natus"),
        UploadProtocol: sdk.String("nobis"),
    }, operations.IdentitytoolkitProjectsTenantsCreateSecurity{
        Option1: &operations.IdentitytoolkitProjectsTenantsCreateSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudIdentitytoolkitAdminV2Tenant != nil {
        // handle response
    }
}
```

## IdentitytoolkitProjectsTenantsDefaultSupportedIdpConfigsCreate

Create a default supported Idp configuration for an Identity Toolkit project.

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
    res, err := s.Projects.IdentitytoolkitProjectsTenantsDefaultSupportedIdpConfigsCreate(ctx, operations.IdentitytoolkitProjectsTenantsDefaultSupportedIdpConfigsCreateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        GoogleCloudIdentitytoolkitAdminV2DefaultSupportedIdpConfig: &shared.GoogleCloudIdentitytoolkitAdminV2DefaultSupportedIdpConfig{
            AppleSignInConfig: &shared.GoogleCloudIdentitytoolkitAdminV2AppleSignInConfig{
                BundleIds: []string{
                    "aspernatur",
                    "architecto",
                    "magnam",
                    "et",
                },
                CodeFlowConfig: &shared.GoogleCloudIdentitytoolkitAdminV2CodeFlowConfig{
                    KeyID: sdk.String("excepturi"),
                    PrivateKey: sdk.String("ullam"),
                    TeamID: sdk.String("provident"),
                },
            },
            ClientID: sdk.String("quos"),
            ClientSecret: sdk.String("sint"),
            Enabled: sdk.Bool(false),
            Name: sdk.String("Angie Wisozk"),
        },
        AccessToken: sdk.String("eum"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("necessitatibus"),
        Fields: sdk.String("odit"),
        IdpID: sdk.String("nemo"),
        Key: sdk.String("quasi"),
        OauthToken: sdk.String("iure"),
        Parent: "doloribus",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("debitis"),
        UploadType: sdk.String("eius"),
        UploadProtocol: sdk.String("maxime"),
    }, operations.IdentitytoolkitProjectsTenantsDefaultSupportedIdpConfigsCreateSecurity{
        Option1: &operations.IdentitytoolkitProjectsTenantsDefaultSupportedIdpConfigsCreateSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudIdentitytoolkitAdminV2DefaultSupportedIdpConfig != nil {
        // handle response
    }
}
```

## IdentitytoolkitProjectsTenantsDefaultSupportedIdpConfigsList

List all default supported Idp configurations for an Identity Toolkit project.

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
    res, err := s.Projects.IdentitytoolkitProjectsTenantsDefaultSupportedIdpConfigsList(ctx, operations.IdentitytoolkitProjectsTenantsDefaultSupportedIdpConfigsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("facilis"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("architecto"),
        Fields: sdk.String("architecto"),
        Key: sdk.String("repudiandae"),
        OauthToken: sdk.String("ullam"),
        PageSize: sdk.Int64(714242),
        PageToken: sdk.String("nihil"),
        Parent: "repellat",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quibusdam"),
        UploadType: sdk.String("sed"),
        UploadProtocol: sdk.String("saepe"),
    }, operations.IdentitytoolkitProjectsTenantsDefaultSupportedIdpConfigsListSecurity{
        Option1: &operations.IdentitytoolkitProjectsTenantsDefaultSupportedIdpConfigsListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudIdentitytoolkitAdminV2ListDefaultSupportedIdpConfigsResponse != nil {
        // handle response
    }
}
```

## IdentitytoolkitProjectsTenantsGetIamPolicy

Gets the access control policy for a resource. An error is returned if the resource does not exist. An empty policy is returned if the resource exists but does not have a policy set on it. Caller must have the right Google IAM permission on the resource.

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
    res, err := s.Projects.IdentitytoolkitProjectsTenantsGetIamPolicy(ctx, operations.IdentitytoolkitProjectsTenantsGetIamPolicyRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        GoogleIamV1GetIamPolicyRequest: &shared.GoogleIamV1GetIamPolicyRequest{
            Options: &shared.GoogleIamV1GetPolicyOptions{
                RequestedPolicyVersion: sdk.Int(37559),
            },
        },
        AccessToken: sdk.String("consequuntur"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("natus"),
        Fields: sdk.String("magni"),
        Key: sdk.String("sunt"),
        OauthToken: sdk.String("quo"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("illum"),
        Resource: "pariatur",
        UploadType: sdk.String("maxime"),
        UploadProtocol: sdk.String("ea"),
    }, operations.IdentitytoolkitProjectsTenantsGetIamPolicySecurity{
        Option1: &operations.IdentitytoolkitProjectsTenantsGetIamPolicySecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleIamV1Policy != nil {
        // handle response
    }
}
```

## IdentitytoolkitProjectsTenantsInboundSamlConfigsCreate

Create an inbound SAML configuration for an Identity Toolkit project.

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
    res, err := s.Projects.IdentitytoolkitProjectsTenantsInboundSamlConfigsCreate(ctx, operations.IdentitytoolkitProjectsTenantsInboundSamlConfigsCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        GoogleCloudIdentitytoolkitAdminV2InboundSamlConfigInput: &shared.GoogleCloudIdentitytoolkitAdminV2InboundSamlConfigInput{
            DisplayName: sdk.String("odit"),
            Enabled: sdk.Bool(false),
            IdpConfig: &shared.GoogleCloudIdentitytoolkitAdminV2IdpConfig{
                IdpCertificates: []shared.GoogleCloudIdentitytoolkitAdminV2IdpCertificate{
                    shared.GoogleCloudIdentitytoolkitAdminV2IdpCertificate{
                        X509Certificate: sdk.String("accusantium"),
                    },
                    shared.GoogleCloudIdentitytoolkitAdminV2IdpCertificate{
                        X509Certificate: sdk.String("ab"),
                    },
                },
                IdpEntityID: sdk.String("maiores"),
                SignRequest: sdk.Bool(false),
                SsoURL: sdk.String("quidem"),
            },
            Name: sdk.String("Colleen Johnston PhD"),
            SpConfig: &shared.GoogleCloudIdentitytoolkitAdminV2SpConfigInput{
                CallbackURI: sdk.String("nemo"),
                SpEntityID: sdk.String("voluptatibus"),
            },
        },
        AccessToken: sdk.String("perferendis"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("amet"),
        Fields: sdk.String("aut"),
        InboundSamlConfigID: sdk.String("cumque"),
        Key: sdk.String("corporis"),
        OauthToken: sdk.String("hic"),
        Parent: "libero",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("nobis"),
        UploadType: sdk.String("dolores"),
        UploadProtocol: sdk.String("quis"),
    }, operations.IdentitytoolkitProjectsTenantsInboundSamlConfigsCreateSecurity{
        Option1: &operations.IdentitytoolkitProjectsTenantsInboundSamlConfigsCreateSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudIdentitytoolkitAdminV2InboundSamlConfig != nil {
        // handle response
    }
}
```

## IdentitytoolkitProjectsTenantsInboundSamlConfigsList

List all inbound SAML configurations for an Identity Toolkit project.

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
    res, err := s.Projects.IdentitytoolkitProjectsTenantsInboundSamlConfigsList(ctx, operations.IdentitytoolkitProjectsTenantsInboundSamlConfigsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("dignissimos"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("quis"),
        Fields: sdk.String("nesciunt"),
        Key: sdk.String("eos"),
        OauthToken: sdk.String("perferendis"),
        PageSize: sdk.Int64(170986),
        PageToken: sdk.String("minus"),
        Parent: "quam",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("dolor"),
        UploadType: sdk.String("vero"),
        UploadProtocol: sdk.String("nostrum"),
    }, operations.IdentitytoolkitProjectsTenantsInboundSamlConfigsListSecurity{
        Option1: &operations.IdentitytoolkitProjectsTenantsInboundSamlConfigsListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudIdentitytoolkitAdminV2ListInboundSamlConfigsResponse != nil {
        // handle response
    }
}
```

## IdentitytoolkitProjectsTenantsList

List tenants under the given agent project. Requires read permission on the Agent project.

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
    res, err := s.Projects.IdentitytoolkitProjectsTenantsList(ctx, operations.IdentitytoolkitProjectsTenantsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("recusandae"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("facilis"),
        Fields: sdk.String("perspiciatis"),
        Key: sdk.String("voluptatem"),
        OauthToken: sdk.String("porro"),
        PageSize: sdk.Int64(164694),
        PageToken: sdk.String("blanditiis"),
        Parent: "error",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("eaque"),
        UploadType: sdk.String("occaecati"),
        UploadProtocol: sdk.String("rerum"),
    }, operations.IdentitytoolkitProjectsTenantsListSecurity{
        Option1: &operations.IdentitytoolkitProjectsTenantsListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudIdentitytoolkitAdminV2ListTenantsResponse != nil {
        // handle response
    }
}
```

## IdentitytoolkitProjectsTenantsOauthIdpConfigsCreate

Create an Oidc Idp configuration for an Identity Toolkit project.

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
    res, err := s.Projects.IdentitytoolkitProjectsTenantsOauthIdpConfigsCreate(ctx, operations.IdentitytoolkitProjectsTenantsOauthIdpConfigsCreateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        GoogleCloudIdentitytoolkitAdminV2OAuthIdpConfig: &shared.GoogleCloudIdentitytoolkitAdminV2OAuthIdpConfig{
            ClientID: sdk.String("asperiores"),
            ClientSecret: sdk.String("earum"),
            DisplayName: sdk.String("modi"),
            Enabled: sdk.Bool(false),
            Issuer: sdk.String("iste"),
            Name: sdk.String("Casey Stracke"),
            ResponseType: &shared.GoogleCloudIdentitytoolkitAdminV2OAuthResponseType{
                Code: sdk.Bool(false),
                IDToken: sdk.Bool(false),
                Token: sdk.Bool(false),
            },
        },
        AccessToken: sdk.String("libero"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("quaerat"),
        Fields: sdk.String("quos"),
        Key: sdk.String("aliquid"),
        OauthIdpConfigID: sdk.String("dolorem"),
        OauthToken: sdk.String("dolorem"),
        Parent: "dolor",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("qui"),
        UploadType: sdk.String("ipsum"),
        UploadProtocol: sdk.String("hic"),
    }, operations.IdentitytoolkitProjectsTenantsOauthIdpConfigsCreateSecurity{
        Option1: &operations.IdentitytoolkitProjectsTenantsOauthIdpConfigsCreateSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudIdentitytoolkitAdminV2OAuthIdpConfig != nil {
        // handle response
    }
}
```

## IdentitytoolkitProjectsTenantsOauthIdpConfigsDelete

Delete an Oidc Idp configuration for an Identity Toolkit project.

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
    res, err := s.Projects.IdentitytoolkitProjectsTenantsOauthIdpConfigsDelete(ctx, operations.IdentitytoolkitProjectsTenantsOauthIdpConfigsDeleteRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
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
    }, operations.IdentitytoolkitProjectsTenantsOauthIdpConfigsDeleteSecurity{
        Option1: &operations.IdentitytoolkitProjectsTenantsOauthIdpConfigsDeleteSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleProtobufEmpty != nil {
        // handle response
    }
}
```

## IdentitytoolkitProjectsTenantsOauthIdpConfigsGet

Retrieve an Oidc Idp configuration for an Identity Toolkit project.

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
    res, err := s.Projects.IdentitytoolkitProjectsTenantsOauthIdpConfigsGet(ctx, operations.IdentitytoolkitProjectsTenantsOauthIdpConfigsGetRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("voluptas"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("eos"),
        Fields: sdk.String("atque"),
        Key: sdk.String("sit"),
        Name: "Stephen Roberts",
        OauthToken: sdk.String("voluptate"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("dolorum"),
        UploadType: sdk.String("deleniti"),
        UploadProtocol: sdk.String("omnis"),
    }, operations.IdentitytoolkitProjectsTenantsOauthIdpConfigsGetSecurity{
        Option1: &operations.IdentitytoolkitProjectsTenantsOauthIdpConfigsGetSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudIdentitytoolkitAdminV2OAuthIdpConfig != nil {
        // handle response
    }
}
```

## IdentitytoolkitProjectsTenantsOauthIdpConfigsList

List all Oidc Idp configurations for an Identity Toolkit project.

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
    res, err := s.Projects.IdentitytoolkitProjectsTenantsOauthIdpConfigsList(ctx, operations.IdentitytoolkitProjectsTenantsOauthIdpConfigsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("distinctio"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("nihil"),
        Fields: sdk.String("ipsum"),
        Key: sdk.String("voluptate"),
        OauthToken: sdk.String("id"),
        PageSize: sdk.Int64(906418),
        PageToken: sdk.String("eius"),
        Parent: "aspernatur",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("perferendis"),
        UploadType: sdk.String("amet"),
        UploadProtocol: sdk.String("optio"),
    }, operations.IdentitytoolkitProjectsTenantsOauthIdpConfigsListSecurity{
        Option1: &operations.IdentitytoolkitProjectsTenantsOauthIdpConfigsListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudIdentitytoolkitAdminV2ListOAuthIdpConfigsResponse != nil {
        // handle response
    }
}
```

## IdentitytoolkitProjectsTenantsOauthIdpConfigsPatch

Update an Oidc Idp configuration for an Identity Toolkit project.

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
    res, err := s.Projects.IdentitytoolkitProjectsTenantsOauthIdpConfigsPatch(ctx, operations.IdentitytoolkitProjectsTenantsOauthIdpConfigsPatchRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        GoogleCloudIdentitytoolkitAdminV2OAuthIdpConfig: &shared.GoogleCloudIdentitytoolkitAdminV2OAuthIdpConfig{
            ClientID: sdk.String("ad"),
            ClientSecret: sdk.String("saepe"),
            DisplayName: sdk.String("suscipit"),
            Enabled: sdk.Bool(false),
            Issuer: sdk.String("deserunt"),
            Name: sdk.String("Derek Sipes"),
            ResponseType: &shared.GoogleCloudIdentitytoolkitAdminV2OAuthResponseType{
                Code: sdk.Bool(false),
                IDToken: sdk.Bool(false),
                Token: sdk.Bool(false),
            },
        },
        AccessToken: sdk.String("alias"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("quaerat"),
        Fields: sdk.String("tempora"),
        Key: sdk.String("vel"),
        Name: "Erick Denesik",
        OauthToken: sdk.String("esse"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("harum"),
        UpdateMask: sdk.String("iusto"),
        UploadType: sdk.String("ipsum"),
        UploadProtocol: sdk.String("quisquam"),
    }, operations.IdentitytoolkitProjectsTenantsOauthIdpConfigsPatchSecurity{
        Option1: &operations.IdentitytoolkitProjectsTenantsOauthIdpConfigsPatchSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudIdentitytoolkitAdminV2OAuthIdpConfig != nil {
        // handle response
    }
}
```

## IdentitytoolkitProjectsTenantsSetIamPolicy

Sets the access control policy for a resource. If the policy exists, it is replaced. Caller must have the right Google IAM permission on the resource.

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
    res, err := s.Projects.IdentitytoolkitProjectsTenantsSetIamPolicy(ctx, operations.IdentitytoolkitProjectsTenantsSetIamPolicyRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        GoogleIamV1SetIamPolicyRequest: &shared.GoogleIamV1SetIamPolicyRequest{
            Policy: &shared.GoogleIamV1Policy{
                AuditConfigs: []shared.GoogleIamV1AuditConfig{
                    shared.GoogleIamV1AuditConfig{
                        AuditLogConfigs: []shared.GoogleIamV1AuditLogConfig{
                            shared.GoogleIamV1AuditLogConfig{
                                ExemptedMembers: []string{
                                    "numquam",
                                    "enim",
                                    "dolorem",
                                    "sapiente",
                                },
                                LogType: shared.GoogleIamV1AuditLogConfigLogTypeEnumDataWrite.ToPointer(),
                            },
                            shared.GoogleIamV1AuditLogConfig{
                                ExemptedMembers: []string{
                                    "sit",
                                    "expedita",
                                },
                                LogType: shared.GoogleIamV1AuditLogConfigLogTypeEnumLogTypeUnspecified.ToPointer(),
                            },
                            shared.GoogleIamV1AuditLogConfig{
                                ExemptedMembers: []string{
                                    "vel",
                                },
                                LogType: shared.GoogleIamV1AuditLogConfigLogTypeEnumDataWrite.ToPointer(),
                            },
                        },
                        Service: sdk.String("voluptas"),
                    },
                },
                Bindings: []shared.GoogleIamV1Binding{
                    shared.GoogleIamV1Binding{
                        Condition: &shared.GoogleTypeExpr{
                            Description: sdk.String("quam"),
                            Expression: sdk.String("ipsum"),
                            Location: sdk.String("incidunt"),
                            Title: sdk.String("Mr."),
                        },
                        Members: []string{
                            "maxime",
                            "pariatur",
                            "soluta",
                        },
                        Role: sdk.String("dicta"),
                    },
                    shared.GoogleIamV1Binding{
                        Condition: &shared.GoogleTypeExpr{
                            Description: sdk.String("laborum"),
                            Expression: sdk.String("totam"),
                            Location: sdk.String("incidunt"),
                            Title: sdk.String("Mr."),
                        },
                        Members: []string{
                            "distinctio",
                        },
                        Role: sdk.String("facilis"),
                    },
                    shared.GoogleIamV1Binding{
                        Condition: &shared.GoogleTypeExpr{
                            Description: sdk.String("aliquid"),
                            Expression: sdk.String("quam"),
                            Location: sdk.String("molestias"),
                            Title: sdk.String("Dr."),
                        },
                        Members: []string{
                            "neque",
                        },
                        Role: sdk.String("fugit"),
                    },
                },
                Etag: sdk.String("magni"),
                Version: sdk.Int(488056),
            },
            UpdateMask: sdk.String("sunt"),
        },
        AccessToken: sdk.String("ullam"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("hic"),
        Fields: sdk.String("voluptatem"),
        Key: sdk.String("cumque"),
        OauthToken: sdk.String("soluta"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("nobis"),
        Resource: "et",
        UploadType: sdk.String("saepe"),
        UploadProtocol: sdk.String("ipsum"),
    }, operations.IdentitytoolkitProjectsTenantsSetIamPolicySecurity{
        Option1: &operations.IdentitytoolkitProjectsTenantsSetIamPolicySecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleIamV1Policy != nil {
        // handle response
    }
}
```

## IdentitytoolkitProjectsTenantsTestIamPermissions

Returns the caller's permissions on a resource. An error is returned if the resource does not exist. A caller is not required to have Google IAM permission to make this request.

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
    res, err := s.Projects.IdentitytoolkitProjectsTenantsTestIamPermissions(ctx, operations.IdentitytoolkitProjectsTenantsTestIamPermissionsRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        GoogleIamV1TestIamPermissionsRequest: &shared.GoogleIamV1TestIamPermissionsRequest{
            Permissions: []string{
                "quos",
                "tempore",
                "cupiditate",
            },
        },
        AccessToken: sdk.String("aperiam"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("dolorem"),
        Fields: sdk.String("dolore"),
        Key: sdk.String("labore"),
        OauthToken: sdk.String("adipisci"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("dolorum"),
        Resource: "architecto",
        UploadType: sdk.String("quae"),
        UploadProtocol: sdk.String("aut"),
    }, operations.IdentitytoolkitProjectsTenantsTestIamPermissionsSecurity{
        Option1: &operations.IdentitytoolkitProjectsTenantsTestIamPermissionsSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleIamV1TestIamPermissionsResponse != nil {
        // handle response
    }
}
```
