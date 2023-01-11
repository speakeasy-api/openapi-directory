import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetContinuousProjectPathParams extends SpeakeasyBase {
    id: number;
}
export declare class GetContinuousProjectRequest extends SpeakeasyBase {
    pathParams: GetContinuousProjectPathParams;
}
export declare class GetContinuousProjectResponse extends SpeakeasyBase {
    contentType: string;
    continuousProject?: shared.ContinuousProject;
    error?: shared.ErrorT;
    statusCode: number;
}
