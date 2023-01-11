package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TranslateProjectsLocationsTranslateDocumentPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public TranslateProjectsLocationsTranslateDocumentPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}