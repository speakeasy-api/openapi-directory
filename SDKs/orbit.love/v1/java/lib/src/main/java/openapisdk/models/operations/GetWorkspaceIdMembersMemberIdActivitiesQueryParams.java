package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetWorkspaceIdMembersMemberIdActivitiesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=activity_type")
    public String activityType;
    public GetWorkspaceIdMembersMemberIdActivitiesQueryParams withActivityType(String activityType) {
        this.activityType = activityType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=direction")
    public GetWorkspaceIdMembersMemberIdActivitiesDirectionEnum direction;
    public GetWorkspaceIdMembersMemberIdActivitiesQueryParams withDirection(GetWorkspaceIdMembersMemberIdActivitiesDirectionEnum direction) {
        this.direction = direction;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=items")
    public GetWorkspaceIdMembersMemberIdActivitiesItemsEnum items;
    public GetWorkspaceIdMembersMemberIdActivitiesQueryParams withItems(GetWorkspaceIdMembersMemberIdActivitiesItemsEnum items) {
        this.items = items;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public String page;
    public GetWorkspaceIdMembersMemberIdActivitiesQueryParams withPage(String page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort")
    public GetWorkspaceIdMembersMemberIdActivitiesSortEnum sort;
    public GetWorkspaceIdMembersMemberIdActivitiesQueryParams withSort(GetWorkspaceIdMembersMemberIdActivitiesSortEnum sort) {
        this.sort = sort;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=type")
    public String type;
    public GetWorkspaceIdMembersMemberIdActivitiesQueryParams withType(String type) {
        this.type = type;
        return this;
    }
}