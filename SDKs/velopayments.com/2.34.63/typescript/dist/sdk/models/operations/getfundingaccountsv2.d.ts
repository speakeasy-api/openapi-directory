import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetFundingAccountsV2Request extends SpeakeasyBase {
    /**
     * The 2 letter ISO 3166-1 country code (upper case)
     */
    country?: string;
    /**
     * The ISO 4217 currency code
     */
    currency?: string;
    /**
     * The descriptive funding account name
     */
    name?: string;
    /**
     * Page number. Default is 1.
     */
    page?: number;
    /**
     * The number of results to return in a page
     */
    pageSize?: number;
    payorId?: string;
    sensitive?: boolean;
    /**
     * List of sort fields (e.g. ?sort=accountName:asc,name:asc) Default is accountName:asc The supported sort fields are - accountName, name.
     */
    sort?: string;
    /**
     * The type of funding account.
     */
    type?: string;
}
export declare class GetFundingAccountsV2Response extends SpeakeasyBase {
    contentType: string;
    /**
     * Get Funding Accounts Response
     */
    listFundingAccountsResponseV2?: shared.ListFundingAccountsResponseV2;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Invalid request. See Error message payload for details of failure
     */
    inlineResponse400?: shared.InlineResponse400;
    /**
     * The authentication does not have permissions to access the resource
     *
     * @remarks
     * This usually occurs when there is a valid authentication instance (client or user) but they do not have the required permissions
     *
     */
    inlineResponse403?: shared.InlineResponse403;
}
