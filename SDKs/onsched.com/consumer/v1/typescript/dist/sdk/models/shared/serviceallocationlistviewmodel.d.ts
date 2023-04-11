import { SpeakeasyBase } from "../../../internal/utils";
import { ServiceAllocationViewModel } from "./serviceallocationviewmodel";
/**
 * service alloaction object
 */
export declare class ServiceAllocationListViewModel extends SpeakeasyBase {
    count?: number;
    data?: ServiceAllocationViewModel[];
    hasMore?: boolean;
    object?: string;
    total?: number;
    url?: string;
}
