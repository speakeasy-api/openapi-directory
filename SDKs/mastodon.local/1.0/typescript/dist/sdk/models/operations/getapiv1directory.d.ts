import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * the `active` to sort by most recently posted statuses (default) or `new` to sort by most recently created profiles.
 */
export declare enum GetApiV1DirectoryOrderEnum {
    Active = "active",
    New = "new"
}
export declare class GetApiV1DirectoryRequest extends SpeakeasyBase {
    /**
     * How many accounts to load. Default 40.
     */
    limit?: number;
    /**
     * Only return local accounts.
     */
    local?: boolean;
    /**
     * How many accounts to skip before returning results. Default 0.
     */
    offset?: number;
    /**
     * the `active` to sort by most recently posted statuses (default) or `new` to sort by most recently created profiles.
     */
    order?: GetApiV1DirectoryOrderEnum;
}
export declare class GetApiV1DirectoryResponse extends SpeakeasyBase {
    /**
     * List of accounts
     */
    accounts?: shared.Account[];
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
