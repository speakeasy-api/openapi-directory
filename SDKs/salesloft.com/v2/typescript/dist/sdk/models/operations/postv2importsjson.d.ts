import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostV2ImportsJsonRequestBody extends SpeakeasyBase {
    /**
     * Name, recommended to be easily identifiable to a user
     */
    name?: string;
    /**
     * ID of the User that owns this Import
     */
    userId?: number;
}
export declare class PostV2ImportsJsonResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
