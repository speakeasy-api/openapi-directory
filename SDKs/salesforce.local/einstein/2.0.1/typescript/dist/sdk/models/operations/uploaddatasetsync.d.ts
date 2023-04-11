import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UploadDatasetSyncSecurity extends SpeakeasyBase {
    bearerToken: string;
}
/**
 * Type of dataset data.
 */
export declare enum UploadDatasetSyncRequestBodyTypeEnum {
    TextIntent = "text-intent",
    TextSentiment = "text-sentiment"
}
export declare class UploadDatasetSyncRequestBody extends SpeakeasyBase {
    /**
     * Path to the .csv, .tsv, or .json file on the local drive (FilePart).
     */
    data?: string;
    /**
     * Name of the dataset. Optional. If this parameter is omitted, the dataset name is derived from the file name.
     */
    name?: string;
    /**
     * URL of the .csv, .tsv, or .json file.
     */
    path?: string;
    /**
     * Type of dataset data.
     */
    type?: UploadDatasetSyncRequestBodyTypeEnum;
}
export declare class UploadDatasetSyncResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Upload success
     */
    dataset?: shared.Dataset;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
