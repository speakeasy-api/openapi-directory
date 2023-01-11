package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FirestoreProjectsDatabasesExportDocumentsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public FirestoreProjectsDatabasesExportDocumentsPathParams withName(String name) {
        this.name = name;
        return this;
    }
}