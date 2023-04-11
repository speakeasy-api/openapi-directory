import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class EditLocationRequest extends SpeakeasyBase {
    locationEditRequest: shared.LocationEditRequest;
    /**
     * The unique identifier of the group in Noyo
     */
    groupId: string;
    /**
     * The unique identifier of the location in Noyo
     */
    locationId: string;
    /**
     * The current version identifier of the location
     */
    version: string;
}
export declare class EditLocationResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful Response - Returns the modified Location
     */
    locationResult?: shared.LocationResult;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
