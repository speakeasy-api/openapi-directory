import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateDatasetAsync2Security extends SpeakeasyBase {
    bearerToken: string;
}
export declare class UpdateDatasetAsync2RequestBody extends SpeakeasyBase {
    /**
     * Location of the local image file to upload.
     */
    data?: string;
    /**
     * URL of the .zip file.
     */
    path?: string;
}
export declare class UpdateDatasetAsync2Request extends SpeakeasyBase {
    requestBody?: UpdateDatasetAsync2RequestBody;
    /**
     * Dataset Id
     */
    datasetId: string;
}
export declare class UpdateDatasetAsync2Response extends SpeakeasyBase {
    contentType: string;
    /**
     * Upload success
     */
    dataset?: shared.Dataset;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
