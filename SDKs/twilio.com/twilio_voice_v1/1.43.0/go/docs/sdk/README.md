# SDK

## Overview

This is the public Twilio REST API.

### Available Operations

* [CreateByocTrunk](#createbyoctrunk)
* [CreateConnectionPolicy](#createconnectionpolicy)
* [CreateConnectionPolicyTarget](#createconnectionpolicytarget)
* [CreateDialingPermissionsCountryBulkUpdate](#createdialingpermissionscountrybulkupdate) - Create a bulk update request to change voice dialing country permissions of one or more countries identified by the corresponding [ISO country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)
* [CreateIPRecord](#createiprecord)
* [CreateSourceIPMapping](#createsourceipmapping)
* [DeleteArchivedCall](#deletearchivedcall) - Delete an archived call record from Bulk Export. Note: this does not also delete the record from the Voice API.
* [DeleteByocTrunk](#deletebyoctrunk)
* [DeleteConnectionPolicy](#deleteconnectionpolicy)
* [DeleteConnectionPolicyTarget](#deleteconnectionpolicytarget)
* [DeleteIPRecord](#deleteiprecord)
* [DeleteSourceIPMapping](#deletesourceipmapping)
* [FetchByocTrunk](#fetchbyoctrunk)
* [FetchConnectionPolicy](#fetchconnectionpolicy)
* [FetchConnectionPolicyTarget](#fetchconnectionpolicytarget)
* [FetchDialingPermissionsCountry](#fetchdialingpermissionscountry) - Retrieve voice dialing country permissions identified by the given ISO country code
* [FetchDialingPermissionsSettings](#fetchdialingpermissionssettings) - Retrieve voice dialing permissions inheritance for the sub-account
* [FetchIPRecord](#fetchiprecord)
* [FetchSourceIPMapping](#fetchsourceipmapping)
* [ListByocTrunk](#listbyoctrunk)
* [ListConnectionPolicy](#listconnectionpolicy)
* [ListConnectionPolicyTarget](#listconnectionpolicytarget)
* [ListDialingPermissionsCountry](#listdialingpermissionscountry) - Retrieve all voice dialing country permissions for this account
* [ListDialingPermissionsHrsPrefixes](#listdialingpermissionshrsprefixes) - Fetch the high-risk special services prefixes from the country resource corresponding to the [ISO country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)
* [ListIPRecord](#listiprecord)
* [ListSourceIPMapping](#listsourceipmapping)
* [UpdateByocTrunk](#updatebyoctrunk)
* [UpdateConnectionPolicy](#updateconnectionpolicy)
* [UpdateConnectionPolicyTarget](#updateconnectionpolicytarget)
* [UpdateDialingPermissionsSettings](#updatedialingpermissionssettings) - Update voice dialing permissions inheritance for the sub-account
* [UpdateIPRecord](#updateiprecord)
* [UpdateSourceIPMapping](#updatesourceipmapping)

## CreateByocTrunk

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
    res, err := s.SDK.CreateByocTrunk(ctx, operations.CreateByocTrunkCreateByocTrunkRequest{
        CnamLookupEnabled: sdk.Bool(false),
        ConnectionPolicySid: sdk.String("suscipit"),
        FriendlyName: sdk.String("molestiae"),
        FromDomainSid: sdk.String("minus"),
        StatusCallbackMethod: operations.CreateByocTrunkCreateByocTrunkRequestStatusCallbackMethodEnumPut.ToPointer(),
        StatusCallbackURL: sdk.String("https://lawful-missionary.info"),
        VoiceFallbackMethod: operations.CreateByocTrunkCreateByocTrunkRequestVoiceFallbackMethodEnumDelete.ToPointer(),
        VoiceFallbackURL: sdk.String("https://bite-sized-favorite.com"),
        VoiceMethod: operations.CreateByocTrunkCreateByocTrunkRequestVoiceMethodEnumPatch.ToPointer(),
        VoiceURL: sdk.String("http://happy-spear.org"),
    }, operations.CreateByocTrunkSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.VoiceV1ByocTrunk != nil {
        // handle response
    }
}
```

## CreateConnectionPolicy

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
    res, err := s.SDK.CreateConnectionPolicy(ctx, operations.CreateConnectionPolicyCreateConnectionPolicyRequest{
        FriendlyName: sdk.String("quo"),
    }, operations.CreateConnectionPolicySecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.VoiceV1ConnectionPolicy != nil {
        // handle response
    }
}
```

## CreateConnectionPolicyTarget

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
    res, err := s.SDK.CreateConnectionPolicyTarget(ctx, operations.CreateConnectionPolicyTargetRequest{
        ConnectionPolicySid: "odit",
        RequestBody: &operations.CreateConnectionPolicyTargetCreateConnectionPolicyTargetRequest{
            Enabled: sdk.Bool(false),
            FriendlyName: sdk.String("at"),
            Priority: sdk.Int64(870088),
            Target: "https://kosher-shoestring.net",
            Weight: sdk.Int64(461479),
        },
    }, operations.CreateConnectionPolicyTargetSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.VoiceV1ConnectionPolicyConnectionPolicyTarget != nil {
        // handle response
    }
}
```

## CreateDialingPermissionsCountryBulkUpdate

Create a bulk update request to change voice dialing country permissions of one or more countries identified by the corresponding [ISO country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)

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
    res, err := s.SDK.CreateDialingPermissionsCountryBulkUpdate(ctx, operations.CreateDialingPermissionsCountryBulkUpdateCreateDialingPermissionsCountryBulkUpdateRequest{
        UpdateRequest: "totam",
    }, operations.CreateDialingPermissionsCountryBulkUpdateSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.VoiceV1DialingPermissionsDialingPermissionsCountryBulkUpdate != nil {
        // handle response
    }
}
```

## CreateIPRecord

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
    res, err := s.SDK.CreateIPRecord(ctx, operations.CreateIPRecordCreateIPRecordRequest{
        CidrPrefixLength: sdk.Int64(780529),
        FriendlyName: sdk.String("dolorum"),
        IPAddress: "dicta",
    }, operations.CreateIPRecordSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.VoiceV1IPRecord != nil {
        // handle response
    }
}
```

## CreateSourceIPMapping

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
    res, err := s.SDK.CreateSourceIPMapping(ctx, operations.CreateSourceIPMappingCreateSourceIPMappingRequest{
        IPRecordSid: "nam",
        SipDomainSid: "officia",
    }, operations.CreateSourceIPMappingSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.VoiceV1SourceIPMapping != nil {
        // handle response
    }
}
```

## DeleteArchivedCall

Delete an archived call record from Bulk Export. Note: this does not also delete the record from the Voice API.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.DeleteArchivedCall(ctx, operations.DeleteArchivedCallRequest{
        Date: types.MustDateFromString("2022-09-18"),
        Sid: "deleniti",
    }, operations.DeleteArchivedCallSecurity{
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

## DeleteByocTrunk

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
    res, err := s.SDK.DeleteByocTrunk(ctx, operations.DeleteByocTrunkRequest{
        Sid: "hic",
    }, operations.DeleteByocTrunkSecurity{
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

## DeleteConnectionPolicy

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
    res, err := s.SDK.DeleteConnectionPolicy(ctx, operations.DeleteConnectionPolicyRequest{
        Sid: "optio",
    }, operations.DeleteConnectionPolicySecurity{
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

## DeleteConnectionPolicyTarget

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
    res, err := s.SDK.DeleteConnectionPolicyTarget(ctx, operations.DeleteConnectionPolicyTargetRequest{
        ConnectionPolicySid: "totam",
        Sid: "beatae",
    }, operations.DeleteConnectionPolicyTargetSecurity{
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

## DeleteIPRecord

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
    res, err := s.SDK.DeleteIPRecord(ctx, operations.DeleteIPRecordRequest{
        Sid: "commodi",
    }, operations.DeleteIPRecordSecurity{
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

## DeleteSourceIPMapping

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
    res, err := s.SDK.DeleteSourceIPMapping(ctx, operations.DeleteSourceIPMappingRequest{
        Sid: "molestiae",
    }, operations.DeleteSourceIPMappingSecurity{
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

## FetchByocTrunk

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
    res, err := s.SDK.FetchByocTrunk(ctx, operations.FetchByocTrunkRequest{
        Sid: "modi",
    }, operations.FetchByocTrunkSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.VoiceV1ByocTrunk != nil {
        // handle response
    }
}
```

## FetchConnectionPolicy

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
    res, err := s.SDK.FetchConnectionPolicy(ctx, operations.FetchConnectionPolicyRequest{
        Sid: "qui",
    }, operations.FetchConnectionPolicySecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.VoiceV1ConnectionPolicy != nil {
        // handle response
    }
}
```

## FetchConnectionPolicyTarget

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
    res, err := s.SDK.FetchConnectionPolicyTarget(ctx, operations.FetchConnectionPolicyTargetRequest{
        ConnectionPolicySid: "impedit",
        Sid: "cum",
    }, operations.FetchConnectionPolicyTargetSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.VoiceV1ConnectionPolicyConnectionPolicyTarget != nil {
        // handle response
    }
}
```

## FetchDialingPermissionsCountry

Retrieve voice dialing country permissions identified by the given ISO country code

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
    res, err := s.SDK.FetchDialingPermissionsCountry(ctx, operations.FetchDialingPermissionsCountryRequest{
        IsoCode: "esse",
    }, operations.FetchDialingPermissionsCountrySecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.VoiceV1DialingPermissionsDialingPermissionsCountryInstance != nil {
        // handle response
    }
}
```

## FetchDialingPermissionsSettings

Retrieve voice dialing permissions inheritance for the sub-account

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
    res, err := s.SDK.FetchDialingPermissionsSettings(ctx, operations.FetchDialingPermissionsSettingsSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.VoiceV1DialingPermissionsDialingPermissionsSettings != nil {
        // handle response
    }
}
```

## FetchIPRecord

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
    res, err := s.SDK.FetchIPRecord(ctx, operations.FetchIPRecordRequest{
        Sid: "ipsum",
    }, operations.FetchIPRecordSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.VoiceV1IPRecord != nil {
        // handle response
    }
}
```

## FetchSourceIPMapping

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
    res, err := s.SDK.FetchSourceIPMapping(ctx, operations.FetchSourceIPMappingRequest{
        Sid: "excepturi",
    }, operations.FetchSourceIPMappingSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.VoiceV1SourceIPMapping != nil {
        // handle response
    }
}
```

## ListByocTrunk

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
    res, err := s.SDK.ListByocTrunk(ctx, operations.ListByocTrunkRequest{
        Page: sdk.Int64(135218),
        PageSize: sdk.Int64(18789),
        PageToken: sdk.String("ad"),
    }, operations.ListByocTrunkSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListByocTrunkResponse != nil {
        // handle response
    }
}
```

## ListConnectionPolicy

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
    res, err := s.SDK.ListConnectionPolicy(ctx, operations.ListConnectionPolicyRequest{
        Page: sdk.Int64(617636),
        PageSize: sdk.Int64(149675),
        PageToken: sdk.String("iste"),
    }, operations.ListConnectionPolicySecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListConnectionPolicyResponse != nil {
        // handle response
    }
}
```

## ListConnectionPolicyTarget

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
    res, err := s.SDK.ListConnectionPolicyTarget(ctx, operations.ListConnectionPolicyTargetRequest{
        ConnectionPolicySid: "dolor",
        Page: sdk.Int64(616934),
        PageSize: sdk.Int64(386489),
        PageToken: sdk.String("hic"),
    }, operations.ListConnectionPolicyTargetSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListConnectionPolicyTargetResponse != nil {
        // handle response
    }
}
```

## ListDialingPermissionsCountry

Retrieve all voice dialing country permissions for this account

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
    res, err := s.SDK.ListDialingPermissionsCountry(ctx, operations.ListDialingPermissionsCountryRequest{
        Continent: sdk.String("saepe"),
        CountryCode: sdk.String("NU"),
        HighRiskSpecialNumbersEnabled: sdk.Bool(false),
        HighRiskTollfraudNumbersEnabled: sdk.Bool(false),
        IsoCode: sdk.String("in"),
        LowRiskNumbersEnabled: sdk.Bool(false),
        Page: sdk.Int64(359508),
        PageSize: sdk.Int64(613064),
        PageToken: sdk.String("iure"),
    }, operations.ListDialingPermissionsCountrySecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListDialingPermissionsCountryResponse != nil {
        // handle response
    }
}
```

## ListDialingPermissionsHrsPrefixes

Fetch the high-risk special services prefixes from the country resource corresponding to the [ISO country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)

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
    res, err := s.SDK.ListDialingPermissionsHrsPrefixes(ctx, operations.ListDialingPermissionsHrsPrefixesRequest{
        IsoCode: "saepe",
        Page: sdk.Int64(697631),
        PageSize: sdk.Int64(99280),
        PageToken: sdk.String("ipsa"),
    }, operations.ListDialingPermissionsHrsPrefixesSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListDialingPermissionsHrsPrefixesResponse != nil {
        // handle response
    }
}
```

## ListIPRecord

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
    res, err := s.SDK.ListIPRecord(ctx, operations.ListIPRecordRequest{
        Page: sdk.Int64(969810),
        PageSize: sdk.Int64(666767),
        PageToken: sdk.String("mollitia"),
    }, operations.ListIPRecordSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListIPRecordResponse != nil {
        // handle response
    }
}
```

## ListSourceIPMapping

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
    res, err := s.SDK.ListSourceIPMapping(ctx, operations.ListSourceIPMappingRequest{
        Page: sdk.Int64(670638),
        PageSize: sdk.Int64(170909),
        PageToken: sdk.String("dolorem"),
    }, operations.ListSourceIPMappingSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListSourceIPMappingResponse != nil {
        // handle response
    }
}
```

## UpdateByocTrunk

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
    res, err := s.SDK.UpdateByocTrunk(ctx, operations.UpdateByocTrunkRequest{
        RequestBody: &operations.UpdateByocTrunkUpdateByocTrunkRequest{
            CnamLookupEnabled: sdk.Bool(false),
            ConnectionPolicySid: sdk.String("corporis"),
            FriendlyName: sdk.String("explicabo"),
            FromDomainSid: sdk.String("nobis"),
            StatusCallbackMethod: operations.UpdateByocTrunkUpdateByocTrunkRequestStatusCallbackMethodEnumGet.ToPointer(),
            StatusCallbackURL: sdk.String("https://gummy-expedition.name"),
            VoiceFallbackMethod: operations.UpdateByocTrunkUpdateByocTrunkRequestVoiceFallbackMethodEnumHead.ToPointer(),
            VoiceFallbackURL: sdk.String("http://political-woodwind.org"),
            VoiceMethod: operations.UpdateByocTrunkUpdateByocTrunkRequestVoiceMethodEnumHead.ToPointer(),
            VoiceURL: sdk.String("https://dizzy-part.com"),
        },
        Sid: "repellat",
    }, operations.UpdateByocTrunkSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.VoiceV1ByocTrunk != nil {
        // handle response
    }
}
```

## UpdateConnectionPolicy

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
    res, err := s.SDK.UpdateConnectionPolicy(ctx, operations.UpdateConnectionPolicyRequest{
        RequestBody: &operations.UpdateConnectionPolicyUpdateConnectionPolicyRequest{
            FriendlyName: sdk.String("mollitia"),
        },
        Sid: "occaecati",
    }, operations.UpdateConnectionPolicySecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.VoiceV1ConnectionPolicy != nil {
        // handle response
    }
}
```

## UpdateConnectionPolicyTarget

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
    res, err := s.SDK.UpdateConnectionPolicyTarget(ctx, operations.UpdateConnectionPolicyTargetRequest{
        ConnectionPolicySid: "numquam",
        RequestBody: &operations.UpdateConnectionPolicyTargetUpdateConnectionPolicyTargetRequest{
            Enabled: sdk.Bool(false),
            FriendlyName: sdk.String("commodi"),
            Priority: sdk.Int64(466311),
            Target: sdk.String("http://even-ox.com"),
            Weight: sdk.Int64(338007),
        },
        Sid: "vitae",
    }, operations.UpdateConnectionPolicyTargetSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.VoiceV1ConnectionPolicyConnectionPolicyTarget != nil {
        // handle response
    }
}
```

## UpdateDialingPermissionsSettings

Update voice dialing permissions inheritance for the sub-account

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
    res, err := s.SDK.UpdateDialingPermissionsSettings(ctx, operations.UpdateDialingPermissionsSettingsUpdateDialingPermissionsSettingsRequest{
        DialingPermissionsInheritance: sdk.Bool(false),
    }, operations.UpdateDialingPermissionsSettingsSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.VoiceV1DialingPermissionsDialingPermissionsSettings != nil {
        // handle response
    }
}
```

## UpdateIPRecord

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
    res, err := s.SDK.UpdateIPRecord(ctx, operations.UpdateIPRecordRequest{
        RequestBody: &operations.UpdateIPRecordUpdateIPRecordRequest{
            FriendlyName: sdk.String("laborum"),
        },
        Sid: "animi",
    }, operations.UpdateIPRecordSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.VoiceV1IPRecord != nil {
        // handle response
    }
}
```

## UpdateSourceIPMapping

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
    res, err := s.SDK.UpdateSourceIPMapping(ctx, operations.UpdateSourceIPMappingRequest{
        RequestBody: &operations.UpdateSourceIPMappingUpdateSourceIPMappingRequest{
            SipDomainSid: "enim",
        },
        Sid: "odit",
    }, operations.UpdateSourceIPMappingSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.VoiceV1SourceIPMapping != nil {
        // handle response
    }
}
```
