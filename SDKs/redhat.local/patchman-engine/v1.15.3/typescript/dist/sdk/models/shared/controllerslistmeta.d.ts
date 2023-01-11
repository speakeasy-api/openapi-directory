import { SpeakeasyBase } from "../../../internal/utils";
import { ControllersFilterData } from "./controllersfilterdata";
export declare class ControllersListMeta extends SpeakeasyBase {
    filter?: Record<string, ControllersFilterData>;
    limit?: number;
    offset?: number;
    search?: string;
    sort?: string[];
    subtotals?: Record<string, number>;
    totalItems?: number;
}
