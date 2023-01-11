package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateExecutionCreateExecutionRequest {
    @SpeakeasyMetadata("form:name=From")
    public String from;
    public CreateExecutionCreateExecutionRequest withFrom(String from) {
        this.from = from;
        return this;
    }
    @SpeakeasyMetadata("form:name=Parameters")
    public Object parameters;
    public CreateExecutionCreateExecutionRequest withParameters(Object parameters) {
        this.parameters = parameters;
        return this;
    }
    @SpeakeasyMetadata("form:name=To")
    public String to;
    public CreateExecutionCreateExecutionRequest withTo(String to) {
        this.to = to;
        return this;
    }
}