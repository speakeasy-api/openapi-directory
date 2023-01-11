package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateSubscribedEventCreateSubscribedEventRequest {
    @SpeakeasyMetadata("form:name=SchemaVersion")
    public Long schemaVersion;
    public CreateSubscribedEventCreateSubscribedEventRequest withSchemaVersion(Long schemaVersion) {
        this.schemaVersion = schemaVersion;
        return this;
    }
    @SpeakeasyMetadata("form:name=Type")
    public String type;
    public CreateSubscribedEventCreateSubscribedEventRequest withType(String type) {
        this.type = type;
        return this;
    }
}