import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetMatchZebraSecurity extends SpeakeasyBase {
    apiKey: string;
}
export declare class GetMatchZebraRequest extends SpeakeasyBase {
    /**
     * Value of the `ETag` header in the most recently cached response by the client.
     */
    ifNoneMatch?: string;
    /**
     * TBA Match Key, eg `2016nytr_qm1`
     */
    matchKey: string;
}
export declare class GetMatchZebraResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful response
     */
    zebra?: shared.Zebra;
}
