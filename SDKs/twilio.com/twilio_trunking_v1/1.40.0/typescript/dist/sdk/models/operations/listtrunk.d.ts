import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const ListTrunkServerList: readonly ["https://trunking.twilio.com"];
export declare class ListTrunkSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class ListTrunkRequest extends SpeakeasyBase {
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
export declare class ListTrunkListTrunkResponseMeta extends SpeakeasyBase {
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
export declare class ListTrunkListTrunkResponse extends SpeakeasyBase {
    meta?: ListTrunkListTrunkResponseMeta;
    trunks?: shared.TrunkingV1Trunk[];
}
export declare class ListTrunkResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    listTrunkResponse?: ListTrunkListTrunkResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
