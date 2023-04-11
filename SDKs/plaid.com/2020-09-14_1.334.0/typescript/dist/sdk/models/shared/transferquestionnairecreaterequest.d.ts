import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Defines the request schema for `/transfer/questionnaire/create`
 */
export declare class TransferQuestionnaireCreateRequest extends SpeakeasyBase {
    /**
     * Your Plaid API `client_id`. The `client_id` is required and may be provided either in the `PLAID-CLIENT-ID` header or as part of a request body.
     */
    clientId?: string;
    /**
     * Client ID of the end customer.
     */
    originatorClientId: string;
    /**
     * URL the end customer will be redirected to after completing questions in Plaid-hosted onboarding flow.
     */
    redirectUri: string;
    /**
     * Your Plaid API `secret`. The `secret` is required and may be provided either in the `PLAID-SECRET` header or as part of a request body.
     */
    secret?: string;
}
