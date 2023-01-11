package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MybusinessGoogleLocationsReportPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public MybusinessGoogleLocationsReportPathParams withName(String name) {
        this.name = name;
        return this;
    }
}