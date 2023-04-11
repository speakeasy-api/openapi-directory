import { SpeakeasyBase } from "../../../internal/utils";
import { RequisitionV2 } from "./requisitionv2";
/**
 * Retrieve all requisitions
 */
export declare class PaginatedRequisitionV2List extends SpeakeasyBase {
    count?: number;
    next?: string;
    previous?: string;
    results?: RequisitionV2[];
}
