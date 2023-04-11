import { SpeakeasyBase } from "../../../internal/utils";
import { OrderDetailBaseVO } from "./orderdetailbasevo";
import { OrderItemSimpleVO } from "./orderitemsimplevo";
import { PropertyPaAndAttVO } from "./propertypaandattvo";
import { UserVO } from "./uservo";
import { WorkgroupBaseVO } from "./workgroupbasevo";
/**
 * Java type: com.noosh.nooshapi.vo.OrderDetailVO
 */
export declare class OrderDetailVO extends SpeakeasyBase {
    acceptedDate?: Date;
    annulledDate?: Date;
    approvedDate?: Date;
    awardedDate?: Date;
    budgetType?: string;
    /**
     * Java type: com.noosh.nooshapi.vo.UserVO
     */
    buyer?: UserVO;
    /**
     * Java type: com.noosh.nooshapi.vo.WorkgroupBaseVO
     */
    buyerWorkgroup?: WorkgroupBaseVO;
    changeOrders?: OrderDetailBaseVO[];
    classification?: string;
    closedDate?: Date;
    closingChangeOrders?: OrderDetailBaseVO[];
    comments?: string;
    completionDate?: Date;
    creatorUserId?: number;
    currency?: string;
    customFields?: PropertyPaAndAttVO[];
    /**
     * Java type: java.math.BigDecimal
     */
    grandTotal?: any;
    /**
     * Java type: java.math.BigDecimal
     */
    grandTotalWithChanges?: any;
    itemCount?: number;
    lastActivityDate?: Date;
    lastChanged?: Date;
    lastStatusChange?: Date;
    miscCost?: number;
    orderId?: number;
    orderItems?: OrderItemSimpleVO[];
    orderNumber?: string;
    orderTitle?: string;
    /**
     * Java type: java.math.BigDecimal
     */
    orderTotal?: any;
    oversPercent?: number;
    parentOrderId?: number;
    paymentReference?: string;
    printOrderIds?: number[];
    quoteId?: number;
    /**
     * Java type: java.math.BigDecimal
     */
    shipping?: any;
    status?: string;
    statusComments?: string;
    /**
     * Java type: com.noosh.nooshapi.vo.UserVO
     */
    supplier?: UserVO;
    supplierReference?: string;
    supplierSelectionReason?: string;
    /**
     * Java type: com.noosh.nooshapi.vo.WorkgroupBaseVO
     */
    supplierWorkgroup?: WorkgroupBaseVO;
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
    transactionalGrandTotalWithChanges?: any;
    /**
     * Java type: java.math.BigDecimal
     */
    transactionalOrderTotal?: any;
    /**
     * Java type: java.math.BigDecimal
     */
    transactionalShipping?: any;
    /**
     * Java type: java.math.BigDecimal
     */
    transactionalTax?: any;
    undersPercent?: number;
}
