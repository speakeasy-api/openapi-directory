# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/googleapis.com/androidmanagement/v1/go
```
<!-- End SDK Installation -->

## SDK Example Usage
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

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### Enterprises

* `AndroidmanagementEnterprisesCreate` - Creates an enterprise. This is the last step in the enterprise signup flow. See also: SigninDetail
* `AndroidmanagementEnterprisesDevicesIssueCommand` - Issues a command to a device. The Operation resource returned contains a Command in its metadata field. Use the get operation method to get the status of the command.
* `AndroidmanagementEnterprisesDevicesList` - Lists devices for a given enterprise. Deleted devices are not returned in the response.
* `AndroidmanagementEnterprisesDevicesOperationsCancel` - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns google.rpc.Code.UNIMPLEMENTED. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to Code.CANCELLED.
* `AndroidmanagementEnterprisesEnrollmentTokensCreate` - Creates an enrollment token for a given enterprise. It's up to the caller's responsibility to manage the lifecycle of newly created tokens and deleting them when they're not intended to be used anymore. Once an enrollment token has been created, it's not possible to retrieve the token's content anymore using AM API. It is recommended for EMMs to securely store the token if it's intended to be reused.
* `AndroidmanagementEnterprisesEnrollmentTokensList` - Lists active, unexpired enrollment tokens for a given enterprise. The list items contain only a partial view of EnrollmentToken: all the fields but name and expiration_timestamp are empty. This method is meant to help manage active enrollment tokens lifecycle. For security reasons, it's recommended to delete active enrollment tokens as soon as they're not intended to be used anymore.
* `AndroidmanagementEnterprisesList` - Lists EMM-managed enterprises. Only BASIC fields are returned.
* `AndroidmanagementEnterprisesPoliciesList` - Lists policies for a given enterprise.
* `AndroidmanagementEnterprisesWebAppsCreate` - Creates a web app.
* `AndroidmanagementEnterprisesWebAppsDelete` - Deletes a web app.
* `AndroidmanagementEnterprisesWebAppsGet` - Gets a web app.
* `AndroidmanagementEnterprisesWebAppsList` - Lists web apps for a given enterprise.
* `AndroidmanagementEnterprisesWebAppsPatch` - Updates a web app.
* `AndroidmanagementEnterprisesWebTokensCreate` - Creates a web token to access an embeddable managed Google Play web UI for a given enterprise.

### SignupUrls

* `AndroidmanagementSignupUrlsCreate` - Creates an enterprise signup URL.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
