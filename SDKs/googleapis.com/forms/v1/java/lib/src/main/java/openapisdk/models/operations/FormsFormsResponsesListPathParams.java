package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FormsFormsResponsesListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=formId")
    public String formId;
    public FormsFormsResponsesListPathParams withFormId(String formId) {
        this.formId = formId;
        return this;
    }
}