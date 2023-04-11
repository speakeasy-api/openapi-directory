import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const UpdateAccountConfigServerList: readonly ["https://microvisor.twilio.com"];
export declare class UpdateAccountConfigSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class UpdateAccountConfigUpdateAccountConfigRequest extends SpeakeasyBase {
    /**
     * The config value; up to 4096 characters.
     */
    value: string;
}
export declare class UpdateAccountConfigRequest extends SpeakeasyBase {
    /**
     * The config key; up to 100 characters.
     */
    key: string;
    requestBody?: UpdateAccountConfigUpdateAccountConfigRequest;
}
export declare class UpdateAccountConfigResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    microvisorV1AccountConfig?: shared.MicrovisorV1AccountConfig;
}
