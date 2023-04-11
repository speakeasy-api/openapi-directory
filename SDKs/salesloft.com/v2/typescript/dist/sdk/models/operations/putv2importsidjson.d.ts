import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PutV2ImportsIdJsonRequestBody extends SpeakeasyBase {
    /**
     * Name, recommended to be easily identifiable to a user
     */
    name?: string;
    /**
     * ID of the User that owns this Import
     */
    userId?: number;
}
export declare class PutV2ImportsIdJsonRequest extends SpeakeasyBase {
    requestBody?: PutV2ImportsIdJsonRequestBody;
    /**
     * Import ID
     */
    id: string;
}
export declare class PutV2ImportsIdJsonResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
