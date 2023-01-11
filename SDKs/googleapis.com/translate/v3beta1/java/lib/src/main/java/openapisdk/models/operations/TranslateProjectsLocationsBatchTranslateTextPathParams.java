package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TranslateProjectsLocationsBatchTranslateTextPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public TranslateProjectsLocationsBatchTranslateTextPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}