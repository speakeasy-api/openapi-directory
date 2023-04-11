import { SpeakeasyBase } from "../../../internal/utils";
import { InvoiceItemSimpleVO } from "./invoiceitemsimplevo";
import { PropertyPaAndAttVO } from "./propertypaandattvo";
/**
 * Java type: com.noosh.nooshapi.vo.InvoiceSimpleVO
 */
export declare class InvoiceSimpleVO extends SpeakeasyBase {
    comments?: string;
    currency?: string;
    customFields?: PropertyPaAndAttVO[];
    /**
     * Java type: java.math.BigDecimal
     */
    grandTotal?: any;
    invoiceDate?: Date;
    invoiceDueDate?: Date;
    invoiceId?: number;
    invoiceNumber?: string;
    invoiceTo?: string;
    isFinal?: number;
    isNonBillable?: number;
    items?: InvoiceItemSimpleVO[];
    orderReference?: string;
    orderTitle?: string;
    paymentMethod?: string;
    preparedBy?: string;
    projectNumber?: number;
    referenceNumber?: string;
    /**
     * Java type: java.math.BigDecimal
     */
    shipping?: any;
    status?: string;
    /**
     * Java type: java.math.BigDecimal
     */
    subTotal?: any;
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
    transactionalShipping?: any;
    /**
     * Java type: java.math.BigDecimal
     */
    transactionalSubTotal?: any;
    /**
     * Java type: java.math.BigDecimal
     */
    transactionalTax?: any;
}
