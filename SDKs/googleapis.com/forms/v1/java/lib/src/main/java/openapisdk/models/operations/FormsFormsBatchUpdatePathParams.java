package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FormsFormsBatchUpdatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=formId")
    public String formId;
    public FormsFormsBatchUpdatePathParams withFormId(String formId) {
        this.formId = formId;
        return this;
    }
}