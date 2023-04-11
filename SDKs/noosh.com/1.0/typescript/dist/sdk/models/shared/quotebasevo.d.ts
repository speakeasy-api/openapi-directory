import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Java type: com.noosh.nooshapi.vo.QuoteBaseVO
 */
export declare class QuoteBaseVO extends SpeakeasyBase {
    currency?: string;
    /**
     * Java type: java.math.BigDecimal
     */
    grandTotal?: any;
    quoteId?: number;
    quoteTitle?: string;
    status?: string;
    submitDate?: Date;
    transactionalCurrency?: string;
    /**
     * Java type: java.math.BigDecimal
     */
    transactionalGrandTotal?: any;
}
