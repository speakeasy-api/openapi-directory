package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TranslateProjectsLocationsGlossariesGlossaryEntriesListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public TranslateProjectsLocationsGlossariesGlossaryEntriesListPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}