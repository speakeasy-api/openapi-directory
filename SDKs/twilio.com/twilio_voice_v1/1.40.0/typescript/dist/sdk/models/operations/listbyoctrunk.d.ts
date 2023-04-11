import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const ListByocTrunkServerList: readonly ["https://voice.twilio.com"];
export declare class ListByocTrunkSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class ListByocTrunkRequest extends SpeakeasyBase {
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
export declare class ListByocTrunkListByocTrunkResponseMeta extends SpeakeasyBase {
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
export declare class ListByocTrunkListByocTrunkResponse extends SpeakeasyBase {
    byocTrunks?: shared.VoiceV1ByocTrunk[];
    meta?: ListByocTrunkListByocTrunkResponseMeta;
}
export declare class ListByocTrunkResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    listByocTrunkResponse?: ListByocTrunkListByocTrunkResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
