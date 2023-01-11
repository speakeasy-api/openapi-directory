package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateEngagementCreateEngagementRequest {
    @SpeakeasyMetadata("form:name=From")
    public String from;
    public CreateEngagementCreateEngagementRequest withFrom(String from) {
        this.from = from;
        return this;
    }
    @SpeakeasyMetadata("form:name=Parameters")
    public Object parameters;
    public CreateEngagementCreateEngagementRequest withParameters(Object parameters) {
        this.parameters = parameters;
        return this;
    }
    @SpeakeasyMetadata("form:name=To")
    public String to;
    public CreateEngagementCreateEngagementRequest withTo(String to) {
        this.to = to;
        return this;
    }
}