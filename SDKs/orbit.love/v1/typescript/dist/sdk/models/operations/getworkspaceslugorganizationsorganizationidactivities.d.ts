import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetWorkspaceSlugOrganizationsOrganizationIdActivitiesSecurity extends SpeakeasyBase {
    bearer: string;
}
export declare enum GetWorkspaceSlugOrganizationsOrganizationIdActivitiesActivityTypeEnum {
    Content = "content",
    Custom = "custom",
    Discord = "discord",
    Discourse = "discourse",
    Github = "github",
    Slack = "slack",
    Twitter = "twitter"
}
export declare enum GetWorkspaceSlugOrganizationsOrganizationIdActivitiesDirectionEnum {
    Asc = "ASC",
    Desc = "DESC"
}
export declare enum GetWorkspaceSlugOrganizationsOrganizationIdActivitiesItemsEnum {
    Ten = "10",
    Fifty = "50",
    OneHundred = "100"
}
export declare enum GetWorkspaceSlugOrganizationsOrganizationIdActivitiesSortEnum {
    OccurredAt = "occurred_at",
    Member = "member"
}
export declare class GetWorkspaceSlugOrganizationsOrganizationIdActivitiesRequest extends SpeakeasyBase {
    activityType?: GetWorkspaceSlugOrganizationsOrganizationIdActivitiesActivityTypeEnum;
    direction?: GetWorkspaceSlugOrganizationsOrganizationIdActivitiesDirectionEnum;
    items?: GetWorkspaceSlugOrganizationsOrganizationIdActivitiesItemsEnum;
    organizationId: string;
    page?: string;
    sort?: GetWorkspaceSlugOrganizationsOrganizationIdActivitiesSortEnum;
    workspaceSlug: string;
}
export declare class GetWorkspaceSlugOrganizationsOrganizationIdActivitiesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
