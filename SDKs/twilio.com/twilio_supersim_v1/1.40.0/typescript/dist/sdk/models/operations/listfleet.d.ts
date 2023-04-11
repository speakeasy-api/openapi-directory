import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const ListFleetServerList: readonly ["https://supersim.twilio.com"];
export declare class ListFleetSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class ListFleetRequest extends SpeakeasyBase {
    /**
     * The SID or unique name of the Network Access Profile that controls which cellular networks the Fleet's SIMs can connect to.
     */
    networkAccessProfile?: string;
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
export declare class ListFleetListFleetResponseMeta extends SpeakeasyBase {
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
export declare class ListFleetListFleetResponse extends SpeakeasyBase {
    fleets?: shared.SupersimV1Fleet[];
    meta?: ListFleetListFleetResponseMeta;
}
export declare class ListFleetResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    listFleetResponse?: ListFleetListFleetResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
