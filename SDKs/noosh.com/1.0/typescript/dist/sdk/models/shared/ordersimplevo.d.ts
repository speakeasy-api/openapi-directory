import { SpeakeasyBase } from "../../../internal/utils";
import { OrderSimpleBaseVO } from "./ordersimplebasevo";
import { WorkgroupBaseVO } from "./workgroupbasevo";
/**
 * Java type: com.noosh.nooshapi.vo.OrderSimpleVO
 */
export declare class OrderSimpleVO extends SpeakeasyBase {
    /**
     * Java type: com.noosh.nooshapi.vo.WorkgroupBaseVO
     */
    buyerWorkgroup?: WorkgroupBaseVO;
    changeOrders?: OrderSimpleBaseVO[];
    closingChangeOrders?: OrderSimpleBaseVO[];
    comments?: string;
    completionDate?: Date;
    currency?: string;
    /**
     * Java type: java.math.BigDecimal
     */
    grandTotal?: any;
    /**
     * Java type: java.math.BigDecimal
     */
    grandTotalWithChanges?: any;
    lastChanged?: Date;
    lastStatusChange?: Date;
    orderId?: number;
    orderNumber?: string;
    orderTitle?: string;
    paymentReference?: string;
    printOrderIds?: number[];
    status?: string;
    statusComments?: string;
    supplierReference?: string;
    /**
     * Java type: com.noosh.nooshapi.vo.WorkgroupBaseVO
     */
    supplierWorkgroup?: WorkgroupBaseVO;
    transactionalCurrency?: string;
    /**
     * Java type: java.math.BigDecimal
     */
    transactionalGrandTotal?: any;
    /**
     * Java type: java.math.BigDecimal
     */
    transactionalGrandTotalWithChanges?: any;
}
