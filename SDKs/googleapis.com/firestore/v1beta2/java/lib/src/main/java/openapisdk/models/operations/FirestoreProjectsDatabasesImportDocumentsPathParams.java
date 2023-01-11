package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FirestoreProjectsDatabasesImportDocumentsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public FirestoreProjectsDatabasesImportDocumentsPathParams withName(String name) {
        this.name = name;
        return this;
    }
}