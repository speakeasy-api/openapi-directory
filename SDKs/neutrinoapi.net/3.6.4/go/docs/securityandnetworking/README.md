# SecurityAndNetworking

### Available Operations

* [DomainLookup](#domainlookup) - Domain Lookup
* [EmailVerify](#emailverify) - Email Verify
* [HostReputation](#hostreputation) - Host Reputation
* [IPBlocklist](#ipblocklist) - IP Blocklist
* [IPBlocklistDownload](#ipblocklistdownload) - IP Blocklist Download
* [IPProbe](#ipprobe) - IP Probe

## DomainLookup

Retrieve domain name details and detect potentially malicious or dangerous domains

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
            APIKey: "YOUR_API_KEY_HERE",
            UserID: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SecurityAndNetworking.DomainLookup(ctx, operations.DomainLookupRequest{
        Host: "culpa",
        Live: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DomainLookupResponse != nil {
        // handle response
    }
}
```

## EmailVerify

SMTP based email address verification

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
            APIKey: "YOUR_API_KEY_HERE",
            UserID: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SecurityAndNetworking.EmailVerify(ctx, operations.EmailVerifyRequest{
        Email: "Veronica.Brakus@hotmail.com",
        FixTypos: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.EmailVerifyResponse != nil {
        // handle response
    }
}
```

## HostReputation

Check the reputation of an IP address, domain name or URL against a comprehensive list of blacklists and blocklists

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
            APIKey: "YOUR_API_KEY_HERE",
            UserID: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SecurityAndNetworking.HostReputation(ctx, operations.HostReputationRequest{
        Host: "culpa",
        ListRating: sdk.Int(161309),
        Zones: sdk.String("repellat"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.HostReputationResponse != nil {
        // handle response
    }
}
```

## IPBlocklist

The IP Blocklist API will detect potentially malicious or dangerous IP addresses

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
            APIKey: "YOUR_API_KEY_HERE",
            UserID: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SecurityAndNetworking.IPBlocklist(ctx, operations.IPBlocklistRequest{
        IP: "mollitia",
        VpnLookup: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.IPBlocklistResponse != nil {
        // handle response
    }
}
```

## IPBlocklistDownload

This API is a direct feed to our IP blocklist data

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
            APIKey: "YOUR_API_KEY_HERE",
            UserID: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SecurityAndNetworking.IPBlocklistDownload(ctx, operations.IPBlocklistDownloadRequest{
        Cidr: sdk.Bool(false),
        Format: sdk.String("occaecati"),
        IncludeVpn: sdk.Bool(false),
        Ip6: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.IPBlocklistDownload200ApplicationJSONBinaryString != nil {
        // handle response
    }
}
```

## IPProbe

Execute a realtime network probe against an IPv4 or IPv6 address

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
            APIKey: "YOUR_API_KEY_HERE",
            UserID: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SecurityAndNetworking.IPProbe(ctx, operations.IPProbeRequest{
        IP: "numquam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.IPProbeResponse != nil {
        // handle response
    }
}
```
