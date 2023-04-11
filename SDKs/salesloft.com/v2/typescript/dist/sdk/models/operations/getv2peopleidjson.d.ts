import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetV2PeopleIdJsonRequest extends SpeakeasyBase {
    /**
     * Person ID
     */
    id: string;
}
export declare class GetV2PeopleIdJsonResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
