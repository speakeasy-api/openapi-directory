import { SpeakeasyBase } from "../../../internal/utils";
import { PropertyPaAndAttVO } from "./propertypaandattvo";
import { SpecBaseVO } from "./specbasevo";
/**
 * Java type: com.noosh.nooshapi.vo.OrderItemSimpleVO
 */
export declare class OrderItemSimpleVO extends SpeakeasyBase {
    comments?: string;
    completionDate?: Date;
    customFields?: PropertyPaAndAttVO[];
    itemId?: number;
    itemPrice?: number;
    quantity?: number;
    /**
     * Java type: java.math.BigDecimal
     */
    shipping?: any;
    /**
     * Java type: com.noosh.nooshapi.vo.SpecBaseVO
     */
    spec?: SpecBaseVO;
    /**
     * Java type: java.math.BigDecimal
     */
    tax?: any;
    transactionalItemPrice?: number;
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
    transactionalUnitPrice?: any;
    unitDescription?: string;
    /**
     * Java type: java.math.BigDecimal
     */
    unitPrice?: any;
}
