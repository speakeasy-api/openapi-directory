import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TeamsListMembersLegacyPathParams extends SpeakeasyBase {
    teamId: number;
}
export declare class TeamsListMembersLegacyQueryParams extends SpeakeasyBase {
    page?: number;
    perPage?: number;
    role?: shared.TeamIdEnum;
}
export declare class TeamsListMembersLegacyRequest extends SpeakeasyBase {
    pathParams: TeamsListMembersLegacyPathParams;
    queryParams: TeamsListMembersLegacyQueryParams;
}
export declare class TeamsListMembersLegacyResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    basicError?: shared.BasicError;
    simpleUsers?: shared.SimpleUser[];
}
