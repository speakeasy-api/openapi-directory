import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const ListEndUserTypeServerList: readonly ["https://trusthub.twilio.com"];
export declare class ListEndUserTypeSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class ListEndUserTypeRequest extends SpeakeasyBase {
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
export declare class ListEndUserTypeListEndUserTypeResponseMeta extends SpeakeasyBase {
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
export declare class ListEndUserTypeListEndUserTypeResponse extends SpeakeasyBase {
    endUserTypes?: shared.TrusthubV1EndUserType[];
    meta?: ListEndUserTypeListEndUserTypeResponseMeta;
}
export declare class ListEndUserTypeResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    listEndUserTypeResponse?: ListEndUserTypeListEndUserTypeResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
