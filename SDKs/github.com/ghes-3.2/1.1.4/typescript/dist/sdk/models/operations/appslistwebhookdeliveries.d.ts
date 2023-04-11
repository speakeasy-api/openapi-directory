import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class AppsListWebhookDeliveriesRequest extends SpeakeasyBase {
    /**
     * Used for pagination: the starting delivery from which the page of deliveries is fetched. Refer to the `link` header for the next and previous page cursors.
     */
    cursor?: string;
    /**
     * The number of results per page (max 100).
     */
    perPage?: number;
}
export declare class AppsListWebhookDeliveriesResponse extends SpeakeasyBase {
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
    hookDeliveryItems?: shared.HookDeliveryItem[];
    /**
     * Bad Request
     */
    scimError?: shared.ScimError;
    /**
     * Validation failed, or the endpoint has been spammed.
     */
    validationError?: shared.ValidationError;
}
