package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EssentialcontactsProjectsContactsComputePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public EssentialcontactsProjectsContactsComputePathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}