import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateLocationSecurity extends SpeakeasyBase {
    oauth2: string;
}
export declare class UpdateLocationRequest extends SpeakeasyBase {
    /**
     * An object containing the fields to POST for the request.
     *
     * @remarks
     *
     * See the corresponding object definition for field details.
     */
    updateLocationRequest: shared.UpdateLocationRequest;
    /**
     * The ID of the location to update.
     */
    locationId: string;
}
export declare class UpdateLocationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    updateLocationResponse?: shared.UpdateLocationResponse;
}
