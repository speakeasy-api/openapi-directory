package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MetastoreProjectsLocationsFederationsListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public MetastoreProjectsLocationsFederationsListPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}