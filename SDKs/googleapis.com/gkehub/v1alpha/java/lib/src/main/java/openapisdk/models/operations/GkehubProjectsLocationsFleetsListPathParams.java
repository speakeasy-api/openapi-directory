package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GkehubProjectsLocationsFleetsListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public GkehubProjectsLocationsFleetsListPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}