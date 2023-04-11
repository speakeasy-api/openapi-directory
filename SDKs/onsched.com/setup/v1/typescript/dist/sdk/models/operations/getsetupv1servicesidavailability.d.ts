import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetSetupV1ServicesIdAvailabilityRequest extends SpeakeasyBase {
    /**
     * id of service object
     */
    id: string;
}
export declare class GetSetupV1ServicesIdAvailabilityResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    serviceAvailabilityViewModel?: shared.ServiceAvailabilityViewModel;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
