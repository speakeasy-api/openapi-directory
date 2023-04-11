import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreatePatientHealthMetricResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Unauthorized
     */
    createOrUpdateErrorResponse?: shared.CreateOrUpdateErrorResponse;
    /**
     * OK
     */
    createPatientHealthMetricResponse?: shared.CreatePatientHealthMetricResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
