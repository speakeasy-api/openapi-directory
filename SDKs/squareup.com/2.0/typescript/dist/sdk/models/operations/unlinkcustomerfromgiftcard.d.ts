import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UnlinkCustomerFromGiftCardSecurity extends SpeakeasyBase {
    oauth2: string;
}
export declare class UnlinkCustomerFromGiftCardRequest extends SpeakeasyBase {
    /**
     * An object containing the fields to POST for the request.
     *
     * @remarks
     *
     * See the corresponding object definition for field details.
     */
    unlinkCustomerFromGiftCardRequest: shared.UnlinkCustomerFromGiftCardRequest;
    giftCardId: string;
}
export declare class UnlinkCustomerFromGiftCardResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    unlinkCustomerFromGiftCardResponse?: shared.UnlinkCustomerFromGiftCardResponse;
}
