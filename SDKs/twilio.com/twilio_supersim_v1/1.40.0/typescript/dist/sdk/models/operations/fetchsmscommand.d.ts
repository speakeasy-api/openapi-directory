import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const FetchSmsCommandServerList: readonly ["https://supersim.twilio.com"];
export declare class FetchSmsCommandSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class FetchSmsCommandRequest extends SpeakeasyBase {
    /**
     * The SID of the SMS Command resource to fetch.
     */
    sid: string;
}
export declare class FetchSmsCommandResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    supersimV1SmsCommand?: shared.SupersimV1SmsCommand;
}
