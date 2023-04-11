import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetApiV1AdminAccountsSecurity extends SpeakeasyBase {
    bearerAuth: string;
}
export declare class GetApiV1AdminAccountsRequest extends SpeakeasyBase {
    /**
     * Filter for currently active accounts?
     */
    active?: boolean;
    /**
     * Filter by the given domain
     */
    byDomain?: string;
    /**
     * Filter for currently disabled accounts?
     */
    disabled?: boolean;
    /**
     * Display name to search for
     */
    displayName?: string;
    /**
     * Lookup a user with this email
     */
    email?: string;
    /**
     * Lookup a user with this IP
     */
    ip?: string;
    /**
     * Filter for local accounts?
     */
    local?: boolean;
    /**
     * Filter for currently pending accounts?
     */
    pending?: boolean;
    /**
     * Filter for remote accounts?
     */
    remote?: boolean;
    /**
     * Filter for currently silenced accounts?
     */
    silenced?: boolean;
    /**
     * Filter for staff accounts?
     */
    staff?: boolean;
    /**
     * Filter for currently suspended accounts?
     */
    suspended?: boolean;
    /**
     * Username to search for
     */
    username?: string;
}
export declare class GetApiV1AdminAccountsResponse extends SpeakeasyBase {
    /**
     * Success
     */
    adminAccounts?: shared.AdminAccount[];
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
