package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RunProjectsLocationsDomainmappingsCreatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public RunProjectsLocationsDomainmappingsCreatePathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}