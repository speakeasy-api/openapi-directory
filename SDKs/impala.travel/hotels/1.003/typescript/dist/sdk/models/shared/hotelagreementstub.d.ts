import { SpeakeasyBase } from "../../../internal/utils";
/**
 * There is a limit to the number of deals that can be sold.
 */
export declare class HotelAgreementStubDealsSellable extends SpeakeasyBase {
    /**
     * The amount of deals remaining that can sold.
     */
    remaining?: number;
}
/**
 * Rather than selling the hotel's generally available public rates, if a discount is agreed on, bookings made with this deal will have a reduced rate.
 */
export declare class HotelAgreementStubDiscount extends SpeakeasyBase {
    /**
     * This is the amount of discount received.
     */
    count?: number;
    /**
     * This is the type of discount which can be: PERCENTAGE or FLAT_FEE.
     */
    type?: string;
}
/**
 * Essential information on an agreement with a hotel.
 */
export declare class HotelAgreementStub extends SpeakeasyBase {
    /**
     * A deal may have conditions set to it. For example, the deal may only apply for a closed user group (PRIVATE_RATE) or sold along with another component e.g flights (PACKAGED)
     */
    conditions?: string[];
    /**
     * The unique identifier for this deal request.
     */
    dealId: string;
    /**
     * There is a limit to the number of deals that can be sold.
     */
    dealsSellable?: HotelAgreementStubDealsSellable;
    /**
     * Rather than selling the hotel's generally available public rates, if a discount is agreed on, bookings made with this deal will have a reduced rate.
     */
    discount?: HotelAgreementStubDiscount;
    /**
     * Unique identifier for the hotel agreement.
     */
    hotelAgreementId: string;
    /**
     * URI that allows access to the full deal information.
     */
    href?: string;
    /**
     * These are conditions set by you the seller or the hotel for which the deal can be sold. For example: this deal can only be sold on mobile. Any specialInstructions will override other variables, for example, if an instruction includes: All bookings are non refundable, this will override any pre-existing cancellationPolicy.
     */
    specialInstructions: string;
}
