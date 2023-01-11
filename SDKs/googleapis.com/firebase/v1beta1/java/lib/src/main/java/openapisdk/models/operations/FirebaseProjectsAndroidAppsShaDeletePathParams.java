package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FirebaseProjectsAndroidAppsShaDeletePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public FirebaseProjectsAndroidAppsShaDeletePathParams withName(String name) {
        this.name = name;
        return this;
    }
}