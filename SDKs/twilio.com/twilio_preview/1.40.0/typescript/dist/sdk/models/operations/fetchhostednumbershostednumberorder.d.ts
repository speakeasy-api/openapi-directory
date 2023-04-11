import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const FetchHostedNumbersHostedNumberOrderServerList: readonly ["https://preview.twilio.com"];
export declare class FetchHostedNumbersHostedNumberOrderSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class FetchHostedNumbersHostedNumberOrderRequest extends SpeakeasyBase {
    /**
     * A 34 character string that uniquely identifies this HostedNumberOrder.
     */
    sid: string;
}
export declare class FetchHostedNumbersHostedNumberOrderResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    previewHostedNumbersHostedNumberOrder?: shared.PreviewHostedNumbersHostedNumberOrder;
}
