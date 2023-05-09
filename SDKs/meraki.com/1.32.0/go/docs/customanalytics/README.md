# CustomAnalytics

### Available Operations

* [CreateOrganizationCameraCustomAnalyticsArtifact](#createorganizationcameracustomanalyticsartifact) - Create custom analytics artifact
* [DeleteOrganizationCameraCustomAnalyticsArtifact](#deleteorganizationcameracustomanalyticsartifact) - Delete Custom Analytics Artifact
* [GetDeviceCameraCustomAnalytics](#getdevicecameracustomanalytics) - Return custom analytics settings for a camera
* [GetOrganizationCameraCustomAnalyticsArtifact](#getorganizationcameracustomanalyticsartifact) - Get Custom Analytics Artifact
* [GetOrganizationCameraCustomAnalyticsArtifacts](#getorganizationcameracustomanalyticsartifacts) - List Custom Analytics Artifacts
* [UpdateDeviceCameraCustomAnalytics](#updatedevicecameracustomanalytics) - Update custom analytics settings for a camera

## CreateOrganizationCameraCustomAnalyticsArtifact

Create custom analytics artifact. Returns an artifact upload URL with expiry time. Upload the artifact file with a put request to the returned upload URL before its expiry.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MerakiAPIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.CustomAnalytics.CreateOrganizationCameraCustomAnalyticsArtifact(ctx, operations.CreateOrganizationCameraCustomAnalyticsArtifactRequest{
        RequestBody: &operations.CreateOrganizationCameraCustomAnalyticsArtifactRequestBody{
            Name: sdk.String("Miss Gary Auer I"),
        },
        OrganizationID: "deserunt",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateOrganizationCameraCustomAnalyticsArtifact201ApplicationJSONObject != nil {
        // handle response
    }
}
```

## DeleteOrganizationCameraCustomAnalyticsArtifact

Delete Custom Analytics Artifact

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MerakiAPIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.CustomAnalytics.DeleteOrganizationCameraCustomAnalyticsArtifact(ctx, operations.DeleteOrganizationCameraCustomAnalyticsArtifactRequest{
        ArtifactID: "nulla",
        OrganizationID: "voluptatum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetDeviceCameraCustomAnalytics

Return custom analytics settings for a camera

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MerakiAPIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.CustomAnalytics.GetDeviceCameraCustomAnalytics(ctx, operations.GetDeviceCameraCustomAnalyticsRequest{
        Serial: "veritatis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetDeviceCameraCustomAnalytics200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetOrganizationCameraCustomAnalyticsArtifact

Get Custom Analytics Artifact

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MerakiAPIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.CustomAnalytics.GetOrganizationCameraCustomAnalyticsArtifact(ctx, operations.GetOrganizationCameraCustomAnalyticsArtifactRequest{
        ArtifactID: "consequuntur",
        OrganizationID: "dolore",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOrganizationCameraCustomAnalyticsArtifact200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetOrganizationCameraCustomAnalyticsArtifacts

List Custom Analytics Artifacts

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MerakiAPIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.CustomAnalytics.GetOrganizationCameraCustomAnalyticsArtifacts(ctx, operations.GetOrganizationCameraCustomAnalyticsArtifactsRequest{
        OrganizationID: "fugit",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOrganizationCameraCustomAnalyticsArtifacts200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## UpdateDeviceCameraCustomAnalytics

Update custom analytics settings for a camera

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MerakiAPIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.CustomAnalytics.UpdateDeviceCameraCustomAnalytics(ctx, operations.UpdateDeviceCameraCustomAnalyticsRequest{
        RequestBody: &operations.UpdateDeviceCameraCustomAnalyticsRequestBody{
            ArtifactID: sdk.String("alias"),
            Enabled: sdk.Bool(false),
            Parameters: []UpdateDeviceCameraCustomAnalyticsRequestBodyParameters{
                operations.UpdateDeviceCameraCustomAnalyticsRequestBodyParameters{
                    Name: "Darrin Strosin",
                    Value: "eius",
                },
                operations.UpdateDeviceCameraCustomAnalyticsRequestBodyParameters{
                    Name: "Katherine Lesch",
                    Value: "recusandae",
                },
                operations.UpdateDeviceCameraCustomAnalyticsRequestBodyParameters{
                    Name: "Sylvia Lang",
                    Value: "eveniet",
                },
            },
        },
        Serial: "tenetur",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateDeviceCameraCustomAnalytics200ApplicationJSONObject != nil {
        // handle response
    }
}
```
