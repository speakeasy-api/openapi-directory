import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ValidateGroupApplicationPathParams extends SpeakeasyBase {
    applicationId: string;
}
export declare class ValidateGroupApplicationRequest extends SpeakeasyBase {
    pathParams: ValidateGroupApplicationPathParams;
}
export declare class ValidateGroupApplicationResponse extends SpeakeasyBase {
    applicationValidationResult?: shared.ApplicationValidationResult;
    contentType: string;
    statusCode: number;
}
