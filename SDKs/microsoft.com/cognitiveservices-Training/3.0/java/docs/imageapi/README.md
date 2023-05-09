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
                                    add(new ImageRegionCreateEntry(8209.94, "019da1ff-e78f-4097-b007-4f15471b5e6e", 641.47, "3b99d488-e1e9-41e4-90ad-2abd44269802", 8289.4, 3698.08) {{
                                        height = 5684.34;
                                        imageId = "20592939-6fea-4759-aeb1-0faaa2352c59";
                                        left = 3637.11;
                                        tagId = "5907aff1-a3a2-4fa9-8677-39251aa52c3f";
                                        top = 3687.25;
                                        width = 6625.27;
                                    }}),
                                }};
                            }};, "alias", "2a94bb4f-63c9-469e-9a3e-fa77dfb14cd6");            

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
                                    add(new ImageRegionCreateEntry(4692.49, "fd2ed028-921c-4ddc-a926-01fb576b0d5f", 166.27, "d30c5fbb-2587-4053-a02c-73d5fe9b90c2", 5000.26, 6214.79) {{
                                        height = 6754.39;
                                        imageId = "e395efb9-ba88-4f3a-a699-7074ba4469b6";
                                        left = 8784.53;
                                        tagId = "21419598-90af-4a56-be25-16fe4c8b711e";
                                        top = 3523.12;
                                        width = 7142.42;
                                    }}),
                                    add(new ImageRegionCreateEntry(2292.19, "ce5e6a95-d8a0-4d44-ace2-af7a73cf3be4", 3136.92, "3f870b32-6b5a-4734-a9cd-b1a8422bb679", 8404.29, 1832.8) {{
                                        height = 503.7;
                                        imageId = "9b3fe49a-8d9c-4bf4-8633-323f9b77f3a4";
                                        left = 852.95;
                                        tagId = "00674ebf-6928-40d1-ba77-a89ebf737ae4";
                                        top = 1372.2;
                                        width = 206.51;
                                    }}),
                                }};
                            }};, "neque", "22715bf0-cbb1-4e31-b8b9-0f3443a1108e");            

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

            CreateImageRegionsRawRequest req = new CreateImageRegionsRawRequest("consequatur".getBytes(), "est", "dcf4b921-879f-4ce9-93f7-3ef7fbc7abd7");            

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
                                        imageId = "dd39c0f5-d2cf-4f7c-b0a4-5626d436813f";
                                        tagId = "16d9f5fc-e6c5-4561-86c3-e250fb008c42";
                                    }}),
                                    add(new ImageTagCreateEntry() {{
                                        imageId = "e141aac3-66c8-4dd6-b144-2907474778a7";
                                        tagId = "bd466d28-c10a-4b3c-9ca4-251904e523c7";
                                    }}),
                                }};
                            }};, "recusandae", "0bc7178e-4796-4f2a-b0c6-88282aa48256");            

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
                                        imageId = "f222e981-7ee1-47cb-a61e-6b7b95bc0ab3";
                                        tagId = "c20c4f37-89fd-4871-b99d-d2efd121aa6f";
                                    }}),
                                }};
                            }};, "quae", "e674bdb0-4f15-4756-882d-68ea19f1d170");            

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

            CreateImageTagsRawRequest req = new CreateImageTagsRawRequest("minima".getBytes(), "veritatis", "339d0808-6a18-4403-94c2-6071f93f5f06");            

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

            CreateImagesFromDataRequest req = new CreateImagesFromDataRequest(                new CreateImagesFromDataRequestBody(                new CreateImagesFromDataRequestBodyImageData("quaerat".getBytes(), "consequuntur"););, "repellendus", "ac7af515-cc41-43aa-a3aa-e8d67864dbb6") {{
                tagIds = new String[]{{
                    add("5fd5e60b-375e-4d4f-afbe-e41f33317fe3"),
                    add("5b60eb1e-a426-4555-ba3c-28744ed53b88"),
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
                                        contents = "nesciunt";
                                        name = "Byron Stroman";
                                        regions = new org.openapis.openapi.models.shared.Region[]{{
                                            add(new Region(2155.29, 4067.33, "98f447f6-03e8-4b44-9e80-ca55efd20e45", 4461.35, 8892.34) {{
                                                height = 7507.65;
                                                left = 246.19;
                                                tagId = "b2f2fb7b-194a-4276-b269-16fe1f08f429";
                                                top = 2587.02;
                                                width = 8967.62;
                                            }}),
                                            add(new Region(3611.51, 894.94, "862065e9-04f3-4b11-94b8-abf603a79f9d", 9627.71, 9147.91) {{
                                                height = 1046.27;
                                                left = 5124.52;
                                                tagId = "58b6a89f-be3a-45aa-8e48-24d0ab407508";
                                                top = 5580.65;
                                                width = 9221.12;
                                            }}),
                                        }};
                                        tagIds = new String[]{{
                                            add("ab7da8a5-0ce1-487f-86bc-173d689eee95"),
                                        }};
                                    }}),
                                    add(new ImageFileCreateEntry() {{
                                        contents = "aspernatur";
                                        name = "Elisa Little";
                                        regions = new org.openapis.openapi.models.shared.Region[]{{
                                            add(new Region(4402.64, 6255.28, "15be3e06-0807-4e2b-ae3a-b8845f0597a6", 51.89, 9795.27) {{
                                                height = 3793.56;
                                                left = 9223.48;
                                                tagId = "881ead4f-0e10-4125-a3f9-4e29e973e922";
                                                top = 6611.18;
                                                width = 3356.31;
                                            }}),
                                            add(new Region(6591.77, 4027.67, "60ff57bf-aad4-4f9e-bc1b-4512c1032648", 8710.83, 7730.84) {{
                                                height = 9702.22;
                                                left = 1746.58;
                                                tagId = "a54a31e9-4764-4a3e-865e-7956f9251a5a";
                                                top = 5910.27;
                                                width = 8217.19;
                                            }}),
                                            add(new Region(2415.57, 965.62, "2fde0477-1778-4ff6-9d01-7476360a15db", 3996.67, 6391.87) {{
                                                height = 1794.1;
                                                left = 9587.41;
                                                tagId = "615199eb-fd0e-49fe-ac63-2ca3aed01179";
                                                top = 5810.82;
                                                width = 3824.4;
                                            }}),
                                        }};
                                        tagIds = new String[]{{
                                            add("60659a1a-deaa-4b58-91d6-c645b08b6189"),
                                            add("1baa0fe1-ade0-408e-af8c-5f350d8cdb5a"),
                                        }};
                                    }}),
                                    add(new ImageFileCreateEntry() {{
                                        contents = "dolor";
                                        name = "Mrs. Stephanie Lind";
                                        regions = new org.openapis.openapi.models.shared.Region[]{{
                                            add(new Region(3502.07, 8956.92, "16deab3f-ec95-478a-a458-4273a8418d16", 1598.45, 2330.78) {{
                                                height = 1000.14;
                                                left = 249.44;
                                                tagId = "421813d5-208e-4ce7-a253-b668451c6c6e";
                                                top = 1603.93;
                                                width = 289.52;
                                            }}),
                                        }};
                                        tagIds = new String[]{{
                                            add("9fb09299-21ae-4fb9-b58c-4d86e68e4be0"),
                                        }};
                                    }}),
                                    add(new ImageFileCreateEntry() {{
                                        contents = "ipsam";
                                        name = "Mary Botsford";
                                        regions = new org.openapis.openapi.models.shared.Region[]{{
                                            add(new Region(4939.58, 2055.66, "c8d72f64-d1db-41f2-8431-0661e96349e1", 7722.66, 9758.84) {{
                                                height = 5752.13;
                                                left = 8587.78;
                                                tagId = "a757a59e-cfef-466e-b1ca-a3383c2beb47";
                                                top = 4530.94;
                                                width = 1940.23;
                                            }}),
                                            add(new Region(2885.7, 850.66, "d3113529-65bb-48a7-a026-11435e139dbc", 1572.22, 1591.46) {{
                                                height = 6109.87;
                                                left = 9325.62;
                                                tagId = "06e3a437-000a-4e6b-abc9-b8f759eac55a";
                                                top = 6216.66;
                                                width = 4568.85;
                                            }}),
                                        }};
                                        tagIds = new String[]{{
                                            add("9b1abda8-c070-4e10-84cb-0672d1ad879e"),
                                            add("eb9665b8-5efb-4d02-bae0-be2d782259e3"),
                                        }};
                                    }}),
                                }};
                                tagIds = new String[]{{
                                    add("a4b5197f-9244-43da-bce5-2b895c537c64"),
                                    add("54efb0b3-4896-4c3c-a5ac-fbe2fd570757"),
                                    add("7929177d-eac6-446e-8b57-3409e3eb1e5a"),
                                    add("2b12eb07-f116-4db9-9545-fc95fa88970e"),
                                }};
                            }};, "architecto", "89dbb30f-cb33-4ea0-95b1-97cd44e2f52d");            

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
                                        contents = "odit";
                                        name = "Mrs. Allen Heidenreich";
                                        regions = new org.openapis.openapi.models.shared.Region[]{{
                                            add(new Region(7847.31, 1114.96, "77d525f7-7b11-44ee-b52f-f785fc37814d", 3041.73, 7904.63) {{
                                                height = 3952.33;
                                                left = 9775.18;
                                                tagId = "48b656bc-db35-4ff2-a4b2-7537a8cd9e73";
                                                top = 1180.41;
                                                width = 6228.94;
                                            }}),
                                            add(new Region(407.1, 9384.12, "739ae9e0-57eb-4809-a281-0331f3981d4c", 4567.04, 323.56) {{
                                                height = 5910.65;
                                                left = 5149.93;
                                                tagId = "e0c2bb89-eb75-4dad-a36c-600503d8bb31";
                                                top = 1181.26;
                                                width = 5149.22;
                                            }}),
                                            add(new Region(727.54, 9438.51, "af4b7544-e472-4e80-a857-a5b40463a7d5", 4753.25, 3306) {{
                                                height = 209.5;
                                                left = 6985.58;
                                                tagId = "607f3c93-c73b-49da-bf2c-eda7e23f2257";
                                                top = 2527;
                                                width = 680.93;
                                            }}),
                                        }};
                                        tagIds = new String[]{{
                                            add("1400e764-ad73-434e-81b7-81b36a08088d"),
                                            add("100efada-200e-4f04-a2eb-2164cf9ab836"),
                                            add("6c723ffd-a9e0-46be-a482-5c1fc0e115c8"),
                                            add("0bff9185-44ec-442d-afcc-e8f1977773e6"),
                                        }};
                                    }}),
                                    add(new ImageFileCreateEntry() {{
                                        contents = "neque";
                                        name = "Melanie Cruickshank";
                                        regions = new org.openapis.openapi.models.shared.Region[]{{
                                            add(new Region(1643.19, 3304.4, "ea944f3b-756c-411f-ac37-a5126243835b", 7064.11, 7696.34) {{
                                                height = 2628;
                                                left = 563.72;
                                                tagId = "8f05e3d4-8fda-4f31-ba1f-5fd94259c0b3";
                                                top = 4124.33;
                                                width = 9561.24;
                                            }}),
                                            add(new Region(8424.02, 7986.9, "5e347627-99bf-4bbe-a949-fb2bb4ecae6c", 1989.91, 8493.83) {{
                                                height = 245.77;
                                                left = 3634.82;
                                                tagId = "a23a45ce-fc5f-4de1-8a0c-e2169e510019";
                                                top = 7658.33;
                                                width = 4355.31;
                                            }}),
                                            add(new Region(6036.5, 8603.11, "9a4578ad-c1ac-4600-9ec0-01ac802e2ec0", 5676.93, 9509.56) {{
                                                height = 3674.75;
                                                left = 8487.22;
                                                tagId = "b3adebd5-daea-44c5-86a8-aa94c02644cf";
                                                top = 3429.21;
                                                width = 8882.65;
                                            }}),
                                        }};
                                        tagIds = new String[]{{
                                            add("8f0f816f-f347-47c1-be90-2c14125b0960"),
                                            add("a668151a-472a-4f92-bc59-49f83f350cf8"),
                                            add("76ffb901-c6ec-4bb4-a243-cf789ffafeda"),
                                            add("53e5ae6e-0ac1-484c-ab9c-247c88373a40"),
                                        }};
                                    }}),
                                    add(new ImageFileCreateEntry() {{
                                        contents = "necessitatibus";
                                        name = "Dr. Felicia Greenholt";
                                        regions = new org.openapis.openapi.models.shared.Region[]{{
                                            add(new Region(6775.09, 2425.31, "f8941aeb-c0b8-40a6-924d-3b2ecfcc8f89", 3611.06, 371.29) {{
                                                height = 9368.45;
                                                left = 3305.96;
                                                tagId = "5055756f-5d56-4d0b-90af-2dfe13db4f62";
                                                top = 7954.57;
                                                width = 7466.88;
                                            }}),
                                        }};
                                        tagIds = new String[]{{
                                            add("0f5dd3d6-fa18-404e-94c8-2f168a363c88"),
                                        }};
                                    }}),
                                }};
                                tagIds = new String[]{{
                                    add("3e484380-b1f6-4b8c-a275-a60a04c495cc"),
                                    add("699171b5-1c1b-4db1-8f4b-888ebdfc4ccc"),
                                }};
                            }};, "id", "99bc7fc0-b2dc-4e10-873e-42b006d67887");            

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

            CreateImagesFromFilesRawRequest req = new CreateImagesFromFilesRawRequest("atque".getBytes(), "rerum", "a8581a58-208c-454f-afa9-c95f2eac5565");            

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
                                        id = "307cfee8-1206-4e28-93fa-4a41c480d3f2";
                                        regions = new org.openapis.openapi.models.shared.Region[]{{
                                            add(new Region(5124.88, 4610.5, "ee3e4be7-52c6-45b3-8418-e3bb91c8d975", 8811.89, 444.67) {{
                                                height = 1932.36;
                                                left = 1430.78;
                                                tagId = "af03102d-514f-44cc-af18-bf9621a6a4f7";
                                                top = 4578.35;
                                                width = 6570.44;
                                            }}),
                                        }};
                                        tagIds = new String[]{{
                                            add("8419d8f8-4f14-44f3-a07e-dcc4aa5f3cab"),
                                            add("d905a972-e056-4728-a27b-2d309470bf7a"),
                                            add("4fa87cf5-35a6-4fae-94eb-f60c321f023b"),
                                            add("75d2367f-e1a0-4cc8-9f79-f0a396d90c36"),
                                        }};
                                    }}),
                                    add(new ImageIdCreateEntry() {{
                                        id = "4b7c15df-bace-4188-b1c4-ee2c8c6ce611";
                                        regions = new org.openapis.openapi.models.shared.Region[]{{
                                            add(new Region(8488.33, 1479.89, "caf5dd67-23dc-40f5-ae2f-3a6b70087875", 4358.83, 685.96) {{
                                                height = 9308.77;
                                                left = 8754.52;
                                                tagId = "b1c7cbdb-6eec-4743-b8ba-25317747dc91";
                                                top = 3486.65;
                                                width = 6704.3;
                                            }}),
                                            add(new Region(8988.26, 8037.92, "909304f9-26ba-4d25-9381-9b474b0ed20e", 3606.35, 4116.26) {{
                                                height = 3086.58;
                                                left = 2289.07;
                                                tagId = "f5a6c98b-5555-4408-8d40-bcacc6cbd6b5";
                                                top = 9790.11;
                                                width = 2354.82;
                                            }}),
                                            add(new Region(1122.24, 6968.28, "335d89ac-b3ec-4fda-8d0c-549ef0300497", 5410.09, 6383.63) {{
                                                height = 1799.06;
                                                left = 3052.67;
                                                tagId = "8fff639a-910a-4bdc-ab62-676696e1ec00";
                                                top = 1816.22;
                                                width = 1632.63;
                                            }}),
                                            add(new Region(6716.9, 6091.72, "7ff334cd-df85-47a9-a618-76c6ab21d29d", 9506.61, 7710.78) {{
                                                height = 4064.93;
                                                left = 1017.7;
                                                tagId = "fa1cf206-88f7-47c1-bfc7-1dca163f2a3c";
                                                top = 5283.15;
                                                width = 216.68;
                                            }}),
                                        }};
                                        tagIds = new String[]{{
                                            add("4d6fecd7-9939-4006-aa6d-2d000355338c"),
                                            add("ec086fa2-1e91-452c-b311-9167b8e3c8db"),
                                            add("03408d6d-364f-4fd4-9590-6d1263d48e93"),
                                        }};
                                    }}),
                                    add(new ImageIdCreateEntry() {{
                                        id = "5c2c9e81-f30b-4e3e-8320-2d7216576506";
                                        regions = new org.openapis.openapi.models.shared.Region[]{{
                                            add(new Region(7034.07, 5146.09, "502a55e7-f73b-4c84-9e32-0a319f4badf9", 2565.67, 4768.01) {{
                                                height = 3112.47;
                                                left = 941.22;
                                                tagId = "870d9d21-f9ad-4030-84ec-c11a08364290";
                                                top = 3842.73;
                                                width = 5123.7;
                                            }}),
                                            add(new Region(2192.79, 8791.93, "c12cdaad-0ec7-4afe-9bd8-0df448a47f93", 5810.19, 157.38) {{
                                                height = 7738.33;
                                                left = 6218.83;
                                                tagId = "a867bc42-4266-4658-96dd-ca8ef51fcb4c";
                                                top = 3685.99;
                                                width = 5780.81;
                                            }}),
                                        }};
                                        tagIds = new String[]{{
                                            add("58880983-dabf-49ef-bffd-d9f7f079af4d"),
                                            add("35724cdb-0f4d-4281-987d-56844eded85a"),
                                            add("9065e628-bdfc-4203-ab6c-879923b7e135"),
                                            add("84f7ae12-c689-41f8-ace1-157172305377"),
                                        }};
                                    }}),
                                    add(new ImageIdCreateEntry() {{
                                        id = "dcfa89df-975e-4356-a860-92e9c3ddc5f1";
                                        regions = new org.openapis.openapi.models.shared.Region[]{{
                                            add(new Region(8504.06, 7468.34, "484708fb-4e39-41e6-bc15-8c4c4e54599e", 6836.02, 2348.45) {{
                                                height = 835.3;
                                                left = 8143.98;
                                                tagId = "ea1026d5-41a4-4d19-8feb-21780bccc0db";
                                                top = 7148.35;
                                                width = 8256.81;
                                            }}),
                                        }};
                                        tagIds = new String[]{{
                                            add("2260e9b2-00ce-478a-9bd8-fb7a0a116ce7"),
                                            add("23d4097f-a30e-49af-b25b-29122030d83f"),
                                        }};
                                    }}),
                                }};
                                tagIds = new String[]{{
                                    add("aeb7799d-22e8-4c1f-8493-825fdc42c876"),
                                    add("c2c2dfb4-cfc1-4c76-a30f-841fb1bd23fd"),
                                }};
                            }};, "nam", "14db6be5-a685-4998-a22a-e20da16fc2b2");            

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
                                        id = "1a289c57-e854-4e90-839d-222465694624";
                                        regions = new org.openapis.openapi.models.shared.Region[]{{
                                            add(new Region(9835.56, 5890.31, "0a26c7cd-c981-4f06-8981-d6bb33cfaa34", 5158.73, 7689.99) {{
                                                height = 4869.44;
                                                left = 252.31;
                                                tagId = "84f7ab37-cef0-4222-9194-db55410adc66";
                                                top = 5715.5;
                                                width = 6668.17;
                                            }}),
                                        }};
                                        tagIds = new String[]{{
                                            add("1bf407ee-4fcf-40c4-ab78-f15626398a0d"),
                                        }};
                                    }}),
                                    add(new ImageIdCreateEntry() {{
                                        id = "c766324c-cb06-4c8c-a12d-02529270b8d5";
                                        regions = new org.openapis.openapi.models.shared.Region[]{{
                                            add(new Region(4733.86, 5568.98, "de3b6e93-89f5-4abb-bf66-2550a28382ac", 2758.37, 5358.83) {{
                                                height = 1432.53;
                                                left = 1342.67;
                                                tagId = "dd895b8b-cf24-4db9-9969-3352f7453399";
                                                top = 2580.36;
                                                width = 8561.85;
                                            }}),
                                            add(new Region(9219.16, 9824.47, "3612b63c-205f-4da8-8077-4a68a9a35d08", 3771.94, 7132.46) {{
                                                height = 2207.46;
                                                left = 6676.34;
                                                tagId = "fd2315bb-a650-4164-a06f-5bf6ae591bc8";
                                                top = 7080.75;
                                                width = 8264.78;
                                            }}),
                                        }};
                                        tagIds = new String[]{{
                                            add("f66fef02-0e9f-4443-b425-7b992c8dbda6"),
                                            add("a61efa21-9825-48fd-8a9e-ba47f7d3ef04"),
                                        }};
                                    }}),
                                }};
                                tagIds = new String[]{{
                                    add("640d6a18-31c8-47ad-b596-fdf1ad837ae8"),
                                    add("0c1c19c9-5ba9-4986-b8fa-3f696991af38"),
                                    add("8ce03614-448c-4797-ba0e-f2f536028efe"),
                                }};
                            }};, "eveniet", "f934152e-d7e2-453f-8c15-7deaa7170f44");            

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

            CreateImagesFromPredictionsRawRequest req = new CreateImagesFromPredictionsRawRequest("nemo".getBytes(), "est", "ccf667aa-f9bb-4ad1-85fe-431d6bf5c838");            

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
                                    add(new ImageUrlCreateEntry("non") {{
                                        regions = new org.openapis.openapi.models.shared.Region[]{{
                                            add(new Region(4813.07, 4564.73, "a5c38d4b-af91-4e50-aef8-90a54b475f16", 9395.16, 3266.35) {{
                                                height = 7024.18;
                                                left = 5165.56;
                                                tagId = "c20cb67f-c4b4-425e-99e6-234c9f7b79df";
                                                top = 9238.79;
                                                width = 7115.72;
                                            }}),
                                            add(new Region(2458.49, 7331.27, "bf817837-b01a-4fdd-b886-24189eb44873", 9580.6, 3371.49) {{
                                                height = 4051.61;
                                                left = 8216.72;
                                                tagId = "385a3c4a-c631-4b99-a26c-ed8f9fdb9410";
                                                top = 9809.8;
                                                width = 3902.3;
                                            }}),
                                            add(new Region(698.14, 1251.54, "3b7847ec-59e1-4f67-b3c4-cce4b6d7696f", 9570.32, 2322.09) {{
                                                height = 333.23;
                                                left = 1902.6;
                                                tagId = "3f19dbf1-25ce-4415-aeab-9cd7e5224a6a";
                                                top = 9.03;
                                                width = 9303.98;
                                            }}),
                                        }};
                                        tagIds = new String[]{{
                                            add("57475013-57e4-44f5-9f8b-084c3197e193"),
                                            add("a245467f-9487-44c2-95cc-4972233e66bd"),
                                            add("8fe5d00b-979e-4f20-b873-20590ccc1096"),
                                            add("400313b3-e504-44f6-9fe7-2dc4077d0cc3"),
                                        }};
                                        url = "tenetur";
                                    }}),
                                    add(new ImageUrlCreateEntry("sapiente") {{
                                        regions = new org.openapis.openapi.models.shared.Region[]{{
                                            add(new Region(912.7, 7863.19, "926ddb58-9461-4e74-a1cb-e6d9502f0ea9", 1876.12, 170.29) {{
                                                height = 5484.73;
                                                left = 9338.47;
                                                tagId = "fc15ceb4-d6e1-4eae-8f75-aedf2acab58b";
                                                top = 5846.45;
                                                width = 6025.61;
                                            }}),
                                        }};
                                        tagIds = new String[]{{
                                            add("69f7ac2f-72f8-4850-8904-911608207888"),
                                            add("ec66183b-fe96-459e-b40e-c16faf75b0b5"),
                                            add("32a4da37-cbaa-4f44-92c4-842c9b2ad32d"),
                                        }};
                                        url = "est";
                                    }}),
                                    add(new ImageUrlCreateEntry("expedita") {{
                                        regions = new org.openapis.openapi.models.shared.Region[]{{
                                            add(new Region(4034.85, 5809.96, "cd5fbcf7-9da1-48a7-822b-f95894e6861a", 8187.39, 7258.94) {{
                                                height = 5316.06;
                                                left = 981.23;
                                                tagId = "a88f4444-573f-4ecd-8735-3f63c8209379";
                                                top = 6463.21;
                                                width = 6621.84;
                                            }}),
                                            add(new Region(2943.14, 2612.19, "56379f3f-b27e-421f-8626-57b36fc6b9f5", 5341.56, 4805.58) {{
                                                height = 3532.14;
                                                left = 3129.53;
                                                tagId = "f9e5d751-c9fe-48f7-902b-fdc3450841f1";
                                                top = 4742.67;
                                                width = 4211.11;
                                            }}),
                                            add(new Region(8737.53, 7733.32, "91faabdd-88e7-41f6-8482-52d7771e7fd0", 4482.82, 2591.34) {{
                                                height = 8021.48;
                                                left = 9040.91;
                                                tagId = "525c6764-1a83-412e-9047-b4c21ccb423a";
                                                top = 7057.53;
                                                width = 7925.55;
                                            }}),
                                            add(new Region(991.6, 4095.27, "e19bafec-a619-4149-8140-b64ff8ae170e", 9970.47, 299.14) {{
                                                height = 143.49;
                                                left = 84.46;
                                                tagId = "9ef8d29d-e1dd-4709-bb5d-a08c57fa6c78";
                                                top = 6288.11;
                                                width = 1585.15;
                                            }}),
                                        }};
                                        tagIds = new String[]{{
                                            add("b5f37e4a-a868-4555-9667-32aa5dcb6682"),
                                        }};
                                        url = "quisquam";
                                    }}),
                                    add(new ImageUrlCreateEntry("eligendi") {{
                                        regions = new org.openapis.openapi.models.shared.Region[]{{
                                            add(new Region(4343.82, 8424.61, "9e75ca00-6f53-492c-91a2-5a8bf92f9742", 5606.2, 6862.91) {{
                                                height = 526.59;
                                                left = 9662.22;
                                                tagId = "8cfd5fb6-e91b-49a9-b748-46e2c3309db0";
                                                top = 3530.36;
                                                width = 2271.85;
                                            }}),
                                            add(new Region(1664.81, 2657.08, "84da2172-9f2a-4c41-af57-25f1169ac1e4", 1100.31, 8360.18) {{
                                                height = 8697.18;
                                                left = 6020.76;
                                                tagId = "a9f8bf82-2112-4535-9d98-387f7a79cd72";
                                                top = 7583.66;
                                                width = 8608.3;
                                            }}),
                                        }};
                                        tagIds = new String[]{{
                                            add("a23c23e3-4f2d-4fa4-a197-f6de922151fe"),
                                            add("17120998-53e9-4f54-bd85-4439ee224460"),
                                            add("443bc154-188c-42f5-ae85-da7832eabd61"),
                                        }};
                                        url = "odio";
                                    }}),
                                }};
                                tagIds = new String[]{{
                                    add("b0d51a44-bf01-4bad-8706-d46082bfbdc4"),
                                }};
                            }};, "vitae", "ff5d4e2a-e4fb-45cb-b5d1-7638f1edb783");            

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
                                    add(new ImageUrlCreateEntry("sapiente") {{
                                        regions = new org.openapis.openapi.models.shared.Region[]{{
                                            add(new Region(8658.44, 2481.31, "b1dd3bbc-e247-4b76-84ef-f50126d71cff", 7044.12, 8170.57) {{
                                                height = 8822.72;
                                                left = 7932.6;
                                                tagId = "c5cb860f-8cd5-480b-a738-10e4fe444729";
                                                top = 4576.85;
                                                width = 7654.63;
                                            }}),
                                            add(new Region(370.3, 1167.42, "139863aa-41e6-4c31-8c2f-1fcb51c9a41f", 9710.5, 7174.86) {{
                                                height = 113.92;
                                                left = 9309.42;
                                                tagId = "b74b8421-953b-444b-93c4-3159d33e5953";
                                                top = 8010.42;
                                                width = 72.87;
                                            }}),
                                            add(new Region(2477.96, 2938.87, "b90f2e09-d19d-42fc-af9e-2e105944b935", 8463.13, 1536.66) {{
                                                height = 9304.68;
                                                left = 6107.66;
                                                tagId = "cbd795ee-65e0-476c-87ab-f616ea5c7164";
                                                top = 1164.52;
                                                width = 5886.45;
                                            }}),
                                        }};
                                        tagIds = new String[]{{
                                            add("7a72f908-49d6-4aed-8aec-b7537cd9222c"),
                                        }};
                                        url = "excepturi";
                                    }}),
                                    add(new ImageUrlCreateEntry("facere") {{
                                        regions = new org.openapis.openapi.models.shared.Region[]{{
                                            add(new Region(9401.41, 380.18, "c2001e22-cd55-4cc0-984a-184d76d971fc", 5416.33, 1267.33) {{
                                                height = 3461.64;
                                                left = 4998.74;
                                                tagId = "491aabfa-2e76-41f0-8a4d-456ef1031e68";
                                                top = 5966.83;
                                                width = 6081.92;
                                            }}),
                                            add(new Region(8635.08, 6974.01, "46aa1cfd-6d82-48da-8131-91129646645c", 701.73, 8444.82) {{
                                                height = 249.45;
                                                left = 7568.21;
                                                tagId = "65b037bb-8e0c-4c88-9187-e4de04af28c5";
                                                top = 8450.13;
                                                width = 8135.45;
                                            }}),
                                            add(new Region(8847.04, 1493.76, "79a3b084-da99-4257-904f-40847a742d84", 2590.19, 5857.3) {{
                                                height = 5007.59;
                                                left = 932.99;
                                                tagId = "f29042f5-69b7-4aff-8ea2-216cbe071bc1";
                                                top = 4065.75;
                                                width = 2198.04;
                                            }}),
                                            add(new Region(355.52, 4085.09, "a1287764-eef6-4d0c-ad6e-d9c73dd63457", 768.18, 3613.31) {{
                                                height = 3921.8;
                                                left = 8124.31;
                                                tagId = "bdeecf6b-99bc-4635-a2eb-fdf55c294c06";
                                                top = 78.13;
                                                width = 7475.77;
                                            }}),
                                        }};
                                        tagIds = new String[]{{
                                            add("9a8e870d-3c5a-41f9-8242-c7b66a1f30c7"),
                                        }};
                                        url = "non";
                                    }}),
                                }};
                                tagIds = new String[]{{
                                    add("5b671989-0f42-4a4b-b438-d85b260591d7"),
                                    add("45e3c205-9c9c-43f5-a7e0-e252765b1d62"),
                                    add("fcdace1f-0121-46ce-a239-e8f25cd0d19d"),
                                    add("959f439e-3926-46cb-995f-7aa2b2411369"),
                                }};
                            }};, "nostrum", "d1e6698f-cc45-4962-97c2-977676334254");            

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

            CreateImagesFromUrlsRawRequest req = new CreateImagesFromUrlsRawRequest("alias".getBytes(), "adipisci", "8bfb5971-e981-4905-9738-9cedbac7fda3");            

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

            DeleteImageRegionsRequest req = new DeleteImageRegionsRequest("occaecati", "594d66bc-2ae4-4806-b2b9-954b6fa22063",                 new String[]{{
                                add("9828553c-b100-406b-af49-21ec2053b749"),
                                add("366ac8ee-0f2b-4f19-988d-40d03f3deba2"),
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

            DeleteImageTagsRequest req = new DeleteImageTagsRequest("natus",                 new String[]{{
                                add("be3e90bc-40df-4868-bd52-405cb331d492"),
                                add("f4f127fb-0e0b-4f1f-8217-978d0acca77a"),
                            }}, "eb7b7021-a520-446b-a4e9-9fb0e67e094f",                 new String[]{{
                                add("fed5540e-f53a-434a-9b8f-e99731adc05d"),
                                add("85ae2dfb-70fb-4387-8290-d336561eca16"),
                                add("ef89451b-d76e-4eeb-918c-4da1fad35512"),
                                add("f06d4e5b-72f0-4f54-8568-a0424e00a1d6"),
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

            DeleteImagesRequest req = new DeleteImagesRequest("voluptates",                 new String[]{{
                                add("9434645d-0308-44fb-ba5c-ceff5cb01fe5"),
                                add("1e528a45-ac82-4b85-b8bc-2caba8da4127"),
                                add("dd597ff4-711a-4a1b-874b-86cecc74f77b"),
                            }}, "4848bd6a-6f04-441d-ac3b-808094373e06");            

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

            GetImagesByIdsRequest req = new GetImagesByIdsRequest("sit", "459bebba-d02f-4258-abcf-152558daa95b") {{
                imageIds = new String[]{{
                    add("6cd02756-c354-4aa4-b2b4-7e1763c5208c"),
                    add("23e9802d-82f0-4d45-ab4a-8b674ee5cfc1"),
                    add("8edc7f78-7e32-4e04-b3d3-ed0c5670ef42"),
                    add("bd3c9f1c-c503-4f6c-b9bc-d0a6290f957f"),
                }};
                iterationId = "385189ad-7ef8-407a-ae03-f33ca79fb9de";
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

            GetTaggedImageCountRequest req = new GetTaggedImageCountRequest("non", "032ba26f-d368-4ba9-a16b-cb415835c736") {{
                iterationId = "41723133-edc0-446b-8516-3bbca49227c4";
                tagIds = new String[]{{
                    add("c22c5535-0495-4c5d-bb3c-57c1e4981e8a"),
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

            GetTaggedImagesRequest req = new GetTaggedImagesRequest("similique", "257ddc19-12eb-4de6-8bfc-c5469d4015df") {{
                iterationId = "a796206b-ef2b-40a3-a42c-1aa010e9aac2";
                orderBy = GetTaggedImagesOrderByEnum.OLDEST;
                skip = 610462;
                tagIds = new String[]{{
                    add("35586d18-f9f9-47a4-bfad-2bf7d67ca84a"),
                }};
                take = 829910;
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

            GetUntaggedImageCountRequest req = new GetUntaggedImageCountRequest("excepturi", "9b41d612-4353-4187-8cf6-8b03ad421bd4") {{
                iterationId = "3d1f0cb0-a000-43eb-a2d9-b3a70d94faa7";
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

            GetUntaggedImagesRequest req = new GetUntaggedImagesRequest("labore", "1c57d1fe-dc20-450d-b8dc-3ce185472f9e") {{
                iterationId = "e69166a8-be34-444e-ac8b-3a2875c6c1fe";
                orderBy = GetUntaggedImagesOrderByEnum.NEWEST;
                skip = 21019;
                take = 391989;
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
