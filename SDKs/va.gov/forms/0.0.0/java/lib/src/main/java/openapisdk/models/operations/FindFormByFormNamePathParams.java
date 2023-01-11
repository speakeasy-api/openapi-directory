package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FindFormByFormNamePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=form_name")
    public String formName;
    public FindFormByFormNamePathParams withFormName(String formName) {
        this.formName = formName;
        return this;
    }
}