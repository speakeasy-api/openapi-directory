import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const ListSmsCommandServerList: readonly ["https://supersim.twilio.com"];
export declare class ListSmsCommandSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class ListSmsCommandRequest extends SpeakeasyBase {
    /**
     * The direction of the SMS Command. Can be `to_sim` or `from_sim`. The value of `to_sim` is synonymous with the term `mobile terminated`, and `from_sim` is synonymous with the term `mobile originated`.
     */
    direction?: shared.SmsCommandEnumDirectionEnum;
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
     * The SID or unique name of the Sim resource that SMS Command was sent to or from.
     */
    sim?: string;
    /**
     * The status of the SMS Command. Can be: `queued`, `sent`, `delivered`, `received` or `failed`. See the [SMS Command Status Values](https://www.twilio.com/docs/iot/supersim/api/smscommand-resource#status-values) for a description of each.
     */
    status?: shared.SmsCommandEnumStatusEnum;
}
export declare class ListSmsCommandListSmsCommandResponseMeta extends SpeakeasyBase {
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
export declare class ListSmsCommandListSmsCommandResponse extends SpeakeasyBase {
    meta?: ListSmsCommandListSmsCommandResponseMeta;
    smsCommands?: shared.SupersimV1SmsCommand[];
}
export declare class ListSmsCommandResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    listSmsCommandResponse?: ListSmsCommandListSmsCommandResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
