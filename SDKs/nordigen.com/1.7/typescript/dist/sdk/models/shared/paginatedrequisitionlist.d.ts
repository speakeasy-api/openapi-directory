import { SpeakeasyBase } from "../../../internal/utils";
import { Requisition } from "./requisition";
export declare class PaginatedRequisitionList extends SpeakeasyBase {
    count?: number;
    next?: string;
    previous?: string;
    results?: Requisition[];
}
