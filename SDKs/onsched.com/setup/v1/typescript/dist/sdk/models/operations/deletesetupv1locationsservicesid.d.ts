import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DeleteSetupV1LocationsServicesIdRequest extends SpeakeasyBase {
    /**
     * id of locationService object
     */
    id: string;
}
export declare class DeleteSetupV1LocationsServicesIdResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    locationViewModel?: shared.LocationViewModel;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
