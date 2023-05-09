# SyslogServers

### Available Operations

* [GetNetworkSyslogServers](#getnetworksyslogservers) - List the syslog servers for a network
* [UpdateNetworkSyslogServers](#updatenetworksyslogservers) - Update the syslog servers for a network

## GetNetworkSyslogServers

List the syslog servers for a network

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
    res, err := s.SyslogServers.GetNetworkSyslogServers(ctx, operations.GetNetworkSyslogServersRequest{
        NetworkID: "incidunt",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkSyslogServers200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## UpdateNetworkSyslogServers

Update the syslog servers for a network

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
    res, err := s.SyslogServers.UpdateNetworkSyslogServers(ctx, operations.UpdateNetworkSyslogServersRequest{
        RequestBody: operations.UpdateNetworkSyslogServersRequestBody{
            Servers: []UpdateNetworkSyslogServersRequestBodyServers{
                operations.UpdateNetworkSyslogServersRequestBodyServers{
                    Host: "ipsam",
                    Port: 60,
                    Roles: []string{
                        "deserunt",
                        "molestias",
                    },
                },
                operations.UpdateNetworkSyslogServersRequestBodyServers{
                    Host: "laborum",
                    Port: 668218,
                    Roles: []string{
                        "labore",
                        "quo",
                        "perferendis",
                    },
                },
                operations.UpdateNetworkSyslogServersRequestBodyServers{
                    Host: "fugit",
                    Port: 399222,
                    Roles: []string{
                        "quaerat",
                        "eligendi",
                    },
                },
                operations.UpdateNetworkSyslogServersRequestBodyServers{
                    Host: "hic",
                    Port: 342921,
                    Roles: []string{
                        "unde",
                        "nulla",
                        "error",
                        "mollitia",
                    },
                },
            },
        },
        NetworkID: "magnam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkSyslogServers200ApplicationJSONObjects != nil {
        // handle response
    }
}
```
