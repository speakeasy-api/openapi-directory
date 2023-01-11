package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TranslateProjectsLocationsGlossariesGlossaryEntriesPatchPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public TranslateProjectsLocationsGlossariesGlossaryEntriesPatchPathParams withName(String name) {
        this.name = name;
        return this;
    }
}