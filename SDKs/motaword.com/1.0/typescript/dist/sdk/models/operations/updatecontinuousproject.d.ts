import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateContinuousProjectPathParams extends SpeakeasyBase {
    id: number;
}
export declare class UpdateContinuousProjectRequest extends SpeakeasyBase {
    pathParams: UpdateContinuousProjectPathParams;
    request?: shared.ContinuousProjectUpdateContent;
}
export declare class UpdateContinuousProjectResponse extends SpeakeasyBase {
    contentType: string;
    continuousProject?: shared.ContinuousProject;
    error?: shared.ErrorT;
    statusCode: number;
}
