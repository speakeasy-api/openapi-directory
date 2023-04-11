import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetSetupV1ResourcesIdAvailabilityRequest extends SpeakeasyBase {
    /**
     * id of resource object
     */
    id: string;
}
export declare class GetSetupV1ResourcesIdAvailabilityResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    resourceAvailabilityViewModel?: shared.ResourceAvailabilityViewModel;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
