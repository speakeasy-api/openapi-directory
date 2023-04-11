import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetV2AccountsIdJsonRequest extends SpeakeasyBase {
    /**
     * Account ID
     */
    id: string;
}
export declare class GetV2AccountsIdJsonResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
