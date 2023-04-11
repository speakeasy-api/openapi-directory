import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const FetchIpCommandServerList: readonly ["https://supersim.twilio.com"];
export declare class FetchIpCommandSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class FetchIpCommandRequest extends SpeakeasyBase {
    /**
     * The SID of the IP Command resource to fetch.
     */
    sid: string;
}
export declare class FetchIpCommandResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    supersimV1IpCommand?: shared.SupersimV1IpCommand;
}
