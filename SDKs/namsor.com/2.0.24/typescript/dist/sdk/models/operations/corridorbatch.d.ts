import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CorridorBatchSecurity extends SpeakeasyBase {
    apiKey: string;
}
export declare class CorridorBatchResponse extends SpeakeasyBase {
    /**
     * A list of classified name pairs.
     */
    batchCorridorOut?: shared.BatchCorridorOut;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
