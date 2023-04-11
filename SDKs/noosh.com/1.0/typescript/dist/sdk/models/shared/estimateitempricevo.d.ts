import { SpeakeasyBase } from "../../../internal/utils";
import { BreakoutVO } from "./breakoutvo";
import { ItemOptionVO } from "./itemoptionvo";
/**
 * Java type: com.noosh.nooshapi.vo.EstimateItemPriceVO
 */
export declare class EstimateItemPriceVO extends SpeakeasyBase {
    /**
     * Java type: java.math.BigDecimal
     */
    addPrice?: any;
    breakouts?: BreakoutVO[];
    emEstimateItemPriceId?: number;
    /**
     * Java type: com.noosh.nooshapi.vo.ItemOptionVO
     */
    itemOption?: ItemOptionVO;
    /**
     * Java type: java.math.BigDecimal
     */
    price?: any;
    /**
     * Java type: java.math.BigDecimal
     */
    shipping?: any;
    /**
     * Java type: java.math.BigDecimal
     */
    tax?: any;
    /**
     * Java type: java.math.BigDecimal
     */
    totalPrice?: any;
    /**
     * Java type: java.math.BigDecimal
     */
    transactionalAddPrice?: any;
    /**
     * Java type: java.math.BigDecimal
     */
    transactionalPrice?: any;
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
    transactionalTotalPrice?: any;
}
