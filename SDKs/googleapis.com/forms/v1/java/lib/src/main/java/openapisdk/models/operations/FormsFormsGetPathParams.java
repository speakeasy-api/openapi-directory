package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FormsFormsGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=formId")
    public String formId;
    public FormsFormsGetPathParams withFormId(String formId) {
        this.formId = formId;
        return this;
    }
}