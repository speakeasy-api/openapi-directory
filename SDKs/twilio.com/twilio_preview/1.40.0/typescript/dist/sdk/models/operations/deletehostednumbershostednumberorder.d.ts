import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare const DeleteHostedNumbersHostedNumberOrderServerList: readonly ["https://preview.twilio.com"];
export declare class DeleteHostedNumbersHostedNumberOrderSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class DeleteHostedNumbersHostedNumberOrderRequest extends SpeakeasyBase {
    /**
     * A 34 character string that uniquely identifies this HostedNumberOrder.
     */
    sid: string;
}
export declare class DeleteHostedNumbersHostedNumberOrderResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
