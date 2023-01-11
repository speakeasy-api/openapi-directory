import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ProjectsListForOrgPathParams extends SpeakeasyBase {
    org: string;
}
export declare class ProjectsListForOrgQueryParams extends SpeakeasyBase {
    page?: number;
    perPage?: number;
    state?: shared.OrgEnum1;
}
export declare class ProjectsListForOrgRequest extends SpeakeasyBase {
    pathParams: ProjectsListForOrgPathParams;
    queryParams: ProjectsListForOrgQueryParams;
}
export declare class ProjectsListForOrgResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    projects?: shared.Project[];
    validationErrorSimple?: shared.ValidationErrorSimple;
}
