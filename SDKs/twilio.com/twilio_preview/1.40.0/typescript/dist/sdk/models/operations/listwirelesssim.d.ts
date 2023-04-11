import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const ListWirelessSimServerList: readonly ["https://preview.twilio.com"];
export declare class ListWirelessSimSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class ListWirelessSimRequest extends SpeakeasyBase {
    eId?: string;
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
    ratePlan?: string;
    simRegistrationCode?: string;
    status?: string;
}
export declare class ListWirelessSimListWirelessSimResponseMeta extends SpeakeasyBase {
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
export declare class ListWirelessSimListWirelessSimResponse extends SpeakeasyBase {
    meta?: ListWirelessSimListWirelessSimResponseMeta;
    sims?: shared.PreviewWirelessSim[];
}
export declare class ListWirelessSimResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    listWirelessSimResponse?: ListWirelessSimListWirelessSimResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
