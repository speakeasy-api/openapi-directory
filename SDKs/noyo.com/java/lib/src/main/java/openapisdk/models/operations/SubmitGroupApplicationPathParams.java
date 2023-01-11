package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SubmitGroupApplicationPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=application_id")
    public String applicationId;
    public SubmitGroupApplicationPathParams withApplicationId(String applicationId) {
        this.applicationId = applicationId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=version")
    public String version;
    public SubmitGroupApplicationPathParams withVersion(String version) {
        this.version = version;
        return this;
    }
}