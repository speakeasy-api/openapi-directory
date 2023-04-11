import { SpeakeasyBase } from "../../../internal/utils";
import { PropertyPaAndAttVO } from "./propertypaandattvo";
/**
 * Java type: com.noosh.nooshapi.vo.InvoiceItemSimpleVO
 */
export declare class InvoiceItemSimpleVO extends SpeakeasyBase {
    customFields?: PropertyPaAndAttVO[];
    invoiceItemId?: number;
    /**
     * Java type: java.math.BigDecimal
     */
    itemCost?: any;
    itemQuantity?: number;
    /**
     * Java type: java.math.BigDecimal
     */
    itemShipping?: any;
    /**
     * Java type: java.math.BigDecimal
     */
    itemSubTotal?: any;
    /**
     * Java type: java.math.BigDecimal
     */
    itemTax?: any;
    jobId?: number;
    specName?: string;
    /**
     * Java type: java.math.BigDecimal
     */
    transactionalItemCost?: any;
    /**
     * Java type: java.math.BigDecimal
     */
    transactionalItemShipping?: any;
    /**
     * Java type: java.math.BigDecimal
     */
    transactionalItemSubTotal?: any;
    /**
     * Java type: java.math.BigDecimal
     */
    transactionalItemTax?: any;
}
