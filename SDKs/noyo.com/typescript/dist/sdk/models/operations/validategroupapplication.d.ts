import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ValidateGroupApplicationRequest extends SpeakeasyBase {
    /**
     * The unique identifier of the application in Noyo
     */
    applicationId: string;
}
export declare class ValidateGroupApplicationResponse extends SpeakeasyBase {
    /**
     * Failure Response - Invalid group application - Non-empty list of errors returned
     */
    applicationValidationResult?: shared.ApplicationValidationResult;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
