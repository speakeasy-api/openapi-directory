import { SpeakeasyBase } from "../../../internal/utils";
import { BusinessServiceViewModel } from "./businessserviceviewmodel";
/**
 * location service objects
 */
export declare class BusinessServiceListViewModel extends SpeakeasyBase {
    count?: number;
    data?: BusinessServiceViewModel[];
    hasMore?: boolean;
    object?: string;
    total?: number;
    url?: string;
}
