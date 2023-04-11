import { SpeakeasyBase } from "../../../internal/utils";
import { PropertyPaAndAttVO } from "./propertypaandattvo";
import { QuotePriceDetailVO } from "./quotepricedetailvo";
import { SpecBaseVO } from "./specbasevo";
/**
 * Java type: com.noosh.nooshapi.vo.QuoteItemDetailVO
 */
export declare class QuoteItemDetailVO extends SpeakeasyBase {
    /**
     * Java type: java.math.BigDecimal
     */
    chosenQuantity?: any;
    comments?: string;
    completionDate?: Date;
    customFields?: PropertyPaAndAttVO[];
    itemId?: number;
    itemPrices?: QuotePriceDetailVO[];
    /**
     * Java type: java.math.BigDecimal
     */
    itemShippingTotal?: any;
    /**
     * Java type: java.math.BigDecimal
     */
    itemTaxTotal?: any;
    /**
     * Java type: java.math.BigDecimal
     */
    itemTotal?: any;
    reasonForQuoteSelection?: string;
    showCostPricesAndMarkup?: boolean;
    /**
     * Java type: com.noosh.nooshapi.vo.SpecBaseVO
     */
    spec?: SpecBaseVO;
    /**
     * Java type: java.math.BigDecimal
     */
    transactionalItemShippingTotal?: any;
    /**
     * Java type: java.math.BigDecimal
     */
    transactionalItemTaxTotal?: any;
    /**
     * Java type: java.math.BigDecimal
     */
    transactionalItemTotal?: any;
    vatCode?: string;
    /**
     * Java type: java.math.BigDecimal
     */
    vatRate?: any;
}
