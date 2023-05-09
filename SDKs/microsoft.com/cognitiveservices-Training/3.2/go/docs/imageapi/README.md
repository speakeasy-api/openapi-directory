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
* [QuerySuggestedImageCountForm](#querysuggestedimagecountform) - Get count of images whose suggested tags match given tags and their probabilities are greater than or equal to the given threshold. Returns count as 0 if none found.
* [QuerySuggestedImageCountJSON](#querysuggestedimagecountjson) - Get count of images whose suggested tags match given tags and their probabilities are greater than or equal to the given threshold. Returns count as 0 if none found.
* [QuerySuggestedImageCountRaw](#querysuggestedimagecountraw) - Get count of images whose suggested tags match given tags and their probabilities are greater than or equal to the given threshold. Returns count as 0 if none found.
* [QuerySuggestedImagesForm](#querysuggestedimagesform) - Get untagged images whose suggested tags match given tags. Returns empty array if no images are found.
* [QuerySuggestedImagesJSON](#querysuggestedimagesjson) - Get untagged images whose suggested tags match given tags. Returns empty array if no images are found.
* [QuerySuggestedImagesRaw](#querysuggestedimagesraw) - Get untagged images whose suggested tags match given tags. Returns empty array if no images are found.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            ApimKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.ImageAPI.CreateImageRegionsForm(ctx, operations.CreateImageRegionsFormRequest{
        ImageRegionCreateBatch: shared.ImageRegionCreateBatch{
            Regions: []shared.ImageRegionCreateEntry{
                shared.ImageRegionCreateEntry{
                    Height: 7369.18,
                    ImageID: "73920592-9396-4fea-b596-eb10faaa2352",
                    Left: 7506.86,
                    TagID: "5955907a-ff1a-43a2-ba94-67739251aa52",
                    Top: 7783.46,
                    Width: 1965.82,
                },
                shared.ImageRegionCreateEntry{
                    Height: 9495.72,
                    ImageID: "5ad019da-1ffe-478f-897b-0074f15471b5",
                    Left: 8804.76,
                    TagID: "6e13b99d-488e-41e9-9e45-0ad2abd44269",
                    Top: 5528.22,
                    Width: 201.07,
                },
                shared.ImageRegionCreateEntry{
                    Height: 1649.4,
                    ImageID: "d502a94b-b4f6-43c9-a9e9-a3efa77dfb14",
                    Left: 7670.24,
                    TagID: "d66ae395-efb9-4ba8-8f3a-66997074ba44",
                    Top: 3834.62,
                    Width: 6180.16,
                },
                shared.ImageRegionCreateEntry{
                    Height: 7491.7,
                    ImageID: "6e214195-9890-4afa-963e-2516fe4c8b71",
                    Left: 995.69,
                    TagID: "e5b7fd2e-d028-4921-8ddc-692601fb576b",
                    Top: 505.88,
                    Width: 8663.83,
                },
            },
        },
        ProjectID: "5f0d30c5-fbb2-4587-8532-02c73d5fe9b9",
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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            ApimKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.ImageAPI.CreateImageRegionsJSON(ctx, operations.CreateImageRegionsJSONRequest{
        ImageRegionCreateBatch: shared.ImageRegionCreateBatch{
            Regions: []shared.ImageRegionCreateEntry{
                shared.ImageRegionCreateEntry{
                    Height: 7836.45,
                    ImageID: "28909b3f-e49a-48d9-8bf4-8633323f9b77",
                    Left: 9702.37,
                    TagID: "3a410067-4ebf-4692-80d1-ba77a89ebf73",
                    Top: 4560.15,
                    Width: 6630.78,
                },
            },
        },
        ProjectID: "e4203ce5-e6a9-45d8-a0d4-46ce2af7a73c",
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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            ApimKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.ImageAPI.CreateImageRegionsRaw(ctx, operations.CreateImageRegionsRawRequest{
        RequestBody: []byte("tenetur"),
        ProjectID: "3be453f8-70b3-426b-9a73-429cdb1a8422",
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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            ApimKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.ImageAPI.CreateImageTagsForm(ctx, operations.CreateImageTagsFormRequest{
        ImageTagCreateBatch: shared.ImageTagCreateBatch{
            Tags: []shared.ImageTagCreateEntry{
                shared.ImageTagCreateEntry{
                    ImageID: sdk.String("b679d232-2715-4bf0-8bb1-e31b8b90f344"),
                    TagID: sdk.String("3a1108e0-adcf-44b9-a187-9fce953f73ef"),
                },
                shared.ImageTagCreateEntry{
                    ImageID: sdk.String("7fbc7abd-74dd-439c-8f5d-2cff7c70a456"),
                    TagID: sdk.String("26d43681-3f16-4d9f-9fce-6c556146c3e2"),
                },
                shared.ImageTagCreateEntry{
                    ImageID: sdk.String("50fb008c-42e1-441a-ac36-6c8dd6b14429"),
                    TagID: sdk.String("07474778-a7bd-4466-928c-10ab3cdca425"),
                },
            },
        },
        ProjectID: "1904e523-c7e0-4bc7-978e-4796f2a70c68",
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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            ApimKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.ImageAPI.CreateImageTagsJSON(ctx, operations.CreateImageTagsJSONRequest{
        ImageTagCreateBatch: shared.ImageTagCreateBatch{
            Tags: []shared.ImageTagCreateEntry{
                shared.ImageTagCreateEntry{
                    ImageID: sdk.String("282aa482-562f-4222-a981-7ee17cbe61e6"),
                    TagID: sdk.String("b7b95bc0-ab3c-420c-8f37-89fd871f99dd"),
                },
                shared.ImageTagCreateEntry{
                    ImageID: sdk.String("2efd121a-a6f1-4e67-8bdb-04f15756082d"),
                    TagID: sdk.String("68ea19f1-d170-4513-b9d0-8086a1840394"),
                },
                shared.ImageTagCreateEntry{
                    ImageID: sdk.String("c26071f9-3f5f-4064-adac-7af515cc413a"),
                    TagID: sdk.String("a63aae8d-6786-44db-b675-fd5e60b375ed"),
                },
            },
        },
        ProjectID: "4f6fbee4-1f33-4317-be35-b60eb1ea4265",
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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            ApimKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.ImageAPI.CreateImageTagsRaw(ctx, operations.CreateImageTagsRawRequest{
        RequestBody: []byte("voluptas"),
        ProjectID: "5ba3c287-44ed-453b-88f3-a8d8f5c0b2f2",
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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            ApimKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.ImageAPI.CreateImagesFromData(ctx, operations.CreateImagesFromDataRequest{
        RequestBody: operations.CreateImagesFromDataRequestBody{
            ImageData: operations.CreateImagesFromDataRequestBodyImageData{
                Content: []byte("asperiores"),
                ImageData: "facilis",
            },
        },
        ProjectID: "7b194a27-6b26-4916-be1f-08f4294e3698",
        TagIds: []string{
            "447f603e-8b44-45e8-8ca5-5efd20e457e1",
            "858b6a89-fbe3-4a5a-a8e4-824d0ab40750",
            "88e51862-065e-4904-b3b1-194b8abf603a",
            "79f9dfe0-ab7d-4a8a-90ce-187f86bc173d",
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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            ApimKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.ImageAPI.CreateImagesFromFilesForm(ctx, operations.CreateImagesFromFilesFormRequest{
        ImageFileCreateBatch: shared.ImageFileCreateBatch{
            Images: []shared.ImageFileCreateEntry{
                shared.ImageFileCreateEntry{
                    Contents: sdk.String("atque"),
                    Name: sdk.String("Frankie Torphy"),
                    Regions: []shared.Region{
                        shared.Region{
                            Height: 1334.61,
                            Left: 4044.25,
                            TagID: "f8d986e8-81ea-4d4f-8e10-12563f94e29e",
                            Top: 5979.37,
                            Width: 4463.94,
                        },
                        shared.Region{
                            Height: 2380.43,
                            Left: 9078.76,
                            TagID: "922a57a1-5be3-4e06-8807-e2b6e3ab8845",
                            Top: 9979.63,
                            Width: 30.99,
                        },
                    },
                    TagIds: []string{
                        "97a60ff2-a54a-431e-9476-4a3e865e7956",
                        "f9251a5a-9da6-460f-b57b-faad4f9efc1b",
                    },
                },
                shared.ImageFileCreateEntry{
                    Contents: sdk.String("tempora"),
                    Name: sdk.String("Carolyn Corkery Jr."),
                    Regions: []shared.Region{
                        shared.Region{
                            Height: 1372.51,
                            Left: 4322.81,
                            TagID: "48dc2f61-5199-4ebf-90e9-fe6c632ca3ae",
                            Top: 8620.63,
                            Width: 89.31,
                        },
                    },
                    TagIds: []string{
                        "17996312-fde0-4477-9778-ff61d0174763",
                    },
                },
            },
            TagIds: []string{
                "0a15db6a-6606-459a-9ade-aab5851d6c64",
                "5b08b618-91ba-4a0f-a1ad-e008e6f8c5f3",
            },
        },
        ProjectID: "50d8cdb5-a341-4814-b010-421813d5208e",
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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            ApimKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.ImageAPI.CreateImagesFromFilesJSON(ctx, operations.CreateImagesFromFilesJSONRequest{
        ImageFileCreateBatch: shared.ImageFileCreateBatch{
            Images: []shared.ImageFileCreateEntry{
                shared.ImageFileCreateEntry{
                    Contents: sdk.String("officiis"),
                    Name: sdk.String("Jana Cremin"),
                    Regions: []shared.Region{
                        shared.Region{
                            Height: 4329.84,
                            Left: 4269.43,
                            TagID: "8451c6c6-e205-4e16-9eab-3fec9578a645",
                            Top: 5510.79,
                            Width: 2609.04,
                        },
                        shared.Region{
                            Height: 1319.03,
                            Left: 4959.7,
                            TagID: "3a8418d1-6230-49fb-8929-921aefb9f58c",
                            Top: 3004.03,
                            Width: 8363.64,
                        },
                        shared.Region{
                            Height: 5495.01,
                            Left: 4152.8,
                            TagID: "e68e4be0-5601-43f5-9da7-57a59ecfef66",
                            Top: 8953.46,
                            Width: 9661.48,
                        },
                    },
                    TagIds: []string{
                        "caa3383c-2beb-4477-b73c-8d72f64d1db1",
                    },
                },
                shared.ImageFileCreateEntry{
                    Contents: sdk.String("voluptatibus"),
                    Name: sdk.String("Robyn Gutmann Jr."),
                    Regions: []shared.Region{
                        shared.Region{
                            Height: 4069.22,
                            Left: 1076.17,
                            TagID: "e96349e1-cf9e-406e-ba43-7000ae6b6bc9",
                            Top: 7090.36,
                            Width: 5372.36,
                        },
                        shared.Region{
                            Height: 9543.34,
                            Left: 4555.79,
                            TagID: "59eac55a-9741-4d31-9352-965bb8a72026",
                            Top: 644.35,
                            Width: 635.53,
                        },
                    },
                    TagIds: []string{
                        "35e139db-c225-49b1-abda-8c070e1084cb",
                        "0672d1ad-879e-4eb9-a65b-85efbd02bae0",
                    },
                },
                shared.ImageFileCreateEntry{
                    Contents: sdk.String("expedita"),
                    Name: sdk.String("Jesse Sporer"),
                    Regions: []shared.Region{
                        shared.Region{
                            Height: 1276.88,
                            Left: 3589.95,
                            TagID: "9e3ea4b5-197f-4924-83da-7ce52b895c53",
                            Top: 4468.77,
                            Width: 7963.97,
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
                            Height: 568.77,
                            Left: 4973.57,
                            TagID: "f116db99-545f-4c95-ba88-970e189dbb30",
                            Top: 9639.76,
                            Width: 7731.1,
                        },
                        shared.Region{
                            Height: 7412.38,
                            Left: 2168.7,
                            TagID: "3ea055b1-97cd-444e-af52-d82d3513bb6f",
                            Top: 3108.4,
                            Width: 5037.48,
                        },
                        shared.Region{
                            Height: 7186.27,
                            Left: 3924.3,
                            TagID: "56bcdb35-ff2e-44b2-b537-a8cd9e7319c1",
                            Top: 4915.91,
                            Width: 4589.7,
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
        ProjectID: "1b781b36-a080-488d-900e-fada200ef042",
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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            ApimKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.ImageAPI.CreateImagesFromFilesRaw(ctx, operations.CreateImagesFromFilesRawRequest{
        RequestBody: []byte("qui"),
        ProjectID: "eb2164cf-9ab8-4366-8723-ffda9e06bee4",
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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            ApimKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.ImageAPI.CreateImagesFromPredictionsForm(ctx, operations.CreateImagesFromPredictionsFormRequest{
        ImageIDCreateBatch: shared.ImageIDCreateBatch{
            Images: []shared.ImageIDCreateEntry{
                shared.ImageIDCreateEntry{
                    ID: sdk.String("25c1fc0e-115c-480b-bf91-8544ec42defc"),
                    Regions: []shared.Region{
                        shared.Region{
                            Height: 8838.19,
                            Left: 5189.9,
                            TagID: "f1977773-e635-462a-bb40-8f05e3d48fda",
                            Top: 9623.96,
                            Width: 2452.78,
                        },
                        shared.Region{
                            Height: 1105.22,
                            Left: 2010.96,
                            TagID: "a1f5fd94-259c-40b3-af25-ea944f3b756c",
                            Top: 688.8,
                            Width: 1081.65,
                        },
                        shared.Region{
                            Height: 9431.43,
                            Left: 3923.19,
                            TagID: "c37a5126-2438-435b-bc05-a23a45cefc5f",
                            Top: 8268.06,
                            Width: 8873.63,
                        },
                        shared.Region{
                            Height: 1039.9,
                            Left: 53.15,
                            TagID: "a0ce2169-e510-4019-86dc-5e34762799bf",
                            Top: 7039.66,
                            Width: 6973.3,
                        },
                    },
                    TagIds: []string{
                        "6949fb2b-b4ec-4ae6-83d5-db3adebd5dae",
                        "a4c506a8-aa94-4c02-a44c-f5e9d9a4578a",
                        "dc1ac600-dec0-401a-8802-e2ec09ff8f0f",
                        "816ff347-7c13-4e90-ac14-125b0960a668",
                    },
                },
                shared.ImageIDCreateEntry{
                    ID: sdk.String("151a472a-f923-4c59-89f8-3f350cf876ff"),
                    Regions: []shared.Region{
                        shared.Region{
                            Height: 5983.16,
                            Left: 342.45,
                            TagID: "1c6ecbb4-e243-4cf7-89ff-afeda53e5ae6",
                            Top: 9220.94,
                            Width: 357.42,
                        },
                        shared.Region{
                            Height: 6378.4,
                            Left: 7701.28,
                            TagID: "184c2b9c-247c-4883-b3a4-0e1942f32e55",
                            Top: 510.53,
                            Width: 3503.87,
                        },
                        shared.Region{
                            Height: 3312.69,
                            Left: 4699.94,
                            TagID: "56f5d56d-0bd0-4af2-9fe1-3db4f62cba3f",
                            Top: 5100.2,
                            Width: 6211.4,
                        },
                    },
                    TagIds: []string{
                        "1aebc0b8-0a69-424d-bb2e-cfcc8f895010",
                        "f5dd3d6f-a180-44e5-8c82-f168a363c887",
                    },
                },
                shared.ImageIDCreateEntry{
                    ID: sdk.String("3e484380-b1f6-4b8c-a275-a60a04c495cc"),
                    Regions: []shared.Region{
                        shared.Region{
                            Height: 5775.9,
                            Left: 6009.34,
                            TagID: "171b51c1-bdb1-4cf4-b888-ebdfc4ccca99",
                            Top: 7268.51,
                            Width: 7748.8,
                        },
                        shared.Region{
                            Height: 4571.5,
                            Left: 9440.33,
                            TagID: "c0b2dce1-0873-4e42-b006-d678878ba858",
                            Top: 1011.07,
                            Width: 6672.13,
                        },
                    },
                    TagIds: []string{
                        "8208c54f-efa9-4c95-b2ea-c5565d307cfe",
                        "e81206e2-813f-4a4a-81c4-80d3f2132af0",
                    },
                },
            },
            TagIds: []string{
                "102d514f-4cc6-4f18-bf96-21a6a4f77a87",
            },
        },
        ProjectID: "ee3e4be7-52c6-45b3-8418-e3bb91c8d975",
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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            ApimKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.ImageAPI.CreateImagesFromPredictionsJSON(ctx, operations.CreateImagesFromPredictionsJSONRequest{
        ImageIDCreateBatch: shared.ImageIDCreateBatch{
            Images: []shared.ImageIDCreateEntry{
                shared.ImageIDCreateEntry{
                    ID: sdk.String("0e8419d8-f84f-4144-b3e0-7edcc4aa5f3c"),
                    Regions: []shared.Region{
                        shared.Region{
                            Height: 7489.73,
                            Left: 8429.74,
                            TagID: "905a972e-0567-4282-a7b2-d309470bf7a4",
                            Top: 9642.01,
                            Width: 6358.68,
                        },
                        shared.Region{
                            Height: 5314.94,
                            Left: 4826.28,
                            TagID: "cf535a6f-ae54-4ebf-a0c3-21f023b75d23",
                            Top: 3908.54,
                            Width: 4939.45,
                        },
                        shared.Region{
                            Height: 9713.6,
                            Left: 9296.19,
                            TagID: "1a0cc8df-79f0-4a39-ad90-c364b7c15dfb",
                            Top: 6496.57,
                            Width: 7709.97,
                        },
                    },
                    TagIds: []string{
                        "188b1c4e-e2c8-4c6c-a611-feeb1c7cbdb6",
                        "eec74378-ba25-4317-b47d-c915ad2caf5d",
                        "d6723dc0-f5ae-42f3-a6b7-00878756143f",
                        "5a6c98b5-5554-4080-940b-cacc6cbd6b5f",
                    },
                },
                shared.ImageIDCreateEntry{
                    ID: sdk.String("3ec90930-4f92-46ba-9255-3819b474b0ed"),
                    Regions: []shared.Region{
                        shared.Region{
                            Height: 279.46,
                            Left: 9191.71,
                            TagID: "56248fff-639a-4910-abdc-ab62676696e1",
                            Top: 9290.67,
                            Width: 7903.05,
                        },
                    },
                    TagIds: []string{
                        "0221b335-d89a-4cb3-acfd-a8d0c549ef03",
                    },
                },
                shared.ImageIDCreateEntry{
                    ID: sdk.String("004978a6-1fa1-4cf2-8688-f77c1ffc71dc"),
                    Regions: []shared.Region{
                        shared.Region{
                            Height: 665.96,
                            Left: 4057.89,
                            TagID: "3f2a3c80-a97f-4f33-8cdd-f857a9e61876",
                            Top: 7807.89,
                            Width: 4004.7,
                        },
                        shared.Region{
                            Height: 6484.97,
                            Left: 6953.47,
                            TagID: "21d29dfc-94d6-4fec-9799-390066a6d2d0",
                            Top: 327.75,
                            Width: 47.47,
                        },
                        shared.Region{
                            Height: 2441.57,
                            Left: 3568.05,
                            TagID: "5338cec0-86fa-421e-9152-cb3119167b8e",
                            Top: 2187.83,
                            Width: 7698.72,
                        },
                    },
                    TagIds: []string{
                        "db03408d-6d36-44ff-9455-906d1263d48e",
                        "935c2c9e-81f3-40be-be43-202d72165765",
                        "06641870-d9d2-41f9-ad03-0c4ecc11a083",
                    },
                },
                shared.ImageIDCreateEntry{
                    ID: sdk.String("6429068b-8502-4a55-a7f7-3bc845e320a3"),
                    Regions: []shared.Region{
                        shared.Region{
                            Height: 6218.1,
                            Left: 9738.94,
                            TagID: "4badf947-c9a8-467b-8424-26665816ddca",
                            Top: 5439.22,
                            Width: 9139.09,
                        },
                    },
                    TagIds: []string{
                        "51fcb4c5-93ec-412c-9aad-0ec7afedbd80",
                        "df448a47-f939-40c5-8880-983dabf9ef3f",
                        "fdd9f7f0-79af-44d3-9724-cdb0f4d28118",
                        "7d56844e-ded8-45a9-865e-628bdfc2032b",
                    },
                },
            },
            TagIds: []string{
                "c879923b-7e13-4584-b7ae-12c6891f82ce",
                "11571723-0537-47dc-ba89-df975e356686",
            },
        },
        ProjectID: "092e9c3d-dc5f-4111-9ea1-026d541a4d19",
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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            ApimKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.ImageAPI.CreateImagesFromPredictionsRaw(ctx, operations.CreateImagesFromPredictionsRawRequest{
        RequestBody: []byte("alias"),
        ProjectID: "feb21780-bccc-40db-bddb-484708fb4e39",
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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            ApimKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.ImageAPI.CreateImagesFromUrlsForm(ctx, operations.CreateImagesFromUrlsFormRequest{
        ImageURLCreateBatch: shared.ImageURLCreateBatch{
            Images: []shared.ImageURLCreateEntry{
                shared.ImageURLCreateEntry{
                    Regions: []shared.Region{
                        shared.Region{
                            Height: 4298.23,
                            Left: 7012.57,
                            TagID: "c158c4c4-e545-499e-a342-260e9b200ce7",
                            Top: 5371.4,
                            Width: 6663.21,
                        },
                        shared.Region{
                            Height: 924.48,
                            Left: 7104.83,
                            TagID: "d8fb7a0a-116c-4e72-bd40-97fa30e9af72",
                            Top: 3701.95,
                            Width: 7296.12,
                        },
                        shared.Region{
                            Height: 1539.42,
                            Left: 6090.94,
                            TagID: "122030d8-3f5a-4eb7-b99d-22e8c1f84938",
                            Top: 1251.61,
                            Width: 3642.84,
                        },
                        shared.Region{
                            Height: 9642.1,
                            Left: 8484.39,
                            TagID: "c42c876c-2c2d-4fb4-8fc1-c76230f841fb",
                            Top: 1021.84,
                            Width: 6981.17,
                        },
                    },
                    TagIds: []string{
                        "23fdb14d-b6be-45a6-8599-8e22ae20da16",
                        "fc2b271a-289c-457e-854e-90439d222465",
                        "69462407-084f-47ab-b7ce-f02225194db5",
                        "5410adc6-69af-490a-a6c7-cdc981f06898",
                    },
                    URL: "quae",
                },
            },
            TagIds: []string{
                "6bb33cfa-a348-4c31-bf40-7ee4fcf0c42b",
                "78f15626-398a-40dc-b663-24ccb06c8ca1",
                "2d025292-70b8-4d57-a2dd-895b8bcf24db",
                "95969335-2f74-4533-994d-78de3b6e9389",
            },
        },
        ProjectID: "f5abb7f6-6255-40a2-8382-ac483afd2315",
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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            ApimKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.ImageAPI.CreateImagesFromUrlsJSON(ctx, operations.CreateImagesFromUrlsJSONRequest{
        ImageURLCreateBatch: shared.ImageURLCreateBatch{
            Images: []shared.ImageURLCreateEntry{
                shared.ImageURLCreateEntry{
                    Regions: []shared.Region{
                        shared.Region{
                            Height: 6471.25,
                            Left: 3927.59,
                            TagID: "50164e06-f5bf-46ae-991b-c8bdef3612b6",
                            Top: 2033.96,
                            Width: 7977.12,
                        },
                        shared.Region{
                            Height: 1761.04,
                            Left: 1.86,
                            TagID: "5fda8407-74a6-48a9-a35d-086b6f66fef0",
                            Top: 1487.14,
                            Width: 334.07,
                        },
                        shared.Region{
                            Height: 9134.33,
                            Left: 5902.8,
                            TagID: "f443b425-7b99-42c8-9bda-6a61efa21982",
                            Top: 3560.07,
                            Width: 5397.03,
                        },
                    },
                    TagIds: []string{
                        "d0a9eba4-7f7d-43ef-8496-40d6a1831c87",
                        "adf596fd-f1ad-4837-ae80-c1c19c95ba99",
                        "8678fa3f-6969-491a-b388-ce03614448c7",
                        "977a0ef2-f536-4028-afee-f934152ed7e2",
                    },
                    URL: "ullam",
                },
                shared.ImageURLCreateEntry{
                    Regions: []shared.Region{
                        shared.Region{
                            Height: 9624.97,
                            Left: 2767.95,
                            TagID: "c157deaa-7170-4f44-9acc-f667aaf9bbad",
                            Top: 780.74,
                            Width: 5417.43,
                        },
                    },
                    TagIds: []string{
                        "fe431d6b-f5c8-438f-bb8c-20cb67fc4b42",
                        "5e99e623-4c9f-47b7-9dfe-b77a5c38d4ba",
                    },
                    URL: "maiores",
                },
                shared.ImageURLCreateEntry{
                    Regions: []shared.Region{
                        shared.Region{
                            Height: 752.03,
                            Left: 9015.63,
                            TagID: "506ef890-a54b-4475-b16f-56d385a3c4ac",
                            Top: 4224.07,
                            Width: 2380.22,
                        },
                        shared.Region{
                            Height: 1247.96,
                            Left: 6988.44,
                            TagID: "99e26ced-8f9f-4db9-810f-63bbf817837b",
                            Top: 457.28,
                            Width: 1127.88,
                        },
                        shared.Region{
                            Height: 6506.78,
                            Left: 9904.54,
                            TagID: "dd788624-189e-4b44-873f-5033f19dbf12",
                            Top: 3661.17,
                            Width: 7519.01,
                        },
                    },
                    TagIds: []string{
                        "4152eab9-cd7e-4522-8a6a-0e123b7847ec",
                        "59e1f67f-3c4c-4ce4-b6d7-696ff3c57475",
                        "01357e44-f51f-48b0-84c3-197e193a2454",
                        "67f94874-c2d5-4cc4-9722-33e66bd8fe5d",
                    },
                    URL: "aut",
                },
            },
            TagIds: []string{
                "b979ef20-3873-4205-90cc-c1096400313b",
            },
        },
        ProjectID: "3e5044f6-5fe7-42dc-8077-d0cc3f408efc",
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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            ApimKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.ImageAPI.CreateImagesFromUrlsRaw(ctx, operations.CreateImagesFromUrlsRawRequest{
        RequestBody: []byte("dicta"),
        ProjectID: "5ceb4d6e-1eae-40f7-9aed-f2acab58b991",
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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            ApimKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.ImageAPI.DeleteImageRegions(ctx, operations.DeleteImageRegionsRequest{
        ProjectID: "c926ddb5-8946-41e7-821c-be6d9502f0ea",
        RegionIds: []string{
            "30b69f7a-c2f7-42f8-8500-904911608207",
            "888ec661-83bf-4e96-99eb-40ec16faf75b",
            "0b532a4d-a37c-4baa-b445-2c4842c9b2ad",
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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            ApimKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.ImageAPI.DeleteImageTags(ctx, operations.DeleteImageTagsRequest{
        ImageIds: []string{
            "2dafe81a-88f4-4444-973f-ecd47353f63c",
        },
        ProjectID: "8209379a-a69c-4d5f-bcf7-9da18a7822bf",
        TagIds: []string{
            "5894e686-1adb-455f-9e5d-751c9fe8f750",
            "2bfdc345-0841-4f17-a445-6379f3fb27e2",
            "1f862657-b36f-4c6b-9f58-7ce525c67641",
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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            ApimKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.ImageAPI.DeleteImages(ctx, operations.DeleteImagesRequest{
        AllImages: sdk.Bool(false),
        AllIterations: sdk.Bool(false),
        ImageIds: []string{
            "8312e504-7b4c-421c-8b42-3abcdc91faab",
            "dd88e71f-6c48-4252-9777-1e7fd074009e",
            "f8d29de1-dd70-497b-9da0-8c57fa6c78a2",
        },
        ProjectID: "16e19baf-eca6-4191-8981-40b64ff8ae17",
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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            ApimKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.ImageAPI.GetImagesByIds(ctx, operations.GetImagesByIdsRequest{
        ImageIds: []string{
            "ef03b5f3-7e4a-4a86-8555-966732aa5dcb",
        },
        IterationID: sdk.String("6682cb70-f8cf-4d5f-b6e9-1b9a9f74846e"),
        ProjectID: "2c3309db-0536-4d9e-b5ca-006f5392c11a",
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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            ApimKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.ImageAPI.GetTaggedImageCount(ctx, operations.GetTaggedImageCountRequest{
        IterationID: sdk.String("25a8bf92-f974-428a-99a9-f8bf82211253"),
        ProjectID: "59d98387-f7a7-49cd-b2cd-2484da21729f",
        TagIds: []string{
            "ac41ef57-25f1-4169-ac1e-41d8a23c23e3",
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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            ApimKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.ImageAPI.GetTaggedImages(ctx, operations.GetTaggedImagesRequest{
        IterationID: sdk.String("4f2dfa4a-197f-46de-9221-51fe17120998"),
        OrderBy: operations.GetTaggedImagesOrderByEnumNewest.ToPointer(),
        ProjectID: "3e9f543d-8544-439e-a224-460443bc1541",
        Skip: sdk.Int(552965),
        TagIds: []string{
            "c2f56e85-da78-432e-abd6-17c3b0d51a44",
            "bf01bad8-706d-4460-82bf-bdc41ff5d4e2",
            "ae4fb5cb-35d1-4763-8f1e-db78359ecc5c",
        },
        Take: sdk.Int(701477),
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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            ApimKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.ImageAPI.GetUntaggedImageCount(ctx, operations.GetUntaggedImageCountRequest{
        IterationID: sdk.String("860f8cd5-80ba-4738-90e4-fe4447297cd3"),
        ProjectID: "b1dd3bbc-e247-4b76-84ef-f50126d71cff",
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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            ApimKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.ImageAPI.GetUntaggedImages(ctx, operations.GetUntaggedImagesRequest{
        IterationID: sdk.String("bd0eb74b-8421-4953-b44b-d3c43159d33e"),
        OrderBy: operations.GetUntaggedImagesOrderByEnumNewest.ToPointer(),
        ProjectID: "953c0011-3986-43aa-81e6-c31cc2f1fcb5",
        Skip: sdk.Int(123593),
        Take: sdk.Int(787241),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Images != nil {
        // handle response
    }
}
```

## QuerySuggestedImageCountForm

This API takes in tagIds to get count of untagged images per suggested tags for a given threshold.

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
    res, err := s.ImageAPI.QuerySuggestedImageCountForm(ctx, operations.QuerySuggestedImageCountFormRequest{
        TagFilter: shared.TagFilter{
            TagIds: []string{
                "a41ffbe9-cbd7-495e-a65e-076cc7abf616",
                "ea5c7164-1934-4b90-b2e0-9d19d2fc2f9e",
                "2e105944-b935-4d23-ba72-f90849d6aed4",
            },
            Threshold: sdk.Float64(6602.91),
        },
        IterationID: "ecb7537c-d922-42c9-bf57-491aabfa2e76",
        ProjectID: "1f0ca4d4-56ef-4103-9e68-99f0c2001e22",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.QuerySuggestedImageCountForm200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## QuerySuggestedImageCountJSON

This API takes in tagIds to get count of untagged images per suggested tags for a given threshold.

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
    res, err := s.ImageAPI.QuerySuggestedImageCountJSON(ctx, operations.QuerySuggestedImageCountJSONRequest{
        TagFilter: shared.TagFilter{
            TagIds: []string{
                "d55cc058-4a18-44d7-ad97-1fc820c65b03",
                "7bb8e0cc-8851-487e-8de0-4af28c5dddb4",
                "6aa1cfd6-d828-4da0-9319-1129646645c1",
                "d81f2904-2f56-49b7-aff0-ea2216cbe071",
            },
            Threshold: sdk.Float64(6907.61),
        },
        IterationID: "c163e279-a3b0-484d-a992-57d04f40847a",
        ProjectID: "742d8449-6cbd-4eec-b6b9-9bc63562ebfd",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.QuerySuggestedImageCountJSON200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## QuerySuggestedImageCountRaw

This API takes in tagIds to get count of untagged images per suggested tags for a given threshold.

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
    res, err := s.ImageAPI.QuerySuggestedImageCountRaw(ctx, operations.QuerySuggestedImageCountRawRequest{
        RequestBody: []byte("delectus"),
        IterationID: "55c294c0-60b0-46a1-a877-64eef6d0c6d6",
        ProjectID: "ed9c73dd-6345-4715-89a8-e870d3c5a1f9",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.QuerySuggestedImageCountRaw200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## QuerySuggestedImagesForm

This API will fetch untagged images filtered by suggested tags Ids. It returns an empty array if no images are found.

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
    res, err := s.ImageAPI.QuerySuggestedImagesForm(ctx, operations.QuerySuggestedImagesFormRequest{
        SuggestedTagAndRegionQueryToken: shared.SuggestedTagAndRegionQueryToken{
            Continuation: sdk.String("quod"),
            MaxCount: sdk.Int(169072),
            Session: sdk.String("incidunt"),
            SortBy: shared.SuggestedTagAndRegionQueryTokenSortByEnumUncertaintyAscending.ToPointer(),
            TagIds: []string{
                "7b66a1f3-0c73-4df5-b671-9890f42a4bb4",
                "38d85b26-0591-4d74-9e3c-2059c9c3f567",
                "e0e25276-5b1d-462f-8dac-e1f01216ce22",
                "39e8f25c-d0d1-49d9-99f4-39e39266cbd9",
            },
            Threshold: sdk.Float64(3126.08),
        },
        IterationID: "f7aa2b24-1136-495d-9e66-98fcc4596217",
        ProjectID: "c2977676-3342-4540-b8bf-b5971e981905",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SuggestedTagAndRegionQuery != nil {
        // handle response
    }
}
```

## QuerySuggestedImagesJSON

This API will fetch untagged images filtered by suggested tags Ids. It returns an empty array if no images are found.

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
    res, err := s.ImageAPI.QuerySuggestedImagesJSON(ctx, operations.QuerySuggestedImagesJSONRequest{
        SuggestedTagAndRegionQueryToken: shared.SuggestedTagAndRegionQueryToken{
            Continuation: sdk.String("ullam"),
            MaxCount: sdk.Int(475403),
            Session: sdk.String("adipisci"),
            SortBy: shared.SuggestedTagAndRegionQueryTokenSortByEnumUncertaintyDescending.ToPointer(),
            TagIds: []string{
                "cedbac7f-da39-4594-966b-c2ae480632b9",
                "954b6fa2-2063-4698-a855-3cb10006bef4",
                "921ec205-3b74-4936-aac8-ee0f2bf19588",
            },
            Threshold: sdk.Float64(8135.44),
        },
        IterationID: "40d03f3d-eba2-497b-a3e9-0bc40df868fd",
        ProjectID: "52405cb3-31d4-492f-8f12-7fb0e0bf1f82",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SuggestedTagAndRegionQuery != nil {
        // handle response
    }
}
```

## QuerySuggestedImagesRaw

This API will fetch untagged images filtered by suggested tags Ids. It returns an empty array if no images are found.

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
    res, err := s.ImageAPI.QuerySuggestedImagesRaw(ctx, operations.QuerySuggestedImagesRawRequest{
        RequestBody: []byte("inventore"),
        IterationID: "7978d0ac-ca77-4aeb-bb70-21a52046b64e",
        ProjectID: "99fb0e67-e094-4fdf-ad55-40ef53a34a1b",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SuggestedTagAndRegionQuery != nil {
        // handle response
    }
}
```
