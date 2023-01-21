<!-- Start SDK Example Usage -->
```go
package main

import (
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
            DollarXgafv: "1",
            AccessToken: "voluptas",
            AgreementAccepted: true,
            Alt: "media",
            Callback: "consequuntur",
            EnterpriseToken: "dolor",
            Fields: "expedita",
            Key: "voluptas",
            OauthToken: "fugit",
            PrettyPrint: false,
            ProjectID: "nihil",
            QuotaUser: "rerum",
            SignupURLName: "dicta",
            UploadType: "debitis",
            UploadProtocol: "voluptatum",
        },
        Request: &shared.Enterprise{
            AppAutoApprovalEnabled: false,
            ContactInfo: &shared.ContactInfo{
                ContactEmail: "ut",
                DataProtectionOfficerEmail: "dolorem",
                DataProtectionOfficerName: "et",
                DataProtectionOfficerPhone: "voluptate",
                EuRepresentativeEmail: "iste",
                EuRepresentativeName: "vitae",
                EuRepresentativePhone: "totam",
            },
            EnabledNotificationTypes: []shared.EnterpriseEnabledNotificationTypesEnum{
                "USAGE_LOGS",
            },
            EnterpriseDisplayName: "debitis",
            Logo: &shared.ExternalData{
                Sha256Hash: "vel",
                URL: "odio",
            },
            Name: "dolore",
            PrimaryColor: 4035568504096476779,
            PubsubTopic: "aspernatur",
            SigninDetails: []shared.SigninDetail{
                shared.SigninDetail{
                    AllowPersonalUsage: "PERSONAL_USAGE_DISALLOWED",
                    QrCode: "commodi",
                    SigninEnrollmentToken: "quis",
                    SigninURL: "est",
                },
                shared.SigninDetail{
                    AllowPersonalUsage: "PERSONAL_USAGE_DISALLOWED",
                    QrCode: "odit",
                    SigninEnrollmentToken: "non",
                    SigninURL: "voluptas",
                },
                shared.SigninDetail{
                    AllowPersonalUsage: "PERSONAL_USAGE_ALLOWED",
                    QrCode: "aut",
                    SigninEnrollmentToken: "illo",
                    SigninURL: "sed",
                },
            },
            TermsAndConditions: []shared.TermsAndConditions{
                shared.TermsAndConditions{
                    Content: &shared.UserFacingMessage{
                        DefaultMessage: "autem",
                        LocalizedMessages: map[string]string{
                            "nobis": "odio",
                        },
                    },
                    Header: &shared.UserFacingMessage{
                        DefaultMessage: "qui",
                        LocalizedMessages: map[string]string{
                            "at": "ipsum",
                            "eveniet": "modi",
                            "sint": "inventore",
                        },
                    },
                },
                shared.TermsAndConditions{
                    Content: &shared.UserFacingMessage{
                        DefaultMessage: "ut",
                        LocalizedMessages: map[string]string{
                            "aut": "reprehenderit",
                            "tempore": "maiores",
                            "incidunt": "dolor",
                        },
                    },
                    Header: &shared.UserFacingMessage{
                        DefaultMessage: "beatae",
                        LocalizedMessages: map[string]string{
                            "in": "et",
                            "omnis": "ipsum",
                        },
                    },
                },
            },
        },
    }
    
    res, err := s.Enterprises.AndroidmanagementEnterprisesCreate(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Enterprise != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->