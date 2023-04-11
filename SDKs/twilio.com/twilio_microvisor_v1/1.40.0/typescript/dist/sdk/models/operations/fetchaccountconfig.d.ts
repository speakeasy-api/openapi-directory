import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const FetchAccountConfigServerList: readonly ["https://microvisor.twilio.com"];
export declare class FetchAccountConfigSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class FetchAccountConfigRequest extends SpeakeasyBase {
    /**
     * The config key; up to 100 characters.
     */
    key: string;
}
export declare class FetchAccountConfigResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    microvisorV1AccountConfig?: shared.MicrovisorV1AccountConfig;
}
