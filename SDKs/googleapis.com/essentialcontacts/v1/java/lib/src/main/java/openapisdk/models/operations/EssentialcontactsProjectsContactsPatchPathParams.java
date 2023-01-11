package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EssentialcontactsProjectsContactsPatchPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public EssentialcontactsProjectsContactsPatchPathParams withName(String name) {
        this.name = name;
        return this;
    }
}