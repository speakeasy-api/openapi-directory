package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GkehubProjectsLocationsMembershipsListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public GkehubProjectsLocationsMembershipsListPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}