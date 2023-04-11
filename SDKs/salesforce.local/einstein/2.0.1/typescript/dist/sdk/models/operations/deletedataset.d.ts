import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DeleteDatasetSecurity extends SpeakeasyBase {
    bearerToken: string;
}
export declare class DeleteDatasetRequest extends SpeakeasyBase {
    /**
     * Dataset Id
     */
    datasetId: string;
}
export declare class DeleteDatasetResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    deletionResponse?: shared.DeletionResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
