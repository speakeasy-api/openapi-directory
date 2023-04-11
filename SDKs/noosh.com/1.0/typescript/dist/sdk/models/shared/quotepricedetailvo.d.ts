import { SpeakeasyBase } from "../../../internal/utils";
import { BreakoutVO } from "./breakoutvo";
import { PropertyPaAndAttVO } from "./propertypaandattvo";
/**
 * Java type: com.noosh.nooshapi.vo.QuotePriceDetailVO
 */
export declare class QuotePriceDetailVO extends SpeakeasyBase {
    breakouts?: BreakoutVO[];
    /**
     * Java type: java.math.BigDecimal
     */
    cost?: any;
    customFields?: PropertyPaAndAttVO[];
    /**
     * Java type: java.math.BigDecimal
     */
    fixed?: any;
    isChosen?: boolean;
    isIncluded?: boolean;
    isQuoted?: boolean;
    parentPriceId?: number;
    priceId?: number;
    /**
     * Java type: java.math.BigDecimal
     */
    quantity?: any;
    /**
     * Java type: java.math.BigDecimal
     */
    sellPrice?: any;
    /**
     * Java type: java.math.BigDecimal
     */
    shipping?: any;
    /**
     * Java type: com.noosh.nooshapi.vo.QuotePriceSourceVO
     */
    source?: any;
    supplier?: string;
    /**
     * Java type: java.math.BigDecimal
     */
    tax?: any;
    /**
     * Java type: java.math.BigDecimal
     */
    total?: any;
    /**
     * Java type: java.math.BigDecimal
     */
    transactionalCost?: any;
    /**
     * Java type: java.math.BigDecimal
     */
    transactionalFixed?: any;
    /**
     * Java type: java.math.BigDecimal
     */
    transactionalSellPrice?: any;
    /**
     * Java type: java.math.BigDecimal
     */
    transactionalShipping?: any;
    /**
     * Java type: java.math.BigDecimal
     */
    transactionalTax?: any;
    /**
     * Java type: java.math.BigDecimal
     */
    transactionalTotal?: any;
    /**
     * Java type: java.math.BigDecimal
     */
    transactionalVariable?: any;
    /**
     * Java type: java.math.BigDecimal
     */
    variable?: any;
    /**
     * Java type: java.math.BigDecimal
     */
    variablePercent?: any;
}
