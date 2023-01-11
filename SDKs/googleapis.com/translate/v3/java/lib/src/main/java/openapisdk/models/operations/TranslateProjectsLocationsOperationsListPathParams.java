package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TranslateProjectsLocationsOperationsListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public TranslateProjectsLocationsOperationsListPathParams withName(String name) {
        this.name = name;
        return this;
    }
}