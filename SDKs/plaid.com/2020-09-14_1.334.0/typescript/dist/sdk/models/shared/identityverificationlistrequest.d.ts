import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Request input for listing identity verifications
 */
export declare class IdentityVerificationListRequest extends SpeakeasyBase {
    /**
     * Your Plaid API `client_id`. The `client_id` is required and may be provided either in the `PLAID-CLIENT-ID` header or as part of a request body.
     */
    clientId?: string;
    /**
     * An identifier to help you connect this object to your internal systems. For example, your database ID corresponding to this object.
     */
    clientUserId: string;
    /**
     * An identifier that determines which page of results you receive.
     */
    cursor?: string;
    /**
     * Your Plaid API `secret`. The `secret` is required and may be provided either in the `PLAID-SECRET` header or as part of a request body.
     */
    secret?: string;
    /**
     * ID of the associated Identity Verification template.
     */
    templateId: string;
}
