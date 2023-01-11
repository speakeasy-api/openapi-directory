package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EssentialcontactsProjectsContactsDeletePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public EssentialcontactsProjectsContactsDeletePathParams withName(String name) {
        this.name = name;
        return this;
    }
}