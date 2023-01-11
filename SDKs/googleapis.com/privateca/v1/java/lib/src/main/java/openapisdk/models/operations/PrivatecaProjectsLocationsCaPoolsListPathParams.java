package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PrivatecaProjectsLocationsCaPoolsListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public PrivatecaProjectsLocationsCaPoolsListPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}