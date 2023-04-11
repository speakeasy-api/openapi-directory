import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const CreateAccountConfigServerList: readonly ["https://microvisor.twilio.com"];
export declare class CreateAccountConfigSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class CreateAccountConfigCreateAccountConfigRequest extends SpeakeasyBase {
    /**
     * The config key; up to 100 characters.
     */
    key: string;
    /**
     * The config value; up to 4096 characters.
     */
    value: string;
}
export declare class CreateAccountConfigResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Created
     */
    microvisorV1AccountConfig?: shared.MicrovisorV1AccountConfig;
}
