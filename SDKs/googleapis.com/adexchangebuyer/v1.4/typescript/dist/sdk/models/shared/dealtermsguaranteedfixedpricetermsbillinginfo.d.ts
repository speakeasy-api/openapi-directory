import { SpeakeasyBase } from "../../../internal/utils";
import { Price } from "./price";
export declare class DealTermsGuaranteedFixedPriceTermsBillingInfo extends SpeakeasyBase {
    /**
     * The timestamp (in ms since epoch) when the original reservation price for the deal was first converted to DFP currency. This is used to convert the contracted price into buyer's currency without discrepancy.
     */
    currencyConversionTimeMs?: string;
    /**
     * The DFP line item id associated with this deal. For features like CPD, buyers can retrieve the DFP line item for billing reconciliation.
     */
    dfpLineItemId?: string;
    /**
     * The original contracted quantity (# impressions) for this deal. To ensure delivery, sometimes the publisher will book the deal with a impression buffer, such that guaranteed_looks is greater than the contracted quantity. However clients are billed using the original contracted quantity.
     */
    originalContractedQuantity?: string;
    price?: Price;
}
