import { SpeakeasyBase } from "../../../internal/utils";
import { CustomerViewModel } from "./customerviewmodel";
/**
 * Success
 */
export declare class CustomerListViewModel extends SpeakeasyBase {
    count?: number;
    data?: CustomerViewModel[];
    hasMore?: boolean;
    object?: string;
    total?: number;
    url?: string;
}
