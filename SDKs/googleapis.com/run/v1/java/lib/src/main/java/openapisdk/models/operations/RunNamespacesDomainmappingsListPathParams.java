package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RunNamespacesDomainmappingsListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public RunNamespacesDomainmappingsListPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}