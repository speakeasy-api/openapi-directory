import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class IssuesListMilestonesPathParams extends SpeakeasyBase {
    owner: string;
    repo: string;
}
export declare class IssuesListMilestonesQueryParams extends SpeakeasyBase {
    direction?: shared.RepoEnum4;
    page?: number;
    perPage?: number;
    sort?: shared.RepoEnum3;
    state?: shared.RepoEnum2;
}
export declare class IssuesListMilestonesRequest extends SpeakeasyBase {
    pathParams: IssuesListMilestonesPathParams;
    queryParams: IssuesListMilestonesQueryParams;
}
export declare class IssuesListMilestonesResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    basicError?: shared.BasicError;
    milestones?: shared.Milestone[];
}
