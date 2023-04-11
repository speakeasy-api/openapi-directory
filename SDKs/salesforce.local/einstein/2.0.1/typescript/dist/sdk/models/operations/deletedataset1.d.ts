import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DeleteDataset1Security extends SpeakeasyBase {
    bearerToken: string;
}
export declare class DeleteDataset1Request extends SpeakeasyBase {
    /**
     * Dataset Id
     */
    datasetId: string;
}
export declare class DeleteDataset1Response extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    deletionResponse?: shared.DeletionResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
