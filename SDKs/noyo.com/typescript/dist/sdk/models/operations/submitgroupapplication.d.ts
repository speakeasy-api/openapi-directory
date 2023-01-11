import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SubmitGroupApplicationPathParams extends SpeakeasyBase {
    applicationId: string;
    version: string;
}
export declare class SubmitGroupApplicationRequest extends SpeakeasyBase {
    pathParams: SubmitGroupApplicationPathParams;
}
export declare class SubmitGroupApplicationResponse extends SpeakeasyBase {
    applicationValidationResult?: shared.ApplicationValidationResult;
    contentType: string;
    groupApplicationResult?: shared.GroupApplicationResult;
    statusCode: number;
}
