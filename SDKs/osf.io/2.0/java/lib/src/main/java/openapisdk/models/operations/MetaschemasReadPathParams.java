package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MetaschemasReadPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=metaschema_id")
    public String metaschemaId;
    public MetaschemasReadPathParams withMetaschemaId(String metaschemaId) {
        this.metaschemaId = metaschemaId;
        return this;
    }
}