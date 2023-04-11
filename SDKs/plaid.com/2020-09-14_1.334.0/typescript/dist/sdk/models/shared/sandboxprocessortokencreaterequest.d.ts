import { SpeakeasyBase } from "../../../internal/utils";
import { SandboxProcessorTokenCreateRequestOptions } from "./sandboxprocessortokencreaterequestoptions";
/**
 * SandboxProcessorTokenCreateRequest defines the request schema for `/sandbox/processor_token/create`
 */
export declare class SandboxProcessorTokenCreateRequest extends SpeakeasyBase {
    /**
     * Your Plaid API `client_id`. The `client_id` is required and may be provided either in the `PLAID-CLIENT-ID` header or as part of a request body.
     */
    clientId?: string;
    /**
     * The ID of the institution the Item will be associated with
     */
    institutionId: string;
    /**
     * An optional set of options to be used when configuring the Item. If specified, must not be `null`.
     */
    options?: SandboxProcessorTokenCreateRequestOptions;
    /**
     * Your Plaid API `secret`. The `secret` is required and may be provided either in the `PLAID-SECRET` header or as part of a request body.
     */
    secret?: string;
}
