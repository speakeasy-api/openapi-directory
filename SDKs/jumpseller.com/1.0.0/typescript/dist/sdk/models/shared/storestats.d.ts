import { SpeakeasyBase } from "../../../internal/utils";
import { BestSold } from "./bestsold";
import { CountryOrders } from "./countryorders";
import { DailyVisits } from "./dailyvisits";
import { NewVsReturning } from "./newvsreturning";
import { OrdersData } from "./ordersdata";
import { PaymentMethodFreq } from "./paymentmethodfreq";
import { Referrer } from "./referrer";
import { ShippingMethodFreq } from "./shippingmethodfreq";
import { TrafficType } from "./traffictype";
export declare class StoreStatsConversions extends SpeakeasyBase {
    /**
     * Total add to cart conversions.
     */
    addedToCart?: number;
    /**
     * Total checkout conversions.
     */
    checkout?: number;
    /**
     * Total paid conversions.
     */
    paid?: number;
}
export declare class StoreStatsNewVsReturningCustomers extends SpeakeasyBase {
    /**
     * Global percentage of new vs returning customers.
     */
    global?: number;
    /**
     * Numbers of new and returning customers per day.
     */
    perDay?: NewVsReturning[];
}
export declare class StoreStatsNewVsReturningOrders extends SpeakeasyBase {
    /**
     * Global percentage of new vs returning customers.
     */
    global?: number;
    /**
     * Numbers of new and returning customers per day.
     */
    perDay?: NewVsReturning[];
}
export declare class StoreStatsOrders extends SpeakeasyBase {
    /**
     * Average order amount.
     */
    average?: number;
    /**
     * Total number of orders.
     */
    count?: number;
    /**
     * Orders data.
     */
    data?: OrdersData[];
    /**
     * Total amount from all orders.
     */
    total?: number;
}
export declare class StoreStatsRegionOrders extends SpeakeasyBase {
    /**
     * Can be 'regions' when orders are specific of 1 country or 'auto'.
     */
    displayMode?: string;
    /**
     * Orders per country and region(inside the country).
     */
    regionsOrders?: CountryOrders[];
}
export declare class StoreStats extends SpeakeasyBase {
    /**
     * Top 10 best sold products.
     */
    bestSold?: BestSold[];
    conversions?: StoreStatsConversions;
    /**
     * Store currency.
     */
    currency?: string;
    /**
     * Visits per day.
     */
    dailyVisits?: DailyVisits[];
    /**
     * Statistics start date.
     */
    from?: string;
    newVsReturningCustomers?: StoreStatsNewVsReturningCustomers;
    newVsReturningOrders?: StoreStatsNewVsReturningOrders;
    orders?: StoreStatsOrders;
    /**
     * Store payment methods and their frequency.
     */
    paymentMethods?: PaymentMethodFreq[];
    /**
     * Top 10 referrer sources and their frequency.
     */
    referrers?: Referrer[];
    regionOrders?: StoreStatsRegionOrders;
    /**
     * Number of times each search was conducted under the form of an aggregation query.
     */
    searchFrequenciesAll?: any[];
    /**
     * Number of times each search with zero results was conducted under the form of an aggregation query.
     */
    searchFrequenciesWithoutResults?: any[];
    /**
     * Store shipping methods and their frequency.
     */
    shippingMethods?: ShippingMethodFreq[];
    /**
     * Statistics end date.
     */
    to?: string;
    /**
     * Type of store traffic and its frequency.
     */
    trafficType?: TrafficType[];
    /**
     * Total number of visits.
     */
    visits?: number;
}
