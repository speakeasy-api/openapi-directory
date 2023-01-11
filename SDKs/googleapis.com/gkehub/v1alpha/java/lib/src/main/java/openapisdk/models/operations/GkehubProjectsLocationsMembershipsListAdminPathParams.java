package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GkehubProjectsLocationsMembershipsListAdminPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public GkehubProjectsLocationsMembershipsListAdminPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}