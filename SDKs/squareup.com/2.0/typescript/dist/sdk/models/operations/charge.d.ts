import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ChargeSecurity extends SpeakeasyBase {
    oauth2: string;
}
export declare class ChargeRequest extends SpeakeasyBase {
    /**
     * An object containing the fields to POST for the request.
     *
     * @remarks
     *
     * See the corresponding object definition for field details.
     */
    chargeRequest: shared.ChargeRequest;
    /**
     * The ID of the location to associate the created transaction with.
     */
    locationId: string;
}
export declare class ChargeResponse extends SpeakeasyBase {
    /**
     * Success
     */
    chargeResponse?: shared.ChargeResponse;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
