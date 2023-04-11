import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ListBlockedResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Bad Request
     */
    listBlocked400WildcardString?: string;
    /**
     * Unauthorized
     */
    listBlocked401WildcardString?: string;
    /**
     * Not Found
     */
    listBlocked404WildcardString?: string;
    /**
     * Conflict
     */
    listBlocked409WildcardString?: string;
}
