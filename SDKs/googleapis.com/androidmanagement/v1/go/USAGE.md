<!-- Start SDK Example Usage -->
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
    res, err := s.Enterprises.AndroidmanagementEnterprisesCreate(ctx, operations.AndroidmanagementEnterprisesCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        Enterprise: &shared.Enterprise{
            AppAutoApprovalEnabled: sdk.Bool(false),
            ContactInfo: &shared.ContactInfo{
                ContactEmail: sdk.String("provident"),
                DataProtectionOfficerEmail: sdk.String("distinctio"),
                DataProtectionOfficerName: sdk.String("quibusdam"),
                DataProtectionOfficerPhone: sdk.String("unde"),
                EuRepresentativeEmail: sdk.String("nulla"),
                EuRepresentativeName: sdk.String("corrupti"),
                EuRepresentativePhone: sdk.String("illum"),
            },
            EnabledNotificationTypes: []shared.EnterpriseEnabledNotificationTypesEnum{
                shared.EnterpriseEnabledNotificationTypesEnumStatusReport,
                shared.EnterpriseEnabledNotificationTypesEnumStatusReport,
            },
            EnterpriseDisplayName: sdk.String("suscipit"),
            Logo: &shared.ExternalData{
                Sha256Hash: sdk.String("iure"),
                URL: sdk.String("magnam"),
            },
            Name: sdk.String("Larry Windler"),
            PrimaryColor: sdk.Int(477665),
            PubsubTopic: sdk.String("minus"),
            SigninDetails: []shared.SigninDetail{
                shared.SigninDetail{
                    AllowPersonalUsage: shared.SigninDetailAllowPersonalUsageEnumPersonalUsageAllowed.ToPointer(),
                    QrCode: sdk.String("iusto"),
                    SigninEnrollmentToken: sdk.String("excepturi"),
                    SigninURL: sdk.String("nisi"),
                },
                shared.SigninDetail{
                    AllowPersonalUsage: shared.SigninDetailAllowPersonalUsageEnumPersonalUsageDisallowed.ToPointer(),
                    QrCode: sdk.String("temporibus"),
                    SigninEnrollmentToken: sdk.String("ab"),
                    SigninURL: sdk.String("quis"),
                },
                shared.SigninDetail{
                    AllowPersonalUsage: shared.SigninDetailAllowPersonalUsageEnumAllowPersonalUsageUnspecified.ToPointer(),
                    QrCode: sdk.String("deserunt"),
                    SigninEnrollmentToken: sdk.String("perferendis"),
                    SigninURL: sdk.String("ipsam"),
                },
                shared.SigninDetail{
                    AllowPersonalUsage: shared.SigninDetailAllowPersonalUsageEnumPersonalUsageDisallowed.ToPointer(),
                    QrCode: sdk.String("sapiente"),
                    SigninEnrollmentToken: sdk.String("quo"),
                    SigninURL: sdk.String("odit"),
                },
            },
            TermsAndConditions: []shared.TermsAndConditions{
                shared.TermsAndConditions{
                    Content: &shared.UserFacingMessage{
                        DefaultMessage: sdk.String("at"),
                        LocalizedMessages: map[string]string{
                            "molestiae": "quod",
                            "quod": "esse",
                            "totam": "porro",
                            "dolorum": "dicta",
                        },
                    },
                    Header: &shared.UserFacingMessage{
                        DefaultMessage: sdk.String("nam"),
                        LocalizedMessages: map[string]string{
                            "occaecati": "fugit",
                            "deleniti": "hic",
                            "optio": "totam",
                        },
                    },
                },
                shared.TermsAndConditions{
                    Content: &shared.UserFacingMessage{
                        DefaultMessage: sdk.String("beatae"),
                        LocalizedMessages: map[string]string{
                            "molestiae": "modi",
                            "qui": "impedit",
                        },
                    },
                    Header: &shared.UserFacingMessage{
                        DefaultMessage: sdk.String("cum"),
                        LocalizedMessages: map[string]string{
                            "ipsum": "excepturi",
                            "aspernatur": "perferendis",
                        },
                    },
                },
                shared.TermsAndConditions{
                    Content: &shared.UserFacingMessage{
                        DefaultMessage: sdk.String("ad"),
                        LocalizedMessages: map[string]string{
                            "sed": "iste",
                            "dolor": "natus",
                            "laboriosam": "hic",
                        },
                    },
                    Header: &shared.UserFacingMessage{
                        DefaultMessage: sdk.String("saepe"),
                        LocalizedMessages: map[string]string{
                            "in": "corporis",
                            "iste": "iure",
                            "saepe": "quidem",
                        },
                    },
                },
                shared.TermsAndConditions{
                    Content: &shared.UserFacingMessage{
                        DefaultMessage: sdk.String("architecto"),
                        LocalizedMessages: map[string]string{
                            "reiciendis": "est",
                        },
                    },
                    Header: &shared.UserFacingMessage{
                        DefaultMessage: sdk.String("mollitia"),
                        LocalizedMessages: map[string]string{
                            "dolores": "dolorem",
                            "corporis": "explicabo",
                            "nobis": "enim",
                        },
                    },
                },
            },
        },
        AccessToken: sdk.String("omnis"),
        AgreementAccepted: sdk.Bool(false),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("minima"),
        EnterpriseToken: sdk.String("excepturi"),
        Fields: sdk.String("accusantium"),
        Key: sdk.String("iure"),
        OauthToken: sdk.String("culpa"),
        PrettyPrint: sdk.Bool(false),
        ProjectID: sdk.String("doloribus"),
        QuotaUser: sdk.String("sapiente"),
        SignupURLName: sdk.String("architecto"),
        UploadType: sdk.String("mollitia"),
        UploadProtocol: sdk.String("dolorem"),
    }, operations.AndroidmanagementEnterprisesCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Enterprise != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->