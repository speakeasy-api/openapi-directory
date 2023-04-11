import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class SubmitGroupApplicationRequest extends SpeakeasyBase {
    /**
     * The unique identifier of the group application in Noyo
     */
    applicationId: string;
    /**
     * The current version identifier of the group application
     */
    version: string;
}
export declare class SubmitGroupApplicationResponse extends SpeakeasyBase {
    /**
     * Failure Response - Returns the list of validation errors
     */
    applicationValidationResult?: shared.ApplicationValidationResult;
    contentType: string;
    /**
     * Successful Response - Returns the Group Application
     */
    groupApplicationResult?: shared.GroupApplicationResult;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
