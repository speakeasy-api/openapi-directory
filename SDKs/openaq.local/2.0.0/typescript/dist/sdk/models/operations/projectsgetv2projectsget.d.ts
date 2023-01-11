import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ProjectsGetV2ProjectsGetQueryParams extends SpeakeasyBase {
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
    projectId?: number;
    sensorType?: string;
    sort?: Record<string, any>;
    sourceName?: string[];
    unit?: string[];
}
export declare class ProjectsGetV2ProjectsGetRequest extends SpeakeasyBase {
    queryParams: ProjectsGetV2ProjectsGetQueryParams;
}
export declare class ProjectsGetV2ProjectsGetResponse extends SpeakeasyBase {
    contentType: string;
    httpValidationError?: shared.HttpValidationError;
    openAQProjectsResult?: shared.OpenAqProjectsResult;
    statusCode: number;
}
