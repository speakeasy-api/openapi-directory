package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TranslateProjectsLocationsOperationsCancelPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public TranslateProjectsLocationsOperationsCancelPathParams withName(String name) {
        this.name = name;
        return this;
    }
}