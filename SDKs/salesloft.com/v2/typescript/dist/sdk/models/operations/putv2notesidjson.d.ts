import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PutV2NotesIdJsonRequestBody extends SpeakeasyBase {
    /**
     * ID of the call with which the note is associated. The call cannot already have a note. If the note is associated to a call already, it will become associated to the requested call
     */
    callId?: number;
    /**
     * The content of the note
     */
    content: string;
}
export declare class PutV2NotesIdJsonRequest extends SpeakeasyBase {
    requestBody: PutV2NotesIdJsonRequestBody;
    /**
     * Note ID
     */
    id: string;
}
export declare class PutV2NotesIdJsonResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
