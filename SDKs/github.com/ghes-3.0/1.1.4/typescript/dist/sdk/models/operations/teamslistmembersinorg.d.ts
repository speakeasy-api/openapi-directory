import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TeamsListMembersInOrgPathParams extends SpeakeasyBase {
    org: string;
    teamSlug: string;
}
export declare class TeamsListMembersInOrgQueryParams extends SpeakeasyBase {
    page?: number;
    perPage?: number;
    role?: shared.TeamSlugEnum;
}
export declare class TeamsListMembersInOrgRequest extends SpeakeasyBase {
    pathParams: TeamsListMembersInOrgPathParams;
    queryParams: TeamsListMembersInOrgQueryParams;
}
export declare class TeamsListMembersInOrgResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    simpleUsers?: shared.SimpleUser[];
}
