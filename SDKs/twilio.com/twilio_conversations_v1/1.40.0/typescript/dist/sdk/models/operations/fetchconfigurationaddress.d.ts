import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const FetchConfigurationAddressServerList: readonly ["https://conversations.twilio.com"];
export declare class FetchConfigurationAddressSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class FetchConfigurationAddressRequest extends SpeakeasyBase {
    /**
     * The SID of the Address Configuration resource. This value can be either the `sid` or the `address` of the configuration
     */
    sid: string;
}
export declare class FetchConfigurationAddressResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    conversationsV1ConfigurationAddress?: shared.ConversationsV1ConfigurationAddress;
}
