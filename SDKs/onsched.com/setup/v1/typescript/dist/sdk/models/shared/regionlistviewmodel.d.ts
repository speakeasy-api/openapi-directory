import { SpeakeasyBase } from "../../../internal/utils";
import { RegionViewModel } from "./regionviewmodel";
/**
 * region object's
 */
export declare class RegionListViewModel extends SpeakeasyBase {
    count?: number;
    data?: RegionViewModel[];
    hasMore?: boolean;
    object?: string;
    total?: number;
    url?: string;
}
