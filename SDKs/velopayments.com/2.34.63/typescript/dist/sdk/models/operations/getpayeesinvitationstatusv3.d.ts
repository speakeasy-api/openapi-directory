import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetPayeesInvitationStatusV3Request extends SpeakeasyBase {
    /**
     * The invitation status of the payees.
     */
    invitationStatus?: string;
    /**
     * Page number. Default is 1.
     */
    page?: number;
    /**
     * Page size. Default is 25. Max allowable is 100.
     */
    pageSize?: number;
    /**
     * The UUID of the payee.
     */
    payeeId?: string;
    /**
     * The account owner Payor ID
     */
    payorId: string;
}
export declare class GetPayeesInvitationStatusV3Response extends SpeakeasyBase {
    contentType: string;
    /**
     * Get Payees with Invitaion status - filters of payeeId and invitationStatus
     */
    pagedPayeeInvitationStatusResponseV3?: shared.PagedPayeeInvitationStatusResponseV3;
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
