import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class FetchPatientHealthResultRequest extends SpeakeasyBase {
    /**
     * Patient health result identifier
     */
    id: string;
}
export declare class FetchPatientHealthResultResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Unauthorized
     */
    fetchErrorResponse?: shared.FetchErrorResponse;
    /**
     * OK
     */
    fetchPatientHealthResultResponse?: shared.FetchPatientHealthResultResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
