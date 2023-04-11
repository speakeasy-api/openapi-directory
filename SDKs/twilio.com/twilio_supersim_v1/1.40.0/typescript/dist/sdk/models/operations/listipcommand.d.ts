import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const ListIpCommandServerList: readonly ["https://supersim.twilio.com"];
export declare class ListIpCommandSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class ListIpCommandRequest extends SpeakeasyBase {
    /**
     * The direction of the IP Command. Can be `to_sim` or `from_sim`. The value of `to_sim` is synonymous with the term `mobile terminated`, and `from_sim` is synonymous with the term `mobile originated`.
     */
    direction?: shared.IpCommandEnumDirectionEnum;
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
     * The SID or unique name of the Sim resource that IP Command was sent to or from.
     */
    sim?: string;
    /**
     * The ICCID of the Sim resource that IP Command was sent to or from.
     */
    simIccid?: string;
    /**
     * The status of the IP Command. Can be: `queued`, `sent`, `received` or `failed`. See the [IP Command Status Values](https://www.twilio.com/docs/wireless/api/ipcommand-resource#status-values) for a description of each.
     */
    status?: shared.IpCommandEnumStatusEnum;
}
export declare class ListIpCommandListIpCommandResponseMeta extends SpeakeasyBase {
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
export declare class ListIpCommandListIpCommandResponse extends SpeakeasyBase {
    ipCommands?: shared.SupersimV1IpCommand[];
    meta?: ListIpCommandListIpCommandResponseMeta;
}
export declare class ListIpCommandResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    listIpCommandResponse?: ListIpCommandListIpCommandResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
