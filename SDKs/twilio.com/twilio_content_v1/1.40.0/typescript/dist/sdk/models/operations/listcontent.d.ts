import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const ListContentServerList: readonly ["https://content.twilio.com"];
export declare class ListContentSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class ListContentRequest extends SpeakeasyBase {
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
export declare class ListContentListContentResponseMeta extends SpeakeasyBase {
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
export declare class ListContentListContentResponse extends SpeakeasyBase {
    contents?: shared.ContentV1Content[];
    meta?: ListContentListContentResponseMeta;
}
export declare class ListContentResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    listContentResponse?: ListContentListContentResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
