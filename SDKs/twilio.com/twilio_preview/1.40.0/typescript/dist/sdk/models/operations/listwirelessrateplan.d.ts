import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const ListWirelessRatePlanServerList: readonly ["https://preview.twilio.com"];
export declare class ListWirelessRatePlanSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class ListWirelessRatePlanRequest extends SpeakeasyBase {
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
export declare class ListWirelessRatePlanListWirelessRatePlanResponseMeta extends SpeakeasyBase {
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
export declare class ListWirelessRatePlanListWirelessRatePlanResponse extends SpeakeasyBase {
    meta?: ListWirelessRatePlanListWirelessRatePlanResponseMeta;
    ratePlans?: shared.PreviewWirelessRatePlan[];
}
export declare class ListWirelessRatePlanResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    listWirelessRatePlanResponse?: ListWirelessRatePlanListWirelessRatePlanResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
