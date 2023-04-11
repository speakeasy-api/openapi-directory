import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const ListCompositionHookServerList: readonly ["https://video.twilio.com"];
export declare class ListCompositionHookSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class ListCompositionHookRequest extends SpeakeasyBase {
    /**
     * Read only CompositionHook resources created on or after this [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) datetime with time zone.
     */
    dateCreatedAfter?: Date;
    /**
     * Read only CompositionHook resources created before this [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) datetime with time zone.
     */
    dateCreatedBefore?: Date;
    /**
     * Read only CompositionHook resources with an `enabled` value that matches this parameter.
     */
    enabled?: boolean;
    /**
     * Read only CompositionHook resources with friendly names that match this string. The match is not case sensitive and can include asterisk `*` characters as wildcard match.
     */
    friendlyName?: string;
    /**
     * The page index. This value is simply for client state.
     */
    page?: number;
    /**
     * How many resources to return in each list page. The default is 50, and the maximum is 1000.
     */
    pageSize?: number;
    /**
     * The page token. This is provided by the API.
     */
    pageToken?: string;
}
export declare class ListCompositionHookListCompositionHookResponseMeta extends SpeakeasyBase {
    firstPageUrl?: string;
    key?: string;
    nextPageUrl?: string;
    page?: number;
    pageSize?: number;
    previousPageUrl?: string;
    url?: string;
}
/**
 * OK
 */
export declare class ListCompositionHookListCompositionHookResponse extends SpeakeasyBase {
    compositionHooks?: shared.VideoV1CompositionHook[];
    meta?: ListCompositionHookListCompositionHookResponseMeta;
}
export declare class ListCompositionHookResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    listCompositionHookResponse?: ListCompositionHookListCompositionHookResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
