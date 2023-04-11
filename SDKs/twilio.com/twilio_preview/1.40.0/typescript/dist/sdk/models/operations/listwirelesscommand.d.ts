import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const ListWirelessCommandServerList: readonly ["https://preview.twilio.com"];
export declare class ListWirelessCommandSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class ListWirelessCommandRequest extends SpeakeasyBase {
    device?: string;
    direction?: string;
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
    sim?: string;
    status?: string;
}
export declare class ListWirelessCommandListWirelessCommandResponseMeta extends SpeakeasyBase {
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
export declare class ListWirelessCommandListWirelessCommandResponse extends SpeakeasyBase {
    commands?: shared.PreviewWirelessCommand[];
    meta?: ListWirelessCommandListWirelessCommandResponseMeta;
}
export declare class ListWirelessCommandResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    listWirelessCommandResponse?: ListWirelessCommandListWirelessCommandResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
