import { SpeakeasyBase } from "../../../internal/utils";
export declare class TrafficSource extends SpeakeasyBase {
    /**
     * The campaign that referred the customer to the checkout
     */
    campaign?: string;
    /**
     * The first url visited by the customer
     */
    firstPageVisited?: string;
    /**
     * The date when the customer visited the first page
     */
    firstPageVisitedAt?: string;
    /**
     * The medium that referred the customer to the checkout
     */
    medium?: string;
    /**
     * The code that referred the customer to the checkout
     */
    referralCode?: string;
    /**
     * The source that referred the customer to the website
     */
    referralSource?: string;
    /**
     * The website that referred the customer to the checkout
     */
    referralUrl?: string;
    /**
     * Where the checkout originated
     */
    sourceName?: string;
    /**
     * User agent of the referred request to checkout
     */
    userAgent?: string;
}
