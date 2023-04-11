import { SpeakeasyBase } from "../../../internal/utils";
import { WorkgroupBaseVO } from "./workgroupbasevo";
/**
 * Java type: com.noosh.nooshapi.vo.OrderSimpleBaseVO
 */
export declare class OrderSimpleBaseVO extends SpeakeasyBase {
    /**
     * Java type: com.noosh.nooshapi.vo.WorkgroupBaseVO
     */
    buyerWorkgroup?: WorkgroupBaseVO;
    comments?: string;
    completionDate?: Date;
    currency?: string;
    /**
     * Java type: java.math.BigDecimal
     */
    grandTotal?: any;
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
}
