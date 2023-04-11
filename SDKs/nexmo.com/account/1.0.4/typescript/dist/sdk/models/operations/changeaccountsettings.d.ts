import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const ChangeAccountSettingsServerList: readonly ["https://rest.nexmo.com"];
export declare class ChangeAccountSettingsRequest extends SpeakeasyBase {
    accountSettingsRequest?: shared.AccountSettingsRequest;
    /**
     * Your Vonage API key. You can find this in the [dashboard](https://dashboard.nexmo.com)
     */
    apiKey: string;
    /**
     * Your Vonage API secret. You can find this in the [dashboard](https://dashboard.nexmo.com)
     */
    apiSecret: string;
}
export declare class ChangeAccountSettingsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK. Settings were updated if supplied, the details of the current settings are included in the response.
     */
    accountSettings?: shared.AccountSettings;
}
