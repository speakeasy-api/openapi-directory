import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostWellKnownMercureRequestBody extends SpeakeasyBase {
    /**
     * The content of the new version of this topic.
     */
    data: string;
    /**
     * The topic's revision identifier: it will be used as the SSE's `id` property.
     */
    id?: string;
    /**
     * To mark an update as private. If not provided, this update will be public.
     */
    private?: boolean;
    /**
     * The SSE's `retry` property (the reconnection time).
     */
    retry?: number;
    /**
     * IRIs of the updated topic. If this key is present several times, the first occurrence is considered to be the canonical URL of the topic, and other ones are considered to be alternate URLs.
     */
    topic: string[];
    /**
     * The SSE's `event` property (a specific event type).
     */
    type?: string;
}
export declare class PostWellKnownMercureResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
