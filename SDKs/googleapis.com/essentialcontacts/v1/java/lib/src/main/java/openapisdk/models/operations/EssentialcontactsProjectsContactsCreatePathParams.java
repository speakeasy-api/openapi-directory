package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EssentialcontactsProjectsContactsCreatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public EssentialcontactsProjectsContactsCreatePathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}