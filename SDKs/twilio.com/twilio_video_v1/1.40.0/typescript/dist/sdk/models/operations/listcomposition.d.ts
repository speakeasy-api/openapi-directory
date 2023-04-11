import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const ListCompositionServerList: readonly ["https://video.twilio.com"];
export declare class ListCompositionSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class ListCompositionRequest extends SpeakeasyBase {
    /**
     * Read only Composition resources created on or after this [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date-time with time zone.
     */
    dateCreatedAfter?: Date;
    /**
     * Read only Composition resources created before this ISO 8601 date-time with time zone.
     */
    dateCreatedBefore?: Date;
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
    /**
     * Read only Composition resources with this Room SID.
     */
    roomSid?: string;
    /**
     * Read only Composition resources with this status. Can be: `enqueued`, `processing`, `completed`, `deleted`, or `failed`.
     */
    status?: shared.CompositionEnumStatusEnum;
}
export declare class ListCompositionListCompositionResponseMeta extends SpeakeasyBase {
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
export declare class ListCompositionListCompositionResponse extends SpeakeasyBase {
    compositions?: shared.VideoV1Composition[];
    meta?: ListCompositionListCompositionResponseMeta;
}
export declare class ListCompositionResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    listCompositionResponse?: ListCompositionListCompositionResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
