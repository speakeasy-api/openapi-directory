package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FetchConfigurationQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=UiVersion")
    public String uiVersion;
    public FetchConfigurationQueryParams withUiVersion(String uiVersion) {
        this.uiVersion = uiVersion;
        return this;
    }
}