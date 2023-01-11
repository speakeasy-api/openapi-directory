package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AndroidpublisherEditsListingsDeleteallPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=editId")
    public String editId;
    public AndroidpublisherEditsListingsDeleteallPathParams withEditId(String editId) {
        this.editId = editId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=packageName")
    public String packageName;
    public AndroidpublisherEditsListingsDeleteallPathParams withPackageName(String packageName) {
        this.packageName = packageName;
        return this;
    }
}