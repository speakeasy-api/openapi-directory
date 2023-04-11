import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetApplicationsApplicationIdRequest extends SpeakeasyBase {
    /**
     * `id` for a specific application
     */
    applicationId: string;
}
/**
 * OK
 */
export declare class GetApplicationsApplicationId200ApplicationJSON extends SpeakeasyBase {
    /**
     * An application is a set of information submitted by a producer to institutions in order to get quotes.
     */
    application?: shared.ApplicationReadV1;
}
export declare class GetApplicationsApplicationIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    getApplicationsApplicationId200ApplicationJSONObject?: GetApplicationsApplicationId200ApplicationJSON;
}
