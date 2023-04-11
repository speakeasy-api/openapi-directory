import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetV2ActionsIdJsonRequest extends SpeakeasyBase {
    /**
     * Action ID
     */
    id: string;
}
export declare class GetV2ActionsIdJsonResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
