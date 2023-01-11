package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FormsFormsResponsesGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=formId")
    public String formId;
    public FormsFormsResponsesGetPathParams withFormId(String formId) {
        this.formId = formId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=responseId")
    public String responseId;
    public FormsFormsResponsesGetPathParams withResponseId(String responseId) {
        this.responseId = responseId;
        return this;
    }
}