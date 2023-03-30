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

<!-- Start SDK Available Operations -->
## SDK Available Operations


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

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
