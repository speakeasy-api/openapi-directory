import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * List of related resources to include in the response
 */
export declare enum FetchHealthProfileIncludeEnum {
    Patient = "patient",
    Questions = "questions"
}
export declare class FetchHealthProfileRequest extends SpeakeasyBase {
    /**
     * Health profile identifier
     */
    id: string;
    /**
     * List of related resources to include in the response
     */
    include?: FetchHealthProfileIncludeEnum;
}
export declare class FetchHealthProfileResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Unauthorized
     */
    fetchErrorResponse?: shared.FetchErrorResponse;
    /**
     * OK
     */
    fetchHealthProfileResponse?: shared.FetchHealthProfileResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
