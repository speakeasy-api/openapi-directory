# ImagePredictionAPI

### Available Operations

* [ClassifyImage](#classifyimage) - Classify an image and saves the result.
* [ClassifyImageURLWithNoStoreForm](#classifyimageurlwithnostoreform) - Classify an image url without saving the result.
* [ClassifyImageURLWithNoStoreJSON](#classifyimageurlwithnostorejson) - Classify an image url without saving the result.
* [ClassifyImageURLWithNoStoreRaw](#classifyimageurlwithnostoreraw) - Classify an image url without saving the result.
* [ClassifyImageURLForm](#classifyimageurlform) - Classify an image url and saves the result.
* [ClassifyImageURLJSON](#classifyimageurljson) - Classify an image url and saves the result.
* [ClassifyImageURLRaw](#classifyimageurlraw) - Classify an image url and saves the result.
* [ClassifyImageWithNoStore](#classifyimagewithnostore) - Classify an image without saving the result.
* [DetectImage](#detectimage) - Detect objects in an image and saves the result.
* [DetectImageURLWithNoStoreForm](#detectimageurlwithnostoreform) - Detect objects in an image url without saving the result.
* [DetectImageURLWithNoStoreJSON](#detectimageurlwithnostorejson) - Detect objects in an image url without saving the result.
* [DetectImageURLWithNoStoreRaw](#detectimageurlwithnostoreraw) - Detect objects in an image url without saving the result.
* [DetectImageURLForm](#detectimageurlform) - Detect objects in an image url and saves the result.
* [DetectImageURLJSON](#detectimageurljson) - Detect objects in an image url and saves the result.
* [DetectImageURLRaw](#detectimageurlraw) - Detect objects in an image url and saves the result.
* [DetectImageWithNoStore](#detectimagewithnostore) - Detect objects in an image without saving the result.

## ClassifyImage

Classify an image and saves the result.

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
            ApimKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.ImagePredictionAPI.ClassifyImage(ctx, operations.ClassifyImageRequest{
        RequestBody: operations.ClassifyImageRequestBody{
            ImageData: operations.ClassifyImageRequestBodyImageData{
                Content: []byte("sapiente"),
                ImageData: "quo",
            },
        },
        Application: sdk.String("odit"),
        ProjectID: "ddf7cc78-ca1b-4a92-8fc8-16742cb73920",
        PublishedName: "ad",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ImagePrediction != nil {
        // handle response
    }
}
```

## ClassifyImageURLWithNoStoreForm

Classify an image url without saving the result.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            ApimKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.ImagePredictionAPI.ClassifyImageURLWithNoStoreForm(ctx, operations.ClassifyImageURLWithNoStoreFormRequest{
        ImageURL: shared.ImageURL{
            URL: "natus",
        },
        Application: sdk.String("sed"),
        ProjectID: "9396fea7-596e-4b10-baaa-2352c5955907",
        PublishedName: "culpa",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ImagePrediction != nil {
        // handle response
    }
}
```

## ClassifyImageURLWithNoStoreJSON

Classify an image url without saving the result.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            ApimKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.ImagePredictionAPI.ClassifyImageURLWithNoStoreJSON(ctx, operations.ClassifyImageURLWithNoStoreJSONRequest{
        ImageURL: shared.ImageURL{
            URL: "doloribus",
        },
        Application: sdk.String("sapiente"),
        ProjectID: "1a3a2fa9-4677-4392-91aa-52c3f5ad019d",
        PublishedName: "laborum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ImagePrediction != nil {
        // handle response
    }
}
```

## ClassifyImageURLWithNoStoreRaw

Classify an image url without saving the result.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            ApimKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.ImagePredictionAPI.ClassifyImageURLWithNoStoreRaw(ctx, operations.ClassifyImageURLWithNoStoreRawRequest{
        RequestBody: []byte("quasi"),
        Application: sdk.String("reiciendis"),
        ProjectID: "fe78f097-b007-44f1-9471-b5e6e13b99d4",
        PublishedName: "praesentium",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ImagePrediction != nil {
        // handle response
    }
}
```

## ClassifyImageURLForm

Classify an image url and saves the result.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            ApimKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.ImagePredictionAPI.ClassifyImageURLForm(ctx, operations.ClassifyImageURLFormRequest{
        ImageURL: shared.ImageURL{
            URL: "rem",
        },
        Application: sdk.String("voluptates"),
        ProjectID: "1e91e450-ad2a-4bd4-8269-802d502a94bb",
        PublishedName: "labore",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ImagePrediction != nil {
        // handle response
    }
}
```

## ClassifyImageURLJSON

Classify an image url and saves the result.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            ApimKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.ImagePredictionAPI.ClassifyImageURLJSON(ctx, operations.ClassifyImageURLJSONRequest{
        ImageURL: shared.ImageURL{
            URL: "delectus",
        },
        Application: sdk.String("eum"),
        ProjectID: "3c969e9a-3efa-477d-bb14-cd66ae395efb",
        PublishedName: "provident",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ImagePrediction != nil {
        // handle response
    }
}
```

## ClassifyImageURLRaw

Classify an image url and saves the result.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            ApimKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.ImagePredictionAPI.ClassifyImageURLRaw(ctx, operations.ClassifyImageURLRawRequest{
        RequestBody: []byte("nam"),
        Application: sdk.String("id"),
        ProjectID: "88f3a669-9707-44ba-8469-b6e214195989",
        PublishedName: "accusantium",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ImagePrediction != nil {
        // handle response
    }
}
```

## ClassifyImageWithNoStore

Classify an image without saving the result.

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
            ApimKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.ImagePredictionAPI.ClassifyImageWithNoStore(ctx, operations.ClassifyImageWithNoStoreRequest{
        RequestBody: operations.ClassifyImageWithNoStoreRequestBody{
            ImageData: operations.ClassifyImageWithNoStoreRequestBodyImageData{
                Content: []byte("mollitia"),
                ImageData: "reiciendis",
            },
        },
        Application: sdk.String("mollitia"),
        ProjectID: "563e2516-fe4c-48b7-91e5-b7fd2ed02892",
        PublishedName: "sunt",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ImagePrediction != nil {
        // handle response
    }
}
```

## DetectImage

Detect objects in an image and saves the result.

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
            ApimKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.ImagePredictionAPI.DetectImage(ctx, operations.DetectImageRequest{
        RequestBody: operations.DetectImageRequestBody{
            ImageData: operations.DetectImageRequestBodyImageData{
                Content: []byte("quo"),
                ImageData: "illum",
            },
        },
        Application: sdk.String("pariatur"),
        ProjectID: "c692601f-b576-4b0d-9f0d-30c5fbb25870",
        PublishedName: "quis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ImagePrediction != nil {
        // handle response
    }
}
```

## DetectImageURLWithNoStoreForm

Detect objects in an image url without saving the result.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            ApimKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.ImagePredictionAPI.DetectImageURLWithNoStoreForm(ctx, operations.DetectImageURLWithNoStoreFormRequest{
        ImageURL: shared.ImageURL{
            URL: "nesciunt",
        },
        Application: sdk.String("eos"),
        ProjectID: "02c73d5f-e9b9-40c2-8909-b3fe49a8d9cb",
        PublishedName: "delectus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ImagePrediction != nil {
        // handle response
    }
}
```

## DetectImageURLWithNoStoreJSON

Detect objects in an image url without saving the result.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            ApimKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.ImagePredictionAPI.DetectImageURLWithNoStoreJSON(ctx, operations.DetectImageURLWithNoStoreJSONRequest{
        ImageURL: shared.ImageURL{
            URL: "quaerat",
        },
        Application: sdk.String("quos"),
        ProjectID: "633323f9-b77f-43a4-9006-74ebf69280d1",
        PublishedName: "soluta",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ImagePrediction != nil {
        // handle response
    }
}
```

## DetectImageURLWithNoStoreRaw

Detect objects in an image url without saving the result.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            ApimKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.ImagePredictionAPI.DetectImageURLWithNoStoreRaw(ctx, operations.DetectImageURLWithNoStoreRawRequest{
        RequestBody: []byte("dolorum"),
        Application: sdk.String("iusto"),
        ProjectID: "7a89ebf7-37ae-4420-bce5-e6a95d8a0d44",
        PublishedName: "vel",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ImagePrediction != nil {
        // handle response
    }
}
```

## DetectImageURLForm

Detect objects in an image url and saves the result.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            ApimKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.ImagePredictionAPI.DetectImageURLForm(ctx, operations.DetectImageURLFormRequest{
        ImageURL: shared.ImageURL{
            URL: "quod",
        },
        Application: sdk.String("officiis"),
        ProjectID: "2af7a73c-f3be-4453-b870-b326b5a73429",
        PublishedName: "maxime",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ImagePrediction != nil {
        // handle response
    }
}
```

## DetectImageURLJSON

Detect objects in an image url and saves the result.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            ApimKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.ImagePredictionAPI.DetectImageURLJSON(ctx, operations.DetectImageURLJSONRequest{
        ImageURL: shared.ImageURL{
            URL: "pariatur",
        },
        Application: sdk.String("soluta"),
        ProjectID: "1a8422bb-679d-4232-a715-bf0cbb1e31b8",
        PublishedName: "tempore",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ImagePrediction != nil {
        // handle response
    }
}
```

## DetectImageURLRaw

Detect objects in an image url and saves the result.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            ApimKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.ImagePredictionAPI.DetectImageURLRaw(ctx, operations.DetectImageURLRawRequest{
        RequestBody: []byte("cupiditate"),
        Application: sdk.String("aperiam"),
        ProjectID: "f3443a11-08e0-4adc-b4b9-21879fce953f",
        PublishedName: "voluptate",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ImagePrediction != nil {
        // handle response
    }
}
```

## DetectImageWithNoStore

Detect objects in an image without saving the result.

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
            ApimKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.ImagePredictionAPI.DetectImageWithNoStore(ctx, operations.DetectImageWithNoStoreRequest{
        RequestBody: operations.DetectImageWithNoStoreRequestBody{
            ImageData: operations.DetectImageWithNoStoreRequestBodyImageData{
                Content: []byte("consectetur"),
                ImageData: "vero",
            },
        },
        Application: sdk.String("tenetur"),
        ProjectID: "7fbc7abd-74dd-439c-8f5d-2cff7c70a456",
        PublishedName: "aspernatur",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ImagePrediction != nil {
        // handle response
    }
}
```
