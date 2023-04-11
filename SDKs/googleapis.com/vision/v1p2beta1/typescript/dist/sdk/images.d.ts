import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Images {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Run image detection and annotation for a batch of images.
     */
    visionImagesAnnotate(req: operations.VisionImagesAnnotateRequest, security: operations.VisionImagesAnnotateSecurity, config?: AxiosRequestConfig): Promise<operations.VisionImagesAnnotateResponse>;
    /**
     * Run asynchronous image detection and annotation for a list of images. Progress and results can be retrieved through the `google.longrunning.Operations` interface. `Operation.metadata` contains `OperationMetadata` (metadata). `Operation.response` contains `AsyncBatchAnnotateImagesResponse` (results). This service will write image annotation outputs to json files in customer GCS bucket, each json file containing BatchAnnotateImagesResponse proto.
     */
    visionImagesAsyncBatchAnnotate(req: operations.VisionImagesAsyncBatchAnnotateRequest, security: operations.VisionImagesAsyncBatchAnnotateSecurity, config?: AxiosRequestConfig): Promise<operations.VisionImagesAsyncBatchAnnotateResponse>;
}
