import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class FetchPatientRequest extends SpeakeasyBase {
    /**
     * Patient identifier
     */
    id: string;
}
export declare class FetchPatientResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Unauthorized
     */
    fetchErrorResponse?: shared.FetchErrorResponse;
    /**
     * OK
     */
    fetchPatientResponse?: shared.FetchPatientResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
