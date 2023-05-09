# RootCertificateAgent

### Available Operations

* [MarkAgentSecondaryCertificate](#markagentsecondarycertificate) - Mark a certificate to be added to agents
* [QueryAgentSecondaryCertificate](#queryagentsecondarycertificate) - Get all potential agent secondary cluster certificates
* [UnmarkAgentSecondaryCertificate](#unmarkagentsecondarycertificate) - Unmark a certificate that was previously marked

## MarkAgentSecondaryCertificate

Mark a secondary cluster certificate to be asynchronously synced to all Rubrik Backup Service instances for which this cluster is the primary.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            BasicAuth: &shared.SchemeBasicAuth{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        }),
    )

    ctx := context.Background()
    res, err := s.RootCertificateAgent.MarkAgentSecondaryCertificate(ctx, "nemo")
    if err != nil {
        log.Fatal(err)
    }

    if res.AgentSecondaryCertificateInfo != nil {
        // handle response
    }
}
```

## QueryAgentSecondaryCertificate

Get all certificates that have been added to the cluster and qualify to be secondary cluster certificates for the Rubrik Backup Service. This call retrieves any certificates that are detected to be Rubrik cluster certificates.

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
            BasicAuth: &shared.SchemeBasicAuth{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        }),
    )

    ctx := context.Background()
    res, err := s.RootCertificateAgent.QueryAgentSecondaryCertificate(ctx, operations.QueryAgentSecondaryCertificateRequest{
        IsAgentEnabled: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AgentSecondaryCertificateInfoListResponse != nil {
        // handle response
    }
}
```

## UnmarkAgentSecondaryCertificate

Unmark a previously marked secondary cluster certificate to be asynchronously removed from all Rubrik Backup Service instances for which this cluster is the primary.

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
            BasicAuth: &shared.SchemeBasicAuth{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        }),
    )

    ctx := context.Background()
    res, err := s.RootCertificateAgent.UnmarkAgentSecondaryCertificate(ctx, operations.UnmarkAgentSecondaryCertificateRequest{
        ID: "f0d30c5f-bb25-4870-9320-2c73d5fe9b90",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
