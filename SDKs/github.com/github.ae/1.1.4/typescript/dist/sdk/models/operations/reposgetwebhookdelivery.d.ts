import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ReposGetWebhookDeliveryRequest extends SpeakeasyBase {
    deliveryId: number;
    /**
     * The unique identifier of the hook.
     */
    hookId: number;
    /**
     * The account owner of the repository. The name is not case sensitive.
     */
    owner: string;
    /**
     * The name of the repository. The name is not case sensitive.
     */
    repo: string;
}
export declare class ReposGetWebhookDeliveryResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Bad Request
     */
    basicError?: shared.BasicError;
    /**
     * Response
     */
    hookDelivery?: shared.HookDelivery;
    /**
     * Bad Request
     */
    scimError?: shared.ScimError;
    /**
     * Validation failed, or the endpoint has been spammed.
     */
    validationError?: shared.ValidationError;
}
