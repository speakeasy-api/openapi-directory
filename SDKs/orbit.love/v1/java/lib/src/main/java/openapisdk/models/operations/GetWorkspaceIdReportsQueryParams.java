package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetWorkspaceIdReportsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=activity_type")
    public String activityType;
    public GetWorkspaceIdReportsQueryParams withActivityType(String activityType) {
        this.activityType = activityType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=end_date")
    public String endDate;
    public GetWorkspaceIdReportsQueryParams withEndDate(String endDate) {
        this.endDate = endDate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=group")
    public String group;
    public GetWorkspaceIdReportsQueryParams withGroup(String group) {
        this.group = group;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=start_date")
    public String startDate;
    public GetWorkspaceIdReportsQueryParams withStartDate(String startDate) {
        this.startDate = startDate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=type")
    public String type;
    public GetWorkspaceIdReportsQueryParams withType(String type) {
        this.type = type;
        return this;
    }
}