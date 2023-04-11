import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UploadDatasetAsync1Security extends SpeakeasyBase {
    bearerToken: string;
}
/**
 * Type of dataset data.
 */
export declare enum UploadDatasetAsync1RequestBodyTypeEnum {
    Image = "image",
    ImageDetection = "image-detection",
    ImageMultiLabel = "image-multi-label"
}
export declare class UploadDatasetAsync1RequestBody extends SpeakeasyBase {
    /**
     * Path to the .zip file on the local drive (FilePart).
     */
    data?: string;
    /**
     * Name of the dataset. Optional. If this parameter is omitted, the dataset name is derived from the .zip file name.
     */
    name?: string;
    /**
     * URL of the .zip file.
     */
    path?: string;
    /**
     * Type of dataset data.
     */
    type?: UploadDatasetAsync1RequestBodyTypeEnum;
}
export declare class UploadDatasetAsync1Response extends SpeakeasyBase {
    contentType: string;
    /**
     * Upload initiated
     */
    dataset?: shared.Dataset;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
