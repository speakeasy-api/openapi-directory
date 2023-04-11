import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const ListCommandServerList: readonly ["https://wireless.twilio.com"];
export declare class ListCommandSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class ListCommandRequest extends SpeakeasyBase {
    /**
     * Only return Commands with this direction value.
     */
    direction?: shared.CommandEnumDirectionEnum;
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
     * The `sid` or `unique_name` of the [Sim resources](https://www.twilio.com/docs/wireless/api/sim-resource) to read.
     */
    sim?: string;
    /**
     * The status of the resources to read. Can be: `queued`, `sent`, `delivered`, `received`, or `failed`.
     */
    status?: shared.CommandEnumStatusEnum;
    /**
     * Only return Commands with this transport value. Can be: `sms` or `ip`.
     */
    transport?: shared.CommandEnumTransportEnum;
}
export declare class ListCommandListCommandResponseMeta extends SpeakeasyBase {
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
export declare class ListCommandListCommandResponse extends SpeakeasyBase {
    commands?: shared.WirelessV1Command[];
    meta?: ListCommandListCommandResponseMeta;
}
export declare class ListCommandResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    listCommandResponse?: ListCommandListCommandResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
