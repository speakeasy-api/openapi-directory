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
        Security: operations.AndroidmanagementEnterprisesCreateSecurity{
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
            Oauth2c: shared.SchemeOauth2c{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        QueryParams: operations.AndroidmanagementEnterprisesCreateQueryParams{
            DollarXgafv: "2",
            AccessToken: "deserunt",
            AgreementAccepted: false,
            Alt: "proto",
            Callback: "nulla",
            EnterpriseToken: "id",
            Fields: "vero",
            Key: "perspiciatis",
            OauthToken: "nulla",
            PrettyPrint: false,
            ProjectID: "nihil",
            QuotaUser: "fuga",
            SignupURLName: "facilis",
            UploadType: "eum",
            UploadProtocol: "iusto",
        },
        Request: &shared.Enterprise{
            AppAutoApprovalEnabled: false,
            ContactInfo: &shared.ContactInfo{
                ContactEmail: "ullam",
                DataProtectionOfficerEmail: "saepe",
                DataProtectionOfficerName: "inventore",
                DataProtectionOfficerPhone: "sapiente",
                EuRepresentativeEmail: "enim",
                EuRepresentativeName: "eum",
                EuRepresentativePhone: "voluptatum",
            },
            EnabledNotificationTypes: []shared.EnterpriseEnabledNotificationTypesEnum{
                "COMMAND",
                "STATUS_REPORT",
                "COMPLIANCE_REPORT",
                "STATUS_REPORT",
            },
            EnterpriseDisplayName: "reprehenderit",
            Logo: &shared.ExternalData{
                Sha256Hash: "molestiae",
                URL: "quo",
            },
            Name: "quasi",
            PrimaryColor: 337396,
            PubsubTopic: "dicta",
            SigninDetails: []shared.SigninDetail{
                shared.SigninDetail{
                    AllowPersonalUsage: "ALLOW_PERSONAL_USAGE_UNSPECIFIED",
                    QrCode: "consequatur",
                    SigninEnrollmentToken: "fugiat",
                    SigninURL: "a",
                },
                shared.SigninDetail{
                    AllowPersonalUsage: "PERSONAL_USAGE_DISALLOWED",
                    QrCode: "eos",
                    SigninEnrollmentToken: "accusamus",
                    SigninURL: "accusamus",
                },
                shared.SigninDetail{
                    AllowPersonalUsage: "PERSONAL_USAGE_DISALLOWED",
                    QrCode: "rem",
                    SigninEnrollmentToken: "quibusdam",
                    SigninURL: "et",
                },
            },
            TermsAndConditions: []shared.TermsAndConditions{
                shared.TermsAndConditions{
                    Content: &shared.UserFacingMessage{
                        DefaultMessage: "occaecati",
                        LocalizedMessages: map[string]string{
                            "soluta": "sed",
                            "quisquam": "rerum",
                            "culpa": "qui",
                            "sed": "rerum",
                        },
                    },
                    Header: &shared.UserFacingMessage{
                        DefaultMessage: "possimus",
                        LocalizedMessages: map[string]string{
                            "odit": "esse",
                            "rem": "voluptatem",
                            "amet": "est",
                        },
                    },
                },
                shared.TermsAndConditions{
                    Content: &shared.UserFacingMessage{
                        DefaultMessage: "id",
                        LocalizedMessages: map[string]string{
                            "numquam": "similique",
                            "dolores": "sit",
                        },
                    },
                    Header: &shared.UserFacingMessage{
                        DefaultMessage: "quia",
                        LocalizedMessages: map[string]string{
                            "voluptatem": "laborum",
                            "modi": "et",
                            "iure": "earum",
                        },
                    },
                },
            },
        },
    }

    ctx := context.Background()
    res, err := s.Enterprises.AndroidmanagementEnterprisesCreate(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Enterprise != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->