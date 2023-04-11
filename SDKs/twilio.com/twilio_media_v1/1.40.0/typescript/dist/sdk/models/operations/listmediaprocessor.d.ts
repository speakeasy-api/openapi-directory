import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const ListMediaProcessorServerList: readonly ["https://media.twilio.com"];
export declare class ListMediaProcessorSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class ListMediaProcessorRequest extends SpeakeasyBase {
    /**
     * The sort order of the list by `date_created`. Can be: `asc` (ascending) or `desc` (descending) with `desc` as the default.
     */
    order?: shared.MediaProcessorEnumOrderEnum;
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
     * Status to filter by, with possible values `started`, `ended` or `failed`.
     */
    status?: shared.MediaProcessorEnumStatusEnum;
}
export declare class ListMediaProcessorListMediaProcessorResponseMeta extends SpeakeasyBase {
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
export declare class ListMediaProcessorListMediaProcessorResponse extends SpeakeasyBase {
    mediaProcessors?: shared.MediaV1MediaProcessor[];
    meta?: ListMediaProcessorListMediaProcessorResponseMeta;
}
export declare class ListMediaProcessorResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    listMediaProcessorResponse?: ListMediaProcessorListMediaProcessorResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
