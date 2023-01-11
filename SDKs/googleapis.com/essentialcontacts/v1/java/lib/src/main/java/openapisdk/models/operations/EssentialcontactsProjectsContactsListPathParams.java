package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EssentialcontactsProjectsContactsListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public EssentialcontactsProjectsContactsListPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}