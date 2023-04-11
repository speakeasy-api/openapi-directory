import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class OutletsGetAllOutletsRequest extends SpeakeasyBase {
    /**
     * Your developer id
     */
    devid?: string;
    /**
     * Maximum number of results returned (default = 30)
     */
    maxResults?: number;
    /**
     * Authentication signature for request
     */
    signature?: string;
    /**
     * Please ignore
     */
    token?: string;
}
export declare class OutletsGetAllOutletsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Invalid Request
     */
    v3ErrorResponse?: shared.V3ErrorResponse;
    /**
     * Ticket outlets.
     */
    v3OutletResponse?: shared.V3OutletResponse;
}
