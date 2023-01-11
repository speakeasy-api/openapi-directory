import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetProjectPathParams extends SpeakeasyBase {
    id: number;
}
export declare enum GetProjectWithEnum {
    Client = "client",
    Vendor = "vendor",
    Score = "score"
}
export declare class GetProjectQueryParams extends SpeakeasyBase {
    with?: GetProjectWithEnum[];
}
export declare class GetProjectRequest extends SpeakeasyBase {
    pathParams: GetProjectPathParams;
    queryParams: GetProjectQueryParams;
}
export declare class GetProjectResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.ErrorT;
    project?: shared.Project;
    statusCode: number;
}
