import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Post amount to transfer using stored funding account details.
 */
export declare class SubmitPayoutV3MultipartFormData extends SpeakeasyBase {
    /**
     * Create a new payout from a CSV source file and return a location header with a link to get the payout
     */
    file?: shared.PaymentInstructionV3[];
    /**
     * Deprecated in v2.16. Any value supplied here will be ignored.
     */
    payorId?: string;
    /**
     * The id of the payor whose source account(s) will be debited. payoutFromPayorId and payoutToPayorId must be both supplied or both omitted.
     */
    payoutFromPayorId?: string;
    /**
     * The id of the payor whose payees will be paid. payoutFromPayorId and payoutToPayorId must be both supplied or both omitted.
     */
    payoutToPayorId?: string;
}
export declare class SubmitPayoutV3MultipartResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
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
