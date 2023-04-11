import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const ListLegacyContentServerList: readonly ["https://content.twilio.com"];
export declare class ListLegacyContentSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class ListLegacyContentRequest extends SpeakeasyBase {
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
export declare class ListLegacyContentListLegacyContentResponseMeta extends SpeakeasyBase {
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
export declare class ListLegacyContentListLegacyContentResponse extends SpeakeasyBase {
    contents?: shared.ContentV1LegacyContent[];
    meta?: ListLegacyContentListLegacyContentResponseMeta;
}
export declare class ListLegacyContentResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    listLegacyContentResponse?: ListLegacyContentListLegacyContentResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
