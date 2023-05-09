# SDK

## Overview

This is the public Twilio REST API.

### Available Operations

* [CreateCredentialList](#createcredentiallist)
* [CreateIPAccessControlList](#createipaccesscontrollist) - Associate an IP Access Control List with a Trunk
* [CreateOriginationURL](#createoriginationurl)
* [CreatePhoneNumber](#createphonenumber)
* [CreateTrunk](#createtrunk)
* [DeleteCredentialList](#deletecredentiallist)
* [DeleteIPAccessControlList](#deleteipaccesscontrollist) - Remove an associated IP Access Control List from a Trunk
* [DeleteOriginationURL](#deleteoriginationurl)
* [DeletePhoneNumber](#deletephonenumber)
* [DeleteTrunk](#deletetrunk)
* [FetchCredentialList](#fetchcredentiallist)
* [FetchIPAccessControlList](#fetchipaccesscontrollist)
* [FetchOriginationURL](#fetchoriginationurl)
* [FetchPhoneNumber](#fetchphonenumber)
* [FetchRecording](#fetchrecording)
* [FetchTrunk](#fetchtrunk)
* [ListCredentialList](#listcredentiallist)
* [ListIPAccessControlList](#listipaccesscontrollist) - List all IP Access Control Lists for a Trunk
* [ListOriginationURL](#listoriginationurl)
* [ListPhoneNumber](#listphonenumber)
* [ListTrunk](#listtrunk)
* [UpdateOriginationURL](#updateoriginationurl)
* [UpdateRecording](#updaterecording)
* [UpdateTrunk](#updatetrunk)

## CreateCredentialList

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
    res, err := s.SDK.CreateCredentialList(ctx, operations.CreateCredentialListRequest{
        RequestBody: &operations.CreateCredentialListCreateCredentialListRequest{
            CredentialListSid: "distinctio",
        },
        TrunkSid: "quibusdam",
    }, operations.CreateCredentialListSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TrunkingV1TrunkCredentialList != nil {
        // handle response
    }
}
```

## CreateIPAccessControlList

Associate an IP Access Control List with a Trunk

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
    res, err := s.SDK.CreateIPAccessControlList(ctx, operations.CreateIPAccessControlListRequest{
        RequestBody: &operations.CreateIPAccessControlListCreateIPAccessControlListRequest{
            IPAccessControlListSid: "unde",
        },
        TrunkSid: "nulla",
    }, operations.CreateIPAccessControlListSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TrunkingV1TrunkIPAccessControlList != nil {
        // handle response
    }
}
```

## CreateOriginationURL

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
    res, err := s.SDK.CreateOriginationURL(ctx, operations.CreateOriginationURLRequest{
        RequestBody: &operations.CreateOriginationURLCreateOriginationURLRequest{
            Enabled: false,
            FriendlyName: "corrupti",
            Priority: 847252,
            SipURL: "http://physical-pegboard.info",
            Weight: 437587,
        },
        TrunkSid: "magnam",
    }, operations.CreateOriginationURLSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TrunkingV1TrunkOriginationURL != nil {
        // handle response
    }
}
```

## CreatePhoneNumber

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
    res, err := s.SDK.CreatePhoneNumber(ctx, operations.CreatePhoneNumberRequest{
        RequestBody: &operations.CreatePhoneNumberCreatePhoneNumberRequest{
            PhoneNumberSid: "debitis",
        },
        TrunkSid: "ipsa",
    }, operations.CreatePhoneNumberSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TrunkingV1TrunkPhoneNumber != nil {
        // handle response
    }
}
```

## CreateTrunk

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
    res, err := s.SDK.CreateTrunk(ctx, operations.CreateTrunkCreateTrunkRequest{
        CnamLookupEnabled: sdk.Bool(false),
        DisasterRecoveryMethod: operations.CreateTrunkCreateTrunkRequestDisasterRecoveryMethodEnumDelete.ToPointer(),
        DisasterRecoveryURL: sdk.String("http://hideous-jam.net"),
        DomainName: sdk.String("placeat"),
        FriendlyName: sdk.String("voluptatum"),
        Secure: sdk.Bool(false),
        TransferCallerID: shared.TrunkEnumTransferCallerIDEnumFromTransferee.ToPointer(),
        TransferMode: shared.TrunkEnumTransferSettingEnumEnableAll.ToPointer(),
    }, operations.CreateTrunkSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TrunkingV1Trunk != nil {
        // handle response
    }
}
```

## DeleteCredentialList

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
    res, err := s.SDK.DeleteCredentialList(ctx, operations.DeleteCredentialListRequest{
        Sid: "nisi",
        TrunkSid: "recusandae",
    }, operations.DeleteCredentialListSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteIPAccessControlList

Remove an associated IP Access Control List from a Trunk

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
    res, err := s.SDK.DeleteIPAccessControlList(ctx, operations.DeleteIPAccessControlListRequest{
        Sid: "temporibus",
        TrunkSid: "ab",
    }, operations.DeleteIPAccessControlListSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteOriginationURL

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
    res, err := s.SDK.DeleteOriginationURL(ctx, operations.DeleteOriginationURLRequest{
        Sid: "quis",
        TrunkSid: "veritatis",
    }, operations.DeleteOriginationURLSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeletePhoneNumber

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
    res, err := s.SDK.DeletePhoneNumber(ctx, operations.DeletePhoneNumberRequest{
        Sid: "deserunt",
        TrunkSid: "perferendis",
    }, operations.DeletePhoneNumberSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteTrunk

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
    res, err := s.SDK.DeleteTrunk(ctx, operations.DeleteTrunkRequest{
        Sid: "ipsam",
    }, operations.DeleteTrunkSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## FetchCredentialList

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
    res, err := s.SDK.FetchCredentialList(ctx, operations.FetchCredentialListRequest{
        Sid: "repellendus",
        TrunkSid: "sapiente",
    }, operations.FetchCredentialListSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TrunkingV1TrunkCredentialList != nil {
        // handle response
    }
}
```

## FetchIPAccessControlList

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
    res, err := s.SDK.FetchIPAccessControlList(ctx, operations.FetchIPAccessControlListRequest{
        Sid: "quo",
        TrunkSid: "odit",
    }, operations.FetchIPAccessControlListSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TrunkingV1TrunkIPAccessControlList != nil {
        // handle response
    }
}
```

## FetchOriginationURL

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
    res, err := s.SDK.FetchOriginationURL(ctx, operations.FetchOriginationURLRequest{
        Sid: "at",
        TrunkSid: "at",
    }, operations.FetchOriginationURLSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TrunkingV1TrunkOriginationURL != nil {
        // handle response
    }
}
```

## FetchPhoneNumber

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
    res, err := s.SDK.FetchPhoneNumber(ctx, operations.FetchPhoneNumberRequest{
        Sid: "maiores",
        TrunkSid: "molestiae",
    }, operations.FetchPhoneNumberSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TrunkingV1TrunkPhoneNumber != nil {
        // handle response
    }
}
```

## FetchRecording

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
    res, err := s.SDK.FetchRecording(ctx, operations.FetchRecordingRequest{
        TrunkSid: "quod",
    }, operations.FetchRecordingSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TrunkingV1TrunkRecording != nil {
        // handle response
    }
}
```

## FetchTrunk

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
    res, err := s.SDK.FetchTrunk(ctx, operations.FetchTrunkRequest{
        Sid: "quod",
    }, operations.FetchTrunkSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TrunkingV1Trunk != nil {
        // handle response
    }
}
```

## ListCredentialList

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
    res, err := s.SDK.ListCredentialList(ctx, operations.ListCredentialListRequest{
        Page: sdk.Int64(461479),
        PageSize: sdk.Int64(520478),
        PageToken: sdk.String("porro"),
        TrunkSid: "dolorum",
    }, operations.ListCredentialListSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListCredentialListResponse != nil {
        // handle response
    }
}
```

## ListIPAccessControlList

List all IP Access Control Lists for a Trunk

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
    res, err := s.SDK.ListIPAccessControlList(ctx, operations.ListIPAccessControlListRequest{
        Page: sdk.Int64(118274),
        PageSize: sdk.Int64(720633),
        PageToken: sdk.String("officia"),
        TrunkSid: "occaecati",
    }, operations.ListIPAccessControlListSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListIPAccessControlListResponse != nil {
        // handle response
    }
}
```

## ListOriginationURL

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
    res, err := s.SDK.ListOriginationURL(ctx, operations.ListOriginationURLRequest{
        Page: sdk.Int64(143353),
        PageSize: sdk.Int64(537373),
        PageToken: sdk.String("hic"),
        TrunkSid: "optio",
    }, operations.ListOriginationURLSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListOriginationURLResponse != nil {
        // handle response
    }
}
```

## ListPhoneNumber

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
    res, err := s.SDK.ListPhoneNumber(ctx, operations.ListPhoneNumberRequest{
        Page: sdk.Int64(521848),
        PageSize: sdk.Int64(105907),
        PageToken: sdk.String("commodi"),
        TrunkSid: "molestiae",
    }, operations.ListPhoneNumberSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListPhoneNumberResponse != nil {
        // handle response
    }
}
```

## ListTrunk

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
    res, err := s.SDK.ListTrunk(ctx, operations.ListTrunkRequest{
        Page: sdk.Int64(264555),
        PageSize: sdk.Int64(186332),
        PageToken: sdk.String("impedit"),
    }, operations.ListTrunkSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListTrunkResponse != nil {
        // handle response
    }
}
```

## UpdateOriginationURL

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
    res, err := s.SDK.UpdateOriginationURL(ctx, operations.UpdateOriginationURLRequest{
        RequestBody: &operations.UpdateOriginationURLUpdateOriginationURLRequest{
            Enabled: sdk.Bool(false),
            FriendlyName: sdk.String("cum"),
            Priority: sdk.Int64(456150),
            SipURL: sdk.String("http://nifty-case.com"),
            Weight: sdk.Int64(324141),
        },
        Sid: "natus",
        TrunkSid: "sed",
    }, operations.UpdateOriginationURLSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TrunkingV1TrunkOriginationURL != nil {
        // handle response
    }
}
```

## UpdateRecording

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
    res, err := s.SDK.UpdateRecording(ctx, operations.UpdateRecordingRequest{
        RequestBody: &operations.UpdateRecordingUpdateRecordingRequest{
            Mode: shared.RecordingEnumRecordingModeEnumRecordFromRingingDual.ToPointer(),
            Trim: shared.RecordingEnumRecordingTrimEnumTrimSilence.ToPointer(),
        },
        TrunkSid: "natus",
    }, operations.UpdateRecordingSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TrunkingV1TrunkRecording != nil {
        // handle response
    }
}
```

## UpdateTrunk

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
    res, err := s.SDK.UpdateTrunk(ctx, operations.UpdateTrunkRequest{
        RequestBody: &operations.UpdateTrunkUpdateTrunkRequest{
            CnamLookupEnabled: sdk.Bool(false),
            DisasterRecoveryMethod: operations.UpdateTrunkUpdateTrunkRequestDisasterRecoveryMethodEnumPost.ToPointer(),
            DisasterRecoveryURL: sdk.String("https://unsteady-post.info"),
            DomainName: sdk.String("corporis"),
            FriendlyName: sdk.String("iste"),
            Secure: sdk.Bool(false),
            TransferCallerID: shared.TrunkEnumTransferCallerIDEnumFromTransferee.ToPointer(),
            TransferMode: shared.TrunkEnumTransferSettingEnumSipOnly.ToPointer(),
        },
        Sid: "quidem",
    }, operations.UpdateTrunkSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TrunkingV1Trunk != nil {
        // handle response
    }
}
```
