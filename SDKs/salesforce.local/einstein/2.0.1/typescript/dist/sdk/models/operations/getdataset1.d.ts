import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetDataset1Security extends SpeakeasyBase {
    bearerToken: string;
}
export declare class GetDataset1Request extends SpeakeasyBase {
    /**
     * Dataset Id
     */
    datasetId: string;
}
export declare class GetDataset1Response extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    dataset?: shared.Dataset;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
