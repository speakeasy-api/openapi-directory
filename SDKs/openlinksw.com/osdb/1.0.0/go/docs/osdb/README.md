# Osdb

### Available Operations

* [ActionHelp](#actionhelp) - Action help
* [DescribeAction](#describeaction) - Describe action
* [DescribeService](#describeservice) - Describe service
* [ExecuteAction](#executeaction) - Execute action
* [ListActions](#listactions) - List actions
* [ListServices](#listservices) - List services
* [LoadService](#loadservice) - Load service
* [Login](#login) - Login
* [Logout](#logout) - Logout
* [UnloadService](#unloadservice) - Unload service

## ActionHelp

Returns the help text for a given service action

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Osdb.ActionHelp(ctx, operations.ActionHelpRequest{
        ActionID: "distinctio",
        ServiceID: "quibusdam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ActionHelpResponse != nil {
        // handle response
    }
}
```

## DescribeAction

Returns a description of a given service action.

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Osdb.DescribeAction(ctx, operations.DescribeActionRequest{
        ActionID: "unde",
        ServiceID: "nulla",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeActionResponse != nil {
        // handle response
    }
}
```

## DescribeService

Returns a description of a given service

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Osdb.DescribeService(ctx, operations.DescribeServiceRequest{
        ServiceID: "corrupti",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeServiceResponse != nil {
        // handle response
    }
}
```

## ExecuteAction

Executes a registered service action and returns any output from the action.
The data returned in the POST response body may be: 
* the raw action output, 
* a URL encapsulating the action request which executes the action when dereferenced  (only for actions using GET), 
* RDF generated from the action output,
* a URL to an RDF viewer's display of the generated RDF.

Any parameters required by the action are supplied as a JSON object in the POST body. The parameter types supported are: "query", "header", "uri", "path" and "body".  The parameter type determines where a supplied parameter value is inserted into the HTTP request constructed by OSDB to invoke the target service action. In addition to native parameters required by the service action, 'Execute action' accepts some OSDB-specific parameters.<br/><br/>

**Examples**
* ```curl -ik -X POST -d '{ "latitude":"37.7759792", "longitude":"-122.41823" }' -H 'Content-Type: application/json' https://osdb.openlinksw.com/osdb/api/v1/actions/uber/products/exec```  
* ```curl -ikL -X POST -d '{ "latitude":"37.7759792", "longitude":"-122.41823", "osdb:output_type":"generate_rdf", "osdb:response_format":"application/rdf+xml" }' -H 'Content-Type: application/json' https://osdb.openlinksw.com/osdb/api/v1/actions/uber/products/exec``` 
* ```curl -ikL -X POST -d '{ "latitude":"37.7759792", "longitude":"-122.41823", "osdb:output_type":"display_rdf" }' -H 'Content-Type: application/json' https://osdb.openlinksw.com/osdb/api/v1/actions/uber/products/exec``` 
* ```curl -ik -X POST -d '{ "q":"skiing", "osdb:response_format": "application/rdf+xml" }' -H 'Content-Type: application/json' https://osdb.openlinksw.com/osdb/api/v1/actions/facet/search/exec``` 
* ```curl -ik -X POST -d '{ "q":"skiing", "osdb:output_type": "url_only" }' -H 'Content-Type: application/json' https://osdb.openlinksw.com/osdb/api/v1/actions/facet/search/exec``` 
* ```curl -ik -X POST -d '{ "Content-Location": "http://demo.openlinksw.co.uk/pubs", "osdb:body_data_src_url": "http://ods-qa.openlinksw.com/DAV/home/osdb/pubs.csv", "extractor": "csv", "osdb:response_format": "application/rdf+xml", "osdb:body_data_encoding": "text/csv" }' -H 'Content-Type: application/json' https://osdb.openlinksw.com/osdb/api/v1/actions/csv_transformer/transform/exec```

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
    res, err := s.Osdb.ExecuteAction(ctx, operations.ExecuteActionRequest{
        ExecBody: &shared.ExecBody{
            ActionSpecificProperty1: sdk.String("illum"),
            ActionSpecificProperty2: sdk.String("vel"),
            OsdbBodyDataEncoding: sdk.String("error"),
            OsdbBodyDataRaw: sdk.String("deserunt"),
            OsdbBodyDataSrcURL: sdk.String("http://innocent-effect.org"),
            OsdbOutputType: shared.ExecBodyOsdbOutputTypeEnumURLOnly.ToPointer(),
            OsdbResponseFormat: sdk.String("delectus"),
        },
        ActionID: "tempora",
        ServiceID: "suscipit",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ListActions

Returns an array of action descriptions for the actions supported by the given service

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Osdb.ListActions(ctx, operations.ListActionsRequest{
        ServiceID: "molestiae",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListActionsResponse != nil {
        // handle response
    }
}
```

## ListServices

Returns descriptions of all services registered with the OSDB server.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Osdb.ListServices(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.ListServicesResponse != nil {
        // handle response
    }
}
```

## LoadService

Loads a service description into the OSDB Service Registry

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Osdb.LoadService(ctx, operations.LoadServiceRequestBody{
        ServiceDescriptionURL: "minus",
        ServiceMoniker: sdk.String("placeat"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LoadService200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## Login

Logs a user into the OSDB server, authenticating them by their WebID and returning an OSDB session ID in cookie osdb.sid

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Osdb.Login(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.LoginResponse != nil {
        // handle response
    }
}
```

## Logout

Logs a user out of the OSDB server, ending their OSDB session

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Osdb.Logout(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.LogoutResponse != nil {
        // handle response
    }
}
```

## UnloadService

Removes a service description from the OSDB Service Registry

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Osdb.UnloadService(ctx, operations.UnloadServiceRequest{
        ServiceID: "voluptatum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UnloadService200ApplicationJSONObject != nil {
        // handle response
    }
}
```
