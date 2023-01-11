package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TranslateProjectsLocationsGetSupportedLanguagesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public TranslateProjectsLocationsGetSupportedLanguagesPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}