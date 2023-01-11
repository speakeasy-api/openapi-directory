package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ReportsActivitiesListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=applicationName")
    public ReportsActivitiesListApplicationNameEnum applicationName;
    public ReportsActivitiesListPathParams withApplicationName(ReportsActivitiesListApplicationNameEnum applicationName) {
        this.applicationName = applicationName;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=userKey")
    public String userKey;
    public ReportsActivitiesListPathParams withUserKey(String userKey) {
        this.userKey = userKey;
        return this;
    }
}