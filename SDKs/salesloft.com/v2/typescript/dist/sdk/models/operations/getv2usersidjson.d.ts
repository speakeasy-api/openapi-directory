import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetV2UsersIdJsonRequest extends SpeakeasyBase {
    /**
     * User ID
     */
    id: string;
}
export declare class GetV2UsersIdJsonResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
