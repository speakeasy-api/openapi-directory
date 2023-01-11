import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateProjectPathParams extends SpeakeasyBase {
    id: number;
}
export declare class UpdateProjectRequestBody extends SpeakeasyBase {
    callbackUrl?: string;
    couponCode?: string;
    custom?: string[];
    sourceLanguage?: string;
    targetLanguages?: string[];
}
export declare class UpdateProjectRequest extends SpeakeasyBase {
    pathParams: UpdateProjectPathParams;
    request?: UpdateProjectRequestBody;
}
export declare class UpdateProjectResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.ErrorT;
    project?: shared.Project;
    statusCode: number;
}
