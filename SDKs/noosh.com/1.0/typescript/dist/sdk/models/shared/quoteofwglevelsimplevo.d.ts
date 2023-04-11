import { SpeakeasyBase } from "../../../internal/utils";
import { ProjectBaseVO } from "./projectbasevo";
import { RfqBaseVO } from "./rfqbasevo";
/**
 * Java type: com.noosh.nooshapi.vo.QuoteOfWgLevelSimpleVO
 */
export declare class QuoteOfWgLevelSimpleVO extends SpeakeasyBase {
    currency?: string;
    /**
     * Java type: java.math.BigDecimal
     */
    grandTotal?: any;
    /**
     * Java type: com.noosh.nooshapi.vo.ProjectBaseVO
     */
    project?: ProjectBaseVO;
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
