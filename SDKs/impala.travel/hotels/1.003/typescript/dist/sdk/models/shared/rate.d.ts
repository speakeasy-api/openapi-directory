import { SpeakeasyBase } from "../../../internal/utils";
import { CancellationPolicy } from "./cancellationpolicy";
import { HotelAgreementStub } from "./hotelagreementstub";
import { Money } from "./money";
import { RateComponent } from "./ratecomponent";
import { TaxOrFee } from "./taxorfee";
/**
 * Breakdown of taxes (e.g. VAT, city tax) and fees (e.g. cleaning or resort fees).
 */
export declare class RateRetailRateTaxesAndFees extends SpeakeasyBase {
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
export declare class RateRetailRate extends SpeakeasyBase {
    /**
     * Breakdown of taxes (e.g. VAT, city tax) and fees (e.g. cleaning or resort fees).
     */
    taxesAndFees: RateRetailRateTaxesAndFees;
    /**
     * An amount of money in the specified currency (used in the context of prices, fees, refunds etc.)
     */
    total: Money;
}
/**
 * Information on the price of the room, other components of the room (such as breakfast, lunch or a welcome drink) and the cancellation policies that apply.
 */
export declare class Rate extends SpeakeasyBase {
    cancellationPolicies: CancellationPolicy[];
    components: RateComponent[];
    end: Date;
    /**
     * Essential information on an agreement with a hotel.
     */
    hotelAgreement: HotelAgreementStub;
    /**
     * Maximum number of adults included in the rate.
     */
    maxOccupancy: number;
    rateId: string;
    /**
     * The rate plan ID that is attached to this rate. Each rate plan ID can specify a unique combination of a cancellation policy and a meal plan.
     */
    ratePlanId?: number;
    /**
     * The public retail rate you should quote and charge your guest. You're not allowed to quote or charge an amount lower than this if your website or app is publicly accessible.
     */
    retailRate: RateRetailRate;
    /**
     * Amount of rooms which can be sold for this occupancy level and room type at this rate price.
     */
    roomsSellable?: number;
    /**
     * The commission percentage you as a seller will earn from this booking, based on `retailRate.total`.
     */
    sellerCommissionPercentage: number;
    /**
     * This is the amount payable to the hotel, which Impala will collect from you on the hotel's behalf. The Impala fee will be requested in addition to this, and also documented in a VAT invoice.
     */
    sellerToImpalaPayment?: Money;
    start: Date;
}
