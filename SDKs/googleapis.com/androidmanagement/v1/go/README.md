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

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [Enterprises](docs/enterprises/README.md)

* [AndroidmanagementEnterprisesCreate](docs/enterprises/README.md#androidmanagemententerprisescreate) - Creates an enterprise. This is the last step in the enterprise signup flow. See also: SigninDetail
* [AndroidmanagementEnterprisesDevicesIssueCommand](docs/enterprises/README.md#androidmanagemententerprisesdevicesissuecommand) - Issues a command to a device. The Operation resource returned contains a Command in its metadata field. Use the get operation method to get the status of the command.
* [AndroidmanagementEnterprisesDevicesList](docs/enterprises/README.md#androidmanagemententerprisesdeviceslist) - Lists devices for a given enterprise. Deleted devices are not returned in the response.
* [AndroidmanagementEnterprisesDevicesOperationsCancel](docs/enterprises/README.md#androidmanagemententerprisesdevicesoperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns google.rpc.Code.UNIMPLEMENTED. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to Code.CANCELLED.
* [AndroidmanagementEnterprisesEnrollmentTokensCreate](docs/enterprises/README.md#androidmanagemententerprisesenrollmenttokenscreate) - Creates an enrollment token for a given enterprise. It's up to the caller's responsibility to manage the lifecycle of newly created tokens and deleting them when they're not intended to be used anymore. Once an enrollment token has been created, it's not possible to retrieve the token's content anymore using AM API. It is recommended for EMMs to securely store the token if it's intended to be reused.
* [AndroidmanagementEnterprisesEnrollmentTokensList](docs/enterprises/README.md#androidmanagemententerprisesenrollmenttokenslist) - Lists active, unexpired enrollment tokens for a given enterprise. The list items contain only a partial view of EnrollmentToken: all the fields but name and expiration_timestamp are empty. This method is meant to help manage active enrollment tokens lifecycle. For security reasons, it's recommended to delete active enrollment tokens as soon as they're not intended to be used anymore.
* [AndroidmanagementEnterprisesList](docs/enterprises/README.md#androidmanagemententerpriseslist) - Lists EMM-managed enterprises. Only BASIC fields are returned.
* [AndroidmanagementEnterprisesPoliciesList](docs/enterprises/README.md#androidmanagemententerprisespolicieslist) - Lists policies for a given enterprise.
* [AndroidmanagementEnterprisesWebAppsCreate](docs/enterprises/README.md#androidmanagemententerpriseswebappscreate) - Creates a web app.
* [AndroidmanagementEnterprisesWebAppsDelete](docs/enterprises/README.md#androidmanagemententerpriseswebappsdelete) - Deletes a web app.
* [AndroidmanagementEnterprisesWebAppsGet](docs/enterprises/README.md#androidmanagemententerpriseswebappsget) - Gets a web app.
* [AndroidmanagementEnterprisesWebAppsList](docs/enterprises/README.md#androidmanagemententerpriseswebappslist) - Lists web apps for a given enterprise.
* [AndroidmanagementEnterprisesWebAppsPatch](docs/enterprises/README.md#androidmanagemententerpriseswebappspatch) - Updates a web app.
* [AndroidmanagementEnterprisesWebTokensCreate](docs/enterprises/README.md#androidmanagemententerpriseswebtokenscreate) - Creates a web token to access an embeddable managed Google Play web UI for a given enterprise.

### [SignupUrls](docs/signupurls/README.md)

* [AndroidmanagementSignupUrlsCreate](docs/signupurls/README.md#androidmanagementsignupurlscreate) - Creates an enterprise signup URL.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
