import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * The OpenAI REST API
 */
export declare class OpenAI {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Immediately cancel a fine-tune job.
     *
     */
    cancelFineTune(req: operations.CancelFineTuneRequest, config?: AxiosRequestConfig): Promise<operations.CancelFineTuneResponse>;
    /**
     * Answers the specified question using the provided documents and examples.
     *
     * The endpoint first [searches](/docs/api-reference/searches) over provided documents or files to find relevant context. The relevant context is combined with the provided examples and question to create the prompt for [completion](/docs/api-reference/completions).
     *
     */
    createAnswer(req: shared.CreateAnswerRequest, config?: AxiosRequestConfig): Promise<operations.CreateAnswerResponse>;
    /**
     * Creates a completion for the chat message
     */
    createChatCompletion(req: shared.CreateChatCompletionRequest, config?: AxiosRequestConfig): Promise<operations.CreateChatCompletionResponse>;
    /**
     * Classifies the specified `query` using provided examples.
     *
     * The endpoint first [searches](/docs/api-reference/searches) over the labeled examples
     * to select the ones most relevant for the particular query. Then, the relevant examples
     * are combined with the query to construct a prompt to produce the final label via the
     * [completions](/docs/api-reference/completions) endpoint.
     *
     * Labeled examples can be provided via an uploaded `file`, or explicitly listed in the
     * request using the `examples` parameter for quick tests and small scale use cases.
     *
     */
    createClassification(req: shared.CreateClassificationRequest, config?: AxiosRequestConfig): Promise<operations.CreateClassificationResponse>;
    /**
     * Creates a completion for the provided prompt and parameters
     */
    createCompletion(req: shared.CreateCompletionRequest, config?: AxiosRequestConfig): Promise<operations.CreateCompletionResponse>;
    /**
     * Creates a new edit for the provided input, instruction, and parameters.
     */
    createEdit(req: shared.CreateEditRequest, config?: AxiosRequestConfig): Promise<operations.CreateEditResponse>;
    /**
     * Creates an embedding vector representing the input text.
     */
    createEmbedding(req: shared.CreateEmbeddingRequest, config?: AxiosRequestConfig): Promise<operations.CreateEmbeddingResponse>;
    /**
     * Upload a file that contains document(s) to be used across various endpoints/features. Currently, the size of all the files uploaded by one organization can be up to 1 GB. Please contact us if you need to increase the storage limit.
     *
     */
    createFile(req: shared.CreateFileRequest, config?: AxiosRequestConfig): Promise<operations.CreateFileResponse>;
    /**
     * Creates a job that fine-tunes a specified model from a given dataset.
     *
     * Response includes details of the enqueued job including job status and the name of the fine-tuned models once complete.
     *
     * [Learn more about Fine-tuning](/docs/guides/fine-tuning)
     *
     */
    createFineTune(req: shared.CreateFineTuneRequest, config?: AxiosRequestConfig): Promise<operations.CreateFineTuneResponse>;
    /**
     * Creates an image given a prompt.
     */
    createImage(req: shared.CreateImageRequest, config?: AxiosRequestConfig): Promise<operations.CreateImageResponse>;
    /**
     * Creates an edited or extended image given an original image and a prompt.
     */
    createImageEdit(req: shared.CreateImageEditRequest, config?: AxiosRequestConfig): Promise<operations.CreateImageEditResponse>;
    /**
     * Creates a variation of a given image.
     */
    createImageVariation(req: shared.CreateImageVariationRequest, config?: AxiosRequestConfig): Promise<operations.CreateImageVariationResponse>;
    /**
     * Classifies if text violates OpenAI's Content Policy
     */
    createModeration(req: shared.CreateModerationRequest, config?: AxiosRequestConfig): Promise<operations.CreateModerationResponse>;
    /**
     * The search endpoint computes similarity scores between provided query and documents. Documents can be passed directly to the API if there are no more than 200 of them.
     *
     * To go beyond the 200 document limit, documents can be processed offline and then used for efficient retrieval at query time. When `file` is set, the search endpoint searches over all the documents in the given file and returns up to the `max_rerank` number of documents. These documents will be returned along with their search scores.
     *
     * The similarity score is a positive score that usually ranges from 0 to 300 (but can sometimes go higher), where a score above 200 usually means the document is semantically similar to the query.
     *
     */
    createSearch(req: operations.CreateSearchRequest, config?: AxiosRequestConfig): Promise<operations.CreateSearchResponse>;
    /**
     * Transcribes audio into the input language.
     */
    createTranscription(req: shared.CreateTranscriptionRequest, config?: AxiosRequestConfig): Promise<operations.CreateTranscriptionResponse>;
    /**
     * Translates audio into into English.
     */
    createTranslation(req: shared.CreateTranslationRequest, config?: AxiosRequestConfig): Promise<operations.CreateTranslationResponse>;
    /**
     * Delete a file.
     */
    deleteFile(req: operations.DeleteFileRequest, config?: AxiosRequestConfig): Promise<operations.DeleteFileResponse>;
    /**
     * Delete a fine-tuned model. You must have the Owner role in your organization.
     */
    deleteModel(req: operations.DeleteModelRequest, config?: AxiosRequestConfig): Promise<operations.DeleteModelResponse>;
    /**
     * Returns the contents of the specified file
     */
    downloadFile(req: operations.DownloadFileRequest, config?: AxiosRequestConfig): Promise<operations.DownloadFileResponse>;
    /**
     * Lists the currently available (non-finetuned) models, and provides basic information about each one such as the owner and availability.
     */
    listEngines(config?: AxiosRequestConfig): Promise<operations.ListEnginesResponse>;
    /**
     * Returns a list of files that belong to the user's organization.
     */
    listFiles(config?: AxiosRequestConfig): Promise<operations.ListFilesResponse>;
    /**
     * Get fine-grained status updates for a fine-tune job.
     *
     */
    listFineTuneEvents(req: operations.ListFineTuneEventsRequest, config?: AxiosRequestConfig): Promise<operations.ListFineTuneEventsResponse>;
    /**
     * List your organization's fine-tuning jobs
     *
     */
    listFineTunes(config?: AxiosRequestConfig): Promise<operations.ListFineTunesResponse>;
    /**
     * Lists the currently available models, and provides basic information about each one such as the owner and availability.
     */
    listModels(config?: AxiosRequestConfig): Promise<operations.ListModelsResponse>;
    /**
     * Retrieves a model instance, providing basic information about it such as the owner and availability.
     */
    retrieveEngine(req: operations.RetrieveEngineRequest, config?: AxiosRequestConfig): Promise<operations.RetrieveEngineResponse>;
    /**
     * Returns information about a specific file.
     */
    retrieveFile(req: operations.RetrieveFileRequest, config?: AxiosRequestConfig): Promise<operations.RetrieveFileResponse>;
    /**
     * Gets info about the fine-tune job.
     *
     * [Learn more about Fine-tuning](/docs/guides/fine-tuning)
     *
     */
    retrieveFineTune(req: operations.RetrieveFineTuneRequest, config?: AxiosRequestConfig): Promise<operations.RetrieveFineTuneResponse>;
    /**
     * Retrieves a model instance, providing basic information about the model such as the owner and permissioning.
     */
    retrieveModel(req: operations.RetrieveModelRequest, config?: AxiosRequestConfig): Promise<operations.RetrieveModelResponse>;
}
