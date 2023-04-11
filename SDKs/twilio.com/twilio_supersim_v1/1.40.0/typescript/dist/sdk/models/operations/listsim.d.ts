import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const ListSimServerList: readonly ["https://supersim.twilio.com"];
export declare class ListSimSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class ListSimRequest extends SpeakeasyBase {
    /**
     * The SID or unique name of the Fleet to which a list of Sims are assigned.
     */
    fleet?: string;
    /**
     * The [ICCID](https://en.wikipedia.org/wiki/Subscriber_identity_module#ICCID) associated with a Super SIM to filter the list by. Passing this parameter will always return a list containing zero or one SIMs.
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
     * The status of the Sim resources to read. Can be `new`, `ready`, `active`, `inactive`, or `scheduled`.
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
    sims?: shared.SupersimV1Sim[];
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
