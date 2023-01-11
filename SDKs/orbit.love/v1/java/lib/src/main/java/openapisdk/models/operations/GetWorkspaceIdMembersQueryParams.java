package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetWorkspaceIdMembersQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=activities_count_max")
    public String activitiesCountMax;
    public GetWorkspaceIdMembersQueryParams withActivitiesCountMax(String activitiesCountMax) {
        this.activitiesCountMax = activitiesCountMax;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=activities_count_min")
    public String activitiesCountMin;
    public GetWorkspaceIdMembersQueryParams withActivitiesCountMin(String activitiesCountMin) {
        this.activitiesCountMin = activitiesCountMin;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=activity_tags")
    public String activityTags;
    public GetWorkspaceIdMembersQueryParams withActivityTags(String activityTags) {
        this.activityTags = activityTags;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=activity_type")
    public GetWorkspaceIdMembersActivityTypeEnum activityType;
    public GetWorkspaceIdMembersQueryParams withActivityType(GetWorkspaceIdMembersActivityTypeEnum activityType) {
        this.activityType = activityType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=affiliation")
    public GetWorkspaceIdMembersAffiliationEnum affiliation;
    public GetWorkspaceIdMembersQueryParams withAffiliation(GetWorkspaceIdMembersAffiliationEnum affiliation) {
        this.affiliation = affiliation;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=company")
    public String company;
    public GetWorkspaceIdMembersQueryParams withCompany(String company) {
        this.company = company;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=direction")
    public GetWorkspaceIdMembersDirectionEnum direction;
    public GetWorkspaceIdMembersQueryParams withDirection(GetWorkspaceIdMembersDirectionEnum direction) {
        this.direction = direction;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=end_date")
    public String endDate;
    public GetWorkspaceIdMembersQueryParams withEndDate(String endDate) {
        this.endDate = endDate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=identity")
    public GetWorkspaceIdMembersIdentityEnum identity;
    public GetWorkspaceIdMembersQueryParams withIdentity(GetWorkspaceIdMembersIdentityEnum identity) {
        this.identity = identity;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=items")
    public GetWorkspaceIdMembersItemsEnum items;
    public GetWorkspaceIdMembersQueryParams withItems(GetWorkspaceIdMembersItemsEnum items) {
        this.items = items;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=location")
    public String location;
    public GetWorkspaceIdMembersQueryParams withLocation(String location) {
        this.location = location;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=member_tags")
    public String memberTags;
    public GetWorkspaceIdMembersQueryParams withMemberTags(String memberTags) {
        this.memberTags = memberTags;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=orbit_level")
    public GetWorkspaceIdMembersOrbitLevelEnum orbitLevel;
    public GetWorkspaceIdMembersQueryParams withOrbitLevel(GetWorkspaceIdMembersOrbitLevelEnum orbitLevel) {
        this.orbitLevel = orbitLevel;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public String page;
    public GetWorkspaceIdMembersQueryParams withPage(String page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=query")
    public String query;
    public GetWorkspaceIdMembersQueryParams withQuery(String query) {
        this.query = query;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort")
    public GetWorkspaceIdMembersSortEnum sort;
    public GetWorkspaceIdMembersQueryParams withSort(GetWorkspaceIdMembersSortEnum sort) {
        this.sort = sort;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=start_date")
    public String startDate;
    public GetWorkspaceIdMembersQueryParams withStartDate(String startDate) {
        this.startDate = startDate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=type")
    public String type;
    public GetWorkspaceIdMembersQueryParams withType(String type) {
        this.type = type;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=weight")
    public String weight;
    public GetWorkspaceIdMembersQueryParams withWeight(String weight) {
        this.weight = weight;
        return this;
    }
}