import { SpeakeasyBase } from "../../../internal/utils";
import { CancellationPolicy } from "./cancellationpolicy";
import { HotelAgreementStub } from "./hotelagreementstub";
import { Money } from "./money";
import { RateComponent } from "./ratecomponent";
import { TaxOrFee } from "./taxorfee";
/**
 * Breakdown of taxes (e.g. VAT, city tax) and fees (e.g. cleaning or resort fees).
 */
export declare class BookedRateRetailRateTaxesAndFees extends SpeakeasyBase {
    /**
     * Taxes and fees that are included in the `retailRate.total` price paid at the time of booking.
     */
    includedInRate?: TaxOrFee[];
    /**
     * Taxes and fees that need to be payed at the hotel (often upon arrival or departure). This frequently happens for fees that only need to be collected based on certain conditions (e.g. a guest coming from abroad or being older than a certain age).
     */
    payAtHotel?: TaxOrFee[];
}
/**
 * The public retail rate you should quote and charge your guest. You're not allowed to quote or charge an amount lower than this if your website or app is publicly accessible.
 */
export declare class BookedRateRetailRate extends SpeakeasyBase {
    /**
     * Breakdown of taxes (e.g. VAT, city tax) and fees (e.g. cleaning or resort fees).
     */
    taxesAndFees: BookedRateRetailRateTaxesAndFees;
    /**
     * An amount of money in the specified currency (used in the context of prices, fees, refunds etc.)
     */
    total: Money;
}
/**
 * Information on the price of the booked room, other components of the room (such as breakfast, lunch or a welcome drink) and the cancellation policies that apply.
 */
export declare class BookedRate extends SpeakeasyBase {
    cancellationPolicies: CancellationPolicy[];
    components: RateComponent[];
    end: Date;
    /**
     * Essential information on an agreement with a hotel.
     */
    hotelAgreement: HotelAgreementStub;
    maxOccupancy?: number;
    /**
     * The public retail rate you should quote and charge your guest. You're not allowed to quote or charge an amount lower than this if your website or app is publicly accessible.
     */
    retailRate: BookedRateRetailRate;
    /**
     * The commission percentage you as a seller will earn from this booking, based on `retailRate.total`.
     */
    sellerCommissionPercentage: number;
    start: Date;
}
