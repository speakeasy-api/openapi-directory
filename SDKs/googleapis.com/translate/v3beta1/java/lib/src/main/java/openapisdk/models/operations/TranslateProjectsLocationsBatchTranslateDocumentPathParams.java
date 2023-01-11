package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TranslateProjectsLocationsBatchTranslateDocumentPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public TranslateProjectsLocationsBatchTranslateDocumentPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}