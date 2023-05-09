# Projects

### Available Operations

* [SecuritycenterProjectsLocationsClustersGetContainerThreatDetectionSettings](#securitycenterprojectslocationsclustersgetcontainerthreatdetectionsettings) - Get the ContainerThreatDetectionSettings resource. In the returned settings response, a missing field only indicates that it was not explicitly set, so no assumption should be made about these fields. In other words, GetContainerThreatDetectionSettings does not calculate the effective service settings for the resource, which accounts for inherited settings and defaults. Instead, use CalculateContainerThreatDetectionSettings for this purpose.
* [SecuritycenterProjectsLocationsClustersUpdateContainerThreatDetectionSettings](#securitycenterprojectslocationsclustersupdatecontainerthreatdetectionsettings) - Update the ContainerThreatDetectionSettings resource.
* [SecuritycenterProjectsWebSecurityScannerSettingsCalculate](#securitycenterprojectswebsecurityscannersettingscalculate) - Calculates the effective WebSecurityScannerSettings based on its level in the resource hierarchy and its settings. Settings provided closer to the target resource take precedence over those further away (e.g. folder will override organization level settings). The default SCC setting for the detector service defaults can be overridden at organization, folder and project levels. No assumptions should be made about the SCC defaults as it is considered an internal implementation detail.

## SecuritycenterProjectsLocationsClustersGetContainerThreatDetectionSettings

Get the ContainerThreatDetectionSettings resource. In the returned settings response, a missing field only indicates that it was not explicitly set, so no assumption should be made about these fields. In other words, GetContainerThreatDetectionSettings does not calculate the effective service settings for the resource, which accounts for inherited settings and defaults. Instead, use CalculateContainerThreatDetectionSettings for this purpose.

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
    res, err := s.Projects.SecuritycenterProjectsLocationsClustersGetContainerThreatDetectionSettings(ctx, operations.SecuritycenterProjectsLocationsClustersGetContainerThreatDetectionSettingsRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("delectus"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("suscipit"),
        Fields: sdk.String("molestiae"),
        Key: sdk.String("minus"),
        Name: "Ken Kshlerin",
        OauthToken: sdk.String("recusandae"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("temporibus"),
        UploadType: sdk.String("ab"),
        UploadProtocol: sdk.String("quis"),
    }, operations.SecuritycenterProjectsLocationsClustersGetContainerThreatDetectionSettingsSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ContainerThreatDetectionSettings != nil {
        // handle response
    }
}
```

## SecuritycenterProjectsLocationsClustersUpdateContainerThreatDetectionSettings

Update the ContainerThreatDetectionSettings resource.

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
    res, err := s.Projects.SecuritycenterProjectsLocationsClustersUpdateContainerThreatDetectionSettings(ctx, operations.SecuritycenterProjectsLocationsClustersUpdateContainerThreatDetectionSettingsRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        ContainerThreatDetectionSettingsInput: &shared.ContainerThreatDetectionSettingsInput{
            Modules: map[string]shared.Config{
                "perferendis": shared.Config{
                    ModuleEnablementState: shared.ConfigModuleEnablementStateEnumInherited.ToPointer(),
                    Value: map[string]interface{}{
                        "sapiente": "quo",
                        "odit": "at",
                        "at": "maiores",
                        "molestiae": "quod",
                    },
                },
                "quod": shared.Config{
                    ModuleEnablementState: shared.ConfigModuleEnablementStateEnumInherited.ToPointer(),
                    Value: map[string]interface{}{
                        "porro": "dolorum",
                        "dicta": "nam",
                        "officia": "occaecati",
                    },
                },
                "fugit": shared.Config{
                    ModuleEnablementState: shared.ConfigModuleEnablementStateEnumEnabled.ToPointer(),
                    Value: map[string]interface{}{
                        "optio": "totam",
                        "beatae": "commodi",
                        "molestiae": "modi",
                        "qui": "impedit",
                    },
                },
            },
            Name: sdk.String("Cory Emmerich"),
            ServiceEnablementState: shared.ContainerThreatDetectionSettingsServiceEnablementStateEnumEnablementStateUnspecified.ToPointer(),
        },
        AccessToken: sdk.String("ad"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("sed"),
        Fields: sdk.String("iste"),
        Key: sdk.String("dolor"),
        Name: "Lester Welch",
        OauthToken: sdk.String("in"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("corporis"),
        UpdateMask: sdk.String("iste"),
        UploadType: sdk.String("iure"),
        UploadProtocol: sdk.String("saepe"),
    }, operations.SecuritycenterProjectsLocationsClustersUpdateContainerThreatDetectionSettingsSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ContainerThreatDetectionSettings != nil {
        // handle response
    }
}
```

## SecuritycenterProjectsWebSecurityScannerSettingsCalculate

Calculates the effective WebSecurityScannerSettings based on its level in the resource hierarchy and its settings. Settings provided closer to the target resource take precedence over those further away (e.g. folder will override organization level settings). The default SCC setting for the detector service defaults can be overridden at organization, folder and project levels. No assumptions should be made about the SCC defaults as it is considered an internal implementation detail.

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
    res, err := s.Projects.SecuritycenterProjectsWebSecurityScannerSettingsCalculate(ctx, operations.SecuritycenterProjectsWebSecurityScannerSettingsCalculateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("architecto"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("reiciendis"),
        Fields: sdk.String("est"),
        Key: sdk.String("mollitia"),
        Name: "Ernest Ebert",
        OauthToken: sdk.String("nobis"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("enim"),
        UploadType: sdk.String("omnis"),
        UploadProtocol: sdk.String("nemo"),
    }, operations.SecuritycenterProjectsWebSecurityScannerSettingsCalculateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.WebSecurityScannerSettings != nil {
        // handle response
    }
}
```
