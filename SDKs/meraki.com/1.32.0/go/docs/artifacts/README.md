# Artifacts

### Available Operations

* [CreateOrganizationCameraCustomAnalyticsArtifact](#createorganizationcameracustomanalyticsartifact) - Create custom analytics artifact
* [DeleteOrganizationCameraCustomAnalyticsArtifact](#deleteorganizationcameracustomanalyticsartifact) - Delete Custom Analytics Artifact
* [GetOrganizationCameraCustomAnalyticsArtifact](#getorganizationcameracustomanalyticsartifact) - Get Custom Analytics Artifact
* [GetOrganizationCameraCustomAnalyticsArtifacts](#getorganizationcameracustomanalyticsartifacts) - List Custom Analytics Artifacts

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
    res, err := s.Artifacts.CreateOrganizationCameraCustomAnalyticsArtifact(ctx, operations.CreateOrganizationCameraCustomAnalyticsArtifactRequest{
        RequestBody: &operations.CreateOrganizationCameraCustomAnalyticsArtifactRequestBody{
            Name: sdk.String("Joshua Schiller"),
        },
        OrganizationID: "sint",
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
    res, err := s.Artifacts.DeleteOrganizationCameraCustomAnalyticsArtifact(ctx, operations.DeleteOrganizationCameraCustomAnalyticsArtifactRequest{
        ArtifactID: "iusto",
        OrganizationID: "enim",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
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
    res, err := s.Artifacts.GetOrganizationCameraCustomAnalyticsArtifact(ctx, operations.GetOrganizationCameraCustomAnalyticsArtifactRequest{
        ArtifactID: "accusamus",
        OrganizationID: "aperiam",
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
    res, err := s.Artifacts.GetOrganizationCameraCustomAnalyticsArtifacts(ctx, operations.GetOrganizationCameraCustomAnalyticsArtifactsRequest{
        OrganizationID: "voluptates",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOrganizationCameraCustomAnalyticsArtifacts200ApplicationJSONObjects != nil {
        // handle response
    }
}
```
