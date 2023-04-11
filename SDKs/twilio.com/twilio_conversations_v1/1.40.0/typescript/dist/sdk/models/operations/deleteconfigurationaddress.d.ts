import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare const DeleteConfigurationAddressServerList: readonly ["https://conversations.twilio.com"];
export declare class DeleteConfigurationAddressSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class DeleteConfigurationAddressRequest extends SpeakeasyBase {
    /**
     * The SID of the Address Configuration resource. This value can be either the `sid` or the `address` of the configuration
     */
    sid: string;
}
export declare class DeleteConfigurationAddressResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
