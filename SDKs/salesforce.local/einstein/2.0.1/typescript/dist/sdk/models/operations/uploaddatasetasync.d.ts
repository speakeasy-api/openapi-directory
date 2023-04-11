import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UploadDatasetAsyncSecurity extends SpeakeasyBase {
    bearerToken: string;
}
/**
 * Type of dataset data.
 */
export declare enum UploadDatasetAsyncRequestBodyTypeEnum {
    TextIntent = "text-intent",
    TextSentiment = "text-sentiment"
}
export declare class UploadDatasetAsyncRequestBody extends SpeakeasyBase {
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
    type?: UploadDatasetAsyncRequestBodyTypeEnum;
}
export declare class UploadDatasetAsyncResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Upload initiated
     */
    dataset?: shared.Dataset;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
