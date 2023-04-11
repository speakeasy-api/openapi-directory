import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare const DeleteAddressServerList: readonly ["https://api.twilio.com"];
export declare class DeleteAddressSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class DeleteAddressRequest extends SpeakeasyBase {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that is responsible for the Address resource to delete.
     */
    accountSid: string;
    /**
     * The Twilio-provided string that uniquely identifies the Address resource to delete.
     */
    sid: string;
}
export declare class DeleteAddressResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
