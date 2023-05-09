# openAI

## Overview

The OpenAI REST API

### Available Operations

* [cancelFineTune](#cancelfinetune) - Immediately cancel a fine-tune job.

* [~~createAnswer~~](#createanswer) - Answers the specified question using the provided documents and examples.

The endpoint first [searches](/docs/api-reference/searches) over provided documents or files to find relevant context. The relevant context is combined with the provided examples and question to create the prompt for [completion](/docs/api-reference/completions).
 :warning: **Deprecated**
* [createChatCompletion](#createchatcompletion) - Creates a completion for the chat message
* [~~createClassification~~](#createclassification) - Classifies the specified `query` using provided examples.

The endpoint first [searches](/docs/api-reference/searches) over the labeled examples
to select the ones most relevant for the particular query. Then, the relevant examples
are combined with the query to construct a prompt to produce the final label via the
[completions](/docs/api-reference/completions) endpoint.

Labeled examples can be provided via an uploaded `file`, or explicitly listed in the
request using the `examples` parameter for quick tests and small scale use cases.
 :warning: **Deprecated**
* [createCompletion](#createcompletion) - Creates a completion for the provided prompt and parameters
* [createEdit](#createedit) - Creates a new edit for the provided input, instruction, and parameters.
* [createEmbedding](#createembedding) - Creates an embedding vector representing the input text.
* [createFile](#createfile) - Upload a file that contains document(s) to be used across various endpoints/features. Currently, the size of all the files uploaded by one organization can be up to 1 GB. Please contact us if you need to increase the storage limit.

* [createFineTune](#createfinetune) - Creates a job that fine-tunes a specified model from a given dataset.

Response includes details of the enqueued job including job status and the name of the fine-tuned models once complete.

[Learn more about Fine-tuning](/docs/guides/fine-tuning)

* [createImage](#createimage) - Creates an image given a prompt.
* [createImageEdit](#createimageedit) - Creates an edited or extended image given an original image and a prompt.
* [createImageVariation](#createimagevariation) - Creates a variation of a given image.
* [createModeration](#createmoderation) - Classifies if text violates OpenAI's Content Policy
* [~~createSearch~~](#createsearch) - The search endpoint computes similarity scores between provided query and documents. Documents can be passed directly to the API if there are no more than 200 of them.

To go beyond the 200 document limit, documents can be processed offline and then used for efficient retrieval at query time. When `file` is set, the search endpoint searches over all the documents in the given file and returns up to the `max_rerank` number of documents. These documents will be returned along with their search scores.

The similarity score is a positive score that usually ranges from 0 to 300 (but can sometimes go higher), where a score above 200 usually means the document is semantically similar to the query.
 :warning: **Deprecated**
* [createTranscription](#createtranscription) - Transcribes audio into the input language.
* [createTranslation](#createtranslation) - Translates audio into into English.
* [deleteFile](#deletefile) - Delete a file.
* [deleteModel](#deletemodel) - Delete a fine-tuned model. You must have the Owner role in your organization.
* [downloadFile](#downloadfile) - Returns the contents of the specified file
* [~~listEngines~~](#listengines) - Lists the currently available (non-finetuned) models, and provides basic information about each one such as the owner and availability. :warning: **Deprecated**
* [listFiles](#listfiles) - Returns a list of files that belong to the user's organization.
* [listFineTuneEvents](#listfinetuneevents) - Get fine-grained status updates for a fine-tune job.

* [listFineTunes](#listfinetunes) - List your organization's fine-tuning jobs

* [listModels](#listmodels) - Lists the currently available models, and provides basic information about each one such as the owner and availability.
* [~~retrieveEngine~~](#retrieveengine) - Retrieves a model instance, providing basic information about it such as the owner and availability. :warning: **Deprecated**
* [retrieveFile](#retrievefile) - Returns information about a specific file.
* [retrieveFineTune](#retrievefinetune) - Gets info about the fine-tune job.

[Learn more about Fine-tuning](/docs/guides/fine-tuning)

* [retrieveModel](#retrievemodel) - Retrieves a model instance, providing basic information about the model such as the owner and permissioning.

## cancelFineTune

Immediately cancel a fine-tune job.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CancelFineTuneRequest;
import org.openapis.openapi.models.operations.CancelFineTuneResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CancelFineTuneRequest req = new CancelFineTuneRequest("ft-AF1WoRqd3aJAHsqc9NY7iL8F");            

            CancelFineTuneResponse res = sdk.openAI.cancelFineTune(req);

            if (res.fineTune != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## ~~createAnswer~~

Answers the specified question using the provided documents and examples.

The endpoint first [searches](/docs/api-reference/searches) over provided documents or files to find relevant context. The relevant context is combined with the provided examples and question to create the prompt for [completion](/docs/api-reference/completions).


> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateAnswerResponse;
import org.openapis.openapi.models.shared.CreateAnswerRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.CreateAnswerRequest req = new CreateAnswerRequest(                new String[][]{{
                                add(new String[]{{
                                    add("distinctio"),
                                    add("quibusdam"),
                                    add("unde"),
                                }}),
                                add(new String[]{{
                                    add("corrupti"),
                                    add("illum"),
                                    add("vel"),
                                    add("error"),
                                }}),
                                add(new String[]{{
                                    add("suscipit"),
                                    add("iure"),
                                    add("magnam"),
                                }}),
                            }}, "Ottawa, Canada's capital, is located in the east of southern Ontario, near the city of Montréal and the U.S. border.", "debitis", "What is the capital of Japan?") {{
                documents = new String[]{{
                    add("delectus"),
                }};
                expand = new Object[]{{
                    add("suscipit"),
                    add("molestiae"),
                }};
                file = "minus";
                logitBias = new java.util.HashMap<String, Object>() {{
                    put("voluptatum", "iusto");
                    put("excepturi", "nisi");
                    put("recusandae", "temporibus");
                    put("ab", "quis");
                }};
                logprobs = 87129L;
                maxRerank = 648172L;
                maxTokens = 20218L;
                n = 368241L;
                returnMetadata = false;
                returnPrompt = false;
                searchModel = "repellendus";
                stop = new String[]{{
                    add("["\n"]"),
                    add("["\n"]"),
                    add("["\n"]"),
                    add("["\n"]"),
                }};
                temperature = 1403.5;
                user = "user-1234";
            }};            

            CreateAnswerResponse res = sdk.openAI.createAnswer(req);

            if (res.createAnswerResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createChatCompletion

Creates a completion for the chat message

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateChatCompletionResponse;
import org.openapis.openapi.models.shared.ChatCompletionRequestMessage;
import org.openapis.openapi.models.shared.ChatCompletionRequestMessageRoleEnum;
import org.openapis.openapi.models.shared.CreateChatCompletionRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.CreateChatCompletionRequest req = new CreateChatCompletionRequest(                new org.openapis.openapi.models.shared.ChatCompletionRequestMessage[]{{
                                add(new ChatCompletionRequestMessage("porro", ChatCompletionRequestMessageRoleEnum.ASSISTANT) {{
                                    content = "at";
                                    name = "Javier Schmidt";
                                    role = ChatCompletionRequestMessageRoleEnum.USER;
                                }}),
                                add(new ChatCompletionRequestMessage("optio", ChatCompletionRequestMessageRoleEnum.USER) {{
                                    content = "dicta";
                                    name = "Luke McCullough";
                                    role = ChatCompletionRequestMessageRoleEnum.ASSISTANT;
                                }}),
                                add(new ChatCompletionRequestMessage("esse", ChatCompletionRequestMessageRoleEnum.SYSTEM) {{
                                    content = "beatae";
                                    name = "Tanya Gleason";
                                    role = ChatCompletionRequestMessageRoleEnum.ASSISTANT;
                                }}),
                                add(new ChatCompletionRequestMessage("dolor", ChatCompletionRequestMessageRoleEnum.USER) {{
                                    content = "excepturi";
                                    name = "Dorothy Hane";
                                    role = ChatCompletionRequestMessageRoleEnum.USER;
                                }}),
                            }}, "laboriosam") {{
                frequencyPenalty = 9437.49;
                logitBias = new java.util.HashMap<String, Object>() {{
                    put("fuga", "in");
                    put("corporis", "iste");
                    put("iure", "saepe");
                    put("quidem", "architecto");
                }};
                maxTokens = 60225L;
                n = 1L;
                presencePenalty = 9698.1;
                stop = new String[]{{
                    add("laborum"),
                    add("dolores"),
                    add("dolorem"),
                }};
                stream = false;
                temperature = 1;
                topP = 1;
                user = "user-1234";
            }};            

            CreateChatCompletionResponse res = sdk.openAI.createChatCompletion(req);

            if (res.createChatCompletionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## ~~createClassification~~

Classifies the specified `query` using provided examples.

The endpoint first [searches](/docs/api-reference/searches) over the labeled examples
to select the ones most relevant for the particular query. Then, the relevant examples
are combined with the query to construct a prompt to produce the final label via the
[completions](/docs/api-reference/completions) endpoint.

Labeled examples can be provided via an uploaded `file`, or explicitly listed in the
request using the `examples` parameter for quick tests and small scale use cases.


> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateClassificationResponse;
import org.openapis.openapi.models.shared.CreateClassificationRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.CreateClassificationRequest req = new CreateClassificationRequest("corporis", "The plot is not very attractive.") {{
                examples = new String[][]{{
                    add(new String[]{{
                        add("enim"),
                        add("omnis"),
                        add("nemo"),
                        add("minima"),
                    }}),
                }};
                expand = new Object[]{{
                    add("accusantium"),
                    add("iure"),
                    add("culpa"),
                }};
                file = "doloribus";
                labels = new String[]{{
                    add("architecto"),
                    add("mollitia"),
                    add("dolorem"),
                    add("culpa"),
                }};
                logitBias = new java.util.HashMap<String, Object>() {{
                    put("repellat", "mollitia");
                }};
                logprobs = 581850L;
                maxExamples = 253291L;
                returnMetadata = false;
                returnPrompt = false;
                searchModel = "commodi";
                temperature = 4663.11;
                user = "user-1234";
            }};            

            CreateClassificationResponse res = sdk.openAI.createClassification(req);

            if (res.createClassificationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createCompletion

Creates a completion for the provided prompt and parameters

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateCompletionResponse;
import org.openapis.openapi.models.shared.CreateCompletionRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.CreateCompletionRequest req = new CreateCompletionRequest("molestiae") {{
                bestOf = 244425L;
                echo = false;
                frequencyPenalty = 6235.1;
                logitBias = new java.util.HashMap<String, Object>() {{
                    put("quis", "vitae");
                }};
                logprobs = 674752L;
                maxTokens = 16L;
                n = 1L;
                presencePenalty = 6563.3;
                prompt = new String[]{{
                    add("This is a test."),
                }};
                stop = new String[]{{
                    add("["\n"]"),
                }};
                stream = false;
                suffix = "test.";
                temperature = 1;
                topP = 1;
                user = "user-1234";
            }};            

            CreateCompletionResponse res = sdk.openAI.createCompletion(req);

            if (res.createCompletionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createEdit

Creates a new edit for the provided input, instruction, and parameters.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateEditResponse;
import org.openapis.openapi.models.shared.CreateEditRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.CreateEditRequest req = new CreateEditRequest("Fix the spelling mistakes.", "tenetur") {{
                input = "What day of the wek is it?";
                n = 1L;
                temperature = 1;
                topP = 1;
            }};            

            CreateEditResponse res = sdk.openAI.createEdit(req);

            if (res.createEditResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createEmbedding

Creates an embedding vector representing the input text.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateEmbeddingResponse;
import org.openapis.openapi.models.shared.CreateEmbeddingRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.CreateEmbeddingRequest req = new CreateEmbeddingRequest(                new String[]{{
                                add("This is a test."),
                                add("This is a test."),
                                add("This is a test."),
                            }}, "possimus") {{
                user = "user-1234";
            }};            

            CreateEmbeddingResponse res = sdk.openAI.createEmbedding(req);

            if (res.createEmbeddingResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createFile

Upload a file that contains document(s) to be used across various endpoints/features. Currently, the size of all the files uploaded by one organization can be up to 1 GB. Please contact us if you need to increase the storage limit.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateFileResponse;
import org.openapis.openapi.models.shared.CreateFileRequest;
import org.openapis.openapi.models.shared.CreateFileRequestFile;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.CreateFileRequest req = new CreateFileRequest(                new CreateFileRequestFile("aut".getBytes(), "quasi");, "error");            

            CreateFileResponse res = sdk.openAI.createFile(req);

            if (res.openAIFile != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createFineTune

Creates a job that fine-tunes a specified model from a given dataset.

Response includes details of the enqueued job including job status and the name of the fine-tuned models once complete.

[Learn more about Fine-tuning](/docs/guides/fine-tuning)


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateFineTuneResponse;
import org.openapis.openapi.models.shared.CreateFineTuneRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.CreateFineTuneRequest req = new CreateFineTuneRequest("file-ajSREls59WBbvgSzJSVWxMCB") {{
                batchSize = 837945L;
                classificationBetas = new Double[]{{
                    add(960.98),
                    add(9719.45),
                    add(9764.6),
                }};
                classificationNClasses = 878194L;
                classificationPositiveClass = "nihil";
                computeClassificationMetrics = false;
                learningRateMultiplier = 5096.24;
                model = "voluptatibus";
                nEpochs = 55714L;
                promptLossWeight = 6048.46;
                suffix = "voluptate";
                validationFile = "file-XjSREls59WBbvgSzJSVWxMCa";
            }};            

            CreateFineTuneResponse res = sdk.openAI.createFineTune(req);

            if (res.fineTune != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createImage

Creates an image given a prompt.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateImageResponse;
import org.openapis.openapi.models.shared.CreateImageRequest;
import org.openapis.openapi.models.shared.CreateImageRequestResponseFormatEnum;
import org.openapis.openapi.models.shared.CreateImageRequestSizeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.CreateImageRequest req = new CreateImageRequest("A cute baby sea otter") {{
                n = 1L;
                responseFormat = CreateImageRequestResponseFormatEnum.URL;
                size = CreateImageRequestSizeEnum.ONE_THOUSAND_AND_TWENTY_FOURX1024;
                user = "user-1234";
            }};            

            CreateImageResponse res = sdk.openAI.createImage(req);

            if (res.imagesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createImageEdit

Creates an edited or extended image given an original image and a prompt.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateImageEditResponse;
import org.openapis.openapi.models.shared.CreateImageEditRequest;
import org.openapis.openapi.models.shared.CreateImageEditRequestImage;
import org.openapis.openapi.models.shared.CreateImageEditRequestMask;
import org.openapis.openapi.models.shared.ResponseFormatEnum;
import org.openapis.openapi.models.shared.SizeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.CreateImageEditRequest req = new CreateImageEditRequest(                new CreateImageEditRequestImage("cum".getBytes(), "perferendis");, "A cute baby sea otter wearing a beret") {{
                mask = new CreateImageEditRequestMask("doloremque".getBytes(), "reprehenderit");;
                n = 1L;
                responseFormat = ResponseFormatEnum.URL;
                size = SizeEnum.ONE_THOUSAND_AND_TWENTY_FOURX1024;
                user = "user-1234";
            }};            

            CreateImageEditResponse res = sdk.openAI.createImageEdit(req);

            if (res.imagesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createImageVariation

Creates a variation of a given image.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateImageVariationResponse;
import org.openapis.openapi.models.shared.CreateImageVariationRequest;
import org.openapis.openapi.models.shared.CreateImageVariationRequestImage;
import org.openapis.openapi.models.shared.ResponseFormatEnum;
import org.openapis.openapi.models.shared.SizeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.CreateImageVariationRequest req = new CreateImageVariationRequest(                new CreateImageVariationRequestImage("ut".getBytes(), "maiores");) {{
                n = 1L;
                responseFormat = ResponseFormatEnum.URL;
                size = SizeEnum.ONE_THOUSAND_AND_TWENTY_FOURX1024;
                user = "user-1234";
            }};            

            CreateImageVariationResponse res = sdk.openAI.createImageVariation(req);

            if (res.imagesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createModeration

Classifies if text violates OpenAI's Content Policy

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateModerationResponse;
import org.openapis.openapi.models.shared.CreateModerationRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.CreateModerationRequest req = new CreateModerationRequest("I want to kill them.") {{
                model = "text-moderation-stable";
            }};            

            CreateModerationResponse res = sdk.openAI.createModeration(req);

            if (res.createModerationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## ~~createSearch~~

The search endpoint computes similarity scores between provided query and documents. Documents can be passed directly to the API if there are no more than 200 of them.

To go beyond the 200 document limit, documents can be processed offline and then used for efficient retrieval at query time. When `file` is set, the search endpoint searches over all the documents in the given file and returns up to the `max_rerank` number of documents. These documents will be returned along with their search scores.

The similarity score is a positive score that usually ranges from 0 to 300 (but can sometimes go higher), where a score above 200 usually means the document is semantically similar to the query.


> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateSearchRequest;
import org.openapis.openapi.models.operations.CreateSearchResponse;
import org.openapis.openapi.models.shared.CreateSearchRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateSearchRequest req = new CreateSearchRequest(                new CreateSearchRequest("the president") {{
                                documents = new String[]{{
                                    add("dolore"),
                                    add("iusto"),
                                }};
                                file = "dicta";
                                maxRerank = 688661L;
                                returnMetadata = false;
                                user = "user-1234";
                            }};, "davinci");            

            CreateSearchResponse res = sdk.openAI.createSearch(req);

            if (res.createSearchResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createTranscription

Transcribes audio into the input language.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateTranscriptionResponse;
import org.openapis.openapi.models.shared.CreateTranscriptionRequest;
import org.openapis.openapi.models.shared.CreateTranscriptionRequestFile;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.CreateTranscriptionRequest req = new CreateTranscriptionRequest(                new CreateTranscriptionRequestFile("enim".getBytes(), "accusamus");, "commodi") {{
                language = "repudiandae";
                prompt = "quae";
                responseFormat = "ipsum";
                temperature = 6924.72;
            }};            

            CreateTranscriptionResponse res = sdk.openAI.createTranscription(req);

            if (res.createTranscriptionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createTranslation

Translates audio into into English.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateTranslationResponse;
import org.openapis.openapi.models.shared.CreateTranslationRequest;
import org.openapis.openapi.models.shared.CreateTranslationRequestFile;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.CreateTranslationRequest req = new CreateTranslationRequest(                new CreateTranslationRequestFile("molestias".getBytes(), "excepturi");, "pariatur") {{
                prompt = "modi";
                responseFormat = "praesentium";
                temperature = 5232.48;
            }};            

            CreateTranslationResponse res = sdk.openAI.createTranslation(req);

            if (res.createTranslationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteFile

Delete a file.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteFileRequest;
import org.openapis.openapi.models.operations.DeleteFileResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteFileRequest req = new DeleteFileRequest("voluptates");            

            DeleteFileResponse res = sdk.openAI.deleteFile(req);

            if (res.deleteFileResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteModel

Delete a fine-tuned model. You must have the Owner role in your organization.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteModelRequest;
import org.openapis.openapi.models.operations.DeleteModelResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteModelRequest req = new DeleteModelRequest("curie:ft-acmeco-2021-03-03-21-44-20");            

            DeleteModelResponse res = sdk.openAI.deleteModel(req);

            if (res.deleteModelResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## downloadFile

Returns the contents of the specified file

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DownloadFileRequest;
import org.openapis.openapi.models.operations.DownloadFileResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DownloadFileRequest req = new DownloadFileRequest("quasi");            

            DownloadFileResponse res = sdk.openAI.downloadFile(req);

            if (res.downloadFile200ApplicationJSONString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## ~~listEngines~~

Lists the currently available (non-finetuned) models, and provides basic information about each one such as the owner and availability.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListEnginesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListEnginesResponse res = sdk.openAI.listEngines();

            if (res.listEnginesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listFiles

Returns a list of files that belong to the user's organization.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListFilesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListFilesResponse res = sdk.openAI.listFiles();

            if (res.listFilesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listFineTuneEvents

Get fine-grained status updates for a fine-tune job.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListFineTuneEventsRequest;
import org.openapis.openapi.models.operations.ListFineTuneEventsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListFineTuneEventsRequest req = new ListFineTuneEventsRequest("ft-AF1WoRqd3aJAHsqc9NY7iL8F") {{
                stream = false;
            }};            

            ListFineTuneEventsResponse res = sdk.openAI.listFineTuneEvents(req);

            if (res.listFineTuneEventsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listFineTunes

List your organization's fine-tuning jobs


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListFineTunesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListFineTunesResponse res = sdk.openAI.listFineTunes();

            if (res.listFineTunesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listModels

Lists the currently available models, and provides basic information about each one such as the owner and availability.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListModelsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListModelsResponse res = sdk.openAI.listModels();

            if (res.listModelsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## ~~retrieveEngine~~

Retrieves a model instance, providing basic information about it such as the owner and availability.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RetrieveEngineRequest;
import org.openapis.openapi.models.operations.RetrieveEngineResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RetrieveEngineRequest req = new RetrieveEngineRequest("davinci");            

            RetrieveEngineResponse res = sdk.openAI.retrieveEngine(req);

            if (res.engine != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## retrieveFile

Returns information about a specific file.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RetrieveFileRequest;
import org.openapis.openapi.models.operations.RetrieveFileResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RetrieveFileRequest req = new RetrieveFileRequest("repudiandae");            

            RetrieveFileResponse res = sdk.openAI.retrieveFile(req);

            if (res.openAIFile != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## retrieveFineTune

Gets info about the fine-tune job.

[Learn more about Fine-tuning](/docs/guides/fine-tuning)


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RetrieveFineTuneRequest;
import org.openapis.openapi.models.operations.RetrieveFineTuneResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RetrieveFineTuneRequest req = new RetrieveFineTuneRequest("ft-AF1WoRqd3aJAHsqc9NY7iL8F");            

            RetrieveFineTuneResponse res = sdk.openAI.retrieveFineTune(req);

            if (res.fineTune != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## retrieveModel

Retrieves a model instance, providing basic information about the model such as the owner and permissioning.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RetrieveModelRequest;
import org.openapis.openapi.models.operations.RetrieveModelResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RetrieveModelRequest req = new RetrieveModelRequest("text-davinci-001");            

            RetrieveModelResponse res = sdk.openAI.retrieveModel(req);

            if (res.model != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
