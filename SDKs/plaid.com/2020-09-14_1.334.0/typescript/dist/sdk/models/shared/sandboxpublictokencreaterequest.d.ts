import { SpeakeasyBase } from "../../../internal/utils";
import { ProductsEnum } from "./productsenum";
import { SandboxPublicTokenCreateRequestOptions } from "./sandboxpublictokencreaterequestoptions";
/**
 * SandboxPublicTokenCreateRequest defines the request schema for `/sandbox/public_token/create`
 */
export declare class SandboxPublicTokenCreateRequest extends SpeakeasyBase {
    /**
     * Your Plaid API `client_id`. The `client_id` is required and may be provided either in the `PLAID-CLIENT-ID` header or as part of a request body.
     */
    clientId?: string;
    /**
     * The products to initially pull for the Item. May be any products that the specified `institution_id`  supports. This array may not be empty.
     */
    initialProducts: ProductsEnum[];
    /**
     * The ID of the institution the Item will be associated with
     */
    institutionId: string;
    /**
     * An optional set of options to be used when configuring the Item. If specified, must not be `null`.
     */
    options?: SandboxPublicTokenCreateRequestOptions;
    /**
     * Your Plaid API `secret`. The `secret` is required and may be provided either in the `PLAID-SECRET` header or as part of a request body.
     */
    secret?: string;
    /**
     * The user token associated with the User data is being requested for.
     */
    userToken?: string;
}
