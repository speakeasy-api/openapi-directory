import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ListPaymentChannelRulesV1Response extends SpeakeasyBase {
    contentType: string;
    /**
     * List Payment Channel Country Rules
     */
    paymentChannelRulesResponse?: shared.PaymentChannelRulesResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Invalid access token. May be expired or invalid
     */
    inlineResponse401?: shared.InlineResponse401;
}
