import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateProjectPathParams extends SpeakeasyBase {
    projectId: string;
}
export declare class UpdateProjectHeaders extends SpeakeasyBase {
    trainingKey: string;
}
export declare class UpdateProjectRequestsInput extends SpeakeasyBase {
    applicationXML: Uint8Array;
    project?: shared.ProjectInput;
    project1?: shared.ProjectInput;
    textXML: Uint8Array;
}
export declare class UpdateProjectRequest extends SpeakeasyBase {
    pathParams: UpdateProjectPathParams;
    headers: UpdateProjectHeaders;
    request: UpdateProjectRequestsInput;
}
export declare class UpdateProjectResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    customVisionError?: shared.CustomVisionError;
    project?: shared.Project;
    statusCode: number;
}
