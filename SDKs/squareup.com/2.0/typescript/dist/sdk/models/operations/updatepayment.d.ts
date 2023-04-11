import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdatePaymentSecurity extends SpeakeasyBase {
    oauth2: string;
}
export declare class UpdatePaymentRequest extends SpeakeasyBase {
    /**
     * An object containing the fields to POST for the request.
     *
     * @remarks
     *
     * See the corresponding object definition for field details.
     */
    updatePaymentRequest: shared.UpdatePaymentRequest;
    /**
     * The ID of the payment to update.
     */
    paymentId: string;
}
export declare class UpdatePaymentResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    updatePaymentResponse?: shared.UpdatePaymentResponse;
}
