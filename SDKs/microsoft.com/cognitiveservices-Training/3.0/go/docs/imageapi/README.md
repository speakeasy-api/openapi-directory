# ImageAPI

### Available Operations

* [CreateImageRegionsForm](#createimageregionsform) - Create a set of image regions.
* [CreateImageRegionsJSON](#createimageregionsjson) - Create a set of image regions.
* [CreateImageRegionsRaw](#createimageregionsraw) - Create a set of image regions.
* [CreateImageTagsForm](#createimagetagsform) - Associate a set of images with a set of tags.
* [CreateImageTagsJSON](#createimagetagsjson) - Associate a set of images with a set of tags.
* [CreateImageTagsRaw](#createimagetagsraw) - Associate a set of images with a set of tags.
* [CreateImagesFromData](#createimagesfromdata) - Add the provided images to the set of training images.
* [CreateImagesFromFilesForm](#createimagesfromfilesform) - Add the provided batch of images to the set of training images.
* [CreateImagesFromFilesJSON](#createimagesfromfilesjson) - Add the provided batch of images to the set of training images.
* [CreateImagesFromFilesRaw](#createimagesfromfilesraw) - Add the provided batch of images to the set of training images.
* [CreateImagesFromPredictionsForm](#createimagesfrompredictionsform) - Add the specified predicted images to the set of training images.
* [CreateImagesFromPredictionsJSON](#createimagesfrompredictionsjson) - Add the specified predicted images to the set of training images.
* [CreateImagesFromPredictionsRaw](#createimagesfrompredictionsraw) - Add the specified predicted images to the set of training images.
* [CreateImagesFromUrlsForm](#createimagesfromurlsform) - Add the provided images urls to the set of training images.
* [CreateImagesFromUrlsJSON](#createimagesfromurlsjson) - Add the provided images urls to the set of training images.
* [CreateImagesFromUrlsRaw](#createimagesfromurlsraw) - Add the provided images urls to the set of training images.
* [DeleteImageRegions](#deleteimageregions) - Delete a set of image regions.
* [DeleteImageTags](#deleteimagetags) - Remove a set of tags from a set of images.
* [DeleteImages](#deleteimages) - Delete images from the set of training images.
* [GetImagesByIds](#getimagesbyids) - Get images by id for a given project iteration.
* [GetTaggedImageCount](#gettaggedimagecount) - Gets the number of images tagged with the provided {tagIds}.
* [GetTaggedImages](#gettaggedimages) - Get tagged images for a given project iteration.
* [GetUntaggedImageCount](#getuntaggedimagecount) - Gets the number of untagged images.
* [GetUntaggedImages](#getuntaggedimages) - Get untagged images for a given project iteration.

## CreateImageRegionsForm

This API accepts a batch of image regions, and optionally tags, to update existing images with region information.
There is a limit of 64 entries in the batch.

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
    res, err := s.ImageAPI.CreateImageRegionsForm(ctx, operations.CreateImageRegionsFormRequest{
        ImageRegionCreateBatch: shared.ImageRegionCreateBatch{
            Regions: []shared.ImageRegionCreateEntry{
                shared.ImageRegionCreateEntry{
                    Height: 5684.34,
                    ImageID: "20592939-6fea-4759-aeb1-0faaa2352c59",
                    Left: 3637.11,
                    TagID: "5907aff1-a3a2-4fa9-8677-39251aa52c3f",
                    Top: 3687.25,
                    Width: 6625.27,
                },
            },
        },
        TrainingKey: "possimus",
        ProjectID: "019da1ff-e78f-4097-b007-4f15471b5e6e",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ImageRegionCreateSummary != nil {
        // handle response
    }
}
```

## CreateImageRegionsJSON

This API accepts a batch of image regions, and optionally tags, to update existing images with region information.
There is a limit of 64 entries in the batch.

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
    res, err := s.ImageAPI.CreateImageRegionsJSON(ctx, operations.CreateImageRegionsJSONRequest{
        ImageRegionCreateBatch: shared.ImageRegionCreateBatch{
            Regions: []shared.ImageRegionCreateEntry{
                shared.ImageRegionCreateEntry{
                    Height: 2168.22,
                    ImageID: "b99d488e-1e91-4e45-8ad2-abd44269802d",
                    Left: 3698.08,
                    TagID: "02a94bb4-f63c-4969-a9a3-efa77dfb14cd",
                    Top: 4118.2,
                    Width: 3965.06,
                },
            },
        },
        TrainingKey: "laborum",
        ProjectID: "e395efb9-ba88-4f3a-a699-7074ba4469b6",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ImageRegionCreateSummary != nil {
        // handle response
    }
}
```

## CreateImageRegionsRaw

This API accepts a batch of image regions, and optionally tags, to update existing images with region information.
There is a limit of 64 entries in the batch.

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
    res, err := s.ImageAPI.CreateImageRegionsRaw(ctx, operations.CreateImageRegionsRawRequest{
        RequestBody: []byte("vero"),
        TrainingKey: "aspernatur",
        ProjectID: "14195989-0afa-4563-a251-6fe4c8b711e5",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ImageRegionCreateSummary != nil {
        // handle response
    }
}
```

## CreateImageTagsForm

Associate a set of images with a set of tags.

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
    res, err := s.ImageAPI.CreateImageTagsForm(ctx, operations.CreateImageTagsFormRequest{
        ImageTagCreateBatch: shared.ImageTagCreateBatch{
            Tags: []shared.ImageTagCreateEntry{
                shared.ImageTagCreateEntry{
                    ImageID: sdk.String("7fd2ed02-8921-4cdd-8692-601fb576b0d5"),
                    TagID: sdk.String("f0d30c5f-bb25-4870-9320-2c73d5fe9b90"),
                },
                shared.ImageTagCreateEntry{
                    ImageID: sdk.String("c28909b3-fe49-4a8d-9cbf-48633323f9b7"),
                    TagID: sdk.String("7f3a4100-674e-4bf6-9280-d1ba77a89ebf"),
                },
                shared.ImageTagCreateEntry{
                    ImageID: sdk.String("737ae420-3ce5-4e6a-95d8-a0d446ce2af7"),
                    TagID: sdk.String("a73cf3be-453f-4870-b326-b5a73429cdb1"),
                },
            },
        },
        TrainingKey: "laborum",
        ProjectID: "8422bb67-9d23-4227-95bf-0cbb1e31b8b9",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ImageTagCreateSummary != nil {
        // handle response
    }
}
```

## CreateImageTagsJSON

Associate a set of images with a set of tags.

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
    res, err := s.ImageAPI.CreateImageTagsJSON(ctx, operations.CreateImageTagsJSONRequest{
        ImageTagCreateBatch: shared.ImageTagCreateBatch{
            Tags: []shared.ImageTagCreateEntry{
                shared.ImageTagCreateEntry{
                    ImageID: sdk.String("f3443a11-08e0-4adc-b4b9-21879fce953f"),
                    TagID: sdk.String("73ef7fbc-7abd-474d-939c-0f5d2cff7c70"),
                },
            },
        },
        TrainingKey: "officia",
        ProjectID: "45626d43-6813-4f16-99f5-fce6c556146c",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ImageTagCreateSummary != nil {
        // handle response
    }
}
```

## CreateImageTagsRaw

Associate a set of images with a set of tags.

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
    res, err := s.ImageAPI.CreateImageTagsRaw(ctx, operations.CreateImageTagsRawRequest{
        RequestBody: []byte("consectetur"),
        TrainingKey: "recusandae",
        ProjectID: "250fb008-c42e-4141-aac3-66c8dd6b1442",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ImageTagCreateSummary != nil {
        // handle response
    }
}
```

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
                Content: []byte("provident"),
                ImageData: "ipsa",
            },
        },
        TrainingKey: "molestiae",
        ProjectID: "474778a7-bd46-46d2-8c10-ab3cdca42519",
        TagIds: []string{
            "4e523c7e-0bc7-4178-a479-6f2a70c68828",
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

This API accepts a batch of files, and optionally tags, to create images. There is a limit of 64 images and 20 tags.

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
                    Contents: sdk.String("fuga"),
                    Name: sdk.String("Randall Lindgren"),
                    Regions: []shared.Region{
                        shared.Region{
                            Height: 1470.14,
                            Left: 9564.06,
                            TagID: "222e9817-ee17-4cbe-a1e6-b7b95bc0ab3c",
                            Top: 1605.38,
                            Width: 97.66,
                        },
                        shared.Region{
                            Height: 7963.92,
                            Left: 3082.86,
                            TagID: "f3789fd8-71f9-49dd-aefd-121aa6f1e674",
                            Top: 7276.97,
                            Width: 8490.39,
                        },
                    },
                    TagIds: []string{
                        "04f15756-082d-468e-a19f-1d17051339d0",
                        "8086a184-0394-4c26-871f-93f5f0642dac",
                        "7af515cc-413a-4a63-aae8-d67864dbb675",
                    },
                },
            },
            TagIds: []string{
                "d5e60b37-5ed4-4f6f-bee4-1f33317fe35b",
                "60eb1ea4-2655-45ba-bc28-744ed53b88f3",
                "a8d8f5c0-b2f2-4fb7-b194-a276b26916fe",
                "1f08f429-4e36-498f-847f-603e8b445e80",
            },
        },
        TrainingKey: "nobis",
        ProjectID: "a55efd20-e457-4e18-98b6-a89fbe3a5aa8",
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

This API accepts a batch of files, and optionally tags, to create images. There is a limit of 64 images and 20 tags.

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
                    Contents: sdk.String("tempora"),
                    Name: sdk.String("Louis Grady V"),
                    Regions: []shared.Region{
                        shared.Region{
                            Height: 2996.43,
                            Left: 78.84,
                            TagID: "75088e51-8620-465e-904f-3b1194b8abf6",
                            Top: 27.03,
                            Width: 2270.84,
                        },
                        shared.Region{
                            Height: 6471.97,
                            Left: 4548.6,
                            TagID: "9f9dfe0a-b7da-48a5-8ce1-87f86bc173d6",
                            Top: 5391.18,
                            Width: 6232.95,
                        },
                        shared.Region{
                            Height: 8872.65,
                            Left: 8869.61,
                            TagID: "e9526f8d-986e-4881-aad4-f0e1012563f9",
                            Top: 3000.29,
                            Width: 9063.55,
                        },
                    },
                    TagIds: []string{
                        "9e973e92-2a57-4a15-be3e-060807e2b6e3",
                    },
                },
                shared.ImageFileCreateEntry{
                    Contents: sdk.String("laborum"),
                    Name: sdk.String("Ken Ledner"),
                    Regions: []shared.Region{
                        shared.Region{
                            Height: 30.99,
                            Left: 3621.89,
                            TagID: "97a60ff2-a54a-431e-9476-4a3e865e7956",
                            Top: 9704.94,
                            Width: 5927.8,
                        },
                        shared.Region{
                            Height: 1334.39,
                            Left: 3545.06,
                            TagID: "1a5a9da6-60ff-457b-baad-4f9efc1b4512",
                            Top: 7652.71,
                            Width: 626.36,
                        },
                        shared.Region{
                            Height: 216.88,
                            Left: 2419.01,
                            TagID: "2648dc2f-6151-499e-bfd0-e9fe6c632ca3",
                            Top: 6567.62,
                            Width: 8987.6,
                        },
                        shared.Region{
                            Height: 8620.63,
                            Left: 89.31,
                            TagID: "11799631-2fde-4047-b177-8ff61d017476",
                            Top: 2352.63,
                            Width: 3998.12,
                        },
                    },
                    TagIds: []string{
                        "a15db6a6-6065-49a1-adea-ab5851d6c645",
                    },
                },
                shared.ImageFileCreateEntry{
                    Contents: sdk.String("expedita"),
                    Name: sdk.String("Leona Rippin IV"),
                    Regions: []shared.Region{
                        shared.Region{
                            Height: 852.33,
                            Left: 7032.18,
                            TagID: "aa0fe1ad-e008-4e6f-8c5f-350d8cdb5a34",
                            Top: 805.32,
                            Width: 5372.79,
                        },
                        shared.Region{
                            Height: 853.11,
                            Left: 2745.75,
                            TagID: "30104218-13d5-4208-ace7-e253b668451c",
                            Top: 4218.44,
                            Width: 7510.22,
                        },
                        shared.Region{
                            Height: 3883.19,
                            Left: 9272.12,
                            TagID: "205e16de-ab3f-4ec9-978a-64584273a841",
                            Top: 5243.8,
                            Width: 8518.54,
                        },
                    },
                    TagIds: []string{
                        "62309fb0-9299-421a-afb9-f58c4d86e68e",
                    },
                },
                shared.ImageFileCreateEntry{
                    Contents: sdk.String("modi"),
                    Name: sdk.String("Ignacio Bartoletti"),
                    Regions: []shared.Region{
                        shared.Region{
                            Height: 938.94,
                            Left: 2476.85,
                            TagID: "f59da757-a59e-4cfe-b66e-f1caa3383c2b",
                            Top: 9227.57,
                            Width: 7214.3,
                        },
                    },
                    TagIds: []string{
                        "77373c8d-72f6-44d1-9b1f-2c4310661e96",
                        "349e1cf9-e06e-43a4-b700-0ae6b6bc9b8f",
                    },
                },
            },
            TagIds: []string{
                "59eac55a-9741-4d31-9352-965bb8a72026",
                "11435e13-9dbc-4225-9b1a-bda8c070e108",
            },
        },
        TrainingKey: "dolore",
        ProjectID: "cb0672d1-ad87-49ee-b966-5b85efbd02ba",
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

This API accepts a batch of files, and optionally tags, to create images. There is a limit of 64 images and 20 tags.

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
        RequestBody: []byte("repudiandae"),
        TrainingKey: "accusantium",
        ProjectID: "be2d7822-59e3-4ea4-b519-7f92443da7ce",
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

This API creates a batch of images from predicted images specified. There is a limit of 64 images and 20 tags.

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
                    ID: sdk.String("2b895c53-7c64-454e-bb0b-34896c3ca5ac"),
                    Regions: []shared.Region{
                        shared.Region{
                            Height: 7358.94,
                            Left: 8786.01,
                            TagID: "2fd57075-7792-4917-bdea-c646ecb57340",
                            Top: 5755.34,
                            Width: 8760.27,
                        },
                        shared.Region{
                            Height: 1949.01,
                            Left: 9185.47,
                            TagID: "b1e5a2b1-2eb0-47f1-96db-99545fc95fa8",
                            Top: 5173.26,
                            Width: 5646.67,
                        },
                        shared.Region{
                            Height: 4849.66,
                            Left: 511.7,
                            TagID: "e189dbb3-0fcb-433e-a055-b197cd44e2f5",
                            Top: 1645.32,
                            Width: 8138.8,
                        },
                        shared.Region{
                            Height: 5129.05,
                            Left: 1403.84,
                            TagID: "d3513bb6-f48b-4656-bcdb-35ff2e4b2753",
                            Top: 4800.61,
                            Width: 6649.65,
                        },
                    },
                    TagIds: []string{
                        "cd9e7319-c177-4d52-9f77-b114eeb52ff7",
                        "85fc3781-4d4c-498e-8c2b-b89eb75dad63",
                        "6c600503-d8bb-4311-80f7-39ae9e057eb8",
                    },
                },
                shared.ImageIDCreateEntry{
                    ID: sdk.String("09e28103-31f3-4981-94c7-00b607f3c93c"),
                    Regions: []shared.Region{
                        shared.Region{
                            Height: 2358.34,
                            Left: 7441.01,
                            TagID: "9da3f2ce-da7e-423f-a257-411faf4b7544",
                            Top: 9211.93,
                            Width: 2653.03,
                        },
                        shared.Region{
                            Height: 4502.09,
                            Left: 1272.94,
                            TagID: "e802857a-5b40-4463-a7d5-75f1400e764a",
                            Top: 8237.18,
                            Width: 4523.99,
                        },
                    },
                    TagIds: []string{
                        "34ec1b78-1b36-4a08-888d-100efada200e",
                    },
                },
            },
            TagIds: []string{
                "0422eb21-64cf-49ab-8366-c723ffda9e06",
                "bee4825c-1fc0-4e11-9c80-bff918544ec4",
                "2defcce8-f197-4777-be63-562a7b408f05",
                "e3d48fda-f313-4a1f-9fd9-4259c0b36f25",
            },
        },
        TrainingKey: "debitis",
        ProjectID: "a944f3b7-56c1-41f6-837a-5126243835bb",
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

This API creates a batch of images from predicted images specified. There is a limit of 64 images and 20 tags.

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
                    ID: sdk.String("05a23a45-cefc-45fd-a10a-0ce2169e5100"),
                    Regions: []shared.Region{
                        shared.Region{
                            Height: 5905.85,
                            Left: 7658.33,
                            TagID: "6dc5e347-6279-49bf-bbe6-949fb2bb4eca",
                            Top: 9044.4,
                            Width: 4230.54,
                        },
                    },
                    TagIds: []string{
                        "3d5db3ad-ebd5-4dae-a4c5-06a8aa94c026",
                        "44cf5e9d-9a45-478a-9c1a-c600dec001ac",
                        "802e2ec0-9ff8-4f0f-816f-f3477c13e902",
                        "c14125b0-960a-4668-951a-472af923c594",
                    },
                },
                shared.ImageIDCreateEntry{
                    ID: sdk.String("9f83f350-cf87-46ff-b901-c6ecbb4e243c"),
                    Regions: []shared.Region{
                        shared.Region{
                            Height: 4598.75,
                            Left: 5000.21,
                            TagID: "9ffafeda-53e5-4ae6-a0ac-184c2b9c247c",
                            Top: 5524.4,
                            Width: 5488.46,
                        },
                        shared.Region{
                            Height: 2278.7,
                            Left: 4733.26,
                            TagID: "3a40e194-2f32-4e55-8557-56f5d56d0bd0",
                            Top: 6605.36,
                            Width: 9581.46,
                        },
                        shared.Region{
                            Height: 1523.64,
                            Left: 8235.72,
                            TagID: "fe13db4f-62cb-4a3f-8941-aebc0b80a692",
                            Top: 2736.77,
                            Width: 8219.04,
                        },
                        shared.Region{
                            Height: 2208.24,
                            Left: 7005.29,
                            TagID: "2ecfcc8f-8950-410f-9dd3-d6fa1804e54c",
                            Top: 5579.87,
                            Width: 1624.5,
                        },
                    },
                    TagIds: []string{
                        "168a363c-8873-4e48-8380-b1f6b8ca275a",
                        "60a04c49-5cc6-4991-b1b5-1c1bdb1cf4b8",
                        "88ebdfc4-ccca-499b-87fc-0b2dce10873e",
                        "42b006d6-7887-48ba-8581-a58208c54fef",
                    },
                },
                shared.ImageIDCreateEntry{
                    ID: sdk.String("a9c95f2e-ac55-465d-b07c-fee81206e281"),
                    Regions: []shared.Region{
                        shared.Region{
                            Height: 9639.13,
                            Left: 6736.53,
                            TagID: "4a41c480-d3f2-4132-af03-102d514f4cc6",
                            Top: 9980.23,
                            Width: 651.18,
                        },
                    },
                    TagIds: []string{
                        "bf9621a6-a4f7-47a8-bee3-e4be752c65b3",
                        "4418e3bb-91c8-4d97-9e0e-8419d8f84f14",
                        "4f3e07ed-cc4a-4a5f-bcab-d905a972e056",
                    },
                },
                shared.ImageIDCreateEntry{
                    ID: sdk.String("728227b2-d309-4470-bf7a-4fa87cf535a6"),
                    Regions: []shared.Region{
                        shared.Region{
                            Height: 6578.62,
                            Left: 9259.94,
                            TagID: "54ebf60c-321f-4023-b75d-2367fe1a0cc8",
                            Top: 8199.96,
                            Width: 9804.67,
                        },
                        shared.Region{
                            Height: 4857.95,
                            Left: 5886.62,
                            TagID: "f0a396d9-0c36-44b7-815d-fbace188b1c4",
                            Top: 9082.49,
                            Width: 9205.48,
                        },
                        shared.Region{
                            Height: 1503.49,
                            Left: 7726.28,
                            TagID: "8c6ce611-feeb-41c7-8bdb-6eec74378ba2",
                            Top: 3194.19,
                            Width: 1939.9,
                        },
                        shared.Region{
                            Height: 1068.06,
                            Left: 4810.42,
                            TagID: "747dc915-ad2c-4af5-9d67-23dc0f5ae2f3",
                            Top: 6405.65,
                            Width: 3796.61,
                        },
                    },
                    TagIds: []string{
                        "70087875-6143-4f5a-ac98-b55554080d40",
                        "bcacc6cb-d6b5-4f3e-8909-304f926bad25",
                        "53819b47-4b0e-4d20-a562-48fff639a910",
                    },
                },
            },
            TagIds: []string{
                "bdcab626-7669-46e1-ac00-221b335d89ac",
                "b3ecfda8-d0c5-449e-b030-04978a61fa1c",
                "f20688f7-7c1f-4fc7-9dca-163f2a3c80a9",
            },
        },
        TrainingKey: "nihil",
        ProjectID: "ff334cdd-f857-4a9e-a187-6c6ab21d29df",
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

This API creates a batch of images from predicted images specified. There is a limit of 64 images and 20 tags.

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
        RequestBody: []byte("impedit"),
        TrainingKey: "unde",
        ProjectID: "4d6fecd7-9939-4006-aa6d-2d000355338c",
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

This API accepts a batch of urls, and optionally tags, to create images. There is a limit of 64 images and 20 tags.

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
                    Regions: []shared.Region{
                        shared.Region{
                            Height: 390.47,
                            Left: 5168.33,
                            TagID: "6fa21e91-52cb-4311-9167-b8e3c8db0340",
                            Top: 5154.33,
                            Width: 8310.67,
                        },
                        shared.Region{
                            Height: 4159.53,
                            Left: 8436.79,
                            TagID: "364ffd45-5906-4d12-a3d4-8e935c2c9e81",
                            Top: 9561.3,
                            Width: 2172.79,
                        },
                        shared.Region{
                            Height: 93.58,
                            Left: 7428.99,
                            TagID: "e3e43202-d721-4657-a506-641870d9d21f",
                            Top: 6012.28,
                            Width: 6456.09,
                        },
                        shared.Region{
                            Height: 8345.87,
                            Left: 79.19,
                            TagID: "30c4ecc1-1a08-4364-a906-8b8502a55e7f",
                            Top: 4590.86,
                            Width: 2075.12,
                        },
                    },
                    TagIds: []string{
                        "c845e320-a319-4f4b-adf9-47c9a867bc42",
                        "42666581-6ddc-4a8e-b51f-cb4c593ec12c",
                        "daad0ec7-afed-4bd8-8df4-48a47f9390c5",
                    },
                    URL: "quos",
                },
                shared.ImageURLCreateEntry{
                    Regions: []shared.Region{
                        shared.Region{
                            Height: 5599.37,
                            Left: 283.62,
                            TagID: "983dabf9-ef3f-4fdd-9f7f-079af4d35724",
                            Top: 7840.59,
                            Width: 8526.1,
                        },
                        shared.Region{
                            Height: 7439.38,
                            Left: 584.63,
                            TagID: "f4d28118-7d56-4844-aded-85a9065e628b",
                            Top: 8486.49,
                            Width: 9703.76,
                        },
                        shared.Region{
                            Height: 8095.67,
                            Left: 1752.75,
                            TagID: "032b6c87-9923-4b7e-9358-4f7ae12c6891",
                            Top: 9465.58,
                            Width: 5151.53,
                        },
                    },
                    TagIds: []string{
                        "ce115717-2305-4377-9cfa-89df975e3566",
                    },
                    URL: "rem",
                },
                shared.ImageURLCreateEntry{
                    Regions: []shared.Region{
                        shared.Region{
                            Height: 444.43,
                            Left: 5968.2,
                            TagID: "2e9c3ddc-5f11-41de-a102-6d541a4d190f",
                            Top: 8876,
                            Width: 7088.83,
                        },
                        shared.Region{
                            Height: 1568.43,
                            Left: 1127.51,
                            TagID: "780bccc0-dbbd-4db4-8470-8fb4e391e6bc",
                            Top: 683.36,
                            Width: 3195.92,
                        },
                    },
                    TagIds: []string{
                        "c4c4e545-99ea-4342-a60e-9b200ce78a1b",
                        "d8fb7a0a-116c-4e72-bd40-97fa30e9af72",
                        "5b291220-30d8-43f5-aeb7-799d22e8c1f8",
                    },
                    URL: "magnam",
                },
                shared.ImageURLCreateEntry{
                    Regions: []shared.Region{
                        shared.Region{
                            Height: 2270.17,
                            Left: 5460.89,
                            TagID: "25fdc42c-876c-42c2-9fb4-cfc1c76230f8",
                            Top: 2563.1,
                            Width: 1138.94,
                        },
                        shared.Region{
                            Height: 9803.76,
                            Left: 7220.25,
                            TagID: "1bd23fdb-14db-46be-9a68-5998e22ae20d",
                            Top: 6603.39,
                            Width: 629.07,
                        },
                        shared.Region{
                            Height: 4144.39,
                            Left: 9544.01,
                            TagID: "c2b271a2-89c5-47e8-94e9-0439d2224656",
                            Top: 5841.99,
                            Width: 2681.09,
                        },
                    },
                    TagIds: []string{
                        "2407084f-7ab3-47ce-b022-25194db55410",
                        "adc669af-90a2-46c7-8dc9-81f068981d6b",
                    },
                    URL: "nam",
                },
            },
            TagIds: []string{
                "3cfaa348-c31b-4f40-bee4-fcf0c42b78f1",
            },
        },
        TrainingKey: "ullam",
        ProjectID: "626398a0-dc76-4632-8ccb-06c8ca12d025",
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

This API accepts a batch of urls, and optionally tags, to create images. There is a limit of 64 images and 20 tags.

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
                    Regions: []shared.Region{
                        shared.Region{
                            Height: 1664.01,
                            Left: 4866.06,
                            TagID: "0b8d5722-dd89-45b8-bcf2-4db959693352",
                            Top: 9482.97,
                            Width: 4773.52,
                        },
                        shared.Region{
                            Height: 2925.71,
                            Left: 3563.43,
                            TagID: "33994d78-de3b-46e9-b89f-5abb7f662550",
                            Top: 6678.04,
                            Width: 1842.04,
                        },
                        shared.Region{
                            Height: 5087.73,
                            Left: 2371.89,
                            TagID: "82ac483a-fd23-415b-ba65-0164e06f5bf6",
                            Top: 6444.16,
                            Width: 9197.3,
                        },
                    },
                    TagIds: []string{
                        "91bc8bde-f361-42b6-bc20-5fda840774a6",
                        "8a9a35d0-86b6-4f66-bef0-20e9f443b425",
                    },
                    URL: "nihil",
                },
            },
            TagIds: []string{
                "992c8dbd-a6a6-41ef-a219-8258fd0a9eba",
                "47f7d3ef-0496-440d-aa18-31c87adf596f",
                "df1ad837-ae80-4c1c-99c9-5ba998678fa3",
            },
        },
        TrainingKey: "hic",
        ProjectID: "696991af-388c-4e03-a144-48c7977a0ef2",
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

This API accepts a batch of urls, and optionally tags, to create images. There is a limit of 64 images and 20 tags.

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
        RequestBody: []byte("delectus"),
        TrainingKey: "exercitationem",
        ProjectID: "36028efe-ef93-4415-aed7-e253f4c157de",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ImageCreateSummary != nil {
        // handle response
    }
}
```

## DeleteImageRegions

Delete a set of image regions.

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
    res, err := s.ImageAPI.DeleteImageRegions(ctx, operations.DeleteImageRegionsRequest{
        TrainingKey: "officia",
        ProjectID: "a7170f44-5acc-4f66-baaf-9bbad185fe43",
        RegionIds: []string{
            "d6bf5c83-8fbb-48c2-8cb6-7fc4b425e99e",
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

## DeleteImageTags

Remove a set of tags from a set of images.

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
        TrainingKey: "laboriosam",
        ImageIds: []string{
            "34c9f7b7-9dfe-4b77-a5c3-8d4baf91e506",
        },
        ProjectID: "ef890a54-b475-4f16-b56d-385a3c4ac631",
        TagIds: []string{
            "99e26ced-8f9f-4db9-810f-63bbf817837b",
            "01afdd78-8624-4189-ab44-873f5033f19d",
            "bf125ce4-152e-4ab9-8d7e-5224a6a0e123",
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

Delete images from the set of training images.

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
        TrainingKey: "cum",
        ImageIds: []string{
            "847ec59e-1f67-4f3c-8cce-4b6d7696ff3c",
            "57475013-57e4-44f5-9f8b-084c3197e193",
        },
        ProjectID: "a245467f-9487-44c2-95cc-4972233e66bd",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetImagesByIds

This API will return a set of Images for the specified tags and optionally iteration. If no iteration is specified the
current workspace is used.

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
    res, err := s.ImageAPI.GetImagesByIds(ctx, operations.GetImagesByIdsRequest{
        TrainingKey: "rem",
        ImageIds: []string{
            "e5d00b97-9ef2-4038-b320-590ccc109640",
            "0313b3e5-044f-465f-a72d-c4077d0cc3f4",
            "08efc15c-eb4d-46e1-aae0-f75aedf2acab",
            "58b991c9-26dd-4b58-9461-e7421cbe6d95",
        },
        IterationID: sdk.String("02f0ea93-0b69-4f7a-82f7-2f8850090491"),
        ProjectID: "16082078-88ec-4661-83bf-e9659eb40ec1",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Images != nil {
        // handle response
    }
}
```

## GetTaggedImageCount

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
    res, err := s.ImageAPI.GetTaggedImageCount(ctx, operations.GetTaggedImageCountRequest{
        TrainingKey: "voluptas",
        IterationID: sdk.String("faf75b0b-532a-44da-b7cb-aaf4452c4842"),
        ProjectID: "c9b2ad32-dafe-481a-88f4-444573fecd47",
        TagIds: []string{
            "53f63c82-0937-49aa-a9cd-5fbcf79da18a",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetTaggedImageCount200ApplicationJSONInt32Integer != nil {
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
        TrainingKey: "odio",
        IterationID: sdk.String("822bf958-94e6-4861-adb5-5f9e5d751c9f"),
        OrderBy: operations.GetTaggedImagesOrderByEnumOldest.ToPointer(),
        ProjectID: "8f7502bf-dc34-4508-81f1-764456379f3f",
        Skip: sdk.Int(695892),
        TagIds: []string{
            "7e21f862-657b-436f-86b9-f587ce525c67",
        },
        Take: sdk.Int(410916),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Images != nil {
        // handle response
    }
}
```

## GetUntaggedImageCount

This API returns the images which have no tags for a given project and optionally an iteration. If no iteration is specified the
current workspace is used.

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
    res, err := s.ImageAPI.GetUntaggedImageCount(ctx, operations.GetUntaggedImageCountRequest{
        TrainingKey: "numquam",
        IterationID: sdk.String("1a8312e5-047b-44c2-9ccb-423abcdc91fa"),
        ProjectID: "abdd88e7-1f6c-4482-92d7-771e7fd07400",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetUntaggedImageCount200ApplicationJSONInt32Integer != nil {
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
        TrainingKey: "iste",
        IterationID: sdk.String("ef8d29de-1dd7-4097-b5da-08c57fa6c78a"),
        OrderBy: operations.GetUntaggedImagesOrderByEnumNewest.ToPointer(),
        ProjectID: "16e19baf-eca6-4191-8981-40b64ff8ae17",
        Skip: sdk.Int(10777),
        Take: sdk.Int(930656),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Images != nil {
        // handle response
    }
}
```
