import { SpeakeasyBase } from "../../../internal/utils";
import { ResourceAllocationViewModel } from "./resourceallocationviewmodel";
/**
 * resource allocation objects
 */
export declare class ResourceAllocationListViewModel extends SpeakeasyBase {
    count?: number;
    data?: ResourceAllocationViewModel[];
    hasMore?: boolean;
    object?: string;
    total?: number;
    url?: string;
}
