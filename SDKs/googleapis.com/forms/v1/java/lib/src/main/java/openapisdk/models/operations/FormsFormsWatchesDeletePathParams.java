package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FormsFormsWatchesDeletePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=formId")
    public String formId;
    public FormsFormsWatchesDeletePathParams withFormId(String formId) {
        this.formId = formId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=watchId")
    public String watchId;
    public FormsFormsWatchesDeletePathParams withWatchId(String watchId) {
        this.watchId = watchId;
        return this;
    }
}