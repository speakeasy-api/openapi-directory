# ImageAPI

### Available Operations

* [CreateImagesFromData](#createimagesfromdata) - Add the provided images to the set of training images
* [CreateImagesFromFilesForm](#createimagesfromfilesform) - Add the provided batch of images to the set of training images
* [CreateImagesFromFilesJSON](#createimagesfromfilesjson) - Add the provided batch of images to the set of training images
* [CreateImagesFromFilesRaw](#createimagesfromfilesraw) - Add the provided batch of images to the set of training images
* [CreateImagesFromPredictionsForm](#createimagesfrompredictionsform) - Add the specified predicted images to the set of training images
* [CreateImagesFromPredictionsJSON](#createimagesfrompredictionsjson) - Add the specified predicted images to the set of training images
* [CreateImagesFromPredictionsRaw](#createimagesfrompredictionsraw) - Add the specified predicted images to the set of training images
* [CreateImagesFromUrlsForm](#createimagesfromurlsform) - Add the provided images urls to the set of training images
* [CreateImagesFromUrlsJSON](#createimagesfromurlsjson) - Add the provided images urls to the set of training images
* [CreateImagesFromUrlsRaw](#createimagesfromurlsraw) - Add the provided images urls to the set of training images
* [DeleteImageTags](#deleteimagetags) - Remove a set of tags from a set of images
* [DeleteImages](#deleteimages) - Delete images from the set of training images
* [GetTaggedImages](#gettaggedimages) - Get tagged images for a given project iteration
* [GetUntaggedImages](#getuntaggedimages) - Get untagged images for a given project iteration
* [PostImageTagsForm](#postimagetagsform) - Associate a set of images with a set of tags
* [PostImageTagsJSON](#postimagetagsjson) - Associate a set of images with a set of tags
* [PostImageTagsRaw](#postimagetagsraw) - Associate a set of images with a set of tags

## CreateImagesFromData

This API accepts body content as multipart/form-data and application/octet-stream. When using multipart
multiple image files can be sent at once, with a maximum of 64 files

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
    res, err := s.ImageAPI.CreateImagesFromData(ctx, operations.CreateImagesFromDataRequest{
        RequestBody: operations.CreateImagesFromDataRequestBody{
            ImageData: operations.CreateImagesFromDataRequestBodyImageData{
                Content: []byte("sapiente"),
                ImageData: "quo",
            },
        },
        TrainingKey: "odit",
        ProjectID: "ddf7cc78-ca1b-4a92-8fc8-16742cb73920",
        TagIds: []string{
            "natus",
            "sed",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ImageCreateSummary != nil {
        // handle response
    }
}
```

## CreateImagesFromFilesForm

Add the provided batch of images to the set of training images

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
    res, err := s.ImageAPI.CreateImagesFromFilesForm(ctx, operations.CreateImagesFromFilesFormRequest{
        ImageFileCreateBatch: shared.ImageFileCreateBatch{
            Images: []shared.ImageFileCreateEntry{
                shared.ImageFileCreateEntry{
                    Contents: sdk.String("dolor"),
                    Name: sdk.String("Lester Welch"),
                    TagIds: []string{
                        "596eb10f-aaa2-4352-8595-5907aff1a3a2",
                        "fa946773-9251-4aa5-ac3f-5ad019da1ffe",
                    },
                },
                shared.ImageFileCreateEntry{
                    Contents: sdk.String("nihil"),
                    Name: sdk.String("Jan Bednar"),
                    TagIds: []string{
                        "0074f154-71b5-4e6e-93b9-9d488e1e91e4",
                        "50ad2abd-4426-4980-ad50-2a94bb4f63c9",
                        "69e9a3ef-a77d-4fb1-8cd6-6ae395efb9ba",
                    },
                },
                shared.ImageFileCreateEntry{
                    Contents: sdk.String("blanditiis"),
                    Name: sdk.String("Timmy Feeney"),
                    TagIds: []string{
                        "997074ba-4469-4b6e-a141-959890afa563",
                        "e2516fe4-c8b7-411e-9b7f-d2ed028921cd",
                    },
                },
            },
            TagIds: []string{
                "c692601f-b576-4b0d-9f0d-30c5fbb25870",
                "53202c73-d5fe-49b9-8c28-909b3fe49a8d",
                "9cbf4863-3323-4f9b-b7f3-a4100674ebf6",
                "9280d1ba-77a8-49eb-b737-ae4203ce5e6a",
            },
        },
        TrainingKey: "provident",
        ProjectID: "5d8a0d44-6ce2-4af7-a73c-f3be453f870b",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ImageCreateSummary != nil {
        // handle response
    }
}
```

## CreateImagesFromFilesJSON

Add the provided batch of images to the set of training images

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
    res, err := s.ImageAPI.CreateImagesFromFilesJSON(ctx, operations.CreateImagesFromFilesJSONRequest{
        ImageFileCreateBatch: shared.ImageFileCreateBatch{
            Images: []shared.ImageFileCreateEntry{
                shared.ImageFileCreateEntry{
                    Contents: sdk.String("sed"),
                    Name: sdk.String("Kelli Hintz"),
                    TagIds: []string{
                        "429cdb1a-8422-4bb6-b9d2-322715bf0cbb",
                    },
                },
            },
            TagIds: []string{
                "e31b8b90-f344-43a1-908e-0adcf4b92187",
            },
        },
        TrainingKey: "occaecati",
        ProjectID: "fce953f7-3ef7-4fbc-babd-74dd39c0f5d2",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ImageCreateSummary != nil {
        // handle response
    }
}
```

## CreateImagesFromFilesRaw

Add the provided batch of images to the set of training images

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
    res, err := s.ImageAPI.CreateImagesFromFilesRaw(ctx, operations.CreateImagesFromFilesRawRequest{
        RequestBody: []byte("porro"),
        TrainingKey: "maiores",
        ProjectID: "f7c70a45-626d-4436-813f-16d9f5fce6c5",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ImageCreateSummary != nil {
        // handle response
    }
}
```

## CreateImagesFromPredictionsForm

Add the specified predicted images to the set of training images

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
    res, err := s.ImageAPI.CreateImagesFromPredictionsForm(ctx, operations.CreateImagesFromPredictionsFormRequest{
        ImageIDCreateBatch: shared.ImageIDCreateBatch{
            Images: []shared.ImageIDCreateEntry{
                shared.ImageIDCreateEntry{
                    ID: sdk.String("6146c3e2-50fb-4008-842e-141aac366c8d"),
                    TagIds: []string{
                        "6b144290-7474-4778-a7bd-466d28c10ab3",
                        "cdca4251-904e-4523-87e0-bc7178e4796f",
                        "2a70c688-282a-4a48-a562-f222e9817ee1",
                        "7cbe61e6-b7b9-45bc-8ab3-c20c4f3789fd",
                    },
                },
                shared.ImageIDCreateEntry{
                    ID: sdk.String("871f99dd-2efd-4121-aa6f-1e674bdb04f1"),
                    TagIds: []string{
                        "756082d6-8ea1-49f1-9170-51339d08086a",
                        "1840394c-2607-41f9-bf5f-0642dac7af51",
                    },
                },
            },
            TagIds: []string{
                "cc413aa6-3aae-48d6-b864-dbb675fd5e60",
                "b375ed4f-6fbe-4e41-b333-17fe35b60eb1",
            },
        },
        TrainingKey: "accusamus",
        ProjectID: "a426555b-a3c2-4874-8ed5-3b88f3a8d8f5",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ImageCreateSummary != nil {
        // handle response
    }
}
```

## CreateImagesFromPredictionsJSON

Add the specified predicted images to the set of training images

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
    res, err := s.ImageAPI.CreateImagesFromPredictionsJSON(ctx, operations.CreateImagesFromPredictionsJSONRequest{
        ImageIDCreateBatch: shared.ImageIDCreateBatch{
            Images: []shared.ImageIDCreateEntry{
                shared.ImageIDCreateEntry{
                    ID: sdk.String("0b2f2fb7-b194-4a27-ab26-916fe1f08f42"),
                    TagIds: []string{
                        "4e3698f4-47f6-403e-8b44-5e80ca55efd2",
                        "0e457e18-58b6-4a89-bbe3-a5aa8e4824d0",
                        "ab407508-8e51-4862-865e-904f3b1194b8",
                    },
                },
                shared.ImageIDCreateEntry{
                    ID: sdk.String("abf603a7-9f9d-4fe0-ab7d-a8a50ce187f8"),
                    TagIds: []string{
                        "bc173d68-9eee-4952-af8d-986e881ead4f",
                        "0e101256-3f94-4e29-a973-e922a57a15be",
                    },
                },
                shared.ImageIDCreateEntry{
                    ID: sdk.String("3e060807-e2b6-4e3a-b884-5f0597a60ff2"),
                    TagIds: []string{
                        "54a31e94-764a-43e8-a5e7-956f9251a5a9",
                        "da660ff5-7bfa-4ad4-b9ef-c1b4512c1032",
                        "648dc2f6-1519-49eb-bd0e-9fe6c632ca3a",
                    },
                },
                shared.ImageIDCreateEntry{
                    ID: sdk.String("ed011799-6312-4fde-8477-1778ff61d017"),
                    TagIds: []string{
                        "76360a15-db6a-4660-a59a-1adeaab5851d",
                        "6c645b08-b618-491b-aa0f-e1ade008e6f8",
                    },
                },
            },
            TagIds: []string{
                "5f350d8c-db5a-4341-8143-010421813d52",
                "08ece7e2-53b6-4684-91c6-c6e205e16dea",
                "b3fec957-8a64-4584-a73a-8418d162309f",
                "b0929921-aefb-49f5-8c4d-86e68e4be056",
            },
        },
        TrainingKey: "alias",
        ProjectID: "13f59da7-57a5-49ec-bef6-6ef1caa3383c",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ImageCreateSummary != nil {
        // handle response
    }
}
```

## CreateImagesFromPredictionsRaw

Add the specified predicted images to the set of training images

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
    res, err := s.ImageAPI.CreateImagesFromPredictionsRaw(ctx, operations.CreateImagesFromPredictionsRawRequest{
        RequestBody: []byte("magni"),
        TrainingKey: "soluta",
        ProjectID: "eb477373-c8d7-42f6-8d1d-b1f2c4310661",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ImageCreateSummary != nil {
        // handle response
    }
}
```

## CreateImagesFromUrlsForm

Add the provided images urls to the set of training images

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
    res, err := s.ImageAPI.CreateImagesFromUrlsForm(ctx, operations.CreateImagesFromUrlsFormRequest{
        ImageURLCreateBatch: shared.ImageURLCreateBatch{
            Images: []shared.ImageURLCreateEntry{
                shared.ImageURLCreateEntry{
                    TagIds: []string{
                        "6349e1cf-9e06-4e3a-8370-00ae6b6bc9b8",
                        "f759eac5-5a97-441d-b113-52965bb8a720",
                        "2611435e-139d-4bc2-a59b-1abda8c070e1",
                    },
                    URL: sdk.String("aperiam"),
                },
                shared.ImageURLCreateEntry{
                    TagIds: []string{
                        "4cb0672d-1ad8-479e-ab96-65b85efbd02b",
                        "ae0be2d7-8225-49e3-aa4b-5197f92443da",
                        "7ce52b89-5c53-47c6-854e-fb0b34896c3c",
                    },
                    URL: sdk.String("fuga"),
                },
                shared.ImageURLCreateEntry{
                    TagIds: []string{
                        "acfbe2fd-5707-4577-9291-77deac646ecb",
                        "573409e3-eb1e-45a2-b12e-b07f116db995",
                    },
                    URL: sdk.String("aliquam"),
                },
                shared.ImageURLCreateEntry{
                    TagIds: []string{
                        "fc95fa88-970e-4189-9bb3-0fcb33ea055b",
                        "197cd44e-2f52-4d82-9351-3bb6f48b656b",
                    },
                    URL: sdk.String("minus"),
                },
            },
            TagIds: []string{
                "b35ff2e4-b275-437a-8cd9-e7319c177d52",
                "5f77b114-eeb5-42ff-b85f-c37814d4c98e",
                "0c2bb89e-b75d-4ad6-b6c6-00503d8bb311",
                "80f739ae-9e05-47eb-809e-2810331f3981",
            },
        },
        TrainingKey: "at",
        ProjectID: "4c700b60-7f3c-493c-b3b9-da3f2ceda7e2",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ImageCreateSummary != nil {
        // handle response
    }
}
```

## CreateImagesFromUrlsJSON

Add the provided images urls to the set of training images

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
    res, err := s.ImageAPI.CreateImagesFromUrlsJSON(ctx, operations.CreateImagesFromUrlsJSONRequest{
        ImageURLCreateBatch: shared.ImageURLCreateBatch{
            Images: []shared.ImageURLCreateEntry{
                shared.ImageURLCreateEntry{
                    TagIds: []string{
                        "2257411f-af4b-4754-8e47-2e802857a5b4",
                        "0463a7d5-75f1-4400-a764-ad7334ec1b78",
                        "1b36a080-88d1-400e-bada-200ef0422eb2",
                        "164cf9ab-8366-4c72-bffd-a9e06bee4825",
                    },
                    URL: sdk.String("quisquam"),
                },
            },
            TagIds: []string{
                "fc0e115c-80bf-4f91-8544-ec42defcce8f",
            },
        },
        TrainingKey: "ab",
        ProjectID: "977773e6-3562-4a7b-808f-05e3d48fdaf3",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ImageCreateSummary != nil {
        // handle response
    }
}
```

## CreateImagesFromUrlsRaw

Add the provided images urls to the set of training images

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
    res, err := s.ImageAPI.CreateImagesFromUrlsRaw(ctx, operations.CreateImagesFromUrlsRawRequest{
        RequestBody: []byte("vitae"),
        TrainingKey: "nesciunt",
        ProjectID: "a1f5fd94-259c-40b3-af25-ea944f3b756c",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ImageCreateSummary != nil {
        // handle response
    }
}
```

## DeleteImageTags

Remove a set of tags from a set of images

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
    res, err := s.ImageAPI.DeleteImageTags(ctx, operations.DeleteImageTagsRequest{
        TrainingKey: "ab",
        ImageIds: []string{
            "hic",
        },
        ProjectID: "6c37a512-6243-4835-bbc0-5a23a45cefc5",
        TagIds: []string{
            "assumenda",
            "officiis",
            "architecto",
            "alias",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteImages

Delete images from the set of training images

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
    res, err := s.ImageAPI.DeleteImages(ctx, operations.DeleteImagesRequest{
        TrainingKey: "culpa",
        ImageIds: []string{
            "nobis",
        },
        ProjectID: "e2169e51-0019-4c6d-85e3-4762799bfbbe",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetTaggedImages

This API supports batching and range selection. By default it will only return first 50 images matching images.
Use the {take} and {skip} parameters to control how many images to return in a given batch.
The filtering is on an and/or relationship. For example, if the provided tag ids are for the "Dog" and
"Cat" tags, then only images tagged with Dog and/or Cat will be returned

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
    res, err := s.ImageAPI.GetTaggedImages(ctx, operations.GetTaggedImagesRequest{
        TrainingKey: "laboriosam",
        IterationID: sdk.String("949fb2bb-4eca-4e6c-bd5d-b3adebd5daea"),
        OrderBy: operations.GetTaggedImagesOrderByEnumNewest.ToPointer(),
        ProjectID: "c506a8aa-94c0-4264-8cf5-e9d9a4578adc",
        Skip: sdk.Int(98610),
        TagIds: []string{
            "quod",
            "laboriosam",
            "doloremque",
        },
        Take: sdk.Int(31574),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Images != nil {
        // handle response
    }
}
```

## GetUntaggedImages

This API supports batching and range selection. By default it will only return first 50 images matching images.
Use the {take} and {skip} parameters to control how many images to return in a given batch.

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
    res, err := s.ImageAPI.GetUntaggedImages(ctx, operations.GetUntaggedImagesRequest{
        TrainingKey: "facere",
        IterationID: sdk.String("ec001ac8-02e2-4ec0-9ff8-f0f816ff3477"),
        OrderBy: operations.GetUntaggedImagesOrderByEnumOldest.ToPointer(),
        ProjectID: "13e902c1-4125-4b09-a0a6-68151a472af9",
        Skip: sdk.Int(151230),
        Take: sdk.Int(200950),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Images != nil {
        // handle response
    }
}
```

## PostImageTagsForm

Associate a set of images with a set of tags

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
    res, err := s.ImageAPI.PostImageTagsForm(ctx, operations.PostImageTagsFormRequest{
        ImageTagCreateBatch: shared.ImageTagCreateBatch{
            Tags: []shared.ImageTagCreateEntry{
                shared.ImageTagCreateEntry{
                    ImageID: sdk.String("5949f83f-350c-4f87-affb-901c6ecbb4e2"),
                    TagID: sdk.String("43cf789f-fafe-4da5-be5a-e6e0ac184c2b"),
                },
                shared.ImageTagCreateEntry{
                    ImageID: sdk.String("9c247c88-373a-440e-9942-f32e55055756"),
                    TagID: sdk.String("f5d56d0b-d0af-42df-a13d-b4f62cba3f89"),
                },
                shared.ImageTagCreateEntry{
                    ImageID: sdk.String("41aebc0b-80a6-4924-93b2-ecfcc8f89501"),
                    TagID: sdk.String("0f5dd3d6-fa18-404e-94c8-2f168a363c88"),
                },
                shared.ImageTagCreateEntry{
                    ImageID: sdk.String("73e48438-0b1f-46b8-8a27-5a60a04c495c"),
                    TagID: sdk.String("c699171b-51c1-4bdb-9cf4-b888ebdfc4cc"),
                },
            },
        },
        TrainingKey: "porro",
        ProjectID: "a99bc7fc-0b2d-4ce1-8873-e42b006d6788",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ImageTagCreateSummary != nil {
        // handle response
    }
}
```

## PostImageTagsJSON

Associate a set of images with a set of tags

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
    res, err := s.ImageAPI.PostImageTagsJSON(ctx, operations.PostImageTagsJSONRequest{
        ImageTagCreateBatch: shared.ImageTagCreateBatch{
            Tags: []shared.ImageTagCreateEntry{
                shared.ImageTagCreateEntry{
                    ImageID: sdk.String("8ba8581a-5820-48c5-8fef-a9c95f2eac55"),
                    TagID: sdk.String("65d307cf-ee81-4206-a281-3fa4a41c480d"),
                },
                shared.ImageTagCreateEntry{
                    ImageID: sdk.String("3f2132af-0310-42d5-94f4-cc6f18bf9621"),
                    TagID: sdk.String("a6a4f77a-87ee-43e4-be75-2c65b34418e3"),
                },
            },
        },
        TrainingKey: "expedita",
        ProjectID: "b91c8d97-5e0e-4841-9d8f-84f144f3e07e",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ImageTagCreateSummary != nil {
        // handle response
    }
}
```

## PostImageTagsRaw

Associate a set of images with a set of tags

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
    res, err := s.ImageAPI.PostImageTagsRaw(ctx, operations.PostImageTagsRawRequest{
        RequestBody: []byte("facere"),
        TrainingKey: "quisquam",
        ProjectID: "c4aa5f3c-abd9-405a-972e-056728227b2d",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ImageTagCreateSummary != nil {
        // handle response
    }
}
```
