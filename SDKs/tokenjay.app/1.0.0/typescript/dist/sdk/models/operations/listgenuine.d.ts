import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ListGenuineResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Bad Request
     */
    listGenuine400WildcardString?: string;
    /**
     * Unauthorized
     */
    listGenuine401WildcardString?: string;
    /**
     * Not Found
     */
    listGenuine404WildcardString?: string;
    /**
     * Conflict
     */
    listGenuine409WildcardString?: string;
}
