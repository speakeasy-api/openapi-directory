import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetV2CadenceExportsIdJsonRequest extends SpeakeasyBase {
    /**
     * Cadence ID
     */
    id: string;
}
export declare class GetV2CadenceExportsIdJsonResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
