import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const ListSourceIpMappingServerList: readonly ["https://voice.twilio.com"];
export declare class ListSourceIpMappingSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class ListSourceIpMappingRequest extends SpeakeasyBase {
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
export declare class ListSourceIpMappingListSourceIpMappingResponseMeta extends SpeakeasyBase {
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
export declare class ListSourceIpMappingListSourceIpMappingResponse extends SpeakeasyBase {
    meta?: ListSourceIpMappingListSourceIpMappingResponseMeta;
    sourceIpMappings?: shared.VoiceV1SourceIpMapping[];
}
export declare class ListSourceIpMappingResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    listSourceIpMappingResponse?: ListSourceIpMappingListSourceIpMappingResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
