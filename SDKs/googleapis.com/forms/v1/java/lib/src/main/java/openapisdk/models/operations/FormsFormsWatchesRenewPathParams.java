package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FormsFormsWatchesRenewPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=formId")
    public String formId;
    public FormsFormsWatchesRenewPathParams withFormId(String formId) {
        this.formId = formId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=watchId")
    public String watchId;
    public FormsFormsWatchesRenewPathParams withWatchId(String watchId) {
        this.watchId = watchId;
        return this;
    }
}