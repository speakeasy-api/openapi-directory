package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BaremetalsolutionProjectsLocationsSshKeysListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public BaremetalsolutionProjectsLocationsSshKeysListPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}