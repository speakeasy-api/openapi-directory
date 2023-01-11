package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AndroidpublisherEditsCommitPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=editId")
    public String editId;
    public AndroidpublisherEditsCommitPathParams withEditId(String editId) {
        this.editId = editId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=packageName")
    public String packageName;
    public AndroidpublisherEditsCommitPathParams withPackageName(String packageName) {
        this.packageName = packageName;
        return this;
    }
}