import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ProjectsGetV2ProjectsProjectIdGetPathParams extends SpeakeasyBase {
    projectId: number;
}
export declare class ProjectsGetV2ProjectsProjectIdGetQueryParams extends SpeakeasyBase {
    country?: string[];
    countryId?: string;
    entity?: string;
    isAnalysis?: boolean;
    isMobile?: boolean;
    limit?: number;
    offset?: number;
    orderBy?: Record<string, any>;
    page?: number;
    parameter?: any[];
    parameterId?: number;
    project?: any[];
    sensorType?: string;
    sort?: Record<string, any>;
    sourceName?: string[];
    unit?: string[];
}
export declare class ProjectsGetV2ProjectsProjectIdGetRequest extends SpeakeasyBase {
    pathParams: ProjectsGetV2ProjectsProjectIdGetPathParams;
    queryParams: ProjectsGetV2ProjectsProjectIdGetQueryParams;
}
export declare class ProjectsGetV2ProjectsProjectIdGetResponse extends SpeakeasyBase {
    contentType: string;
    httpValidationError?: shared.HttpValidationError;
    openAQProjectsResult?: shared.OpenAqProjectsResult;
    statusCode: number;
}
