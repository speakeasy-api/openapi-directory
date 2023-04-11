import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostV2ConversationsCallsRequestBody extends SpeakeasyBase {
    /**
     * Timestamp for when the call started. If not provided, will default to the time the request was received
     */
    callCreatedAt?: string;
    /**
     * Call direction
     */
    direction?: string;
    /**
     * Duration of call in seconds
     */
    duration: number;
    /**
     * Phone number that call was made from
     */
    from: string;
    /**
     * Object containing recording info including the audio file (.mp3, .wav, .ogg, .m4a)
     */
    recording: Record<string, any>;
    /**
     *  Phone number that was called
     */
    to: string;
    /**
     * Guid of the Salesloft User to assign the call to. If not provided, will default to the user within the authentication token
     */
    userGuid?: string;
}
export declare class PostV2ConversationsCallsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
