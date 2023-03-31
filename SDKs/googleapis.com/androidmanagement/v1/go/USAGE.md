<!-- Start SDK Example Usage -->
```go
package main

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    req := operations.AndroidmanagementEnterprisesCreateRequest{
        DollarXgafv: "2",
        Enterprise: &shared.Enterprise{
            AppAutoApprovalEnabled: false,
            ContactInfo: &shared.ContactInfo{
                ContactEmail: "provident",
                DataProtectionOfficerEmail: "distinctio",
                DataProtectionOfficerName: "quibusdam",
                DataProtectionOfficerPhone: "unde",
                EuRepresentativeEmail: "nulla",
                EuRepresentativeName: "corrupti",
                EuRepresentativePhone: "illum",
            },
            EnabledNotificationTypes: []shared.EnterpriseEnabledNotificationTypesEnum{
                "STATUS_REPORT",
                "STATUS_REPORT",
            },
            EnterpriseDisplayName: "suscipit",
            Logo: &shared.ExternalData{
                Sha256Hash: "iure",
                URL: "magnam",
            },
            Name: "debitis",
            PrimaryColor: 56713,
            PubsubTopic: "delectus",
            SigninDetails: []shared.SigninDetail{
                shared.SigninDetail{
                    AllowPersonalUsage: "PERSONAL_USAGE_ALLOWED",
                    QrCode: "molestiae",
                    SigninEnrollmentToken: "minus",
                    SigninURL: "placeat",
                },
                shared.SigninDetail{
                    AllowPersonalUsage: "PERSONAL_USAGE_ALLOWED",
                    QrCode: "iusto",
                    SigninEnrollmentToken: "excepturi",
                    SigninURL: "nisi",
                },
            },
            TermsAndConditions: []shared.TermsAndConditions{
                shared.TermsAndConditions{
                    Content: &shared.UserFacingMessage{
                        DefaultMessage: "temporibus",
                        LocalizedMessages: map[string]string{
                            "quis": "veritatis",
                        },
                    },
                    Header: &shared.UserFacingMessage{
                        DefaultMessage: "deserunt",
                        LocalizedMessages: map[string]string{
                            "ipsam": "repellendus",
                        },
                    },
                },
                shared.TermsAndConditions{
                    Content: &shared.UserFacingMessage{
                        DefaultMessage: "sapiente",
                        LocalizedMessages: map[string]string{
                            "odit": "at",
                            "at": "maiores",
                            "molestiae": "quod",
                            "quod": "esse",
                        },
                    },
                    Header: &shared.UserFacingMessage{
                        DefaultMessage: "totam",
                        LocalizedMessages: map[string]string{
                            "dolorum": "dicta",
                            "nam": "officia",
                            "occaecati": "fugit",
                            "deleniti": "hic",
                        },
                    },
                },
                shared.TermsAndConditions{
                    Content: &shared.UserFacingMessage{
                        DefaultMessage: "optio",
                        LocalizedMessages: map[string]string{
                            "beatae": "commodi",
                            "molestiae": "modi",
                            "qui": "impedit",
                        },
                    },
                    Header: &shared.UserFacingMessage{
                        DefaultMessage: "cum",
                        LocalizedMessages: map[string]string{
                            "ipsum": "excepturi",
                            "aspernatur": "perferendis",
                        },
                    },
                },
                shared.TermsAndConditions{
                    Content: &shared.UserFacingMessage{
                        DefaultMessage: "ad",
                        LocalizedMessages: map[string]string{
                            "sed": "iste",
                            "dolor": "natus",
                            "laboriosam": "hic",
                        },
                    },
                    Header: &shared.UserFacingMessage{
                        DefaultMessage: "saepe",
                        LocalizedMessages: map[string]string{
                            "in": "corporis",
                            "iste": "iure",
                            "saepe": "quidem",
                        },
                    },
                },
            },
        },
        AccessToken: "architecto",
        AgreementAccepted: false,
        Alt: "json",
        Callback: "reiciendis",
        EnterpriseToken: "est",
        Fields: "mollitia",
        Key: "laborum",
        OauthToken: "dolores",
        PrettyPrint: false,
        ProjectID: "dolorem",
        QuotaUser: "corporis",
        SignupURLName: "explicabo",
        UploadType: "nobis",
        UploadProtocol: "enim",
    }

    ctx := context.Background()
    res, err := s.Enterprises.AndroidmanagementEnterprisesCreate(ctx, req, operations.AndroidmanagementEnterprisesCreateSecurity{
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