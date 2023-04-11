import { SpeakeasyBase } from "../../../internal/utils";
import { IdentityVerificationRequestUser } from "./identityverificationrequestuser";
/**
 * Request schema for '/identity_verification/create'
 */
export declare class IdentityVerificationCreateRequest extends SpeakeasyBase {
    /**
     * Your Plaid API `client_id`. The `client_id` is required and may be provided either in the `PLAID-CLIENT-ID` header or as part of a request body.
     */
    clientId?: string;
    /**
     * A flag specifying whether the end user has already agreed to a privacy policy specifying that their data will be shared with Plaid for verification purposes.
     *
     * @remarks
     *
     * If `gave_consent` is set to `true`, the `accept_tos` step will be marked as `skipped` and the end user's session will start at the next step requirement.
     */
    gaveConsent: boolean;
    /**
     * An optional flag specifying how you would like Plaid to handle attempts to create an Identity Verification when an Identity Verification already exists for the provided `client_user_id` and `template_id`.
     *
     * @remarks
     * If idempotency is enabled, Plaid will return the existing Identity Verification. If idempotency is disabled, Plaid will reject the request with a `400 Bad Request` status code if an Identity Verification already exists for the supplied `client_user_id` and `template_id`.
     */
    isIdempotent?: boolean;
    /**
     * A flag specifying whether you would like Plaid to expose a shareable URL for the verification being created.
     */
    isShareable: boolean;
    /**
     * Your Plaid API `secret`. The `secret` is required and may be provided either in the `PLAID-SECRET` header or as part of a request body.
     */
    secret?: string;
    /**
     * ID of the associated Identity Verification template.
     */
    templateId: string;
    /**
     * User information collected outside of Link, most likely via your own onboarding process.
     *
     * @remarks
     *
     * Each of the following identity fields are optional:
     *
     * `email_address`
     *
     * `phone_number`
     *
     * `date_of_birth`
     *
     * `name`
     *
     * `address`
     *
     * `id_number`
     *
     * Specifically, these fields are optional in that they can either be fully provided (satisfying every required field in their subschema) or omitted from the request entirely by not providing the key or value.
     * Providing these fields via the API will result in Link skipping the data collection process for the associated user. All verification steps enabled in the associated Identity Verification Template will still be run. Verification steps will either be run immediately, or once the user completes the `accept_tos` step, depending on the value provided to the `gave_consent` field.
     */
    user: IdentityVerificationRequestUser;
}
