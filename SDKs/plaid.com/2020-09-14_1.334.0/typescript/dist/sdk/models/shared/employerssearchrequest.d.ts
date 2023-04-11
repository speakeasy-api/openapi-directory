import { SpeakeasyBase } from "../../../internal/utils";
/**
 * EmployersSearchRequest defines the request schema for `/employers/search`.
 */
export declare class EmployersSearchRequest extends SpeakeasyBase {
    /**
     * Your Plaid API `client_id`. The `client_id` is required and may be provided either in the `PLAID-CLIENT-ID` header or as part of a request body.
     */
    clientId?: string;
    /**
     * The Plaid products the returned employers should support. Currently, this field must be set to `"deposit_switch"`.
     */
    products: string[];
    /**
     * The employer name to be searched for.
     */
    query: string;
    /**
     * Your Plaid API `secret`. The `secret` is required and may be provided either in the `PLAID-SECRET` header or as part of a request body.
     */
    secret?: string;
}
