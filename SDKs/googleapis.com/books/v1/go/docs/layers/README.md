# Layers

### Available Operations

* [BooksLayersAnnotationDataGet](#bookslayersannotationdataget) - Gets the annotation data.
* [BooksLayersAnnotationDataList](#bookslayersannotationdatalist) - Gets the annotation data for a volume and layer.
* [BooksLayersGet](#bookslayersget) - Gets the layer summary for a volume.
* [BooksLayersList](#bookslayerslist) - List the layer summaries for a volume.
* [BooksLayersVolumeAnnotationsGet](#bookslayersvolumeannotationsget) - Gets the volume annotation.
* [BooksLayersVolumeAnnotationsList](#bookslayersvolumeannotationslist) - Gets the volume annotations for a volume and layer.

## BooksLayersAnnotationDataGet

Gets the annotation data.

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
    res, err := s.Layers.BooksLayersAnnotationDataGet(ctx, operations.BooksLayersAnnotationDataGetRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("ipsa"),
        AllowWebDefinitions: sdk.Bool(false),
        Alt: shared.AltEnumMedia.ToPointer(),
        AnnotationDataID: "voluptate",
        Callback: sdk.String("cum"),
        ContentVersion: "perferendis",
        Fields: sdk.String("doloremque"),
        H: sdk.Int64(441711),
        Key: sdk.String("ut"),
        LayerID: "maiores",
        Locale: sdk.String("dicta"),
        OauthToken: sdk.String("corporis"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("dolore"),
        Scale: sdk.Int64(480894),
        Source: sdk.String("dicta"),
        UploadType: sdk.String("harum"),
        UploadProtocol: sdk.String("enim"),
        VolumeID: "accusamus",
        W: sdk.Int64(414263),
    }, operations.BooksLayersAnnotationDataGetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DictionaryAnnotationdata != nil {
        // handle response
    }
}
```

## BooksLayersAnnotationDataList

Gets the annotation data for a volume and layer.

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
    res, err := s.Layers.BooksLayersAnnotationDataList(ctx, operations.BooksLayersAnnotationDataListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("quae"),
        Alt: shared.AltEnumJSON.ToPointer(),
        AnnotationDataID: []string{
            "molestias",
            "excepturi",
            "pariatur",
        },
        Callback: sdk.String("modi"),
        ContentVersion: "praesentium",
        Fields: sdk.String("rem"),
        H: sdk.Int64(916723),
        Key: sdk.String("quasi"),
        LayerID: "repudiandae",
        Locale: sdk.String("sint"),
        MaxResults: sdk.Int64(83112),
        OauthToken: sdk.String("itaque"),
        PageToken: sdk.String("incidunt"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("enim"),
        Scale: sdk.Int64(9356),
        Source: sdk.String("est"),
        UpdatedMax: sdk.String("quibusdam"),
        UpdatedMin: sdk.String("explicabo"),
        UploadType: sdk.String("deserunt"),
        UploadProtocol: sdk.String("distinctio"),
        VolumeID: "quibusdam",
        W: sdk.Int64(289406),
    }, operations.BooksLayersAnnotationDataListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Annotationsdata != nil {
        // handle response
    }
}
```

## BooksLayersGet

Gets the layer summary for a volume.

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
    res, err := s.Layers.BooksLayersGet(ctx, operations.BooksLayersGetRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("qui"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("cupiditate"),
        ContentVersion: sdk.String("quos"),
        Fields: sdk.String("perferendis"),
        Key: sdk.String("magni"),
        OauthToken: sdk.String("assumenda"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("ipsam"),
        Source: sdk.String("alias"),
        SummaryID: "fugit",
        UploadType: sdk.String("dolorum"),
        UploadProtocol: sdk.String("excepturi"),
        VolumeID: "tempora",
    }, operations.BooksLayersGetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Layersummary != nil {
        // handle response
    }
}
```

## BooksLayersList

List the layer summaries for a volume.

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
    res, err := s.Layers.BooksLayersList(ctx, operations.BooksLayersListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("tempore"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("delectus"),
        ContentVersion: sdk.String("eum"),
        Fields: sdk.String("non"),
        Key: sdk.String("eligendi"),
        MaxResults: sdk.Int64(576157),
        OauthToken: sdk.String("aliquid"),
        PageToken: sdk.String("provident"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("necessitatibus"),
        Source: sdk.String("sint"),
        UploadType: sdk.String("officia"),
        UploadProtocol: sdk.String("dolor"),
        VolumeID: "debitis",
    }, operations.BooksLayersListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Layersummaries != nil {
        // handle response
    }
}
```

## BooksLayersVolumeAnnotationsGet

Gets the volume annotation.

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
    res, err := s.Layers.BooksLayersVolumeAnnotationsGet(ctx, operations.BooksLayersVolumeAnnotationsGetRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("dolorum"),
        Alt: shared.AltEnumMedia.ToPointer(),
        AnnotationID: "in",
        Callback: sdk.String("illum"),
        Fields: sdk.String("maiores"),
        Key: sdk.String("rerum"),
        LayerID: "dicta",
        Locale: sdk.String("magnam"),
        OauthToken: sdk.String("cumque"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("facere"),
        Source: sdk.String("ea"),
        UploadType: sdk.String("aliquid"),
        UploadProtocol: sdk.String("laborum"),
        VolumeID: "accusamus",
    }, operations.BooksLayersVolumeAnnotationsGetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Volumeannotation != nil {
        // handle response
    }
}
```

## BooksLayersVolumeAnnotationsList

Gets the volume annotations for a volume and layer.

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
    res, err := s.Layers.BooksLayersVolumeAnnotationsList(ctx, operations.BooksLayersVolumeAnnotationsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("occaecati"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("accusamus"),
        ContentVersion: "delectus",
        EndOffset: sdk.String("quidem"),
        EndPosition: sdk.String("provident"),
        Fields: sdk.String("nam"),
        Key: sdk.String("id"),
        LayerID: "blanditiis",
        Locale: sdk.String("deleniti"),
        MaxResults: sdk.Int64(956084),
        OauthToken: sdk.String("amet"),
        PageToken: sdk.String("deserunt"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("nisi"),
        ShowDeleted: sdk.Bool(false),
        Source: sdk.String("vel"),
        StartOffset: sdk.String("natus"),
        StartPosition: sdk.String("omnis"),
        UpdatedMax: sdk.String("molestiae"),
        UpdatedMin: sdk.String("perferendis"),
        UploadType: sdk.String("nihil"),
        UploadProtocol: sdk.String("magnam"),
        VolumeAnnotationsVersion: sdk.String("distinctio"),
        VolumeID: "id",
    }, operations.BooksLayersVolumeAnnotationsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Volumeannotations != nil {
        // handle response
    }
}
```
