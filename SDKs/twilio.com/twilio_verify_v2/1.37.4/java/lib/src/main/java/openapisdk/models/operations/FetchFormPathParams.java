package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FetchFormPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=FormType")
    public openapisdk.models.shared.FormEnumFormTypesEnum formType;
    public FetchFormPathParams withFormType(openapisdk.models.shared.FormEnumFormTypesEnum formType) {
        this.formType = formType;
        return this;
    }
}