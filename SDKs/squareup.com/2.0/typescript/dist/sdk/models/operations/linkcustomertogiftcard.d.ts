import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class LinkCustomerToGiftCardSecurity extends SpeakeasyBase {
    oauth2: string;
}
export declare class LinkCustomerToGiftCardRequest extends SpeakeasyBase {
    /**
     * An object containing the fields to POST for the request.
     *
     * @remarks
     *
     * See the corresponding object definition for field details.
     */
    linkCustomerToGiftCardRequest: shared.LinkCustomerToGiftCardRequest;
    /**
     * The ID of the gift card to link.
     */
    giftCardId: string;
}
export declare class LinkCustomerToGiftCardResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    linkCustomerToGiftCardResponse?: shared.LinkCustomerToGiftCardResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
