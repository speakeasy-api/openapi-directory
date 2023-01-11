package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetWorkspaceIdActivitiesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=activity_tags")
    public String activityTags;
    public GetWorkspaceIdActivitiesQueryParams withActivityTags(String activityTags) {
        this.activityTags = activityTags;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=activity_type")
    public GetWorkspaceIdActivitiesActivityTypeEnum activityType;
    public GetWorkspaceIdActivitiesQueryParams withActivityType(GetWorkspaceIdActivitiesActivityTypeEnum activityType) {
        this.activityType = activityType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=affiliation")
    public GetWorkspaceIdActivitiesAffiliationEnum affiliation;
    public GetWorkspaceIdActivitiesQueryParams withAffiliation(GetWorkspaceIdActivitiesAffiliationEnum affiliation) {
        this.affiliation = affiliation;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=company")
    public String company;
    public GetWorkspaceIdActivitiesQueryParams withCompany(String company) {
        this.company = company;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=direction")
    public GetWorkspaceIdActivitiesDirectionEnum direction;
    public GetWorkspaceIdActivitiesQueryParams withDirection(GetWorkspaceIdActivitiesDirectionEnum direction) {
        this.direction = direction;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=end_date")
    public String endDate;
    public GetWorkspaceIdActivitiesQueryParams withEndDate(String endDate) {
        this.endDate = endDate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=identity")
    public GetWorkspaceIdActivitiesIdentityEnum identity;
    public GetWorkspaceIdActivitiesQueryParams withIdentity(GetWorkspaceIdActivitiesIdentityEnum identity) {
        this.identity = identity;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=items")
    public GetWorkspaceIdActivitiesItemsEnum items;
    public GetWorkspaceIdActivitiesQueryParams withItems(GetWorkspaceIdActivitiesItemsEnum items) {
        this.items = items;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=location")
    public String location;
    public GetWorkspaceIdActivitiesQueryParams withLocation(String location) {
        this.location = location;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=member_tags")
    public String memberTags;
    public GetWorkspaceIdActivitiesQueryParams withMemberTags(String memberTags) {
        this.memberTags = memberTags;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=orbit_level")
    public GetWorkspaceIdActivitiesOrbitLevelEnum orbitLevel;
    public GetWorkspaceIdActivitiesQueryParams withOrbitLevel(GetWorkspaceIdActivitiesOrbitLevelEnum orbitLevel) {
        this.orbitLevel = orbitLevel;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public String page;
    public GetWorkspaceIdActivitiesQueryParams withPage(String page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort")
    public GetWorkspaceIdActivitiesSortEnum sort;
    public GetWorkspaceIdActivitiesQueryParams withSort(GetWorkspaceIdActivitiesSortEnum sort) {
        this.sort = sort;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=start_date")
    public String startDate;
    public GetWorkspaceIdActivitiesQueryParams withStartDate(String startDate) {
        this.startDate = startDate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=type")
    public String type;
    public GetWorkspaceIdActivitiesQueryParams withType(String type) {
        this.type = type;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=weight")
    public String weight;
    public GetWorkspaceIdActivitiesQueryParams withWeight(String weight) {
        this.weight = weight;
        return this;
    }
}