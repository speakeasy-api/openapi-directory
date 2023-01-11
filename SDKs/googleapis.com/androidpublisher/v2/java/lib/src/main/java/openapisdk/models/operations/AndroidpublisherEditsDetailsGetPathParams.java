package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AndroidpublisherEditsDetailsGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=editId")
    public String editId;
    public AndroidpublisherEditsDetailsGetPathParams withEditId(String editId) {
        this.editId = editId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=packageName")
    public String packageName;
    public AndroidpublisherEditsDetailsGetPathParams withPackageName(String packageName) {
        this.packageName = packageName;
        return this;
    }
}