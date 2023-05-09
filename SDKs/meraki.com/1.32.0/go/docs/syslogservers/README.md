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
        NetworkID: "ex",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkSyslogServers200ApplicationJSONObject != nil {
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
                    Host: "numquam",
                    Port: 555275,
                    Roles: []string{
                        "ea",
                        "temporibus",
                    },
                },
                operations.UpdateNetworkSyslogServersRequestBodyServers{
                    Host: "consequatur",
                    Port: 667531,
                    Roles: []string{
                        "inventore",
                        "quas",
                        "harum",
                        "vitae",
                    },
                },
                operations.UpdateNetworkSyslogServersRequestBodyServers{
                    Host: "hic",
                    Port: 230551,
                    Roles: []string{
                        "veniam",
                        "amet",
                        "ad",
                        "provident",
                    },
                },
            },
        },
        NetworkID: "non",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkSyslogServers200ApplicationJSONObject != nil {
        // handle response
    }
}
```
