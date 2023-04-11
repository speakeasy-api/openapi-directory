import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetV2ImportsIdJsonRequest extends SpeakeasyBase {
    /**
     * Import ID
     */
    id: string;
}
export declare class GetV2ImportsIdJsonResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
