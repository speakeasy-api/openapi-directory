package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MybusinessAccountsLocationsReportInsightsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public MybusinessAccountsLocationsReportInsightsPathParams withName(String name) {
        this.name = name;
        return this;
    }
}