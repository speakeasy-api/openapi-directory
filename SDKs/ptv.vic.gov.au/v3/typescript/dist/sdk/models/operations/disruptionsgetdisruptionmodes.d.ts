import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DisruptionsGetDisruptionModesRequest extends SpeakeasyBase {
    /**
     * Your developer id
     */
    devid?: string;
    /**
     * Authentication signature for request
     */
    signature?: string;
    /**
     * Please ignore
     */
    token?: string;
}
export declare class DisruptionsGetDisruptionModesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Disruption specific modes
     */
    v3DisruptionModesResponse?: shared.V3DisruptionModesResponse;
    /**
     * Invalid Request
     */
    v3ErrorResponse?: shared.V3ErrorResponse;
}
