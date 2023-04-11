import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const ListEntityServerList: readonly ["https://verify.twilio.com"];
export declare class ListEntitySecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class ListEntityRequest extends SpeakeasyBase {
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
     * The unique SID identifier of the Service.
     */
    serviceSid: string;
}
export declare class ListEntityListEntityResponseMeta extends SpeakeasyBase {
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
export declare class ListEntityListEntityResponse extends SpeakeasyBase {
    entities?: shared.VerifyV2ServiceEntity[];
    meta?: ListEntityListEntityResponseMeta;
}
export declare class ListEntityResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    listEntityResponse?: ListEntityListEntityResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
