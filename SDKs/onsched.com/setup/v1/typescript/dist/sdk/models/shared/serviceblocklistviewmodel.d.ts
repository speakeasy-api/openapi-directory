import { SpeakeasyBase } from "../../../internal/utils";
import { ServiceBlockViewModel } from "./serviceblockviewmodel";
/**
 * service block object's
 */
export declare class ServiceBlockListViewModel extends SpeakeasyBase {
    count?: number;
    data?: ServiceBlockViewModel[];
    hasMore?: boolean;
    object?: string;
    total?: number;
    url?: string;
}
