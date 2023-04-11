import { SpeakeasyBase } from "../../../internal/utils";
import { CustomFieldPersistVO } from "./customfieldpersistvo";
/**
 * Java type: com.noosh.domain.nooshapi.persist.vo.OrderItemPersistVO
 */
export declare class OrderItemPersistVO extends SpeakeasyBase {
    completionDate?: Date;
    customFields?: CustomFieldPersistVO[];
    /**
     * Java type: java.math.BigDecimal
     */
    exTaxValueCalculated?: any;
    notes?: string;
    per?: number;
    /**
     * Java type: java.math.BigDecimal
     */
    price?: any;
    /**
     * Java type: java.math.BigDecimal
     */
    quantity?: any;
    /**
     * Java type: java.math.BigDecimal
     */
    shipping?: any;
    specId?: number;
    specReferenceId?: number;
    tax?: string;
}
