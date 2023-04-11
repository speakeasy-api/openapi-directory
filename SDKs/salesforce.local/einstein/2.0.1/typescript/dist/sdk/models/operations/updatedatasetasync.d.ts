import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateDatasetAsyncSecurity extends SpeakeasyBase {
    bearerToken: string;
}
export declare class UpdateDatasetAsyncRequestBody extends SpeakeasyBase {
    /**
     * Path to the .csv, .tsv, or .json file on a local drive.
     */
    data?: string;
    /**
     * URL of the .csv, .tsv, or .json file.
     */
    type?: string;
}
export declare class UpdateDatasetAsyncRequest extends SpeakeasyBase {
    requestBody?: UpdateDatasetAsyncRequestBody;
    /**
     * Dataset Id
     */
    datasetId: string;
}
export declare class UpdateDatasetAsyncResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Upload success
     */
    dataset?: shared.Dataset;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
