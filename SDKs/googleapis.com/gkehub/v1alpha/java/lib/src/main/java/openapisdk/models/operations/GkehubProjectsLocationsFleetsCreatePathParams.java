package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GkehubProjectsLocationsFleetsCreatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public GkehubProjectsLocationsFleetsCreatePathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}