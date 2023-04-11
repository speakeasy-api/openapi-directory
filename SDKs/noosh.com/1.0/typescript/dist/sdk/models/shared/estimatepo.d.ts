import { SpeakeasyBase } from "../../../internal/utils";
import { EstimateItemPO } from "./estimateitempo";
/**
 * Java type: com.noosh.domain.nooshapi.persist.po.EstimatePO
 */
export declare class EstimatePO extends SpeakeasyBase {
    comments?: string;
    description?: string;
    estimateItems?: EstimateItemPO[];
    estimateTitle?: string;
    expirationDate?: Date;
    ownerReference?: string;
    rfeId?: number;
}
