import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const FetchCommandServerList: readonly ["https://wireless.twilio.com"];
export declare class FetchCommandSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class FetchCommandRequest extends SpeakeasyBase {
    /**
     * The SID of the Command resource to fetch.
     */
    sid: string;
}
export declare class FetchCommandResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    wirelessV1Command?: shared.WirelessV1Command;
}
