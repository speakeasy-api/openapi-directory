import { SpeakeasyBase } from "../../../internal/utils";
import { RfqBaseVO } from "./rfqbasevo";
/**
 * Java type: com.noosh.nooshapi.vo.QuoteSimpleVO
 */
export declare class QuoteSimpleVO extends SpeakeasyBase {
    currency?: string;
    /**
     * Java type: java.math.BigDecimal
     */
    grandTotal?: any;
    quoteId?: number;
    quoteTitle?: string;
    /**
     * Java type: com.noosh.nooshapi.vo.RfqBaseVO
     */
    rfq?: RfqBaseVO;
    status?: string;
    submitDate?: Date;
    transactionalCurrency?: string;
    /**
     * Java type: java.math.BigDecimal
     */
    transactionalGrandTotal?: any;
}
