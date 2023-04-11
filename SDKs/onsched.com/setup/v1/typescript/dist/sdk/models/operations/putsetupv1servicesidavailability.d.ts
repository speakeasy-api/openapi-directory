import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PutSetupV1ServicesIdAvailabilityRequest extends SpeakeasyBase {
    /**
     * Service Availability Input Model
     */
    availabilityInputModel?: shared.AvailabilityInputModel;
    /**
     * id of service object
     */
    id: string;
}
export declare class PutSetupV1ServicesIdAvailabilityResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    serviceAvailabilityViewModel?: shared.ServiceAvailabilityViewModel;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
