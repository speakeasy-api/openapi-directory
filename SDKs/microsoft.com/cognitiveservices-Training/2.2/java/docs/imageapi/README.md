# imageApi

### Available Operations

* [createImageRegionsForm](#createimageregionsform) - Create a set of image regions.
* [createImageRegionsJson](#createimageregionsjson) - Create a set of image regions.
* [createImageRegionsRaw](#createimageregionsraw) - Create a set of image regions.
* [createImageTagsForm](#createimagetagsform) - Associate a set of images with a set of tags.
* [createImageTagsJson](#createimagetagsjson) - Associate a set of images with a set of tags.
* [createImageTagsRaw](#createimagetagsraw) - Associate a set of images with a set of tags.
* [createImagesFromData](#createimagesfromdata) - Add the provided images to the set of training images.
* [createImagesFromFilesForm](#createimagesfromfilesform) - Add the provided batch of images to the set of training images.
* [createImagesFromFilesJson](#createimagesfromfilesjson) - Add the provided batch of images to the set of training images.
* [createImagesFromFilesRaw](#createimagesfromfilesraw) - Add the provided batch of images to the set of training images.
* [createImagesFromPredictionsForm](#createimagesfrompredictionsform) - Add the specified predicted images to the set of training images.
* [createImagesFromPredictionsJson](#createimagesfrompredictionsjson) - Add the specified predicted images to the set of training images.
* [createImagesFromPredictionsRaw](#createimagesfrompredictionsraw) - Add the specified predicted images to the set of training images.
* [createImagesFromUrlsForm](#createimagesfromurlsform) - Add the provided images urls to the set of training images.
* [createImagesFromUrlsJson](#createimagesfromurlsjson) - Add the provided images urls to the set of training images.
* [createImagesFromUrlsRaw](#createimagesfromurlsraw) - Add the provided images urls to the set of training images.
* [deleteImageRegions](#deleteimageregions) - Delete a set of image regions.
* [deleteImageTags](#deleteimagetags) - Remove a set of tags from a set of images.
* [deleteImages](#deleteimages) - Delete images from the set of training images.
* [getImagesByIds](#getimagesbyids) - Get images by id for a given project iteration.
* [getTaggedImageCount](#gettaggedimagecount) - Gets the number of images tagged with the provided {tagIds}.
* [getTaggedImages](#gettaggedimages) - Get tagged images for a given project iteration.
* [getUntaggedImageCount](#getuntaggedimagecount) - Gets the number of untagged images.
* [getUntaggedImages](#getuntaggedimages) - Get untagged images for a given project iteration.

## createImageRegionsForm

This API accepts a batch of image regions, and optionally tags, to update existing images with region information.
There is a limit of 64 entries in the batch.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateImageRegionsFormRequest;
import org.openapis.openapi.models.operations.CreateImageRegionsFormResponse;
import org.openapis.openapi.models.shared.ImageRegionCreateBatch;
import org.openapis.openapi.models.shared.ImageRegionCreateEntry;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateImageRegionsFormRequest req = new CreateImageRegionsFormRequest(                new ImageRegionCreateBatch() {{
                                regions = new org.openapis.openapi.models.shared.ImageRegionCreateEntry[]{{
                                    add(new ImageRegionCreateEntry() {{
                                        height = 5684.34;
                                        imageId = "20592939-6fea-4759-aeb1-0faaa2352c59";
                                        left = 3637.11;
                                        tagId = "5907aff1-a3a2-4fa9-8677-39251aa52c3f";
                                        top = 3687.25;
                                        width = 6625.27;
                                    }}),
                                }};
                            }};, "possimus", "019da1ff-e78f-4097-b007-4f15471b5e6e");            

            CreateImageRegionsFormResponse res = sdk.imageApi.createImageRegionsForm(req);

            if (res.imageRegionCreateSummary != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createImageRegionsJson

This API accepts a batch of image regions, and optionally tags, to update existing images with region information.
There is a limit of 64 entries in the batch.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateImageRegionsJsonRequest;
import org.openapis.openapi.models.operations.CreateImageRegionsJsonResponse;
import org.openapis.openapi.models.shared.ImageRegionCreateBatch;
import org.openapis.openapi.models.shared.ImageRegionCreateEntry;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateImageRegionsJsonRequest req = new CreateImageRegionsJsonRequest(                new ImageRegionCreateBatch() {{
                                regions = new org.openapis.openapi.models.shared.ImageRegionCreateEntry[]{{
                                    add(new ImageRegionCreateEntry() {{
                                        height = 2168.22;
                                        imageId = "b99d488e-1e91-4e45-8ad2-abd44269802d";
                                        left = 3698.08;
                                        tagId = "02a94bb4-f63c-4969-a9a3-efa77dfb14cd";
                                        top = 4118.2;
                                        width = 3965.06;
                                    }}),
                                }};
                            }};, "laborum", "e395efb9-ba88-4f3a-a699-7074ba4469b6");            

            CreateImageRegionsJsonResponse res = sdk.imageApi.createImageRegionsJson(req);

            if (res.imageRegionCreateSummary != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createImageRegionsRaw

This API accepts a batch of image regions, and optionally tags, to update existing images with region information.
There is a limit of 64 entries in the batch.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateImageRegionsRawRequest;
import org.openapis.openapi.models.operations.CreateImageRegionsRawResponse;
import org.openapis.openapi.models.shared.ImageRegionCreateBatch;
import org.openapis.openapi.models.shared.ImageRegionCreateEntry;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateImageRegionsRawRequest req = new CreateImageRegionsRawRequest("vero".getBytes(), "aspernatur", "14195989-0afa-4563-a251-6fe4c8b711e5");            

            CreateImageRegionsRawResponse res = sdk.imageApi.createImageRegionsRaw(req);

            if (res.imageRegionCreateSummary != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createImageTagsForm

Associate a set of images with a set of tags.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateImageTagsFormRequest;
import org.openapis.openapi.models.operations.CreateImageTagsFormResponse;
import org.openapis.openapi.models.shared.ImageTagCreateBatch;
import org.openapis.openapi.models.shared.ImageTagCreateEntry;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateImageTagsFormRequest req = new CreateImageTagsFormRequest(                new ImageTagCreateBatch() {{
                                tags = new org.openapis.openapi.models.shared.ImageTagCreateEntry[]{{
                                    add(new ImageTagCreateEntry() {{
                                        imageId = "7fd2ed02-8921-4cdd-8692-601fb576b0d5";
                                        tagId = "f0d30c5f-bb25-4870-9320-2c73d5fe9b90";
                                    }}),
                                    add(new ImageTagCreateEntry() {{
                                        imageId = "c28909b3-fe49-4a8d-9cbf-48633323f9b7";
                                        tagId = "7f3a4100-674e-4bf6-9280-d1ba77a89ebf";
                                    }}),
                                    add(new ImageTagCreateEntry() {{
                                        imageId = "737ae420-3ce5-4e6a-95d8-a0d446ce2af7";
                                        tagId = "a73cf3be-453f-4870-b326-b5a73429cdb1";
                                    }}),
                                }};
                            }};, "laborum", "8422bb67-9d23-4227-95bf-0cbb1e31b8b9");            

            CreateImageTagsFormResponse res = sdk.imageApi.createImageTagsForm(req);

            if (res.imageTagCreateSummary != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createImageTagsJson

Associate a set of images with a set of tags.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateImageTagsJsonRequest;
import org.openapis.openapi.models.operations.CreateImageTagsJsonResponse;
import org.openapis.openapi.models.shared.ImageTagCreateBatch;
import org.openapis.openapi.models.shared.ImageTagCreateEntry;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateImageTagsJsonRequest req = new CreateImageTagsJsonRequest(                new ImageTagCreateBatch() {{
                                tags = new org.openapis.openapi.models.shared.ImageTagCreateEntry[]{{
                                    add(new ImageTagCreateEntry() {{
                                        imageId = "f3443a11-08e0-4adc-b4b9-21879fce953f";
                                        tagId = "73ef7fbc-7abd-474d-939c-0f5d2cff7c70";
                                    }}),
                                }};
                            }};, "officia", "45626d43-6813-4f16-99f5-fce6c556146c");            

            CreateImageTagsJsonResponse res = sdk.imageApi.createImageTagsJson(req);

            if (res.imageTagCreateSummary != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createImageTagsRaw

Associate a set of images with a set of tags.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateImageTagsRawRequest;
import org.openapis.openapi.models.operations.CreateImageTagsRawResponse;
import org.openapis.openapi.models.shared.ImageTagCreateBatch;
import org.openapis.openapi.models.shared.ImageTagCreateEntry;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateImageTagsRawRequest req = new CreateImageTagsRawRequest("consectetur".getBytes(), "recusandae", "250fb008-c42e-4141-aac3-66c8dd6b1442");            

            CreateImageTagsRawResponse res = sdk.imageApi.createImageTagsRaw(req);

            if (res.imageTagCreateSummary != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createImagesFromData

This API accepts body content as multipart/form-data and application/octet-stream. When using multipart
multiple image files can be sent at once, with a maximum of 64 files

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateImagesFromDataRequest;
import org.openapis.openapi.models.operations.CreateImagesFromDataRequestBody;
import org.openapis.openapi.models.operations.CreateImagesFromDataRequestBodyImageData;
import org.openapis.openapi.models.operations.CreateImagesFromDataResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateImagesFromDataRequest req = new CreateImagesFromDataRequest(                new CreateImagesFromDataRequestBody(                new CreateImagesFromDataRequestBodyImageData("provident".getBytes(), "ipsa"););, "molestiae", "474778a7-bd46-46d2-8c10-ab3cdca42519") {{
                tagIds = new String[]{{
                    add("tempora"),
                }};
            }};            

            CreateImagesFromDataResponse res = sdk.imageApi.createImagesFromData(req);

            if (res.imageCreateSummary != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createImagesFromFilesForm

This API accepts a batch of files, and optionally tags, to create images. There is a limit of 64 images and 20 tags.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateImagesFromFilesFormRequest;
import org.openapis.openapi.models.operations.CreateImagesFromFilesFormResponse;
import org.openapis.openapi.models.shared.ImageFileCreateBatch;
import org.openapis.openapi.models.shared.ImageFileCreateEntry;
import org.openapis.openapi.models.shared.Region;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateImagesFromFilesFormRequest req = new CreateImagesFromFilesFormRequest(                new ImageFileCreateBatch() {{
                                images = new org.openapis.openapi.models.shared.ImageFileCreateEntry[]{{
                                    add(new ImageFileCreateEntry() {{
                                        contents = "ipsam";
                                        name = "Emily Satterfield";
                                        regions = new org.openapis.openapi.models.shared.Region[]{{
                                            add(new Region() {{
                                                height = 7151.79;
                                                left = 7997.96;
                                                tagId = "7178e479-6f2a-470c-a882-82aa482562f2";
                                                top = 1871.31;
                                                width = 1294.12;
                                            }}),
                                        }};
                                        tagIds = new String[]{{
                                            add("9817ee17-cbe6-41e6-b7b9-5bc0ab3c20c4"),
                                            add("f3789fd8-71f9-49dd-aefd-121aa6f1e674"),
                                            add("bdb04f15-7560-482d-a8ea-19f1d1705133"),
                                            add("9d08086a-1840-4394-8260-71f93f5f0642"),
                                        }};
                                    }}),
                                    add(new ImageFileCreateEntry() {{
                                        contents = "repellendus";
                                        name = "Simon Kuhn";
                                        regions = new org.openapis.openapi.models.shared.Region[]{{
                                            add(new Region() {{
                                                height = 653.04;
                                                left = 3127.53;
                                                tagId = "cc413aa6-3aae-48d6-b864-dbb675fd5e60";
                                                top = 7386.83;
                                                width = 2326.27;
                                            }}),
                                            add(new Region() {{
                                                height = 4490.83;
                                                left = 3485.19;
                                                tagId = "ed4f6fbe-e41f-4333-97fe-35b60eb1ea42";
                                                top = 3790.57;
                                                width = 3742.44;
                                            }}),
                                        }};
                                        tagIds = new String[]{{
                                            add("5ba3c287-44ed-453b-88f3-a8d8f5c0b2f2"),
                                            add("fb7b194a-276b-4269-96fe-1f08f4294e36"),
                                        }};
                                    }}),
                                    add(new ImageFileCreateEntry() {{
                                        contents = "occaecati";
                                        name = "Courtney Goldner";
                                        regions = new org.openapis.openapi.models.shared.Region[]{{
                                            add(new Region() {{
                                                height = 4017.13;
                                                left = 254.97;
                                                tagId = "3e8b445e-80ca-455e-bd20-e457e1858b6a";
                                                top = 5300.89;
                                                width = 6223.85;
                                            }}),
                                            add(new Region() {{
                                                height = 9447.08;
                                                left = 7105.29;
                                                tagId = "e3a5aa8e-4824-4d0a-b407-5088e5186206";
                                                top = 3426.11;
                                                width = 9061.72;
                                            }}),
                                            add(new Region() {{
                                                height = 6222.31;
                                                left = 85.11;
                                                tagId = "4f3b1194-b8ab-4f60-ba79-f9dfe0ab7da8";
                                                top = 6485.98;
                                                width = 3339.65;
                                            }}),
                                            add(new Region() {{
                                                height = 291;
                                                left = 7908.4;
                                                tagId = "e187f86b-c173-4d68-9eee-9526f8d986e8";
                                                top = 5413.81;
                                                width = 1209.19;
                                            }}),
                                        }};
                                        tagIds = new String[]{{
                                            add("ad4f0e10-1256-43f9-8e29-e973e922a57a"),
                                            add("15be3e06-0807-4e2b-ae3a-b8845f0597a6"),
                                            add("0ff2a54a-31e9-4476-8a3e-865e7956f925"),
                                            add("1a5a9da6-60ff-457b-baad-4f9efc1b4512"),
                                        }};
                                    }}),
                                    add(new ImageFileCreateEntry() {{
                                        contents = "cumque";
                                        name = "Lisa Flatley";
                                        regions = new org.openapis.openapi.models.shared.Region[]{{
                                            add(new Region() {{
                                                height = 5219.96;
                                                left = 8710.83;
                                                tagId = "c2f61519-9ebf-4d0e-9fe6-c632ca3aed01";
                                                top = 902.33;
                                                width = 4977.77;
                                            }}),
                                            add(new Region() {{
                                                height = 6191.83;
                                                left = 5810.82;
                                                tagId = "6312fde0-4771-4778-bf61-d017476360a1";
                                                top = 3447.18;
                                                width = 8567.56;
                                            }}),
                                        }};
                                        tagIds = new String[]{{
                                            add("6a660659-a1ad-4eaa-b585-1d6c645b08b6"),
                                            add("1891baa0-fe1a-4de0-88e6-f8c5f350d8cd"),
                                            add("b5a34181-4301-4042-9813-d5208ece7e25"),
                                        }};
                                    }}),
                                }};
                                tagIds = new String[]{{
                                    add("b668451c-6c6e-4205-a16d-eab3fec9578a"),
                                }};
                            }};, "voluptas", "4584273a-8418-4d16-a309-fb0929921aef");            

            CreateImagesFromFilesFormResponse res = sdk.imageApi.createImagesFromFilesForm(req);

            if (res.imageCreateSummary != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createImagesFromFilesJson

This API accepts a batch of files, and optionally tags, to create images. There is a limit of 64 images and 20 tags.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateImagesFromFilesJsonRequest;
import org.openapis.openapi.models.operations.CreateImagesFromFilesJsonResponse;
import org.openapis.openapi.models.shared.ImageFileCreateBatch;
import org.openapis.openapi.models.shared.ImageFileCreateEntry;
import org.openapis.openapi.models.shared.Region;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateImagesFromFilesJsonRequest req = new CreateImagesFromFilesJsonRequest(                new ImageFileCreateBatch() {{
                                images = new org.openapis.openapi.models.shared.ImageFileCreateEntry[]{{
                                    add(new ImageFileCreateEntry() {{
                                        contents = "omnis";
                                        name = "Darrell Lang";
                                        regions = new org.openapis.openapi.models.shared.Region[]{{
                                            add(new Region() {{
                                                height = 5495.01;
                                                left = 4152.8;
                                                tagId = "e68e4be0-5601-43f5-9da7-57a59ecfef66";
                                                top = 8953.46;
                                                width = 9661.48;
                                            }}),
                                            add(new Region() {{
                                                height = 650.82;
                                                left = 7918.8;
                                                tagId = "aa3383c2-beb4-4773-b3c8-d72f64d1db1f";
                                                top = 1563.83;
                                                width = 7820.9;
                                            }}),
                                            add(new Region() {{
                                                height = 3041.98;
                                                left = 2470.45;
                                                tagId = "10661e96-349e-41cf-9e06-e3a437000ae6";
                                                top = 6931.53;
                                                width = 3774.06;
                                            }}),
                                            add(new Region() {{
                                                height = 7051.48;
                                                left = 8093.65;
                                                tagId = "9b8f759e-ac55-4a97-81d3-11352965bb8a";
                                                top = 4876.76;
                                                width = 1446.91;
                                            }}),
                                        }};
                                        tagIds = new String[]{{
                                            add("2611435e-139d-4bc2-a59b-1abda8c070e1"),
                                        }};
                                    }}),
                                    add(new ImageFileCreateEntry() {{
                                        contents = "aperiam";
                                        name = "Micheal Roob III";
                                        regions = new org.openapis.openapi.models.shared.Region[]{{
                                            add(new Region() {{
                                                height = 1729.51;
                                                left = 8247.98;
                                                tagId = "1ad879ee-b966-45b8-9efb-d02bae0be2d7";
                                                top = 5101.28;
                                                width = 1403.16;
                                            }}),
                                            add(new Region() {{
                                                height = 1276.88;
                                                left = 3589.95;
                                                tagId = "9e3ea4b5-197f-4924-83da-7ce52b895c53";
                                                top = 4468.77;
                                                width = 7963.97;
                                            }}),
                                        }};
                                        tagIds = new String[]{{
                                            add("454efb0b-3489-46c3-8a5a-cfbe2fd57075"),
                                            add("77929177-deac-4646-acb5-73409e3eb1e5"),
                                        }};
                                    }}),
                                    add(new ImageFileCreateEntry() {{
                                        contents = "animi";
                                        name = "Juana Buckridge";
                                        regions = new org.openapis.openapi.models.shared.Region[]{{
                                            add(new Region() {{
                                                height = 568.77;
                                                left = 4973.57;
                                                tagId = "f116db99-545f-4c95-ba88-970e189dbb30";
                                                top = 9639.76;
                                                width = 7731.1;
                                            }}),
                                            add(new Region() {{
                                                height = 7412.38;
                                                left = 2168.7;
                                                tagId = "3ea055b1-97cd-444e-af52-d82d3513bb6f";
                                                top = 3108.4;
                                                width = 5037.48;
                                            }}),
                                            add(new Region() {{
                                                height = 7186.27;
                                                left = 3924.3;
                                                tagId = "56bcdb35-ff2e-44b2-b537-a8cd9e7319c1";
                                                top = 4915.91;
                                                width = 4589.7;
                                            }}),
                                        }};
                                        tagIds = new String[]{{
                                            add("525f77b1-14ee-4b52-bf78-5fc37814d4c9"),
                                            add("8e0c2bb8-9eb7-45da-9636-c600503d8bb3"),
                                            add("1180f739-ae9e-4057-ab80-9e2810331f39"),
                                            add("81d4c700-b607-4f3c-93c7-3b9da3f2ceda"),
                                        }};
                                    }}),
                                }};
                                tagIds = new String[]{{
                                    add("e23f2257-411f-4af4-b754-4e472e802857"),
                                    add("a5b40463-a7d5-475f-9400-e764ad7334ec"),
                                }};
                            }};, "sunt", "b781b36a-0808-48d1-80ef-ada200ef0422");            

            CreateImagesFromFilesJsonResponse res = sdk.imageApi.createImagesFromFilesJson(req);

            if (res.imageCreateSummary != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createImagesFromFilesRaw

This API accepts a batch of files, and optionally tags, to create images. There is a limit of 64 images and 20 tags.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateImagesFromFilesRawRequest;
import org.openapis.openapi.models.operations.CreateImagesFromFilesRawResponse;
import org.openapis.openapi.models.shared.ImageFileCreateBatch;
import org.openapis.openapi.models.shared.ImageFileCreateEntry;
import org.openapis.openapi.models.shared.Region;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateImagesFromFilesRawRequest req = new CreateImagesFromFilesRawRequest("necessitatibus".getBytes(), "harum", "2164cf9a-b836-46c7-a3ff-da9e06bee482");            

            CreateImagesFromFilesRawResponse res = sdk.imageApi.createImagesFromFilesRaw(req);

            if (res.imageCreateSummary != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createImagesFromPredictionsForm

This API creates a batch of images from predicted images specified. There is a limit of 64 images and 20 tags.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateImagesFromPredictionsFormRequest;
import org.openapis.openapi.models.operations.CreateImagesFromPredictionsFormResponse;
import org.openapis.openapi.models.shared.ImageIdCreateBatch;
import org.openapis.openapi.models.shared.ImageIdCreateEntry;
import org.openapis.openapi.models.shared.Region;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateImagesFromPredictionsFormRequest req = new CreateImagesFromPredictionsFormRequest(                new ImageIdCreateBatch() {{
                                images = new org.openapis.openapi.models.shared.ImageIdCreateEntry[]{{
                                    add(new ImageIdCreateEntry() {{
                                        id = "c1fc0e11-5c80-4bff-9185-44ec42defcce";
                                        regions = new org.openapis.openapi.models.shared.Region[]{{
                                            add(new Region() {{
                                                height = 9691.68;
                                                left = 660.74;
                                                tagId = "977773e6-3562-4a7b-808f-05e3d48fdaf3";
                                                top = 1105.22;
                                                width = 2010.96;
                                            }}),
                                            add(new Region() {{
                                                height = 6308.32;
                                                left = 748.95;
                                                tagId = "f5fd9425-9c0b-436f-a5ea-944f3b756c11";
                                                top = 9431.43;
                                                width = 3923.19;
                                            }}),
                                            add(new Region() {{
                                                height = 7869.54;
                                                left = 2212.18;
                                                tagId = "7a512624-3835-4bbc-85a2-3a45cefc5fde";
                                                top = 1039.9;
                                                width = 53.15;
                                            }}),
                                        }};
                                        tagIds = new String[]{{
                                            add("0ce2169e-5100-419c-adc5-e34762799bfb"),
                                            add("be6949fb-2bb4-4eca-a6c3-d5db3adebd5d"),
                                            add("aea4c506-a8aa-494c-8264-4cf5e9d9a457"),
                                        }};
                                    }}),
                                    add(new ImageIdCreateEntry() {{
                                        id = "8adc1ac6-00de-4c00-9ac8-02e2ec09ff8f";
                                        regions = new org.openapis.openapi.models.shared.Region[]{{
                                            add(new Region() {{
                                                height = 9926.67;
                                                left = 5233.65;
                                                tagId = "16ff3477-c13e-4902-8141-25b0960a6681";
                                                top = 3564.4;
                                                width = 626.88;
                                            }}),
                                        }};
                                        tagIds = new String[]{{
                                            add("472af923-c594-49f8-bf35-0cf876ffb901"),
                                            add("c6ecbb4e-243c-4f78-9ffa-feda53e5ae6e"),
                                            add("0ac184c2-b9c2-447c-8837-3a40e1942f32"),
                                        }};
                                    }}),
                                }};
                                tagIds = new String[]{{
                                    add("55055756-f5d5-46d0-bd0a-f2dfe13db4f6"),
                                    add("2cba3f89-41ae-4bc0-b80a-6924d3b2ecfc"),
                                    add("c8f89501-0f5d-4d3d-afa1-804e54c82f16"),
                                    add("8a363c88-73e4-4843-80b1-f6b8ca275a60"),
                                }};
                            }};, "fuga", "04c495cc-6991-471b-91c1-bdb1cf4b888e");            

            CreateImagesFromPredictionsFormResponse res = sdk.imageApi.createImagesFromPredictionsForm(req);

            if (res.imageCreateSummary != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createImagesFromPredictionsJson

This API creates a batch of images from predicted images specified. There is a limit of 64 images and 20 tags.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateImagesFromPredictionsJsonRequest;
import org.openapis.openapi.models.operations.CreateImagesFromPredictionsJsonResponse;
import org.openapis.openapi.models.shared.ImageIdCreateBatch;
import org.openapis.openapi.models.shared.ImageIdCreateEntry;
import org.openapis.openapi.models.shared.Region;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateImagesFromPredictionsJsonRequest req = new CreateImagesFromPredictionsJsonRequest(                new ImageIdCreateBatch() {{
                                images = new org.openapis.openapi.models.shared.ImageIdCreateEntry[]{{
                                    add(new ImageIdCreateEntry() {{
                                        id = "dfc4ccca-99bc-47fc-8b2d-ce10873e42b0";
                                        regions = new org.openapis.openapi.models.shared.Region[]{{
                                            add(new Region() {{
                                                height = 4301.46;
                                                left = 8733.2;
                                                tagId = "678878ba-8581-4a58-a08c-54fefa9c95f2";
                                                top = 8872.84;
                                                width = 6514.67;
                                            }}),
                                        }};
                                        tagIds = new String[]{{
                                            add("5565d307-cfee-4812-86e2-813fa4a41c48"),
                                            add("0d3f2132-af03-4102-9514-f4cc6f18bf96"),
                                            add("21a6a4f7-7a87-4ee3-a4be-752c65b34418"),
                                            add("e3bb91c8-d975-4e0e-8419-d8f84f144f3e"),
                                        }};
                                    }}),
                                    add(new ImageIdCreateEntry() {{
                                        id = "07edcc4a-a5f3-4cab-9905-a972e0567282";
                                        regions = new org.openapis.openapi.models.shared.Region[]{{
                                            add(new Region() {{
                                                height = 4798.3;
                                                left = 7128.93;
                                                tagId = "2d309470-bf7a-44fa-87cf-535a6fae54eb";
                                                top = 9832.75;
                                                width = 3865.38;
                                            }}),
                                        }};
                                        tagIds = new String[]{{
                                            add("c321f023-b75d-4236-bfe1-a0cc8df79f0a"),
                                        }};
                                    }}),
                                    add(new ImageIdCreateEntry() {{
                                        id = "396d90c3-64b7-4c15-9fba-ce188b1c4ee2";
                                        regions = new org.openapis.openapi.models.shared.Region[]{{
                                            add(new Region() {{
                                                height = 5582.83;
                                                left = 7720.57;
                                                tagId = "6ce611fe-eb1c-47cb-9b6e-ec74378ba253";
                                                top = 1068.06;
                                                width = 4810.42;
                                            }}),
                                            add(new Region() {{
                                                height = 4568.65;
                                                left = 2982.46;
                                                tagId = "7dc915ad-2caf-45dd-a723-dc0f5ae2f3a6";
                                                top = 6886.49;
                                                width = 4965.78;
                                            }}),
                                            add(new Region() {{
                                                height = 424.54;
                                                left = 201.41;
                                                tagId = "87875614-3f5a-46c9-8b55-554080d40bca";
                                                top = 7837.64;
                                                width = 7697.89;
                                            }}),
                                            add(new Region() {{
                                                height = 3947.24;
                                                left = 7689.2;
                                                tagId = "bd6b5f3e-c909-4304-b926-bad2553819b4";
                                                top = 4526.53;
                                                width = 2611.7;
                                            }}),
                                        }};
                                        tagIds = new String[]{{
                                            add("0ed20e56-248f-4ff6-b9a9-10abdcab6267"),
                                            add("6696e1ec-0022-41b3-b5d8-9acb3ecfda8d"),
                                            add("0c549ef0-3004-4978-a61f-a1cf20688f77"),
                                        }};
                                    }}),
                                }};
                                tagIds = new String[]{{
                                    add("1ffc71dc-a163-4f2a-bc80-a97ff334cddf"),
                                    add("857a9e61-876c-46ab-a1d2-9dfc94d6fecd"),
                                    add("79939006-6a6d-42d0-8035-5338cec086fa"),
                                    add("21e9152c-b311-4916-bb8e-3c8db03408d6"),
                                }};
                            }};, "quibusdam", "364ffd45-5906-4d12-a3d4-8e935c2c9e81");            

            CreateImagesFromPredictionsJsonResponse res = sdk.imageApi.createImagesFromPredictionsJson(req);

            if (res.imageCreateSummary != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createImagesFromPredictionsRaw

This API creates a batch of images from predicted images specified. There is a limit of 64 images and 20 tags.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateImagesFromPredictionsRawRequest;
import org.openapis.openapi.models.operations.CreateImagesFromPredictionsRawResponse;
import org.openapis.openapi.models.shared.ImageIdCreateBatch;
import org.openapis.openapi.models.shared.ImageIdCreateEntry;
import org.openapis.openapi.models.shared.Region;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateImagesFromPredictionsRawRequest req = new CreateImagesFromPredictionsRawRequest("sapiente".getBytes(), "ipsum", "0be3e432-02d7-4216-9765-06641870d9d2");            

            CreateImagesFromPredictionsRawResponse res = sdk.imageApi.createImagesFromPredictionsRaw(req);

            if (res.imageCreateSummary != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createImagesFromUrlsForm

This API accepts a batch of urls, and optionally tags, to create images. There is a limit of 64 images and 20 tags.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateImagesFromUrlsFormRequest;
import org.openapis.openapi.models.operations.CreateImagesFromUrlsFormResponse;
import org.openapis.openapi.models.shared.ImageUrlCreateBatch;
import org.openapis.openapi.models.shared.ImageUrlCreateEntry;
import org.openapis.openapi.models.shared.Region;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateImagesFromUrlsFormRequest req = new CreateImagesFromUrlsFormRequest(                new ImageUrlCreateBatch() {{
                                images = new org.openapis.openapi.models.shared.ImageUrlCreateEntry[]{{
                                    add(new ImageUrlCreateEntry() {{
                                        regions = new org.openapis.openapi.models.shared.Region[]{{
                                            add(new Region() {{
                                                height = 6012.28;
                                                left = 6456.09;
                                                tagId = "d030c4ec-c11a-4083-a429-068b8502a55e";
                                                top = 4813.07;
                                                width = 9585.33;
                                            }}),
                                            add(new Region() {{
                                                height = 4590.86;
                                                left = 2075.12;
                                                tagId = "bc845e32-0a31-49f4-badf-947c9a867bc4";
                                                top = 1782.01;
                                                width = 2993.79;
                                            }}),
                                            add(new Region() {{
                                                height = 1711.72;
                                                left = 4004.92;
                                                tagId = "665816dd-ca8e-4f51-bcb4-c593ec12cdaa";
                                                top = 8409.92;
                                                width = 590.23;
                                            }}),
                                            add(new Region() {{
                                                height = 8792.08;
                                                left = 8109.82;
                                                tagId = "7afedbd8-0df4-448a-87f9-390c58880983";
                                                top = 8742.83;
                                                width = 6834.9;
                                            }}),
                                        }};
                                        tagIds = new String[]{{
                                            add("f9ef3ffd-d9f7-4f07-9af4-d35724cdb0f4"),
                                            add("d281187d-5684-44ed-ad85-a9065e628bdf"),
                                            add("c2032b6c-8799-423b-be13-584f7ae12c68"),
                                        }};
                                        url = "natus";
                                    }}),
                                }};
                                tagIds = new String[]{{
                                    add("f82ce115-7172-4305-b77d-cfa89df975e3"),
                                }};
                            }};, "quis", "6686092e-9c3d-4dc5-b111-dea1026d541a");            

            CreateImagesFromUrlsFormResponse res = sdk.imageApi.createImagesFromUrlsForm(req);

            if (res.imageCreateSummary != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createImagesFromUrlsJson

This API accepts a batch of urls, and optionally tags, to create images. There is a limit of 64 images and 20 tags.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateImagesFromUrlsJsonRequest;
import org.openapis.openapi.models.operations.CreateImagesFromUrlsJsonResponse;
import org.openapis.openapi.models.shared.ImageUrlCreateBatch;
import org.openapis.openapi.models.shared.ImageUrlCreateEntry;
import org.openapis.openapi.models.shared.Region;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateImagesFromUrlsJsonRequest req = new CreateImagesFromUrlsJsonRequest(                new ImageUrlCreateBatch() {{
                                images = new org.openapis.openapi.models.shared.ImageUrlCreateEntry[]{{
                                    add(new ImageUrlCreateEntry() {{
                                        regions = new org.openapis.openapi.models.shared.Region[]{{
                                            add(new Region() {{
                                                height = 1123.91;
                                                left = 6071.81;
                                                tagId = "0feb2178-0bcc-4c0d-bbdd-b484708fb4e3";
                                                top = 6170.35;
                                                width = 682.53;
                                            }}),
                                            add(new Region() {{
                                                height = 8878.35;
                                                left = 4298.23;
                                                tagId = "bc158c4c-4e54-4599-aa34-2260e9b200ce";
                                                top = 4518.31;
                                                width = 5371.4;
                                            }}),
                                            add(new Region() {{
                                                height = 6663.21;
                                                left = 924.48;
                                                tagId = "bd8fb7a0-a116-4ce7-a3d4-097fa30e9af7";
                                                top = 1602.6;
                                                width = 3701.95;
                                            }}),
                                            add(new Region() {{
                                                height = 7296.12;
                                                left = 1539.42;
                                                tagId = "9122030d-83f5-4aeb-b799-d22e8c1f8493";
                                                top = 5460.89;
                                                width = 1251.61;
                                            }}),
                                        }};
                                        tagIds = new String[]{{
                                            add("fdc42c87-6c2c-42df-b4cf-c1c76230f841"),
                                            add("fb1bd23f-db14-4db6-be5a-685998e22ae2"),
                                        }};
                                        url = "voluptatem";
                                    }}),
                                    add(new ImageUrlCreateEntry() {{
                                        regions = new org.openapis.openapi.models.shared.Region[]{{
                                            add(new Region() {{
                                                height = 6603.39;
                                                left = 629.07;
                                                tagId = "6fc2b271-a289-4c57-a854-e90439d22246";
                                                top = 3712.17;
                                                width = 4268.19;
                                            }}),
                                            add(new Region() {{
                                                height = 5841.99;
                                                left = 2681.09;
                                                tagId = "62407084-f7ab-437c-af02-225194db5541";
                                                top = 618.89;
                                                width = 6299.02;
                                            }}),
                                            add(new Region() {{
                                                height = 8213.04;
                                                left = 7751.38;
                                                tagId = "669af90a-26c7-4cdc-981f-068981d6bb33";
                                                top = 7935.97;
                                                width = 9438.28;
                                            }}),
                                            add(new Region() {{
                                                height = 6291.16;
                                                left = 6867.84;
                                                tagId = "348c31bf-407e-4e4f-8f0c-42b78f156263";
                                                top = 5681.62;
                                                width = 5493.48;
                                            }}),
                                        }};
                                        tagIds = new String[]{{
                                            add("0dc76632-4ccb-406c-8ca1-2d02529270b8"),
                                            add("d5722dd8-95b8-4bcf-a4db-959693352f74"),
                                            add("533994d7-8de3-4b6e-9389-f5abb7f66255"),
                                        }};
                                        url = "doloremque";
                                    }}),
                                }};
                                tagIds = new String[]{{
                                    add("28382ac4-83af-4d23-95bb-a650164e06f5"),
                                    add("bf6ae591-bc8b-4def-b612-b63c205fda84"),
                                    add("0774a68a-9a35-4d08-ab6f-66fef020e9f4"),
                                }};
                            }};, "numquam", "3b4257b9-92c8-4dbd-a6a6-1efa2198258f");            

            CreateImagesFromUrlsJsonResponse res = sdk.imageApi.createImagesFromUrlsJson(req);

            if (res.imageCreateSummary != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createImagesFromUrlsRaw

This API accepts a batch of urls, and optionally tags, to create images. There is a limit of 64 images and 20 tags.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateImagesFromUrlsRawRequest;
import org.openapis.openapi.models.operations.CreateImagesFromUrlsRawResponse;
import org.openapis.openapi.models.shared.ImageUrlCreateBatch;
import org.openapis.openapi.models.shared.ImageUrlCreateEntry;
import org.openapis.openapi.models.shared.Region;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateImagesFromUrlsRawRequest req = new CreateImagesFromUrlsRawRequest("pariatur".getBytes(), "aut", "a9eba47f-7d3e-4f04-9640-d6a1831c87ad");            

            CreateImagesFromUrlsRawResponse res = sdk.imageApi.createImagesFromUrlsRaw(req);

            if (res.imageCreateSummary != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteImageRegions

Delete a set of image regions.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteImageRegionsRequest;
import org.openapis.openapi.models.operations.DeleteImageRegionsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteImageRegionsRequest req = new DeleteImageRegionsRequest("a", "596fdf1a-d837-4ae8-8c1c-19c95ba99867",                 new String[]{{
                                add("sapiente"),
                                add("deserunt"),
                                add("dolor"),
                            }});            

            DeleteImageRegionsResponse res = sdk.imageApi.deleteImageRegions(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteImageTags

Remove a set of tags from a set of images.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteImageTagsRequest;
import org.openapis.openapi.models.operations.DeleteImageTagsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteImageTagsRequest req = new DeleteImageTagsRequest("hic",                 new String[]{{
                                add("sint"),
                                add("autem"),
                            }}, "991af388-ce03-4614-848c-7977a0ef2f53",                 new String[]{{
                                add("doloremque"),
                                add("sed"),
                            }});            

            DeleteImageTagsResponse res = sdk.imageApi.deleteImageTags(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteImages

Delete images from the set of training images.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteImagesRequest;
import org.openapis.openapi.models.operations.DeleteImagesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteImagesRequest req = new DeleteImagesRequest("voluptatum",                 new String[]{{
                                add("a"),
                                add("itaque"),
                                add("eveniet"),
                                add("repellat"),
                            }}, "934152ed-7e25-43f4-8157-deaa7170f445");            

            DeleteImagesResponse res = sdk.imageApi.deleteImages(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getImagesByIds

This API will return a set of Images for the specified tags and optionally iteration. If no iteration is specified the
current workspace is used.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetImagesByIdsRequest;
import org.openapis.openapi.models.operations.GetImagesByIdsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetImagesByIdsRequest req = new GetImagesByIdsRequest("est", "ccf667aa-f9bb-4ad1-85fe-431d6bf5c838") {{
                imageIds = new String[]{{
                    add("expedita"),
                    add("rerum"),
                    add("totam"),
                    add("quod"),
                }};
                iterationId = "20cb67fc-4b42-45e9-9e62-34c9f7b79dfe";
            }};            

            GetImagesByIdsResponse res = sdk.imageApi.getImagesByIds(req);

            if (res.images != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getTaggedImageCount

The filtering is on an and/or relationship. For example, if the provided tag ids are for the "Dog" and
"Cat" tags, then only images tagged with Dog and/or Cat will be returned

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTaggedImageCountRequest;
import org.openapis.openapi.models.operations.GetTaggedImageCountResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetTaggedImageCountRequest req = new GetTaggedImageCountRequest("expedita", "77a5c38d-4baf-491e-906e-f890a54b475f") {{
                iterationId = "16f56d38-5a3c-44ac-a31b-99e26ced8f9f";
                tagIds = new String[]{{
                    add("facilis"),
                    add("molestias"),
                    add("dolore"),
                    add("et"),
                }};
            }};            

            GetTaggedImageCountResponse res = sdk.imageApi.getTaggedImageCount(req);

            if (res.getTaggedImageCount200ApplicationJSONInt32Integer != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getTaggedImages

This API supports batching and range selection. By default it will only return first 50 images matching images.
Use the {take} and {skip} parameters to control how many images to return in a given batch.
The filtering is on an and/or relationship. For example, if the provided tag ids are for the "Dog" and
"Cat" tags, then only images tagged with Dog and/or Cat will be returned

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTaggedImagesOrderByEnum;
import org.openapis.openapi.models.operations.GetTaggedImagesRequest;
import org.openapis.openapi.models.operations.GetTaggedImagesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetTaggedImagesRequest req = new GetTaggedImagesRequest("accusantium", "f63bbf81-7837-4b01-afdd-788624189eb4") {{
                iterationId = "4873f503-3f19-4dbf-925c-e4152eab9cd7";
                orderBy = GetTaggedImagesOrderByEnum.OLDEST;
                skip = 327263;
                tagIds = new String[]{{
                    add("odit"),
                }};
                take = 259374;
            }};            

            GetTaggedImagesResponse res = sdk.imageApi.getTaggedImages(req);

            if (res.images != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getUntaggedImageCount

This API returns the images which have no tags for a given project and optionally an iteration. If no iteration is specified the
current workspace is used.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetUntaggedImageCountRequest;
import org.openapis.openapi.models.operations.GetUntaggedImageCountResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetUntaggedImageCountRequest req = new GetUntaggedImageCountRequest("error", "6a0e123b-7847-4ec5-9e1f-67f3c4cce4b6") {{
                iterationId = "d7696ff3-c574-4750-9357-e44f51f8b084";
            }};            

            GetUntaggedImageCountResponse res = sdk.imageApi.getUntaggedImageCount(req);

            if (res.getUntaggedImageCount200ApplicationJSONInt32Integer != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getUntaggedImages

This API supports batching and range selection. By default it will only return first 50 images matching images.
Use the {take} and {skip} parameters to control how many images to return in a given batch.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetUntaggedImagesOrderByEnum;
import org.openapis.openapi.models.operations.GetUntaggedImagesRequest;
import org.openapis.openapi.models.operations.GetUntaggedImagesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetUntaggedImagesRequest req = new GetUntaggedImagesRequest("quo", "3197e193-a245-4467-b948-74c2d5cc4972") {{
                iterationId = "233e66bd-8fe5-4d00-b979-ef2038732059";
                orderBy = GetUntaggedImagesOrderByEnum.NEWEST;
                skip = 772604;
                take = 801781;
            }};            

            GetUntaggedImagesResponse res = sdk.imageApi.getUntaggedImages(req);

            if (res.images != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
