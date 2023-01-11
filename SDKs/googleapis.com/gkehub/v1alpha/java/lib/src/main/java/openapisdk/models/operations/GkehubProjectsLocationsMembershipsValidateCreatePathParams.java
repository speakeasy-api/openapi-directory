package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GkehubProjectsLocationsMembershipsValidateCreatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public GkehubProjectsLocationsMembershipsValidateCreatePathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}