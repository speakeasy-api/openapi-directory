package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TranslateProjectsLocationsGlossariesGlossaryEntriesCreatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public TranslateProjectsLocationsGlossariesGlossaryEntriesCreatePathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}