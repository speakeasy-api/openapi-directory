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
                    Height: sdk.Float32(5684.34),
                    ImageID: sdk.String("20592939-6fea-4759-aeb1-0faaa2352c59"),
                    Left: sdk.Float32(3637.11),
                    TagID: sdk.String("5907aff1-a3a2-4fa9-8677-39251aa52c3f"),
                    Top: sdk.Float32(3687.25),
                    Width: sdk.Float32(6625.27),
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
                    Height: sdk.Float32(2168.22),
                    ImageID: sdk.String("b99d488e-1e91-4e45-8ad2-abd44269802d"),
                    Left: sdk.Float32(3698.08),
                    TagID: sdk.String("02a94bb4-f63c-4969-a9a3-efa77dfb14cd"),
                    Top: sdk.Float32(4118.2),
                    Width: sdk.Float32(3965.06),
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
            "tempora",
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
                    Contents: sdk.String("ipsam"),
                    Name: sdk.String("Emily Satterfield"),
                    Regions: []shared.Region{
                        shared.Region{
                            Height: sdk.Float32(7151.79),
                            Left: sdk.Float32(7997.96),
                            TagID: sdk.String("7178e479-6f2a-470c-a882-82aa482562f2"),
                            Top: sdk.Float32(1871.31),
                            Width: sdk.Float32(1294.12),
                        },
                    },
                    TagIds: []string{
                        "9817ee17-cbe6-41e6-b7b9-5bc0ab3c20c4",
                        "f3789fd8-71f9-49dd-aefd-121aa6f1e674",
                        "bdb04f15-7560-482d-a8ea-19f1d1705133",
                        "9d08086a-1840-4394-8260-71f93f5f0642",
                    },
                },
                shared.ImageFileCreateEntry{
                    Contents: sdk.String("repellendus"),
                    Name: sdk.String("Simon Kuhn"),
                    Regions: []shared.Region{
                        shared.Region{
                            Height: sdk.Float32(653.04),
                            Left: sdk.Float32(3127.53),
                            TagID: sdk.String("cc413aa6-3aae-48d6-b864-dbb675fd5e60"),
                            Top: sdk.Float32(7386.83),
                            Width: sdk.Float32(2326.27),
                        },
                        shared.Region{
                            Height: sdk.Float32(4490.83),
                            Left: sdk.Float32(3485.19),
                            TagID: sdk.String("ed4f6fbe-e41f-4333-97fe-35b60eb1ea42"),
                            Top: sdk.Float32(3790.57),
                            Width: sdk.Float32(3742.44),
                        },
                    },
                    TagIds: []string{
                        "5ba3c287-44ed-453b-88f3-a8d8f5c0b2f2",
                        "fb7b194a-276b-4269-96fe-1f08f4294e36",
                    },
                },
                shared.ImageFileCreateEntry{
                    Contents: sdk.String("occaecati"),
                    Name: sdk.String("Courtney Goldner"),
                    Regions: []shared.Region{
                        shared.Region{
                            Height: sdk.Float32(4017.13),
                            Left: sdk.Float32(254.97),
                            TagID: sdk.String("3e8b445e-80ca-455e-bd20-e457e1858b6a"),
                            Top: sdk.Float32(5300.89),
                            Width: sdk.Float32(6223.85),
                        },
                        shared.Region{
                            Height: sdk.Float32(9447.08),
                            Left: sdk.Float32(7105.29),
                            TagID: sdk.String("e3a5aa8e-4824-4d0a-b407-5088e5186206"),
                            Top: sdk.Float32(3426.11),
                            Width: sdk.Float32(9061.72),
                        },
                        shared.Region{
                            Height: sdk.Float32(6222.31),
                            Left: sdk.Float32(85.11),
                            TagID: sdk.String("4f3b1194-b8ab-4f60-ba79-f9dfe0ab7da8"),
                            Top: sdk.Float32(6485.98),
                            Width: sdk.Float32(3339.65),
                        },
                        shared.Region{
                            Height: sdk.Float32(291),
                            Left: sdk.Float32(7908.4),
                            TagID: sdk.String("e187f86b-c173-4d68-9eee-9526f8d986e8"),
                            Top: sdk.Float32(5413.81),
                            Width: sdk.Float32(1209.19),
                        },
                    },
                    TagIds: []string{
                        "ad4f0e10-1256-43f9-8e29-e973e922a57a",
                        "15be3e06-0807-4e2b-ae3a-b8845f0597a6",
                        "0ff2a54a-31e9-4476-8a3e-865e7956f925",
                        "1a5a9da6-60ff-457b-baad-4f9efc1b4512",
                    },
                },
                shared.ImageFileCreateEntry{
                    Contents: sdk.String("cumque"),
                    Name: sdk.String("Lisa Flatley"),
                    Regions: []shared.Region{
                        shared.Region{
                            Height: sdk.Float32(5219.96),
                            Left: sdk.Float32(8710.83),
                            TagID: sdk.String("c2f61519-9ebf-4d0e-9fe6-c632ca3aed01"),
                            Top: sdk.Float32(902.33),
                            Width: sdk.Float32(4977.77),
                        },
                        shared.Region{
                            Height: sdk.Float32(6191.83),
                            Left: sdk.Float32(5810.82),
                            TagID: sdk.String("6312fde0-4771-4778-bf61-d017476360a1"),
                            Top: sdk.Float32(3447.18),
                            Width: sdk.Float32(8567.56),
                        },
                    },
                    TagIds: []string{
                        "6a660659-a1ad-4eaa-b585-1d6c645b08b6",
                        "1891baa0-fe1a-4de0-88e6-f8c5f350d8cd",
                        "b5a34181-4301-4042-9813-d5208ece7e25",
                    },
                },
            },
            TagIds: []string{
                "b668451c-6c6e-4205-a16d-eab3fec9578a",
            },
        },
        TrainingKey: "voluptas",
        ProjectID: "4584273a-8418-4d16-a309-fb0929921aef",
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
                    Contents: sdk.String("omnis"),
                    Name: sdk.String("Darrell Lang"),
                    Regions: []shared.Region{
                        shared.Region{
                            Height: sdk.Float32(5495.01),
                            Left: sdk.Float32(4152.8),
                            TagID: sdk.String("e68e4be0-5601-43f5-9da7-57a59ecfef66"),
                            Top: sdk.Float32(8953.46),
                            Width: sdk.Float32(9661.48),
                        },
                        shared.Region{
                            Height: sdk.Float32(650.82),
                            Left: sdk.Float32(7918.8),
                            TagID: sdk.String("aa3383c2-beb4-4773-b3c8-d72f64d1db1f"),
                            Top: sdk.Float32(1563.83),
                            Width: sdk.Float32(7820.9),
                        },
                        shared.Region{
                            Height: sdk.Float32(3041.98),
                            Left: sdk.Float32(2470.45),
                            TagID: sdk.String("10661e96-349e-41cf-9e06-e3a437000ae6"),
                            Top: sdk.Float32(6931.53),
                            Width: sdk.Float32(3774.06),
                        },
                        shared.Region{
                            Height: sdk.Float32(7051.48),
                            Left: sdk.Float32(8093.65),
                            TagID: sdk.String("9b8f759e-ac55-4a97-81d3-11352965bb8a"),
                            Top: sdk.Float32(4876.76),
                            Width: sdk.Float32(1446.91),
                        },
                    },
                    TagIds: []string{
                        "2611435e-139d-4bc2-a59b-1abda8c070e1",
                    },
                },
                shared.ImageFileCreateEntry{
                    Contents: sdk.String("aperiam"),
                    Name: sdk.String("Micheal Roob III"),
                    Regions: []shared.Region{
                        shared.Region{
                            Height: sdk.Float32(1729.51),
                            Left: sdk.Float32(8247.98),
                            TagID: sdk.String("1ad879ee-b966-45b8-9efb-d02bae0be2d7"),
                            Top: sdk.Float32(5101.28),
                            Width: sdk.Float32(1403.16),
                        },
                        shared.Region{
                            Height: sdk.Float32(1276.88),
                            Left: sdk.Float32(3589.95),
                            TagID: sdk.String("9e3ea4b5-197f-4924-83da-7ce52b895c53"),
                            Top: sdk.Float32(4468.77),
                            Width: sdk.Float32(7963.97),
                        },
                    },
                    TagIds: []string{
                        "454efb0b-3489-46c3-8a5a-cfbe2fd57075",
                        "77929177-deac-4646-acb5-73409e3eb1e5",
                    },
                },
                shared.ImageFileCreateEntry{
                    Contents: sdk.String("animi"),
                    Name: sdk.String("Juana Buckridge"),
                    Regions: []shared.Region{
                        shared.Region{
                            Height: sdk.Float32(568.77),
                            Left: sdk.Float32(4973.57),
                            TagID: sdk.String("f116db99-545f-4c95-ba88-970e189dbb30"),
                            Top: sdk.Float32(9639.76),
                            Width: sdk.Float32(7731.1),
                        },
                        shared.Region{
                            Height: sdk.Float32(7412.38),
                            Left: sdk.Float32(2168.7),
                            TagID: sdk.String("3ea055b1-97cd-444e-af52-d82d3513bb6f"),
                            Top: sdk.Float32(3108.4),
                            Width: sdk.Float32(5037.48),
                        },
                        shared.Region{
                            Height: sdk.Float32(7186.27),
                            Left: sdk.Float32(3924.3),
                            TagID: sdk.String("56bcdb35-ff2e-44b2-b537-a8cd9e7319c1"),
                            Top: sdk.Float32(4915.91),
                            Width: sdk.Float32(4589.7),
                        },
                    },
                    TagIds: []string{
                        "525f77b1-14ee-4b52-bf78-5fc37814d4c9",
                        "8e0c2bb8-9eb7-45da-9636-c600503d8bb3",
                        "1180f739-ae9e-4057-ab80-9e2810331f39",
                        "81d4c700-b607-4f3c-93c7-3b9da3f2ceda",
                    },
                },
            },
            TagIds: []string{
                "e23f2257-411f-4af4-b754-4e472e802857",
                "a5b40463-a7d5-475f-9400-e764ad7334ec",
            },
        },
        TrainingKey: "sunt",
        ProjectID: "b781b36a-0808-48d1-80ef-ada200ef0422",
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
        RequestBody: []byte("necessitatibus"),
        TrainingKey: "harum",
        ProjectID: "2164cf9a-b836-46c7-a3ff-da9e06bee482",
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
                    ID: sdk.String("c1fc0e11-5c80-4bff-9185-44ec42defcce"),
                    Regions: []shared.Region{
                        shared.Region{
                            Height: sdk.Float32(9691.68),
                            Left: sdk.Float32(660.74),
                            TagID: sdk.String("977773e6-3562-4a7b-808f-05e3d48fdaf3"),
                            Top: sdk.Float32(1105.22),
                            Width: sdk.Float32(2010.96),
                        },
                        shared.Region{
                            Height: sdk.Float32(6308.32),
                            Left: sdk.Float32(748.95),
                            TagID: sdk.String("f5fd9425-9c0b-436f-a5ea-944f3b756c11"),
                            Top: sdk.Float32(9431.43),
                            Width: sdk.Float32(3923.19),
                        },
                        shared.Region{
                            Height: sdk.Float32(7869.54),
                            Left: sdk.Float32(2212.18),
                            TagID: sdk.String("7a512624-3835-4bbc-85a2-3a45cefc5fde"),
                            Top: sdk.Float32(1039.9),
                            Width: sdk.Float32(53.15),
                        },
                    },
                    TagIds: []string{
                        "0ce2169e-5100-419c-adc5-e34762799bfb",
                        "be6949fb-2bb4-4eca-a6c3-d5db3adebd5d",
                        "aea4c506-a8aa-494c-8264-4cf5e9d9a457",
                    },
                },
                shared.ImageIDCreateEntry{
                    ID: sdk.String("8adc1ac6-00de-4c00-9ac8-02e2ec09ff8f"),
                    Regions: []shared.Region{
                        shared.Region{
                            Height: sdk.Float32(9926.67),
                            Left: sdk.Float32(5233.65),
                            TagID: sdk.String("16ff3477-c13e-4902-8141-25b0960a6681"),
                            Top: sdk.Float32(3564.4),
                            Width: sdk.Float32(626.88),
                        },
                    },
                    TagIds: []string{
                        "472af923-c594-49f8-bf35-0cf876ffb901",
                        "c6ecbb4e-243c-4f78-9ffa-feda53e5ae6e",
                        "0ac184c2-b9c2-447c-8837-3a40e1942f32",
                    },
                },
            },
            TagIds: []string{
                "55055756-f5d5-46d0-bd0a-f2dfe13db4f6",
                "2cba3f89-41ae-4bc0-b80a-6924d3b2ecfc",
                "c8f89501-0f5d-4d3d-afa1-804e54c82f16",
                "8a363c88-73e4-4843-80b1-f6b8ca275a60",
            },
        },
        TrainingKey: "fuga",
        ProjectID: "04c495cc-6991-471b-91c1-bdb1cf4b888e",
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
                    ID: sdk.String("dfc4ccca-99bc-47fc-8b2d-ce10873e42b0"),
                    Regions: []shared.Region{
                        shared.Region{
                            Height: sdk.Float32(4301.46),
                            Left: sdk.Float32(8733.2),
                            TagID: sdk.String("678878ba-8581-4a58-a08c-54fefa9c95f2"),
                            Top: sdk.Float32(8872.84),
                            Width: sdk.Float32(6514.67),
                        },
                    },
                    TagIds: []string{
                        "5565d307-cfee-4812-86e2-813fa4a41c48",
                        "0d3f2132-af03-4102-9514-f4cc6f18bf96",
                        "21a6a4f7-7a87-4ee3-a4be-752c65b34418",
                        "e3bb91c8-d975-4e0e-8419-d8f84f144f3e",
                    },
                },
                shared.ImageIDCreateEntry{
                    ID: sdk.String("07edcc4a-a5f3-4cab-9905-a972e0567282"),
                    Regions: []shared.Region{
                        shared.Region{
                            Height: sdk.Float32(4798.3),
                            Left: sdk.Float32(7128.93),
                            TagID: sdk.String("2d309470-bf7a-44fa-87cf-535a6fae54eb"),
                            Top: sdk.Float32(9832.75),
                            Width: sdk.Float32(3865.38),
                        },
                    },
                    TagIds: []string{
                        "c321f023-b75d-4236-bfe1-a0cc8df79f0a",
                    },
                },
                shared.ImageIDCreateEntry{
                    ID: sdk.String("396d90c3-64b7-4c15-9fba-ce188b1c4ee2"),
                    Regions: []shared.Region{
                        shared.Region{
                            Height: sdk.Float32(5582.83),
                            Left: sdk.Float32(7720.57),
                            TagID: sdk.String("6ce611fe-eb1c-47cb-9b6e-ec74378ba253"),
                            Top: sdk.Float32(1068.06),
                            Width: sdk.Float32(4810.42),
                        },
                        shared.Region{
                            Height: sdk.Float32(4568.65),
                            Left: sdk.Float32(2982.46),
                            TagID: sdk.String("7dc915ad-2caf-45dd-a723-dc0f5ae2f3a6"),
                            Top: sdk.Float32(6886.49),
                            Width: sdk.Float32(4965.78),
                        },
                        shared.Region{
                            Height: sdk.Float32(424.54),
                            Left: sdk.Float32(201.41),
                            TagID: sdk.String("87875614-3f5a-46c9-8b55-554080d40bca"),
                            Top: sdk.Float32(7837.64),
                            Width: sdk.Float32(7697.89),
                        },
                        shared.Region{
                            Height: sdk.Float32(3947.24),
                            Left: sdk.Float32(7689.2),
                            TagID: sdk.String("bd6b5f3e-c909-4304-b926-bad2553819b4"),
                            Top: sdk.Float32(4526.53),
                            Width: sdk.Float32(2611.7),
                        },
                    },
                    TagIds: []string{
                        "0ed20e56-248f-4ff6-b9a9-10abdcab6267",
                        "6696e1ec-0022-41b3-b5d8-9acb3ecfda8d",
                        "0c549ef0-3004-4978-a61f-a1cf20688f77",
                    },
                },
            },
            TagIds: []string{
                "1ffc71dc-a163-4f2a-bc80-a97ff334cddf",
                "857a9e61-876c-46ab-a1d2-9dfc94d6fecd",
                "79939006-6a6d-42d0-8035-5338cec086fa",
                "21e9152c-b311-4916-bb8e-3c8db03408d6",
            },
        },
        TrainingKey: "quibusdam",
        ProjectID: "364ffd45-5906-4d12-a3d4-8e935c2c9e81",
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
        RequestBody: []byte("sapiente"),
        TrainingKey: "ipsum",
        ProjectID: "0be3e432-02d7-4216-9765-06641870d9d2",
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
                            Height: sdk.Float32(6012.28),
                            Left: sdk.Float32(6456.09),
                            TagID: sdk.String("d030c4ec-c11a-4083-a429-068b8502a55e"),
                            Top: sdk.Float32(4813.07),
                            Width: sdk.Float32(9585.33),
                        },
                        shared.Region{
                            Height: sdk.Float32(4590.86),
                            Left: sdk.Float32(2075.12),
                            TagID: sdk.String("bc845e32-0a31-49f4-badf-947c9a867bc4"),
                            Top: sdk.Float32(1782.01),
                            Width: sdk.Float32(2993.79),
                        },
                        shared.Region{
                            Height: sdk.Float32(1711.72),
                            Left: sdk.Float32(4004.92),
                            TagID: sdk.String("665816dd-ca8e-4f51-bcb4-c593ec12cdaa"),
                            Top: sdk.Float32(8409.92),
                            Width: sdk.Float32(590.23),
                        },
                        shared.Region{
                            Height: sdk.Float32(8792.08),
                            Left: sdk.Float32(8109.82),
                            TagID: sdk.String("7afedbd8-0df4-448a-87f9-390c58880983"),
                            Top: sdk.Float32(8742.83),
                            Width: sdk.Float32(6834.9),
                        },
                    },
                    TagIds: []string{
                        "f9ef3ffd-d9f7-4f07-9af4-d35724cdb0f4",
                        "d281187d-5684-44ed-ad85-a9065e628bdf",
                        "c2032b6c-8799-423b-be13-584f7ae12c68",
                    },
                    URL: sdk.String("natus"),
                },
            },
            TagIds: []string{
                "f82ce115-7172-4305-b77d-cfa89df975e3",
            },
        },
        TrainingKey: "quis",
        ProjectID: "6686092e-9c3d-4dc5-b111-dea1026d541a",
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
                            Height: sdk.Float32(1123.91),
                            Left: sdk.Float32(6071.81),
                            TagID: sdk.String("0feb2178-0bcc-4c0d-bbdd-b484708fb4e3"),
                            Top: sdk.Float32(6170.35),
                            Width: sdk.Float32(682.53),
                        },
                        shared.Region{
                            Height: sdk.Float32(8878.35),
                            Left: sdk.Float32(4298.23),
                            TagID: sdk.String("bc158c4c-4e54-4599-aa34-2260e9b200ce"),
                            Top: sdk.Float32(4518.31),
                            Width: sdk.Float32(5371.4),
                        },
                        shared.Region{
                            Height: sdk.Float32(6663.21),
                            Left: sdk.Float32(924.48),
                            TagID: sdk.String("bd8fb7a0-a116-4ce7-a3d4-097fa30e9af7"),
                            Top: sdk.Float32(1602.6),
                            Width: sdk.Float32(3701.95),
                        },
                        shared.Region{
                            Height: sdk.Float32(7296.12),
                            Left: sdk.Float32(1539.42),
                            TagID: sdk.String("9122030d-83f5-4aeb-b799-d22e8c1f8493"),
                            Top: sdk.Float32(5460.89),
                            Width: sdk.Float32(1251.61),
                        },
                    },
                    TagIds: []string{
                        "fdc42c87-6c2c-42df-b4cf-c1c76230f841",
                        "fb1bd23f-db14-4db6-be5a-685998e22ae2",
                    },
                    URL: sdk.String("voluptatem"),
                },
                shared.ImageURLCreateEntry{
                    Regions: []shared.Region{
                        shared.Region{
                            Height: sdk.Float32(6603.39),
                            Left: sdk.Float32(629.07),
                            TagID: sdk.String("6fc2b271-a289-4c57-a854-e90439d22246"),
                            Top: sdk.Float32(3712.17),
                            Width: sdk.Float32(4268.19),
                        },
                        shared.Region{
                            Height: sdk.Float32(5841.99),
                            Left: sdk.Float32(2681.09),
                            TagID: sdk.String("62407084-f7ab-437c-af02-225194db5541"),
                            Top: sdk.Float32(618.89),
                            Width: sdk.Float32(6299.02),
                        },
                        shared.Region{
                            Height: sdk.Float32(8213.04),
                            Left: sdk.Float32(7751.38),
                            TagID: sdk.String("669af90a-26c7-4cdc-981f-068981d6bb33"),
                            Top: sdk.Float32(7935.97),
                            Width: sdk.Float32(9438.28),
                        },
                        shared.Region{
                            Height: sdk.Float32(6291.16),
                            Left: sdk.Float32(6867.84),
                            TagID: sdk.String("348c31bf-407e-4e4f-8f0c-42b78f156263"),
                            Top: sdk.Float32(5681.62),
                            Width: sdk.Float32(5493.48),
                        },
                    },
                    TagIds: []string{
                        "0dc76632-4ccb-406c-8ca1-2d02529270b8",
                        "d5722dd8-95b8-4bcf-a4db-959693352f74",
                        "533994d7-8de3-4b6e-9389-f5abb7f66255",
                    },
                    URL: sdk.String("doloremque"),
                },
            },
            TagIds: []string{
                "28382ac4-83af-4d23-95bb-a650164e06f5",
                "bf6ae591-bc8b-4def-b612-b63c205fda84",
                "0774a68a-9a35-4d08-ab6f-66fef020e9f4",
            },
        },
        TrainingKey: "numquam",
        ProjectID: "3b4257b9-92c8-4dbd-a6a6-1efa2198258f",
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
        RequestBody: []byte("pariatur"),
        TrainingKey: "aut",
        ProjectID: "a9eba47f-7d3e-4f04-9640-d6a1831c87ad",
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
        TrainingKey: "a",
        ProjectID: "596fdf1a-d837-4ae8-8c1c-19c95ba99867",
        RegionIds: []string{
            "sapiente",
            "deserunt",
            "dolor",
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
        TrainingKey: "hic",
        ImageIds: []string{
            "sint",
            "autem",
        },
        ProjectID: "991af388-ce03-4614-848c-7977a0ef2f53",
        TagIds: []string{
            "doloremque",
            "sed",
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
        TrainingKey: "voluptatum",
        ImageIds: []string{
            "a",
            "itaque",
            "eveniet",
            "repellat",
        },
        ProjectID: "934152ed-7e25-43f4-8157-deaa7170f445",
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
        TrainingKey: "est",
        ImageIds: []string{
            "maxime",
            "delectus",
            "laboriosam",
            "laboriosam",
        },
        IterationID: sdk.String("7aaf9bba-d185-4fe4-b1d6-bf5c838fbb8c"),
        ProjectID: "20cb67fc-4b42-45e9-9e62-34c9f7b79dfe",
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
        TrainingKey: "expedita",
        IterationID: sdk.String("77a5c38d-4baf-491e-906e-f890a54b475f"),
        ProjectID: "16f56d38-5a3c-44ac-a31b-99e26ced8f9f",
        TagIds: []string{
            "facilis",
            "molestias",
            "dolore",
            "et",
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
        TrainingKey: "accusantium",
        IterationID: sdk.String("f63bbf81-7837-4b01-afdd-788624189eb4"),
        OrderBy: operations.GetTaggedImagesOrderByEnumNewest.ToPointer(),
        ProjectID: "873f5033-f19d-4bf1-a5ce-4152eab9cd7e",
        Skip: sdk.Int(327263),
        TagIds: []string{
            "odit",
        },
        Take: sdk.Int(259374),
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
        TrainingKey: "error",
        IterationID: sdk.String("6a0e123b-7847-4ec5-9e1f-67f3c4cce4b6"),
        ProjectID: "d7696ff3-c574-4750-9357-e44f51f8b084",
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
        TrainingKey: "quo",
        IterationID: sdk.String("3197e193-a245-4467-b948-74c2d5cc4972"),
        OrderBy: operations.GetUntaggedImagesOrderByEnumNewest.ToPointer(),
        ProjectID: "33e66bd8-fe5d-400b-979e-f20387320590",
        Skip: sdk.Int(772604),
        Take: sdk.Int(801781),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Images != nil {
        // handle response
    }
}
```
