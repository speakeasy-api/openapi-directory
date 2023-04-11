import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetWorkspaceSlugMembersMemberSlugActivitiesSecurity extends SpeakeasyBase {
    bearer: string;
}
export declare enum GetWorkspaceSlugMembersMemberSlugActivitiesDirectionEnum {
    Asc = "ASC",
    Desc = "DESC"
}
export declare enum GetWorkspaceSlugMembersMemberSlugActivitiesItemsEnum {
    Ten = "10",
    Fifty = "50",
    OneHundred = "100"
}
export declare enum GetWorkspaceSlugMembersMemberSlugActivitiesSortEnum {
    OccurredAt = "occurred_at",
    Member = "member"
}
export declare class GetWorkspaceSlugMembersMemberSlugActivitiesRequest extends SpeakeasyBase {
    activityType?: string;
    direction?: GetWorkspaceSlugMembersMemberSlugActivitiesDirectionEnum;
    items?: GetWorkspaceSlugMembersMemberSlugActivitiesItemsEnum;
    memberSlug: string;
    page?: string;
    sort?: GetWorkspaceSlugMembersMemberSlugActivitiesSortEnum;
    /**
     * Deprecated in favor of the activity_type parameter.
     */
    type?: string;
    workspaceSlug: string;
}
export declare class GetWorkspaceSlugMembersMemberSlugActivitiesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
