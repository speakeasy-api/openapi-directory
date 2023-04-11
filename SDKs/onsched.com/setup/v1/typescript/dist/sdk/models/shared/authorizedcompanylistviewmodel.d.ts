import { SpeakeasyBase } from "../../../internal/utils";
import { AuthorizedCompanyViewModel } from "./authorizedcompanyviewmodel";
/**
 * Success
 */
export declare class AuthorizedCompanyListViewModel extends SpeakeasyBase {
    count?: number;
    data?: AuthorizedCompanyViewModel[];
    email?: string;
    hasMore?: boolean;
    object?: string;
    total?: number;
    url?: string;
}
