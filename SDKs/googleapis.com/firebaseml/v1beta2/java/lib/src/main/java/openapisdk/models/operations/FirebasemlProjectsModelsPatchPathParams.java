package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FirebasemlProjectsModelsPatchPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public FirebasemlProjectsModelsPatchPathParams withName(String name) {
        this.name = name;
        return this;
    }
}