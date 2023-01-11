package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateSubscribedEventUpdateSubscribedEventRequest {
    @SpeakeasyMetadata("form:name=SchemaVersion")
    public Long schemaVersion;
    public UpdateSubscribedEventUpdateSubscribedEventRequest withSchemaVersion(Long schemaVersion) {
        this.schemaVersion = schemaVersion;
        return this;
    }
}