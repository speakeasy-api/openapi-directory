import { SpeakeasyBase } from "../../../internal/utils";
export declare class AftermarketListingExpiryCreate extends SpeakeasyBase {
    /**
     * Domain name
     */
    domain: string;
    /**
     * Date when the domain expires
     */
    expiresAt: string;
    /**
     * Losing registrar id for the domain
     */
    losingRegistrarId: number;
    /**
     * Monthly traffic page view for the domain
     */
    pageViewsMonthly?: number;
    /**
     * Monthly parking revenue (in USD micro unit) for the domain
     */
    revenueMonthly?: number;
}
