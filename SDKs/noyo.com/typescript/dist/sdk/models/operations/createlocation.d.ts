import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateLocationRequest extends SpeakeasyBase {
    locationCreateRequest: shared.LocationCreateRequest;
    /**
     * The unique identifier of the group in Noyo
     */
    groupId: string;
}
export declare class CreateLocationResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful Response - Returns the new Location
     */
    locationResult?: shared.LocationResult;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
