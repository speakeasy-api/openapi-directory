package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FormsFormsWatchesListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=formId")
    public String formId;
    public FormsFormsWatchesListPathParams withFormId(String formId) {
        this.formId = formId;
        return this;
    }
}