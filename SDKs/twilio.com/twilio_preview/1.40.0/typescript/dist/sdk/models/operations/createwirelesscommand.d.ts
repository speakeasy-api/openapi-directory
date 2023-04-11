import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const CreateWirelessCommandServerList: readonly ["https://preview.twilio.com"];
export declare class CreateWirelessCommandSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class CreateWirelessCommandCreateWirelessCommandRequest extends SpeakeasyBase {
    callbackMethod?: string;
    callbackUrl?: string;
    command: string;
    commandMode?: string;
    device?: string;
    includeSid?: string;
    sim?: string;
}
export declare class CreateWirelessCommandResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Created
     */
    previewWirelessCommand?: shared.PreviewWirelessCommand;
}
