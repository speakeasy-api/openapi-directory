package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateEntityCreateEntityRequest {
    @SpeakeasyMetadata("form:name=Identity")
    public String identity;
    public CreateEntityCreateEntityRequest withIdentity(String identity) {
        this.identity = identity;
        return this;
    }
}