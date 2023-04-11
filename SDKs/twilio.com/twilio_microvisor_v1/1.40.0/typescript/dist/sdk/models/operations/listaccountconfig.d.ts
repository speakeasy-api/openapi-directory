import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const ListAccountConfigServerList: readonly ["https://microvisor.twilio.com"];
export declare class ListAccountConfigSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class ListAccountConfigRequest extends SpeakeasyBase {
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
export declare class ListAccountConfigListAccountConfigResponseMeta extends SpeakeasyBase {
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
export declare class ListAccountConfigListAccountConfigResponse extends SpeakeasyBase {
    configs?: shared.MicrovisorV1AccountConfig[];
    meta?: ListAccountConfigListAccountConfigResponseMeta;
}
export declare class ListAccountConfigResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    listAccountConfigResponse?: ListAccountConfigListAccountConfigResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
