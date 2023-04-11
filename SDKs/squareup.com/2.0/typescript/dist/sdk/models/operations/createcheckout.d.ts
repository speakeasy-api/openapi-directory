import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateCheckoutSecurity extends SpeakeasyBase {
    oauth2: string;
}
export declare class CreateCheckoutRequest extends SpeakeasyBase {
    /**
     * An object containing the fields to POST for the request.
     *
     * @remarks
     *
     * See the corresponding object definition for field details.
     */
    createCheckoutRequest: shared.CreateCheckoutRequest;
    /**
     * The ID of the business location to associate the checkout with.
     */
    locationId: string;
}
export declare class CreateCheckoutResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    createCheckoutResponse?: shared.CreateCheckoutResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
