import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetFundingsV1Request extends SpeakeasyBase {
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
    payorId: string;
    /**
     * List of sort fields. Example: ```?sort=destinationCurrency:asc,destinationAmount:asc```
     *
     * @remarks
     * Default is no sort. The supported sort fields are: dateTime and amount.
     *
     */
    sort?: string;
}
export declare class GetFundingsV1Response extends SpeakeasyBase {
    contentType: string;
    /**
     * Get Fundings normal response
     */
    getFundingsResponse?: shared.GetFundingsResponse;
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
