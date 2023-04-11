import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const FetchWirelessCommandServerList: readonly ["https://preview.twilio.com"];
export declare class FetchWirelessCommandSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class FetchWirelessCommandRequest extends SpeakeasyBase {
    sid: string;
}
export declare class FetchWirelessCommandResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    previewWirelessCommand?: shared.PreviewWirelessCommand;
}
