import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetV2GroupsIdJsonRequest extends SpeakeasyBase {
    /**
     * Group ID
     */
    id: string;
}
export declare class GetV2GroupsIdJsonResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
