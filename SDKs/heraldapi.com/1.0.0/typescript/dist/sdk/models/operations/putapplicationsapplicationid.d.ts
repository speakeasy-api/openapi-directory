import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PutApplicationsApplicationIdRequest extends SpeakeasyBase {
    applicationWriteV1?: shared.ApplicationWriteV1;
    /**
     * `id` for a specific application
     */
    applicationId: string;
}
/**
 * OK
 */
export declare class PutApplicationsApplicationId200ApplicationJSON extends SpeakeasyBase {
    /**
     * An application is a set of information submitted by a producer to institutions in order to get quotes.
     */
    application?: shared.ApplicationReadV1;
}
export declare class PutApplicationsApplicationIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    putApplicationsApplicationId200ApplicationJSONObject?: PutApplicationsApplicationId200ApplicationJSON;
}
