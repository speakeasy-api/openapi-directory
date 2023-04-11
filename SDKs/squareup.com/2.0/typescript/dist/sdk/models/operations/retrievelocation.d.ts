import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class RetrieveLocationSecurity extends SpeakeasyBase {
    oauth2: string;
}
export declare class RetrieveLocationRequest extends SpeakeasyBase {
    /**
     * The ID of the location to retrieve. If you specify the string "main",
     *
     * @remarks
     * then the endpoint returns the main location.
     */
    locationId: string;
}
export declare class RetrieveLocationResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    retrieveLocationResponse?: shared.RetrieveLocationResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
