# Locations

### Available Operations

* [MybusinessbusinessinformationLocationsAssociate](#mybusinessbusinessinformationlocationsassociate) - Associates a location to a place ID. Any previous association is overwritten. This operation is only valid if the location is unverified. The association must be valid, that is, it appears in the list of `SearchGoogleLocations`.
* [MybusinessbusinessinformationLocationsAttributesGetGoogleUpdated](#mybusinessbusinessinformationlocationsattributesgetgoogleupdated) - Gets the Google-updated version of the specified location.
* [MybusinessbusinessinformationLocationsClearLocationAssociation](#mybusinessbusinessinformationlocationsclearlocationassociation) - Clears an association between a location and its place ID. This operation is only valid if the location is unverified.
* [MybusinessbusinessinformationLocationsDelete](#mybusinessbusinessinformationlocationsdelete) - Deletes a location. If this location cannot be deleted using the API and it is marked so in the `google.mybusiness.businessinformation.v1.LocationState`, use the [Google Business Profile](https://business.google.com/manage/) website.
* [MybusinessbusinessinformationLocationsGetAttributes](#mybusinessbusinessinformationlocationsgetattributes) - Looks up all the attributes set for a given location.
* [MybusinessbusinessinformationLocationsUpdateAttributes](#mybusinessbusinessinformationlocationsupdateattributes) - Update attributes for a given location.

## MybusinessbusinessinformationLocationsAssociate

Associates a location to a place ID. Any previous association is overwritten. This operation is only valid if the location is unverified. The association must be valid, that is, it appears in the list of `SearchGoogleLocations`.

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
    res, err := s.Locations.MybusinessbusinessinformationLocationsAssociate(ctx, operations.MybusinessbusinessinformationLocationsAssociateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AssociateLocationRequest: &shared.AssociateLocationRequest{
            PlaceID: sdk.String("officia"),
        },
        AccessToken: sdk.String("asperiores"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("quae"),
        Fields: sdk.String("quaerat"),
        Key: sdk.String("porro"),
        Name: "Francisco Bernier",
        OauthToken: sdk.String("id"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("suscipit"),
        UploadType: sdk.String("velit"),
        UploadProtocol: sdk.String("culpa"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Empty != nil {
        // handle response
    }
}
```

## MybusinessbusinessinformationLocationsAttributesGetGoogleUpdated

Gets the Google-updated version of the specified location.

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
    res, err := s.Locations.MybusinessbusinessinformationLocationsAttributesGetGoogleUpdated(ctx, operations.MybusinessbusinessinformationLocationsAttributesGetGoogleUpdatedRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("recusandae"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("fugiat"),
        Fields: sdk.String("vel"),
        Key: sdk.String("ducimus"),
        Name: "Cecil Grant",
        OauthToken: sdk.String("cum"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("commodi"),
        ReadMask: sdk.String("in"),
        UploadType: sdk.String("corporis"),
        UploadProtocol: sdk.String("reiciendis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Attributes != nil {
        // handle response
    }
}
```

## MybusinessbusinessinformationLocationsClearLocationAssociation

Clears an association between a location and its place ID. This operation is only valid if the location is unverified.

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
    res, err := s.Locations.MybusinessbusinessinformationLocationsClearLocationAssociation(ctx, operations.MybusinessbusinessinformationLocationsClearLocationAssociationRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        RequestBody: map[string]interface{}{
            "recusandae": "aliquid",
            "aperiam": "cum",
        },
        AccessToken: sdk.String("consectetur"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("exercitationem"),
        Fields: sdk.String("earum"),
        Key: sdk.String("facere"),
        Name: "Melba Homenick",
        OauthToken: sdk.String("saepe"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("necessitatibus"),
        UploadType: sdk.String("dolore"),
        UploadProtocol: sdk.String("sunt"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Empty != nil {
        // handle response
    }
}
```

## MybusinessbusinessinformationLocationsDelete

Deletes a location. If this location cannot be deleted using the API and it is marked so in the `google.mybusiness.businessinformation.v1.LocationState`, use the [Google Business Profile](https://business.google.com/manage/) website.

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
    res, err := s.Locations.MybusinessbusinessinformationLocationsDelete(ctx, operations.MybusinessbusinessinformationLocationsDeleteRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("adipisci"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("amet"),
        Fields: sdk.String("beatae"),
        Key: sdk.String("dignissimos"),
        Name: "Doyle Feest",
        OauthToken: sdk.String("laboriosam"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("ipsa"),
        UploadType: sdk.String("voluptates"),
        UploadProtocol: sdk.String("libero"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Empty != nil {
        // handle response
    }
}
```

## MybusinessbusinessinformationLocationsGetAttributes

Looks up all the attributes set for a given location.

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
    res, err := s.Locations.MybusinessbusinessinformationLocationsGetAttributes(ctx, operations.MybusinessbusinessinformationLocationsGetAttributesRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("accusamus"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("tempora"),
        Fields: sdk.String("aspernatur"),
        Key: sdk.String("voluptas"),
        Name: "Melanie Hane",
        OauthToken: sdk.String("adipisci"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("minus"),
        UploadType: sdk.String("dolores"),
        UploadProtocol: sdk.String("blanditiis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Attributes != nil {
        // handle response
    }
}
```

## MybusinessbusinessinformationLocationsUpdateAttributes

Update attributes for a given location.

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
    res, err := s.Locations.MybusinessbusinessinformationLocationsUpdateAttributes(ctx, operations.MybusinessbusinessinformationLocationsUpdateAttributesRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AttributesInput: &shared.AttributesInput{
            Attributes: []shared.AttributeInput{
                shared.AttributeInput{
                    Name: sdk.String("Rochelle Smitham"),
                    RepeatedEnumValue: &shared.RepeatedEnumAttributeValue{
                        SetValues: []string{
                            "blanditiis",
                            "quas",
                            "hic",
                        },
                        UnsetValues: []string{
                            "culpa",
                        },
                    },
                    URIValues: []shared.URIAttributeValue{
                        shared.URIAttributeValue{
                            URI: sdk.String("https://mature-underneath.info"),
                        },
                        shared.URIAttributeValue{
                            URI: sdk.String("https://alarming-propaganda.com"),
                        },
                        shared.URIAttributeValue{
                            URI: sdk.String("https://compassionate-yang.net"),
                        },
                    },
                    Values: []interface{}{
                        "expedita",
                        "ab",
                    },
                },
                shared.AttributeInput{
                    Name: sdk.String("Micheal Osinski"),
                    RepeatedEnumValue: &shared.RepeatedEnumAttributeValue{
                        SetValues: []string{
                            "quidem",
                            "explicabo",
                        },
                        UnsetValues: []string{
                            "unde",
                            "architecto",
                        },
                    },
                    URIValues: []shared.URIAttributeValue{
                        shared.URIAttributeValue{
                            URI: sdk.String("https://unlawful-beach.org"),
                        },
                        shared.URIAttributeValue{
                            URI: sdk.String("http://motionless-whisker.biz"),
                        },
                    },
                    Values: []interface{}{
                        "provident",
                    },
                },
            },
            Name: sdk.String("Jana Emard"),
        },
        AccessToken: sdk.String("quos"),
        Alt: shared.AltEnumProto.ToPointer(),
        AttributeMask: sdk.String("tempora"),
        Callback: sdk.String("tempora"),
        Fields: sdk.String("voluptate"),
        Key: sdk.String("reiciendis"),
        Name: "Karen Franey",
        OauthToken: sdk.String("facilis"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quaerat"),
        UploadType: sdk.String("incidunt"),
        UploadProtocol: sdk.String("ipsam"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Attributes != nil {
        // handle response
    }
}
```
