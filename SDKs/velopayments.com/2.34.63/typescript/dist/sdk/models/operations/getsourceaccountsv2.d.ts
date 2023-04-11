import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetSourceAccountsV2Request extends SpeakeasyBase {
    /**
     * The funding account ID
     */
    fundingAccountId?: string;
    /**
     * Page number. Default is 1.
     */
    page?: number;
    /**
     * The number of results to return in a page
     */
    pageSize?: number;
    /**
     * The account owner Payor ID
     */
    payorId?: string;
    /**
     * The physical account ID
     */
    physicalAccountId?: string;
    /**
     * Physical Account Name
     */
    physicalAccountName?: string;
    /**
     * List of sort fields e.g. ?sort=name:asc
     *
     * @remarks
     * Default is name:asc
     * The supported sort fields are - fundingRef, name, balance
     *
     */
    sort?: string;
}
export declare class GetSourceAccountsV2Response extends SpeakeasyBase {
    contentType: string;
    /**
     * List Source Account response
     */
    listSourceAccountResponseV2?: shared.ListSourceAccountResponseV2;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Invalid request. See Error message payload for details of failure
     */
    inlineResponse400?: shared.InlineResponse400;
    /**
     * Invalid access token. May be expired or invalid
     */
    inlineResponse401?: shared.InlineResponse401;
    /**
     * The authentication does not have permissions to access the resource
     *
     * @remarks
     * This usually occurs when there is a valid authentication instance (client or user) but they do not have the required permissions
     *
     */
    inlineResponse403?: shared.InlineResponse403;
    /**
     * The resource was not found or is no longer available
     *
     * @remarks
     *
     */
    inlineResponse404?: shared.InlineResponse404;
}
