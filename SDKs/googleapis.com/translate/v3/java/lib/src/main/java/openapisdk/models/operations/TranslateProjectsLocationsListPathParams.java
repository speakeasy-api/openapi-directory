package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TranslateProjectsLocationsListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public TranslateProjectsLocationsListPathParams withName(String name) {
        this.name = name;
        return this;
    }
}