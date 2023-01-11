package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FormsFormsWatchesCreatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=formId")
    public String formId;
    public FormsFormsWatchesCreatePathParams withFormId(String formId) {
        this.formId = formId;
        return this;
    }
}