import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const ListSimServerList: readonly ["https://wireless.twilio.com"];
export declare class ListSimSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class ListSimRequest extends SpeakeasyBase {
    /**
     * Deprecated.
     */
    eId?: string;
    /**
     * Only return Sim resources with this ICCID. This will return a list with a maximum size of 1.
     */
    iccid?: string;
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
     * The SID or unique name of a [RatePlan resource](https://www.twilio.com/docs/wireless/api/rateplan-resource). Only return Sim resources assigned to this RatePlan resource.
     */
    ratePlan?: string;
    /**
     * Only return Sim resources with this registration code. This will return a list with a maximum size of 1.
     */
    simRegistrationCode?: string;
    /**
     * Only return Sim resources with this status.
     */
    status?: shared.SimEnumStatusEnum;
}
export declare class ListSimListSimResponseMeta extends SpeakeasyBase {
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
export declare class ListSimListSimResponse extends SpeakeasyBase {
    meta?: ListSimListSimResponseMeta;
    sims?: shared.WirelessV1Sim[];
}
export declare class ListSimResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    listSimResponse?: ListSimListSimResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
