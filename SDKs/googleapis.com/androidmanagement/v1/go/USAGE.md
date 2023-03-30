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
            AccessToken: "provident",
            AgreementAccepted: false,
            Alt: "proto",
            Callback: "quibusdam",
            EnterpriseToken: "unde",
            Fields: "nulla",
            Key: "corrupti",
            OauthToken: "illum",
            PrettyPrint: false,
            ProjectID: "vel",
            QuotaUser: "error",
            SignupURLName: "deserunt",
            UploadType: "suscipit",
            UploadProtocol: "iure",
        },
        Request: &shared.Enterprise{
            AppAutoApprovalEnabled: false,
            ContactInfo: &shared.ContactInfo{
                ContactEmail: "magnam",
                DataProtectionOfficerEmail: "debitis",
                DataProtectionOfficerName: "ipsa",
                DataProtectionOfficerPhone: "delectus",
                EuRepresentativeEmail: "tempora",
                EuRepresentativeName: "suscipit",
                EuRepresentativePhone: "molestiae",
            },
            EnabledNotificationTypes: []shared.EnterpriseEnabledNotificationTypesEnum{
                "COMMAND",
                "STATUS_REPORT",
                "COMPLIANCE_REPORT",
                "STATUS_REPORT",
            },
            EnterpriseDisplayName: "nisi",
            Logo: &shared.ExternalData{
                Sha256Hash: "recusandae",
                URL: "temporibus",
            },
            Name: "ab",
            PrimaryColor: 337396,
            PubsubTopic: "veritatis",
            SigninDetails: []shared.SigninDetail{
                shared.SigninDetail{
                    AllowPersonalUsage: "ALLOW_PERSONAL_USAGE_UNSPECIFIED",
                    QrCode: "ipsam",
                    SigninEnrollmentToken: "repellendus",
                    SigninURL: "sapiente",
                },
                shared.SigninDetail{
                    AllowPersonalUsage: "PERSONAL_USAGE_DISALLOWED",
                    QrCode: "odit",
                    SigninEnrollmentToken: "at",
                    SigninURL: "at",
                },
                shared.SigninDetail{
                    AllowPersonalUsage: "PERSONAL_USAGE_DISALLOWED",
                    QrCode: "molestiae",
                    SigninEnrollmentToken: "quod",
                    SigninURL: "quod",
                },
            },
            TermsAndConditions: []shared.TermsAndConditions{
                shared.TermsAndConditions{
                    Content: &shared.UserFacingMessage{
                        DefaultMessage: "totam",
                        LocalizedMessages: map[string]string{
                            "dolorum": "dicta",
                            "nam": "officia",
                            "occaecati": "fugit",
                            "deleniti": "hic",
                        },
                    },
                    Header: &shared.UserFacingMessage{
                        DefaultMessage: "optio",
                        LocalizedMessages: map[string]string{
                            "beatae": "commodi",
                            "molestiae": "modi",
                            "qui": "impedit",
                        },
                    },
                },
                shared.TermsAndConditions{
                    Content: &shared.UserFacingMessage{
                        DefaultMessage: "cum",
                        LocalizedMessages: map[string]string{
                            "ipsum": "excepturi",
                            "aspernatur": "perferendis",
                        },
                    },
                    Header: &shared.UserFacingMessage{
                        DefaultMessage: "ad",
                        LocalizedMessages: map[string]string{
                            "sed": "iste",
                            "dolor": "natus",
                            "laboriosam": "hic",
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