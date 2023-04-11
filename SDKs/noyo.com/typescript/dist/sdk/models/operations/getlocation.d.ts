import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetLocationRequest extends SpeakeasyBase {
    /**
     * The unique identifier of the group in Noyo
     */
    groupId: string;
    /**
     * The unique identifier of the location in Noyo
     */
    locationId: string;
}
export declare class GetLocationResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful Response - Returns a single Location
     */
    locationResult?: shared.LocationResult;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
