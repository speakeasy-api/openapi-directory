import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ListFundingAuditDeltasRequest extends SpeakeasyBase {
    /**
     * Page number. Default is 1.
     */
    page?: number;
    /**
     * The number of results to return in a page
     */
    pageSize?: number;
    payorId: string;
    updatedSince: Date;
}
export declare class ListFundingAuditDeltasResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Funding Account Deltas
     */
    pageResourceFundingPayorStatusAuditResponseFundingPayorStatusAuditResponse?: shared.PageResourceFundingPayorStatusAuditResponseFundingPayorStatusAuditResponse;
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
}
