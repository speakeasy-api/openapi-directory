import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const FetchConfigurationServerList: readonly ["https://flex-api.twilio.com"];
export declare class FetchConfigurationSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class FetchConfigurationRequest extends SpeakeasyBase {
    /**
     * The Pinned UI version of the Configuration resource to fetch.
     */
    uiVersion?: string;
}
export declare class FetchConfigurationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    flexV1Configuration?: shared.FlexV1Configuration;
}
