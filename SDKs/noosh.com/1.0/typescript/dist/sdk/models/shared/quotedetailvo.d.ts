import { SpeakeasyBase } from "../../../internal/utils";
import { PropertyPaAndAttVO } from "./propertypaandattvo";
import { QuoteItemDetailVO } from "./quoteitemdetailvo";
/**
 * Java type: com.noosh.nooshapi.vo.QuoteDetailVO
 */
export declare class QuoteDetailVO extends SpeakeasyBase {
    client?: string;
    clientUserId?: number;
    comments?: string;
    creatorUserId?: number;
    currency?: string;
    customFields?: PropertyPaAndAttVO[];
    description?: string;
    /**
     * Java type: java.math.BigDecimal
     */
    grandTotal?: any;
    isShowSupplierInformation?: boolean;
    lastUpdateByUserId?: number;
    proposedOrderCompletionDate?: Date;
    quoteExpirationDate?: Date;
    quoteId?: number;
    quoteItems?: QuoteItemDetailVO[];
    /**
     * Java type: java.math.BigDecimal
     */
    quoteItemsTotal?: any;
    quoteTitle?: string;
    /**
     * Java type: java.math.BigDecimal
     */
    shipping?: any;
    status?: string;
    submitDate?: Date;
    /**
     * Java type: java.math.BigDecimal
     */
    tax?: any;
    transactionalCurrency?: string;
    /**
     * Java type: java.math.BigDecimal
     */
    transactionalGrandTotal?: any;
    /**
     * Java type: java.math.BigDecimal
     */
    transactionalQuoteItemsTotal?: any;
    /**
     * Java type: java.math.BigDecimal
     */
    transactionalShipping?: any;
    /**
     * Java type: java.math.BigDecimal
     */
    transactionalTax?: any;
    vatCode?: string;
    /**
     * Java type: java.math.BigDecimal
     */
    vatRate?: any;
}
