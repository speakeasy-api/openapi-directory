package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GkehubProjectsLocationsMembershipsPatchPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public GkehubProjectsLocationsMembershipsPatchPathParams withName(String name) {
        this.name = name;
        return this;
    }
}