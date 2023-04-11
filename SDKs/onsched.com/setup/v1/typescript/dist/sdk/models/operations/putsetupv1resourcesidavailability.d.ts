import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PutSetupV1ResourcesIdAvailabilityRequest extends SpeakeasyBase {
    /**
     * Resource Availability Input Model
     */
    availabilityInputModel?: shared.AvailabilityInputModel;
    /**
     * id of resource object
     */
    id: string;
}
export declare class PutSetupV1ResourcesIdAvailabilityResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    resourceAvailabilityViewModel?: shared.ResourceAvailabilityViewModel;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
