package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FirebasemlProjectsModelsDownloadPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public FirebasemlProjectsModelsDownloadPathParams withName(String name) {
        this.name = name;
        return this;
    }
}