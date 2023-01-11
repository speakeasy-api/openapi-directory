package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ReportsActivitiesWatchPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=applicationName")
    public ReportsActivitiesWatchApplicationNameEnum applicationName;
    public ReportsActivitiesWatchPathParams withApplicationName(ReportsActivitiesWatchApplicationNameEnum applicationName) {
        this.applicationName = applicationName;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=userKey")
    public String userKey;
    public ReportsActivitiesWatchPathParams withUserKey(String userKey) {
        this.userKey = userKey;
        return this;
    }
}