import { SpeakeasyBase } from "../../../internal/utils";
import { RfeSpecPO } from "./rfespecpo";
/**
 * Java type: com.noosh.domain.nooshapi.persist.po.RfePO
 */
export declare class RfePO extends SpeakeasyBase {
    description?: string;
    details?: string;
    estimateDueDate?: Date;
    proposedOrderCompletionDate?: Date;
    rfeNumber?: string;
    rfeTitle?: string;
    specs?: RfeSpecPO[];
    supplierUserIds?: number[];
}
