package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RunNamespacesDomainmappingsCreatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public RunNamespacesDomainmappingsCreatePathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}