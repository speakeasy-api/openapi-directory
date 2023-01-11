package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BaremetalsolutionProjectsLocationsSshKeysCreatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public BaremetalsolutionProjectsLocationsSshKeysCreatePathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}