import { SpeakeasyBase } from "../../../internal/utils";
import { CustomFieldPersistVO } from "./customfieldpersistvo";
/**
 * Java type: com.noosh.nooshapi.vo.OrderUpdPersistVO
 */
export declare class OrderUpdPersistVO extends SpeakeasyBase {
    /**
     * accept or reject
     */
    action?: string;
    budgetTypeFieldId?: number;
    comments?: string;
    customFields?: CustomFieldPersistVO[];
    orderCompletionDate?: Date;
    orderId?: number;
    otherSelectionReason?: string;
    /**
     * Java type: java.math.BigDecimal
     */
    oversPercent?: any;
    paymentMethodId?: number;
    paymentReferenceNo?: string;
    rejectReason?: string;
    supplierSelectionReasonId?: number;
    /**
     * Java type: java.math.BigDecimal
     */
    undersPercent?: any;
}
