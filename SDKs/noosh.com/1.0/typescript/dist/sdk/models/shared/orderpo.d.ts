import { SpeakeasyBase } from "../../../internal/utils";
import { CustomFieldPersistVO } from "./customfieldpersistvo";
import { OrderItemPersistVO } from "./orderitempersistvo";
/**
 * Java type: com.noosh.domain.nooshapi.persist.po.OrderPO
 */
export declare class OrderPO extends SpeakeasyBase {
    buyerUserId?: number;
    comments?: string;
    customFields?: CustomFieldPersistVO[];
    invoiceOrBillingRecipient?: number;
    orderCompletionDate?: Date;
    orderItems?: OrderItemPersistVO[];
    otherSelectionReason?: string;
    paymentMethodId?: number;
    paymentReferenceNo?: string;
    sellOrder?: boolean;
    /**
     * Java type: java.math.BigDecimal
     */
    shipping?: any;
    supplierReference?: string;
    supplierSelectionReasonId?: number;
    supplierUserId?: number;
    tax?: string;
    title?: string;
}
