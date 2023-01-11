import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateContinuousProjectRequest extends SpeakeasyBase {
    request?: shared.ContinuousProject;
}
export declare class CreateContinuousProjectResponse extends SpeakeasyBase {
    contentType: string;
    continuousProject?: shared.ContinuousProject;
    statusCode: number;
}
