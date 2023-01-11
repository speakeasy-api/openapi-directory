package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TranslateProjectsLocationsOperationsWaitPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public TranslateProjectsLocationsOperationsWaitPathParams withName(String name) {
        this.name = name;
        return this;
    }
}