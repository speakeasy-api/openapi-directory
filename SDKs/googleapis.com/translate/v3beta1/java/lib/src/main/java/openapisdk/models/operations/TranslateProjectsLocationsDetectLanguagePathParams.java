package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TranslateProjectsLocationsDetectLanguagePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public TranslateProjectsLocationsDetectLanguagePathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}