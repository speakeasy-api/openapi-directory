import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetV2NotesIdJsonRequest extends SpeakeasyBase {
    /**
     * Note ID
     */
    id: string;
}
export declare class GetV2NotesIdJsonResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
