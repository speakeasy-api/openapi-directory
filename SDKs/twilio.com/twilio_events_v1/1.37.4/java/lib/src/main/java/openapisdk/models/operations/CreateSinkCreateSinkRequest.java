package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateSinkCreateSinkRequest {
    @SpeakeasyMetadata("form:name=Description")
    public String description;
    public CreateSinkCreateSinkRequest withDescription(String description) {
        this.description = description;
        return this;
    }
    @SpeakeasyMetadata("form:name=SinkConfiguration")
    public Object sinkConfiguration;
    public CreateSinkCreateSinkRequest withSinkConfiguration(Object sinkConfiguration) {
        this.sinkConfiguration = sinkConfiguration;
        return this;
    }
    @SpeakeasyMetadata("form:name=SinkType")
    public openapisdk.models.shared.SinkEnumSinkTypeEnum sinkType;
    public CreateSinkCreateSinkRequest withSinkType(openapisdk.models.shared.SinkEnumSinkTypeEnum sinkType) {
        this.sinkType = sinkType;
        return this;
    }
}