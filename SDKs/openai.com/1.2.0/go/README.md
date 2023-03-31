# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/openai.com/1.2.0/go
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```go
package main

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    req := operations.CancelFineTuneRequest{
        FineTuneID: "ft-AF1WoRqd3aJAHsqc9NY7iL8F",
    }

    ctx := context.Background()
    res, err := s.OpenAI.CancelFineTune(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.FineTune != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### OpenAI

* `CancelFineTune` - Immediately cancel a fine-tune job.

* `CreateAnswer` - Answers the specified question using the provided documents and examples.

The endpoint first [searches](/docs/api-reference/searches) over provided documents or files to find relevant context. The relevant context is combined with the provided examples and question to create the prompt for [completion](/docs/api-reference/completions).

* `CreateChatCompletion` - Creates a completion for the chat message
* `CreateClassification` - Classifies the specified `query` using provided examples.

The endpoint first [searches](/docs/api-reference/searches) over the labeled examples
to select the ones most relevant for the particular query. Then, the relevant examples
are combined with the query to construct a prompt to produce the final label via the
[completions](/docs/api-reference/completions) endpoint.

Labeled examples can be provided via an uploaded `file`, or explicitly listed in the
request using the `examples` parameter for quick tests and small scale use cases.

* `CreateCompletion` - Creates a completion for the provided prompt and parameters
* `CreateEdit` - Creates a new edit for the provided input, instruction, and parameters.
* `CreateEmbedding` - Creates an embedding vector representing the input text.
* `CreateFile` - Upload a file that contains document(s) to be used across various endpoints/features. Currently, the size of all the files uploaded by one organization can be up to 1 GB. Please contact us if you need to increase the storage limit.

* `CreateFineTune` - Creates a job that fine-tunes a specified model from a given dataset.

Response includes details of the enqueued job including job status and the name of the fine-tuned models once complete.

[Learn more about Fine-tuning](/docs/guides/fine-tuning)

* `CreateImage` - Creates an image given a prompt.
* `CreateImageEdit` - Creates an edited or extended image given an original image and a prompt.
* `CreateImageVariation` - Creates a variation of a given image.
* `CreateModeration` - Classifies if text violates OpenAI's Content Policy
* `CreateSearch` - The search endpoint computes similarity scores between provided query and documents. Documents can be passed directly to the API if there are no more than 200 of them.

To go beyond the 200 document limit, documents can be processed offline and then used for efficient retrieval at query time. When `file` is set, the search endpoint searches over all the documents in the given file and returns up to the `max_rerank` number of documents. These documents will be returned along with their search scores.

The similarity score is a positive score that usually ranges from 0 to 300 (but can sometimes go higher), where a score above 200 usually means the document is semantically similar to the query.

* `CreateTranscription` - Transcribes audio into the input language.
* `CreateTranslation` - Translates audio into into English.
* `DeleteFile` - Delete a file.
* `DeleteModel` - Delete a fine-tuned model. You must have the Owner role in your organization.
* `DownloadFile` - Returns the contents of the specified file
* `ListEngines` - Lists the currently available (non-finetuned) models, and provides basic information about each one such as the owner and availability.
* `ListFiles` - Returns a list of files that belong to the user's organization.
* `ListFineTuneEvents` - Get fine-grained status updates for a fine-tune job.

* `ListFineTunes` - List your organization's fine-tuning jobs

* `ListModels` - Lists the currently available models, and provides basic information about each one such as the owner and availability.
* `RetrieveEngine` - Retrieves a model instance, providing basic information about it such as the owner and availability.
* `RetrieveFile` - Returns information about a specific file.
* `RetrieveFineTune` - Gets info about the fine-tune job.

[Learn more about Fine-tuning](/docs/guides/fine-tuning)

* `RetrieveModel` - Retrieves a model instance, providing basic information about the model such as the owner and permissioning.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
