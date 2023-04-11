import { SpeakeasyBase } from "../../../internal/utils";
import { OrderCustomerMarketingRightsInfo } from "./ordercustomermarketingrightsinfo";
export declare class OrderCustomer extends SpeakeasyBase {
    /**
     * Deprecated.
     */
    email?: string;
    /**
     * Deprecated. Please use marketingRightsInfo instead.
     */
    explicitMarketingPreference?: boolean;
    /**
     * Full name of the customer.
     */
    fullName?: string;
    /**
     * Email address for the merchant to send value-added tax or invoice documentation of the order. Only the last document sent is made available to the customer. For more information, see About automated VAT invoicing for Buy on Google.
     */
    invoiceReceivingEmail?: string;
    marketingRightsInfo?: OrderCustomerMarketingRightsInfo;
}
