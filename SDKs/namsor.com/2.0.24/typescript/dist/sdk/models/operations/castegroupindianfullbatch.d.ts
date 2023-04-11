import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CastegroupIndianFullBatchSecurity extends SpeakeasyBase {
    apiKey: string;
}
export declare class CastegroupIndianFullBatchResponse extends SpeakeasyBase {
    /**
     * A list of castegroup-coded names.
     */
    batchPersonalNameCastegroupOut?: shared.BatchPersonalNameCastegroupOut;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
