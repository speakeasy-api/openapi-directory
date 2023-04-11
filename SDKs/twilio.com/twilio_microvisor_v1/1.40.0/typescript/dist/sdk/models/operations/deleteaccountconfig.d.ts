import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare const DeleteAccountConfigServerList: readonly ["https://microvisor.twilio.com"];
export declare class DeleteAccountConfigSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class DeleteAccountConfigRequest extends SpeakeasyBase {
    /**
     * The config key; up to 100 characters.
     */
    key: string;
}
export declare class DeleteAccountConfigResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
