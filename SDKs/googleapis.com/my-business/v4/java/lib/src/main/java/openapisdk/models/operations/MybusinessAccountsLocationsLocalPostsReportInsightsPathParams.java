package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MybusinessAccountsLocationsLocalPostsReportInsightsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public MybusinessAccountsLocationsLocalPostsReportInsightsPathParams withName(String name) {
        this.name = name;
        return this;
    }
}