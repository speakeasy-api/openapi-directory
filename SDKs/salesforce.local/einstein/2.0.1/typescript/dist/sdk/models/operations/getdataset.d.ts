import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetDatasetSecurity extends SpeakeasyBase {
    bearerToken: string;
}
export declare class GetDatasetRequest extends SpeakeasyBase {
    /**
     * Dataset Id
     */
    datasetId: string;
}
export declare class GetDatasetResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    dataset?: shared.Dataset;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
