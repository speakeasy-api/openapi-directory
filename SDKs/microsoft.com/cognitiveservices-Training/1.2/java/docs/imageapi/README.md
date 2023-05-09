# imageApi

### Available Operations

* [createImagesFromData](#createimagesfromdata) - Add the provided images to the set of training images
* [createImagesFromFilesForm](#createimagesfromfilesform) - Add the provided batch of images to the set of training images
* [createImagesFromFilesJson](#createimagesfromfilesjson) - Add the provided batch of images to the set of training images
* [createImagesFromFilesRaw](#createimagesfromfilesraw) - Add the provided batch of images to the set of training images
* [createImagesFromPredictionsForm](#createimagesfrompredictionsform) - Add the specified predicted images to the set of training images
* [createImagesFromPredictionsJson](#createimagesfrompredictionsjson) - Add the specified predicted images to the set of training images
* [createImagesFromPredictionsRaw](#createimagesfrompredictionsraw) - Add the specified predicted images to the set of training images
* [createImagesFromUrlsForm](#createimagesfromurlsform) - Add the provided images urls to the set of training images
* [createImagesFromUrlsJson](#createimagesfromurlsjson) - Add the provided images urls to the set of training images
* [createImagesFromUrlsRaw](#createimagesfromurlsraw) - Add the provided images urls to the set of training images
* [deleteImageTags](#deleteimagetags) - Remove a set of tags from a set of images
* [deleteImages](#deleteimages) - Delete images from the set of training images
* [getTaggedImages](#gettaggedimages) - Get tagged images for a given project iteration
* [getUntaggedImages](#getuntaggedimages) - Get untagged images for a given project iteration
* [postImageTagsForm](#postimagetagsform) - Associate a set of images with a set of tags
* [postImageTagsJson](#postimagetagsjson) - Associate a set of images with a set of tags
* [postImageTagsRaw](#postimagetagsraw) - Associate a set of images with a set of tags

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

            CreateImagesFromDataRequest req = new CreateImagesFromDataRequest(                new CreateImagesFromDataRequestBody(                new CreateImagesFromDataRequestBodyImageData("sapiente".getBytes(), "quo"););, "odit", "ddf7cc78-ca1b-4a92-8fc8-16742cb73920") {{
                tagIds = new String[]{{
                    add("natus"),
                    add("sed"),
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

Add the provided batch of images to the set of training images

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateImagesFromFilesFormRequest;
import org.openapis.openapi.models.operations.CreateImagesFromFilesFormResponse;
import org.openapis.openapi.models.shared.ImageFileCreateBatch;
import org.openapis.openapi.models.shared.ImageFileCreateEntry;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateImagesFromFilesFormRequest req = new CreateImagesFromFilesFormRequest(                new ImageFileCreateBatch() {{
                                images = new org.openapis.openapi.models.shared.ImageFileCreateEntry[]{{
                                    add(new ImageFileCreateEntry() {{
                                        contents = "dolor";
                                        name = "Lester Welch";
                                        tagIds = new String[]{{
                                            add("596eb10f-aaa2-4352-8595-5907aff1a3a2"),
                                            add("fa946773-9251-4aa5-ac3f-5ad019da1ffe"),
                                        }};
                                    }}),
                                    add(new ImageFileCreateEntry() {{
                                        contents = "nihil";
                                        name = "Jan Bednar";
                                        tagIds = new String[]{{
                                            add("0074f154-71b5-4e6e-93b9-9d488e1e91e4"),
                                            add("50ad2abd-4426-4980-ad50-2a94bb4f63c9"),
                                            add("69e9a3ef-a77d-4fb1-8cd6-6ae395efb9ba"),
                                        }};
                                    }}),
                                    add(new ImageFileCreateEntry() {{
                                        contents = "blanditiis";
                                        name = "Timmy Feeney";
                                        tagIds = new String[]{{
                                            add("997074ba-4469-4b6e-a141-959890afa563"),
                                            add("e2516fe4-c8b7-411e-9b7f-d2ed028921cd"),
                                        }};
                                    }}),
                                }};
                                tagIds = new String[]{{
                                    add("c692601f-b576-4b0d-9f0d-30c5fbb25870"),
                                    add("53202c73-d5fe-49b9-8c28-909b3fe49a8d"),
                                    add("9cbf4863-3323-4f9b-b7f3-a4100674ebf6"),
                                    add("9280d1ba-77a8-49eb-b737-ae4203ce5e6a"),
                                }};
                            }};, "provident", "5d8a0d44-6ce2-4af7-a73c-f3be453f870b");            

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

Add the provided batch of images to the set of training images

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateImagesFromFilesJsonRequest;
import org.openapis.openapi.models.operations.CreateImagesFromFilesJsonResponse;
import org.openapis.openapi.models.shared.ImageFileCreateBatch;
import org.openapis.openapi.models.shared.ImageFileCreateEntry;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateImagesFromFilesJsonRequest req = new CreateImagesFromFilesJsonRequest(                new ImageFileCreateBatch() {{
                                images = new org.openapis.openapi.models.shared.ImageFileCreateEntry[]{{
                                    add(new ImageFileCreateEntry() {{
                                        contents = "sed";
                                        name = "Kelli Hintz";
                                        tagIds = new String[]{{
                                            add("429cdb1a-8422-4bb6-b9d2-322715bf0cbb"),
                                        }};
                                    }}),
                                }};
                                tagIds = new String[]{{
                                    add("e31b8b90-f344-43a1-908e-0adcf4b92187"),
                                }};
                            }};, "occaecati", "fce953f7-3ef7-4fbc-babd-74dd39c0f5d2");            

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

Add the provided batch of images to the set of training images

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateImagesFromFilesRawRequest;
import org.openapis.openapi.models.operations.CreateImagesFromFilesRawResponse;
import org.openapis.openapi.models.shared.ImageFileCreateBatch;
import org.openapis.openapi.models.shared.ImageFileCreateEntry;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateImagesFromFilesRawRequest req = new CreateImagesFromFilesRawRequest("porro".getBytes(), "maiores", "f7c70a45-626d-4436-813f-16d9f5fce6c5");            

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

Add the specified predicted images to the set of training images

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateImagesFromPredictionsFormRequest;
import org.openapis.openapi.models.operations.CreateImagesFromPredictionsFormResponse;
import org.openapis.openapi.models.shared.ImageIdCreateBatch;
import org.openapis.openapi.models.shared.ImageIdCreateEntry;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateImagesFromPredictionsFormRequest req = new CreateImagesFromPredictionsFormRequest(                new ImageIdCreateBatch() {{
                                images = new org.openapis.openapi.models.shared.ImageIdCreateEntry[]{{
                                    add(new ImageIdCreateEntry() {{
                                        id = "6146c3e2-50fb-4008-842e-141aac366c8d";
                                        tagIds = new String[]{{
                                            add("6b144290-7474-4778-a7bd-466d28c10ab3"),
                                            add("cdca4251-904e-4523-87e0-bc7178e4796f"),
                                            add("2a70c688-282a-4a48-a562-f222e9817ee1"),
                                            add("7cbe61e6-b7b9-45bc-8ab3-c20c4f3789fd"),
                                        }};
                                    }}),
                                    add(new ImageIdCreateEntry() {{
                                        id = "871f99dd-2efd-4121-aa6f-1e674bdb04f1";
                                        tagIds = new String[]{{
                                            add("756082d6-8ea1-49f1-9170-51339d08086a"),
                                            add("1840394c-2607-41f9-bf5f-0642dac7af51"),
                                        }};
                                    }}),
                                }};
                                tagIds = new String[]{{
                                    add("cc413aa6-3aae-48d6-b864-dbb675fd5e60"),
                                    add("b375ed4f-6fbe-4e41-b333-17fe35b60eb1"),
                                }};
                            }};, "accusamus", "a426555b-a3c2-4874-8ed5-3b88f3a8d8f5");            

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

Add the specified predicted images to the set of training images

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateImagesFromPredictionsJsonRequest;
import org.openapis.openapi.models.operations.CreateImagesFromPredictionsJsonResponse;
import org.openapis.openapi.models.shared.ImageIdCreateBatch;
import org.openapis.openapi.models.shared.ImageIdCreateEntry;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateImagesFromPredictionsJsonRequest req = new CreateImagesFromPredictionsJsonRequest(                new ImageIdCreateBatch() {{
                                images = new org.openapis.openapi.models.shared.ImageIdCreateEntry[]{{
                                    add(new ImageIdCreateEntry() {{
                                        id = "0b2f2fb7-b194-4a27-ab26-916fe1f08f42";
                                        tagIds = new String[]{{
                                            add("4e3698f4-47f6-403e-8b44-5e80ca55efd2"),
                                            add("0e457e18-58b6-4a89-bbe3-a5aa8e4824d0"),
                                            add("ab407508-8e51-4862-865e-904f3b1194b8"),
                                        }};
                                    }}),
                                    add(new ImageIdCreateEntry() {{
                                        id = "abf603a7-9f9d-4fe0-ab7d-a8a50ce187f8";
                                        tagIds = new String[]{{
                                            add("bc173d68-9eee-4952-af8d-986e881ead4f"),
                                            add("0e101256-3f94-4e29-a973-e922a57a15be"),
                                        }};
                                    }}),
                                    add(new ImageIdCreateEntry() {{
                                        id = "3e060807-e2b6-4e3a-b884-5f0597a60ff2";
                                        tagIds = new String[]{{
                                            add("54a31e94-764a-43e8-a5e7-956f9251a5a9"),
                                            add("da660ff5-7bfa-4ad4-b9ef-c1b4512c1032"),
                                            add("648dc2f6-1519-49eb-bd0e-9fe6c632ca3a"),
                                        }};
                                    }}),
                                    add(new ImageIdCreateEntry() {{
                                        id = "ed011799-6312-4fde-8477-1778ff61d017";
                                        tagIds = new String[]{{
                                            add("76360a15-db6a-4660-a59a-1adeaab5851d"),
                                            add("6c645b08-b618-491b-aa0f-e1ade008e6f8"),
                                        }};
                                    }}),
                                }};
                                tagIds = new String[]{{
                                    add("5f350d8c-db5a-4341-8143-010421813d52"),
                                    add("08ece7e2-53b6-4684-91c6-c6e205e16dea"),
                                    add("b3fec957-8a64-4584-a73a-8418d162309f"),
                                    add("b0929921-aefb-49f5-8c4d-86e68e4be056"),
                                }};
                            }};, "alias", "13f59da7-57a5-49ec-bef6-6ef1caa3383c");            

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

Add the specified predicted images to the set of training images

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateImagesFromPredictionsRawRequest;
import org.openapis.openapi.models.operations.CreateImagesFromPredictionsRawResponse;
import org.openapis.openapi.models.shared.ImageIdCreateBatch;
import org.openapis.openapi.models.shared.ImageIdCreateEntry;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateImagesFromPredictionsRawRequest req = new CreateImagesFromPredictionsRawRequest("magni".getBytes(), "soluta", "eb477373-c8d7-42f6-8d1d-b1f2c4310661");            

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

Add the provided images urls to the set of training images

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateImagesFromUrlsFormRequest;
import org.openapis.openapi.models.operations.CreateImagesFromUrlsFormResponse;
import org.openapis.openapi.models.shared.ImageUrlCreateBatch;
import org.openapis.openapi.models.shared.ImageUrlCreateEntry;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateImagesFromUrlsFormRequest req = new CreateImagesFromUrlsFormRequest(                new ImageUrlCreateBatch() {{
                                images = new org.openapis.openapi.models.shared.ImageUrlCreateEntry[]{{
                                    add(new ImageUrlCreateEntry() {{
                                        tagIds = new String[]{{
                                            add("6349e1cf-9e06-4e3a-8370-00ae6b6bc9b8"),
                                            add("f759eac5-5a97-441d-b113-52965bb8a720"),
                                            add("2611435e-139d-4bc2-a59b-1abda8c070e1"),
                                        }};
                                        url = "aperiam";
                                    }}),
                                    add(new ImageUrlCreateEntry() {{
                                        tagIds = new String[]{{
                                            add("4cb0672d-1ad8-479e-ab96-65b85efbd02b"),
                                            add("ae0be2d7-8225-49e3-aa4b-5197f92443da"),
                                            add("7ce52b89-5c53-47c6-854e-fb0b34896c3c"),
                                        }};
                                        url = "fuga";
                                    }}),
                                    add(new ImageUrlCreateEntry() {{
                                        tagIds = new String[]{{
                                            add("acfbe2fd-5707-4577-9291-77deac646ecb"),
                                            add("573409e3-eb1e-45a2-b12e-b07f116db995"),
                                        }};
                                        url = "aliquam";
                                    }}),
                                    add(new ImageUrlCreateEntry() {{
                                        tagIds = new String[]{{
                                            add("fc95fa88-970e-4189-9bb3-0fcb33ea055b"),
                                            add("197cd44e-2f52-4d82-9351-3bb6f48b656b"),
                                        }};
                                        url = "minus";
                                    }}),
                                }};
                                tagIds = new String[]{{
                                    add("b35ff2e4-b275-437a-8cd9-e7319c177d52"),
                                    add("5f77b114-eeb5-42ff-b85f-c37814d4c98e"),
                                    add("0c2bb89e-b75d-4ad6-b6c6-00503d8bb311"),
                                    add("80f739ae-9e05-47eb-809e-2810331f3981"),
                                }};
                            }};, "at", "4c700b60-7f3c-493c-b3b9-da3f2ceda7e2");            

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

Add the provided images urls to the set of training images

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateImagesFromUrlsJsonRequest;
import org.openapis.openapi.models.operations.CreateImagesFromUrlsJsonResponse;
import org.openapis.openapi.models.shared.ImageUrlCreateBatch;
import org.openapis.openapi.models.shared.ImageUrlCreateEntry;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateImagesFromUrlsJsonRequest req = new CreateImagesFromUrlsJsonRequest(                new ImageUrlCreateBatch() {{
                                images = new org.openapis.openapi.models.shared.ImageUrlCreateEntry[]{{
                                    add(new ImageUrlCreateEntry() {{
                                        tagIds = new String[]{{
                                            add("2257411f-af4b-4754-8e47-2e802857a5b4"),
                                            add("0463a7d5-75f1-4400-a764-ad7334ec1b78"),
                                            add("1b36a080-88d1-400e-bada-200ef0422eb2"),
                                            add("164cf9ab-8366-4c72-bffd-a9e06bee4825"),
                                        }};
                                        url = "quisquam";
                                    }}),
                                }};
                                tagIds = new String[]{{
                                    add("fc0e115c-80bf-4f91-8544-ec42defcce8f"),
                                }};
                            }};, "ab", "977773e6-3562-4a7b-808f-05e3d48fdaf3");            

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

Add the provided images urls to the set of training images

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateImagesFromUrlsRawRequest;
import org.openapis.openapi.models.operations.CreateImagesFromUrlsRawResponse;
import org.openapis.openapi.models.shared.ImageUrlCreateBatch;
import org.openapis.openapi.models.shared.ImageUrlCreateEntry;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateImagesFromUrlsRawRequest req = new CreateImagesFromUrlsRawRequest("vitae".getBytes(), "nesciunt", "a1f5fd94-259c-40b3-af25-ea944f3b756c");            

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

## deleteImageTags

Remove a set of tags from a set of images

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

            DeleteImageTagsRequest req = new DeleteImageTagsRequest("ab",                 new String[]{{
                                add("hic"),
                            }}, "6c37a512-6243-4835-bbc0-5a23a45cefc5",                 new String[]{{
                                add("assumenda"),
                                add("officiis"),
                                add("architecto"),
                                add("alias"),
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

Delete images from the set of training images

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

            DeleteImagesRequest req = new DeleteImagesRequest("culpa",                 new String[]{{
                                add("nobis"),
                            }}, "e2169e51-0019-4c6d-85e3-4762799bfbbe");            

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

            GetTaggedImagesRequest req = new GetTaggedImagesRequest("laboriosam", "949fb2bb-4eca-4e6c-bd5d-b3adebd5daea") {{
                iterationId = "4c506a8a-a94c-4026-84cf-5e9d9a4578ad";
                orderBy = GetTaggedImagesOrderByEnum.OLDEST;
                skip = 98610;
                tagIds = new String[]{{
                    add("quod"),
                    add("laboriosam"),
                    add("doloremque"),
                }};
                take = 31574;
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

            GetUntaggedImagesRequest req = new GetUntaggedImagesRequest("facere", "ec001ac8-02e2-4ec0-9ff8-f0f816ff3477") {{
                iterationId = "c13e902c-1412-45b0-960a-668151a472af";
                orderBy = GetUntaggedImagesOrderByEnum.OLDEST;
                skip = 151230;
                take = 200950;
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

## postImageTagsForm

Associate a set of images with a set of tags

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostImageTagsFormRequest;
import org.openapis.openapi.models.operations.PostImageTagsFormResponse;
import org.openapis.openapi.models.shared.ImageTagCreateBatch;
import org.openapis.openapi.models.shared.ImageTagCreateEntry;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostImageTagsFormRequest req = new PostImageTagsFormRequest(                new ImageTagCreateBatch() {{
                                tags = new org.openapis.openapi.models.shared.ImageTagCreateEntry[]{{
                                    add(new ImageTagCreateEntry() {{
                                        imageId = "5949f83f-350c-4f87-affb-901c6ecbb4e2";
                                        tagId = "43cf789f-fafe-4da5-be5a-e6e0ac184c2b";
                                    }}),
                                    add(new ImageTagCreateEntry() {{
                                        imageId = "9c247c88-373a-440e-9942-f32e55055756";
                                        tagId = "f5d56d0b-d0af-42df-a13d-b4f62cba3f89";
                                    }}),
                                    add(new ImageTagCreateEntry() {{
                                        imageId = "41aebc0b-80a6-4924-93b2-ecfcc8f89501";
                                        tagId = "0f5dd3d6-fa18-404e-94c8-2f168a363c88";
                                    }}),
                                    add(new ImageTagCreateEntry() {{
                                        imageId = "73e48438-0b1f-46b8-8a27-5a60a04c495c";
                                        tagId = "c699171b-51c1-4bdb-9cf4-b888ebdfc4cc";
                                    }}),
                                }};
                            }};, "porro", "a99bc7fc-0b2d-4ce1-8873-e42b006d6788");            

            PostImageTagsFormResponse res = sdk.imageApi.postImageTagsForm(req);

            if (res.imageTagCreateSummary != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postImageTagsJson

Associate a set of images with a set of tags

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostImageTagsJsonRequest;
import org.openapis.openapi.models.operations.PostImageTagsJsonResponse;
import org.openapis.openapi.models.shared.ImageTagCreateBatch;
import org.openapis.openapi.models.shared.ImageTagCreateEntry;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostImageTagsJsonRequest req = new PostImageTagsJsonRequest(                new ImageTagCreateBatch() {{
                                tags = new org.openapis.openapi.models.shared.ImageTagCreateEntry[]{{
                                    add(new ImageTagCreateEntry() {{
                                        imageId = "8ba8581a-5820-48c5-8fef-a9c95f2eac55";
                                        tagId = "65d307cf-ee81-4206-a281-3fa4a41c480d";
                                    }}),
                                    add(new ImageTagCreateEntry() {{
                                        imageId = "3f2132af-0310-42d5-94f4-cc6f18bf9621";
                                        tagId = "a6a4f77a-87ee-43e4-be75-2c65b34418e3";
                                    }}),
                                }};
                            }};, "expedita", "b91c8d97-5e0e-4841-9d8f-84f144f3e07e");            

            PostImageTagsJsonResponse res = sdk.imageApi.postImageTagsJson(req);

            if (res.imageTagCreateSummary != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postImageTagsRaw

Associate a set of images with a set of tags

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostImageTagsRawRequest;
import org.openapis.openapi.models.operations.PostImageTagsRawResponse;
import org.openapis.openapi.models.shared.ImageTagCreateBatch;
import org.openapis.openapi.models.shared.ImageTagCreateEntry;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostImageTagsRawRequest req = new PostImageTagsRawRequest("facere".getBytes(), "quisquam", "c4aa5f3c-abd9-405a-972e-056728227b2d");            

            PostImageTagsRawResponse res = sdk.imageApi.postImageTagsRaw(req);

            if (res.imageTagCreateSummary != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
