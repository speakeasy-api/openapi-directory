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
* [querySuggestedImageCountForm](#querysuggestedimagecountform) - Get count of images whose suggested tags match given tags and their probabilities are greater than or equal to the given threshold. Returns count as 0 if none found.
* [querySuggestedImageCountJson](#querysuggestedimagecountjson) - Get count of images whose suggested tags match given tags and their probabilities are greater than or equal to the given threshold. Returns count as 0 if none found.
* [querySuggestedImageCountRaw](#querysuggestedimagecountraw) - Get count of images whose suggested tags match given tags and their probabilities are greater than or equal to the given threshold. Returns count as 0 if none found.
* [querySuggestedImagesForm](#querysuggestedimagesform) - Get untagged images whose suggested tags match given tags. Returns empty array if no images are found.
* [querySuggestedImagesJson](#querysuggestedimagesjson) - Get untagged images whose suggested tags match given tags. Returns empty array if no images are found.
* [querySuggestedImagesRaw](#querysuggestedimagesraw) - Get untagged images whose suggested tags match given tags. Returns empty array if no images are found.

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
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ipsum") {{
                    apimKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateImageRegionsFormRequest req = new CreateImageRegionsFormRequest(                new ImageRegionCreateBatch() {{
                                regions = new org.openapis.openapi.models.shared.ImageRegionCreateEntry[]{{
                                    add(new ImageRegionCreateEntry(135.71, "19da1ffe-78f0-497b-8074-f15471b5e6e1", 2168.22, "b99d488e-1e91-4e45-8ad2-abd44269802d", 3698.08, 46.95) {{
                                        height = 1352.18;
                                        imageId = "05929396-fea7-4596-ab10-faaa2352c595";
                                        left = 3250.47;
                                        tagId = "907aff1a-3a2f-4a94-a773-9251aa52c3f5";
                                        top = 6625.27;
                                        width = 8209.94;
                                    }}),
                                    add(new ImageRegionCreateEntry(1028.63, "41959890-afa5-463e-a516-fe4c8b711e5b", 4692.49, "fd2ed028-921c-4ddc-a926-01fb576b0d5f", 166.27, 8558.04) {{
                                        height = 1464.41;
                                        imageId = "a94bb4f6-3c96-49e9-a3ef-a77dfb14cd66";
                                        left = 6754.39;
                                        tagId = "e395efb9-ba88-4f3a-a699-7074ba4469b6";
                                        top = 8784.53;
                                        width = 1354.74;
                                    }}),
                                    add(new ImageRegionCreateEntry(564.18, "674ebf69-280d-41ba-b7a8-9ebf737ae420", 2292.19, "ce5e6a95-d8a0-4d44-ace2-af7a73cf3be4", 3136.92, 2133.12) {{
                                        height = 2307.42;
                                        imageId = "0c5fbb25-8705-4320-ac73-d5fe9b90c289";
                                        left = 503.7;
                                        tagId = "9b3fe49a-8d9c-4bf4-8633-323f9b77f3a4";
                                        top = 852.95;
                                        width = 580.29;
                                    }}),
                                }};
                            }};, "f870b326-b5a7-4342-9cdb-1a8422bb679d");            

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
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("qui") {{
                    apimKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateImageRegionsJsonRequest req = new CreateImageRegionsJsonRequest(                new ImageRegionCreateBatch() {{
                                regions = new org.openapis.openapi.models.shared.ImageRegionCreateEntry[]{{
                                    add(new ImageRegionCreateEntry(8489.44, "39c0f5d2-cff7-4c70-a456-26d436813f16", 8621.92, "9f5fce6c-5561-446c-be25-0fb008c42e14", 896.03, 6774.12) {{
                                        height = 1448.47;
                                        imageId = "2715bf0c-bb1e-431b-8b90-f3443a1108e0";
                                        left = 6699.17;
                                        tagId = "dcf4b921-879f-4ce9-93f7-3ef7fbc7abd7";
                                        top = 2930.2;
                                        width = 8445.5;
                                    }}),
                                }};
                            }};, "ac366c8d-d6b1-4442-9074-74778a7bd466");            

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
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("assumenda") {{
                    apimKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateImageRegionsRawRequest req = new CreateImageRegionsRawRequest("eos".getBytes(), "8c10ab3c-dca4-4251-904e-523c7e0bc717");            

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
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("totam") {{
                    apimKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateImageTagsFormRequest req = new CreateImageTagsFormRequest(                new ImageTagCreateBatch() {{
                                tags = new org.openapis.openapi.models.shared.ImageTagCreateEntry[]{{
                                    add(new ImageTagCreateEntry() {{
                                        imageId = "4796f2a7-0c68-4828-aaa4-82562f222e98";
                                        tagId = "17ee17cb-e61e-46b7-b95b-c0ab3c20c4f3";
                                    }}),
                                    add(new ImageTagCreateEntry() {{
                                        imageId = "789fd871-f99d-4d2e-bd12-1aa6f1e674bd";
                                        tagId = "b04f1575-6082-4d68-aa19-f1d17051339d";
                                    }}),
                                    add(new ImageTagCreateEntry() {{
                                        imageId = "08086a18-4039-44c2-a071-f93f5f0642da";
                                        tagId = "c7af515c-c413-4aa6-baae-8d67864dbb67";
                                    }}),
                                    add(new ImageTagCreateEntry() {{
                                        imageId = "5fd5e60b-375e-4d4f-afbe-e41f33317fe3";
                                        tagId = "5b60eb1e-a426-4555-ba3c-28744ed53b88";
                                    }}),
                                }};
                            }};, "f3a8d8f5-c0b2-4f2f-b7b1-94a276b26916");            

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
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sapiente") {{
                    apimKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateImageTagsJsonRequest req = new CreateImageTagsJsonRequest(                new ImageTagCreateBatch() {{
                                tags = new org.openapis.openapi.models.shared.ImageTagCreateEntry[]{{
                                    add(new ImageTagCreateEntry() {{
                                        imageId = "1f08f429-4e36-498f-847f-603e8b445e80";
                                        tagId = "ca55efd2-0e45-47e1-858b-6a89fbe3a5aa";
                                    }}),
                                    add(new ImageTagCreateEntry() {{
                                        imageId = "8e4824d0-ab40-4750-88e5-1862065e904f";
                                        tagId = "3b1194b8-abf6-403a-b9f9-dfe0ab7da8a5";
                                    }}),
                                    add(new ImageTagCreateEntry() {{
                                        imageId = "0ce187f8-6bc1-473d-a89e-ee9526f8d986";
                                        tagId = "e881ead4-f0e1-4012-963f-94e29e973e92";
                                    }}),
                                    add(new ImageTagCreateEntry() {{
                                        imageId = "2a57a15b-e3e0-4608-87e2-b6e3ab8845f0";
                                        tagId = "597a60ff-2a54-4a31-a947-64a3e865e795";
                                    }}),
                                }};
                            }};, "6f9251a5-a9da-4660-bf57-bfaad4f9efc1");            

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
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("rerum") {{
                    apimKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateImageTagsRawRequest req = new CreateImageTagsRawRequest("tempora".getBytes(), "512c1032-648d-4c2f-a151-99ebfd0e9fe6");            

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
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("porro") {{
                    apimKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateImagesFromDataRequest req = new CreateImagesFromDataRequest(                new CreateImagesFromDataRequestBody(                new CreateImagesFromDataRequestBodyImageData("suscipit".getBytes(), "dolorem"););, "2ca3aed0-1179-4963-92fd-e04771778ff6") {{
                tagIds = new String[]{{
                    add("d0174763-60a1-45db-aa66-0659a1adeaab"),
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
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ad") {{
                    apimKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateImagesFromFilesFormRequest req = new CreateImagesFromFilesFormRequest(                new ImageFileCreateBatch() {{
                                images = new org.openapis.openapi.models.shared.ImageFileCreateEntry[]{{
                                    add(new ImageFileCreateEntry() {{
                                        contents = "enim";
                                        name = "Estelle Jakubowski";
                                        regions = new org.openapis.openapi.models.shared.Region[]{{
                                            add(new Region(7706.75, 8427.77, "b5a34181-4301-4042-9813-d5208ece7e25", 1995.96, 7129.27) {{
                                                height = 3210.43;
                                                left = 7139.27;
                                                tagId = "08b61891-baa0-4fe1-ade0-08e6f8c5f350";
                                                top = 8483.41;
                                                width = 5181.5;
                                            }}),
                                            add(new Region(1319.03, 4959.7, "3a8418d1-6230-49fb-8929-921aefb9f58c", 3004.03, 8363.64) {{
                                                height = 4329.84;
                                                left = 4269.43;
                                                tagId = "8451c6c6-e205-4e16-9eab-3fec9578a645";
                                                top = 5510.79;
                                                width = 2609.04;
                                            }}),
                                        }};
                                        tagIds = new String[]{{
                                            add("6e68e4be-0560-413f-99da-757a59ecfef6"),
                                            add("6ef1caa3-383c-42be-b477-373c8d72f64d"),
                                            add("1db1f2c4-3106-461e-9634-9e1cf9e06e3a"),
                                        }};
                                    }}),
                                    add(new ImageFileCreateEntry() {{
                                        contents = "non";
                                        name = "Mr. Glenda Bailey";
                                        regions = new org.openapis.openapi.models.shared.Region[]{{
                                            add(new Region(6780.6, 4876.76, "20261143-5e13-49db-8225-9b1abda8c070", 9148.64, 800.61) {{
                                                height = 4083.03;
                                                left = 6931.53;
                                                tagId = "6bc9b8f7-59ea-4c55-a974-1d311352965b";
                                                top = 7262.27;
                                                width = 5269.07;
                                            }}),
                                            add(new Region(340.7, 7104.56, "e2d78225-9e3e-4a4b-9197-f92443da7ce5", 1855.18, 7088.98) {{
                                                height = 493.48;
                                                left = 5171.37;
                                                tagId = "4cb0672d-1ad8-479e-ab96-65b85efbd02b";
                                                top = 6841.26;
                                                width = 9195.08;
                                            }}),
                                            add(new Region(3628.88, 4413.21, "07577929-177d-4eac-a46e-cb573409e3eb", 1201.2, 9369.28) {{
                                                height = 5326.69;
                                                left = 5873.75;
                                                tagId = "5c537c64-54ef-4b0b-b489-6c3ca5acfbe2";
                                                top = 9974.37;
                                                width = 8659.46;
                                            }}),
                                            add(new Region(6144.38, 8268.62, "bb30fcb3-3ea0-455b-997c-d44e2f52d82d", 2273.62, 3476.98) {{
                                                height = 3344.74;
                                                left = 6592.68;
                                                tagId = "2b12eb07-f116-4db9-9545-fc95fa88970e";
                                                top = 1040.78;
                                                width = 5546.45;
                                            }}),
                                        }};
                                        tagIds = new String[]{{
                                            add("3bb6f48b-656b-4cdb-b5ff-2e4b27537a8c"),
                                        }};
                                    }}),
                                    add(new ImageFileCreateEntry() {{
                                        contents = "fugiat";
                                        name = "Stewart Kunze V";
                                        regions = new org.openapis.openapi.models.shared.Region[]{{
                                            add(new Region(5149.93, 9217.19, "0c2bb89e-b75d-4ad6-b6c6-00503d8bb311", 5149.22, 407.1) {{
                                                height = 1114.96;
                                                left = 4915.91;
                                                tagId = "7d525f77-b114-4eeb-92ff-785fc37814d4";
                                                top = 7904.63;
                                                width = 5910.65;
                                            }}),
                                            add(new Region(6985.58, 4116.15, "07f3c93c-73b9-4da3-b2ce-da7e23f22574", 680.93, 727.54) {{
                                                height = 9384.12;
                                                left = 4797.07;
                                                tagId = "39ae9e05-7eb8-409e-a810-331f3981d4c7";
                                                top = 323.56;
                                                width = 209.5;
                                            }}),
                                            add(new Region(662.07, 2656.32, "00e764ad-7334-4ec1-b781-b36a08088d10", 510.75, 9048.27) {{
                                                height = 9438.51;
                                                left = 6444.79;
                                                tagId = "f4b7544e-472e-4802-857a-5b40463a7d57";
                                                top = 3306;
                                                width = 9692.06;
                                            }}),
                                            add(new Region(6711.16, 6176.57, "e06bee48-25c1-4fc0-a115-c80bff918544", 9292.92, 8074.19) {{
                                                height = 9655.17;
                                                left = 6512.28;
                                                tagId = "da200ef0-422e-4b21-a4cf-9ab8366c723f";
                                                top = 9979.18;
                                                width = 8611.23;
                                            }}),
                                        }};
                                        tagIds = new String[]{{
                                            add("2defcce8-f197-4777-be63-562a7b408f05"),
                                            add("e3d48fda-f313-4a1f-9fd9-4259c0b36f25"),
                                        }};
                                    }}),
                                }};
                                tagIds = new String[]{{
                                    add("a944f3b7-56c1-41f6-837a-5126243835bb"),
                                    add("c05a23a4-5cef-4c5f-9e10-a0ce2169e510"),
                                    add("019c6dc5-e347-4627-99bf-bbe6949fb2bb"),
                                    add("4ecae6c3-d5db-43ad-abd5-daea4c506a8a"),
                                }};
                            }};, "a94c0264-4cf5-4e9d-9a45-78adc1ac600d");            

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
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("necessitatibus") {{
                    apimKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateImagesFromFilesJsonRequest req = new CreateImagesFromFilesJsonRequest(                new ImageFileCreateBatch() {{
                                images = new org.openapis.openapi.models.shared.ImageFileCreateEntry[]{{
                                    add(new ImageFileCreateEntry() {{
                                        contents = "consequatur";
                                        name = "Julie Murazik";
                                        regions = new org.openapis.openapi.models.shared.Region[]{{
                                            add(new Region(7014.41, 46.54, "960a6681-51a4-472a-b923-c5949f83f350", 7879.16, 9484.44) {{
                                                height = 1698.19;
                                                left = 8857.97;
                                                tagId = "2ec09ff8-f0f8-416f-b347-7c13e902c141";
                                                top = 1391.33;
                                                width = 3576.39;
                                            }}),
                                        }};
                                        tagIds = new String[]{{
                                            add("76ffb901-c6ec-4bb4-a243-cf789ffafeda"),
                                            add("53e5ae6e-0ac1-484c-ab9c-247c88373a40"),
                                            add("e1942f32-e550-4557-96f5-d56d0bd0af2d"),
                                        }};
                                    }}),
                                    add(new ImageFileCreateEntry() {{
                                        contents = "repellat";
                                        name = "Joe Fisher";
                                        regions = new org.openapis.openapi.models.shared.Region[]{{
                                            add(new Region(9942.34, 5323.26, "95010f5d-d3d6-4fa1-804e-54c82f168a36", 2323.16, 7681.95) {{
                                                height = 9767.62;
                                                left = 4353.53;
                                                tagId = "2cba3f89-41ae-4bc0-b80a-6924d3b2ecfc";
                                                top = 7747.48;
                                                width = 5503.38;
                                            }}),
                                            add(new Region(5775.9, 6009.34, "171b51c1-bdb1-4cf4-b888-ebdfc4ccca99", 7268.51, 7748.8) {{
                                                height = 5259.17;
                                                left = 5277.15;
                                                tagId = "73e48438-0b1f-46b8-8a27-5a60a04c495c";
                                                top = 8103.02;
                                                width = 3784.03;
                                            }}),
                                        }};
                                        tagIds = new String[]{{
                                            add("fc0b2dce-1087-43e4-ab00-6d678878ba85"),
                                            add("81a58208-c54f-4efa-9c95-f2eac5565d30"),
                                        }};
                                    }}),
                                    add(new ImageFileCreateEntry() {{
                                        contents = "odio";
                                        name = "Emmett Walsh";
                                        regions = new org.openapis.openapi.models.shared.Region[]{{
                                            add(new Region(2987.5, 9618.42, "4cc6f18b-f962-41a6-a4f7-7a87ee3e4be7", 3734.49, 1316.87) {{
                                                height = 1441.79;
                                                left = 251.9;
                                                tagId = "6e2813fa-4a41-4c48-8d3f-2132af03102d";
                                                top = 3165.41;
                                                width = 735.74;
                                            }}),
                                        }};
                                        tagIds = new String[]{{
                                            add("65b34418-e3bb-491c-8d97-5e0e8419d8f8"),
                                            add("4f144f3e-07ed-4cc4-aa5f-3cabd905a972"),
                                            add("e0567282-27b2-4d30-9470-bf7a4fa87cf5"),
                                            add("35a6fae5-4ebf-460c-b21f-023b75d2367f"),
                                        }};
                                    }}),
                                    add(new ImageFileCreateEntry() {{
                                        contents = "itaque";
                                        name = "Monique Bartoletti";
                                        regions = new org.openapis.openapi.models.shared.Region[]{{
                                            add(new Region(9082.49, 9205.48, "2c8c6ce6-11fe-4eb1-87cb-db6eec74378b", 6439.97, 1384.36) {{
                                                height = 8199.96;
                                                left = 9804.67;
                                                tagId = "79f0a396-d90c-4364-b7c1-5dfbace188b1";
                                                top = 7705.44;
                                                width = 2740.4;
                                            }}),
                                            add(new Region(6405.65, 3796.61, "b7008787-5614-43f5-a6c9-8b55554080d4", 392.02, 7402.45) {{
                                                height = 3194.19;
                                                left = 1939.9;
                                                tagId = "17747dc9-15ad-42ca-b5dd-6723dc0f5ae2";
                                                top = 9607.67;
                                                width = 2043.73;
                                            }}),
                                            add(new Region(7486.06, 2696, "74b0ed20-e562-448f-bf63-9a910abdcab6", 1467.42, 3830.66) {{
                                                height = 7512.98;
                                                left = 6283.14;
                                                tagId = "cc6cbd6b-5f3e-4c90-9304-f926bad25538";
                                                top = 987.59;
                                                width = 6225.66;
                                            }}),
                                        }};
                                        tagIds = new String[]{{
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
                            }};, "d364ffd4-5590-46d1-a63d-48e935c2c9e8");            

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
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dicta") {{
                    apimKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateImagesFromFilesRawRequest req = new CreateImagesFromFilesRawRequest("sapiente".getBytes(), "30be3e43-202d-4721-a576-506641870d9d");            

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
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sed") {{
                    apimKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateImagesFromPredictionsFormRequest req = new CreateImagesFromPredictionsFormRequest(                new ImageIdCreateBatch() {{
                                images = new org.openapis.openapi.models.shared.ImageIdCreateEntry[]{{
                                    add(new ImageIdCreateEntry() {{
                                        id = "f9ad030c-4ecc-411a-8836-429068b8502a";
                                        regions = new org.openapis.openapi.models.shared.Region[]{{
                                            add(new Region(7594.51, 2796.73, "24266658-16dd-4ca8-af51-fcb4c593ec12", 7798.23, 8400.17) {{
                                                height = 3613.71;
                                                left = 8843.25;
                                                tagId = "7f73bc84-5e32-40a3-99f4-badf947c9a86";
                                                top = 4693.84;
                                                width = 7063.28;
                                            }}),
                                            add(new Region(5592.48, 2184.13, "dabf9ef3-ffdd-49f7-b079-af4d35724cdb", 584.63, 9670.47) {{
                                                height = 6520.92;
                                                left = 6615.78;
                                                tagId = "d0ec7afe-dbd8-40df-848a-47f9390c5888";
                                                top = 283.62;
                                                width = 5917.74;
                                            }}),
                                        }};
                                        tagIds = new String[]{{
                                            add("d281187d-5684-44ed-ad85-a9065e628bdf"),
                                            add("c2032b6c-8799-423b-be13-584f7ae12c68"),
                                        }};
                                    }}),
                                }};
                                tagIds = new String[]{{
                                    add("1f82ce11-5717-4230-9377-dcfa89df975e"),
                                    add("35668609-2e9c-43dd-85f1-11dea1026d54"),
                                    add("1a4d190f-eb21-4780-bccc-0dbbddb48470"),
                                }};
                            }};, "8fb4e391-e6bc-4158-84c4-e54599ea3422");            

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
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("suscipit") {{
                    apimKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateImagesFromPredictionsJsonRequest req = new CreateImagesFromPredictionsJsonRequest(                new ImageIdCreateBatch() {{
                                images = new org.openapis.openapi.models.shared.ImageIdCreateEntry[]{{
                                    add(new ImageIdCreateEntry() {{
                                        id = "e9b200ce-78a1-4bd8-bb7a-0a116ce723d4";
                                        regions = new org.openapis.openapi.models.shared.Region[]{{
                                            add(new Region(1263.67, 1428.56, "e8c1f849-3825-4fdc-82c8-76c2c2dfb4cf", 7797.48, 756.1) {{
                                                height = 6205.34;
                                                left = 4573.89;
                                                tagId = "fa30e9af-725b-4291-a203-0d83f5aeb779";
                                                top = 5818.89;
                                                width = 8287.35;
                                            }}),
                                        }};
                                        tagIds = new String[]{{
                                            add("76230f84-1fb1-4bd2-bfdb-14db6be5a685"),
                                            add("998e22ae-20da-416f-82b2-71a289c57e85"),
                                            add("4e90439d-2224-4656-9462-407084f7ab37"),
                                            add("cef02225-194d-4b55-810a-dc669af90a26"),
                                        }};
                                    }}),
                                }};
                                tagIds = new String[]{{
                                    add("7cdc981f-0689-481d-abb3-3cfaa348c31b"),
                                    add("f407ee4f-cf0c-442b-b8f1-5626398a0dc7"),
                                    add("66324ccb-06c8-4ca1-ad02-529270b8d572"),
                                    add("2dd895b8-bcf2-44db-9596-93352f745339"),
                                }};
                            }};, "94d78de3-b6e9-4389-b5ab-b7f662550a28");            

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
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("adipisci") {{
                    apimKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateImagesFromPredictionsRawRequest req = new CreateImagesFromPredictionsRawRequest("totam".getBytes(), "2ac483af-d231-45bb-a650-164e06f5bf6a");            

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
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("repudiandae") {{
                    apimKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateImagesFromUrlsFormRequest req = new CreateImagesFromUrlsFormRequest(                new ImageUrlCreateBatch() {{
                                images = new org.openapis.openapi.models.shared.ImageUrlCreateEntry[]{{
                                    add(new ImageUrlCreateEntry("tempore") {{
                                        regions = new org.openapis.openapi.models.shared.Region[]{{
                                            add(new Region(3227.73, 8477.4, "086b6f66-fef0-420e-9f44-3b4257b992c8", 8301.97, 7388.32) {{
                                                height = 1020.19;
                                                left = 7112.75;
                                                tagId = "c8bdef36-12b6-43c2-85fd-a840774a68a9";
                                                top = 6740.77;
                                                width = 2247.77;
                                            }}),
                                            add(new Region(3999.46, 2946.5, "0d6a1831-c87a-4df5-96fd-f1ad837ae80c", 1138.08, 7664.98) {{
                                                height = 8429.35;
                                                left = 6674.18;
                                                tagId = "6a61efa2-1982-458f-90a9-eba47f7d3ef0";
                                                top = 3109.26;
                                                width = 5698.72;
                                            }}),
                                            add(new Region(2792.32, 2669.76, "8c7977a0-ef2f-4536-828e-feef934152ed", 4917.84, 9296.79) {{
                                                height = 1020.71;
                                                left = 5754.04;
                                                tagId = "c95ba998-678f-4a3f-a969-91af388ce036";
                                                top = 1108.04;
                                                width = 2569.75;
                                            }}),
                                        }};
                                        tagIds = new String[]{{
                                            add("53f4c157-deaa-4717-8f44-5accf667aaf9"),
                                        }};
                                        url = "soluta";
                                    }}),
                                    add(new ImageUrlCreateEntry("eius") {{
                                        regions = new org.openapis.openapi.models.shared.Region[]{{
                                            add(new Region(3335.07, 9187.2, "99e6234c-9f7b-479d-beb7-7a5c38d4baf9", 752.03, 9015.63) {{
                                                height = 8556.47;
                                                left = 780.74;
                                                tagId = "85fe431d-6bf5-4c83-8fbb-8c20cb67fc4b";
                                                top = 2630.79;
                                                width = 1764.18;
                                            }}),
                                            add(new Region(5802.48, 5933.66, "e26ced8f-9fdb-4941-8f63-bbf817837b01", 6506.78, 9904.54) {{
                                                height = 3147.24;
                                                left = 524.07;
                                                tagId = "6ef890a5-4b47-45f1-af56-d385a3c4ac63";
                                                top = 1247.96;
                                                width = 6988.44;
                                            }}),
                                            add(new Region(844.38, 3287.44, "2eab9cd7-e522-44a6-a0e1-23b7847ec59e", 1027.54, 9747.88) {{
                                                height = 8725.8;
                                                left = 8453.74;
                                                tagId = "78862418-9eb4-4487-bf50-33f19dbf125c";
                                                top = 8926.4;
                                                width = 2873.79;
                                            }}),
                                        }};
                                        tagIds = new String[]{{
                                            add("7f3c4cce-4b6d-4769-aff3-c5747501357e"),
                                            add("44f51f8b-084c-4319-be19-3a245467f948"),
                                        }};
                                        url = "nihil";
                                    }}),
                                }};
                                tagIds = new String[]{{
                                    add("2d5cc497-2233-4e66-bd8f-e5d00b979ef2"),
                                    add("03873205-90cc-4c10-9640-0313b3e5044f"),
                                    add("65fe72dc-4077-4d0c-83f4-08efc15ceb4d"),
                                    add("6e1eae0f-75ae-4df2-acab-58b991c926dd"),
                                }};
                            }};, "b589461e-7421-4cbe-ad95-02f0ea930b69");            

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
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("maiores") {{
                    apimKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateImagesFromUrlsJsonRequest req = new CreateImagesFromUrlsJsonRequest(                new ImageUrlCreateBatch() {{
                                images = new org.openapis.openapi.models.shared.ImageUrlCreateEntry[]{{
                                    add(new ImageUrlCreateEntry("totam") {{
                                        regions = new org.openapis.openapi.models.shared.Region[]{{
                                            add(new Region(8971.46, 5951.52, "659eb40e-c16f-4af7-9b0b-532a4da37cba", 6370.37, 9551.26) {{
                                                height = 7675.4;
                                                left = 1609.88;
                                                tagId = "f72f8850-0904-4911-a082-07888ec66183";
                                                top = 7420.1;
                                                width = 9454.09;
                                            }}),
                                            add(new Region(9019.24, 8010.14, "d47353f6-3c82-4093-b9aa-69cd5fbcf79d", 6345.61, 1203.87) {{
                                                height = 3005.57;
                                                left = 2602.46;
                                                tagId = "52c4842c-9b2a-4d32-9afe-81a88f444457";
                                                top = 1908.5;
                                                width = 9477.04;
                                            }}),
                                            add(new Region(5263.22, 9534.06, "7502bfdc-3450-4841-b176-4456379f3fb2", 4727.63, 8825.86) {{
                                                height = 5248.01;
                                                left = 6832.71;
                                                tagId = "7822bf95-894e-4686-9adb-55f9e5d751c9";
                                                top = 9863.3;
                                                width = 8964.43;
                                            }}),
                                        }};
                                        tagIds = new String[]{{
                                            add("1f862657-b36f-4c6b-9f58-7ce525c67641"),
                                        }};
                                        url = "fuga";
                                    }}),
                                    add(new ImageUrlCreateEntry("mollitia") {{
                                        regions = new org.openapis.openapi.models.shared.Region[]{{
                                            add(new Region(1151.48, 9651.17, "6c48252d-7771-4e7f-9074-009ef8d29de1", 8135.82, 8536.25) {{
                                                height = 968.03;
                                                left = 1533.74;
                                                tagId = "e5047b4c-21cc-4b42-babc-dc91faabdd88";
                                                top = 8857.21;
                                                width = 4610.94;
                                            }}),
                                        }};
                                        tagIds = new String[]{{
                                            add("097b5da0-8c57-4fa6-878a-216e19bafeca"),
                                            add("61914981-40b6-44ff-8ae1-70ef03b5f37e"),
                                        }};
                                        url = "numquam";
                                    }}),
                                }};
                                tagIds = new String[]{{
                                    add("86855596-6732-4aa5-9cb6-682cb70f8cfd"),
                                    add("5fb6e91b-9a9f-4748-86e2-c3309db0536d"),
                                    add("9e75ca00-6f53-492c-91a2-5a8bf92f9742"),
                                }};
                            }};, "8ad9a9f8-bf82-4211-a535-9d98387f7a79");            

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
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("maxime") {{
                    apimKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateImagesFromUrlsRawRequest req = new CreateImagesFromUrlsRawRequest("assumenda".getBytes(), "72cd2484-da21-4729-b2ac-41ef5725f116");            

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
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sint") {{
                    apimKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteImageRegionsRequest req = new DeleteImageRegionsRequest("ac1e41d8-a23c-423e-b4f2-dfa4a197f6de",                 new String[]{{
                                add("22151fe1-7120-4998-93e9-f543d854439e"),
                                add("e2244604-43bc-4154-988c-2f56e85da783"),
                                add("2eabd617-c3b0-4d51-a44b-f01bad8706d4"),
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
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ea") {{
                    apimKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteImageTagsRequest req = new DeleteImageTagsRequest(                new String[]{{
                                add("82bfbdc4-1ff5-4d4e-aae4-fb5cb35d1763"),
                            }}, "8f1edb78-359e-4cc5-8b86-0f8cd580ba73",                 new String[]{{
                                add("10e4fe44-4729-47cd-bb1d-d3bbce247b76"),
                                add("84eff501-26d7-41cf-bbd0-eb74b8421953"),
                                add("b44bd3c4-3159-4d33-a595-3c001139863a"),
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
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("fuga") {{
                    apimKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteImagesRequest req = new DeleteImagesRequest("41e6c31c-c2f1-4fcb-91c9-a41ffbe9cbd7") {{
                allImages = false;
                allIterations = false;
                imageIds = new String[]{{
                    add("5ee65e07-6cc7-4abf-a16e-a5c71641934b"),
                    add("90f2e09d-19d2-4fc2-b9e2-e105944b935d"),
                    add("237a72f9-0849-4d6a-ad4a-ecb7537cd922"),
                }};
            }};            

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
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quia") {{
                    apimKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetImagesByIdsRequest req = new GetImagesByIdsRequest("c9ff5749-1aab-4fa2-a761-f0ca4d456ef1") {{
                imageIds = new String[]{{
                    add("31e6899f-0c20-401e-a2cd-55cc0584a184"),
                }};
                iterationId = "d76d971f-c820-4c65-b037-bb8e0cc88518";
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
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("molestiae") {{
                    apimKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetTaggedImageCountRequest req = new GetTaggedImageCountRequest("e4de04af-28c5-4ddd-b46a-a1cfd6d828da") {{
                iterationId = "01319112-9646-4645-81d8-1f29042f569b";
                tagIds = new String[]{{
                    add("aff0ea22-16cb-4e07-9bc1-63e279a3b084"),
                    add("da99257d-04f4-4084-ba74-2d84496cbdee"),
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
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("impedit") {{
                    apimKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetTaggedImagesRequest req = new GetTaggedImagesRequest("f6b99bc6-3562-4ebf-9f55-c294c060b06a") {{
                iterationId = "1287764e-ef6d-40c6-96ed-9c73dd634571";
                orderBy = GetTaggedImagesOrderByEnum.NEWEST;
                skip = 55356;
                tagIds = new String[]{{
                    add("a8e870d3-c5a1-4f9c-a42c-7b66a1f30c73"),
                    add("df5b6719-890f-442a-8bb4-38d85b260591"),
                    add("d745e3c2-059c-49c3-b567-e0e252765b1d"),
                }};
                take = 402121;
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
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("consequuntur") {{
                    apimKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetUntaggedImageCountRequest req = new GetUntaggedImageCountRequest("fcdace1f-0121-46ce-a239-e8f25cd0d19d") {{
                iterationId = "959f439e-3926-46cb-995f-7aa2b2411369";
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
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nostrum") {{
                    apimKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetUntaggedImagesRequest req = new GetUntaggedImagesRequest("d1e6698f-cc45-4962-97c2-977676334254") {{
                iterationId = "038bfb59-71e9-4819-8557-389cedbac7fd";
                orderBy = GetUntaggedImagesOrderByEnum.OLDEST;
                skip = 223001;
                take = 577731;
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

## querySuggestedImageCountForm

This API takes in tagIds to get count of untagged images per suggested tags for a given threshold.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.QuerySuggestedImageCountFormRequest;
import org.openapis.openapi.models.operations.QuerySuggestedImageCountFormResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TagFilter;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("exercitationem") {{
                    apimKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            QuerySuggestedImageCountFormRequest req = new QuerySuggestedImageCountFormRequest(                new TagFilter() {{
                                tagIds = new String[]{{
                                    add("4d66bc2a-e480-4632-b995-4b6fa2206369"),
                                    add("828553cb-1000-46be-b492-1ec2053b7493"),
                                    add("66ac8ee0-f2bf-4195-88d4-0d03f3deba29"),
                                }};
                                threshold = 4766.04;
                            }};, "be3e90bc-40df-4868-bd52-405cb331d492", "f4f127fb-0e0b-4f1f-8217-978d0acca77a");            

            QuerySuggestedImageCountFormResponse res = sdk.imageApi.querySuggestedImageCountForm(req);

            if (res.querySuggestedImageCountForm200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## querySuggestedImageCountJson

This API takes in tagIds to get count of untagged images per suggested tags for a given threshold.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.QuerySuggestedImageCountJsonRequest;
import org.openapis.openapi.models.operations.QuerySuggestedImageCountJsonResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TagFilter;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("repudiandae") {{
                    apimKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            QuerySuggestedImageCountJsonRequest req = new QuerySuggestedImageCountJsonRequest(                new TagFilter() {{
                                tagIds = new String[]{{
                                    add("7b7021a5-2046-4b64-a99f-b0e67e094fdf"),
                                    add("ed5540ef-53a3-44a1-b8fe-99731adc05d8"),
                                    add("5ae2dfb7-0fb3-4874-a90d-336561eca16e"),
                                }};
                                threshold = 9879.98;
                            }};, "89451bd7-6eee-4b51-8c4d-a1fad35512f0", "6d4e5b72-f0f5-4485-a8a0-424e00a1d6eb");            

            QuerySuggestedImageCountJsonResponse res = sdk.imageApi.querySuggestedImageCountJson(req);

            if (res.querySuggestedImageCountJSON200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## querySuggestedImageCountRaw

This API takes in tagIds to get count of untagged images per suggested tags for a given threshold.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.QuerySuggestedImageCountRawRequest;
import org.openapis.openapi.models.operations.QuerySuggestedImageCountRawResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TagFilter;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("cupiditate") {{
                    apimKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            QuerySuggestedImageCountRawRequest req = new QuerySuggestedImageCountRawRequest("modi".getBytes(), "34645d03-084f-4bba-9cce-ff5cb01fe51e", "528a45ac-82b8-45f8-bc2c-aba8da4127dd");            

            QuerySuggestedImageCountRawResponse res = sdk.imageApi.querySuggestedImageCountRaw(req);

            if (res.querySuggestedImageCountRaw200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## querySuggestedImagesForm

This API will fetch untagged images filtered by suggested tags Ids. It returns an empty array if no images are found.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.QuerySuggestedImagesFormRequest;
import org.openapis.openapi.models.operations.QuerySuggestedImagesFormResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SuggestedTagAndRegionQueryToken;
import org.openapis.openapi.models.shared.SuggestedTagAndRegionQueryTokenSortByEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nemo") {{
                    apimKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            QuerySuggestedImagesFormRequest req = new QuerySuggestedImagesFormRequest(                new SuggestedTagAndRegionQueryToken() {{
                                continuation = "omnis";
                                maxCount = 439275;
                                session = "hic";
                                sortBy = SuggestedTagAndRegionQueryTokenSortByEnum.UNCERTAINTY_DESCENDING;
                                tagIds = new String[]{{
                                    add("711aa1bc-74b8-46ce-8c74-f77b4848bd6a"),
                                    add("6f0441d2-c3b8-4080-9437-3e060459bebb"),
                                }};
                                threshold = 6653.11;
                            }};, "d02f2586-bcf1-4525-98da-a95be6cd0275", "6c354aa4-32b4-47e1-b63c-5208c23e9802");            

            QuerySuggestedImagesFormResponse res = sdk.imageApi.querySuggestedImagesForm(req);

            if (res.suggestedTagAndRegionQuery != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## querySuggestedImagesJson

This API will fetch untagged images filtered by suggested tags Ids. It returns an empty array if no images are found.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.QuerySuggestedImagesJsonRequest;
import org.openapis.openapi.models.operations.QuerySuggestedImagesJsonResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SuggestedTagAndRegionQueryToken;
import org.openapis.openapi.models.shared.SuggestedTagAndRegionQueryTokenSortByEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("repellendus") {{
                    apimKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            QuerySuggestedImagesJsonRequest req = new QuerySuggestedImagesJsonRequest(                new SuggestedTagAndRegionQueryToken() {{
                                continuation = "quas";
                                maxCount = 187444;
                                session = "sapiente";
                                sortBy = SuggestedTagAndRegionQueryTokenSortByEnum.UNCERTAINTY_ASCENDING;
                                tagIds = new String[]{{
                                    add("45eb4a8b-674e-4e5c-bc18-edc7f787e32e"),
                                    add("04b3d3ed-0c56-470e-b42b-d3c9f1cc503f"),
                                    add("6c39bcd0-a629-40f9-97f3-85189ad7ef80"),
                                    add("7aae03f3-3ca7-49fb-9de4-032ba26fd368"),
                                }};
                                threshold = 7129.97;
                            }};, "a9216bcb-4158-435c-b364-1723133edc04", "6bc5163b-bca4-4922-bc42-c22c55350495");            

            QuerySuggestedImagesJsonResponse res = sdk.imageApi.querySuggestedImagesJson(req);

            if (res.suggestedTagAndRegionQuery != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## querySuggestedImagesRaw

This API will fetch untagged images filtered by suggested tags Ids. It returns an empty array if no images are found.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.QuerySuggestedImagesRawRequest;
import org.openapis.openapi.models.operations.QuerySuggestedImagesRawResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SuggestedTagAndRegionQueryToken;
import org.openapis.openapi.models.shared.SuggestedTagAndRegionQueryTokenSortByEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quo") {{
                    apimKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            QuerySuggestedImagesRawRequest req = new QuerySuggestedImagesRawRequest("quis".getBytes(), "dbb3c57c-1e49-481e-8aa2-57ddc1912ebd", "e64bfcc5-469d-4401-9dfa-796206bef2b0");            

            QuerySuggestedImagesRawResponse res = sdk.imageApi.querySuggestedImagesRaw(req);

            if (res.suggestedTagAndRegionQuery != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
