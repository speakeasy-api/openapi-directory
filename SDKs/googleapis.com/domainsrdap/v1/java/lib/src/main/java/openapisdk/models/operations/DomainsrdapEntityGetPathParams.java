package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DomainsrdapEntityGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=entityId")
    public String entityId;
    public DomainsrdapEntityGetPathParams withEntityId(String entityId) {
        this.entityId = entityId;
        return this;
    }
}