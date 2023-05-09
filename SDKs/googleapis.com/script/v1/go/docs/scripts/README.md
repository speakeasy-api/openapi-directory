# Scripts

### Available Operations

* [ScriptScriptsRun](#scriptscriptsrun) - Runs a function in an Apps Script project. The script project must be deployed for use with the Apps Script API and the calling application must share the same Cloud Platform project. This method requires authorization with an OAuth 2.0 token that includes at least one of the scopes listed in the [Authorization](#authorization-scopes) section; script projects that do not require authorization cannot be executed through this API. To find the correct scopes to include in the authentication token, open the script project **Overview** page and scroll down to "Project OAuth Scopes." The error `403, PERMISSION_DENIED: The caller does not have permission` indicates that the Cloud Platform project used to authorize the request is not the same as the one used by the script.

## ScriptScriptsRun

Runs a function in an Apps Script project. The script project must be deployed for use with the Apps Script API and the calling application must share the same Cloud Platform project. This method requires authorization with an OAuth 2.0 token that includes at least one of the scopes listed in the [Authorization](#authorization-scopes) section; script projects that do not require authorization cannot be executed through this API. To find the correct scopes to include in the authentication token, open the script project **Overview** page and scroll down to "Project OAuth Scopes." The error `403, PERMISSION_DENIED: The caller does not have permission` indicates that the Cloud Platform project used to authorize the request is not the same as the one used by the script.

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
    res, err := s.Scripts.ScriptScriptsRun(ctx, operations.ScriptScriptsRunRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        ExecutionRequest: &shared.ExecutionRequest{
            DevMode: sdk.Bool(false),
            Function: sdk.String("ipsa"),
            Parameters: []interface{}{
                "odio",
                "quaerat",
            },
            SessionState: sdk.String("accusamus"),
        },
        AccessToken: sdk.String("quidem"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("voluptas"),
        Fields: sdk.String("natus"),
        Key: sdk.String("eos"),
        OauthToken: sdk.String("atque"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("sit"),
        ScriptID: "fugiat",
        UploadType: sdk.String("ab"),
        UploadProtocol: sdk.String("soluta"),
    }, operations.ScriptScriptsRunSecurity{
        Option1: &operations.ScriptScriptsRunSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
}
```
