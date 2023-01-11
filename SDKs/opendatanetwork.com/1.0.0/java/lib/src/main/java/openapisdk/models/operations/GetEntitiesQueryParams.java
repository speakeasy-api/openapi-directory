package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetEntitiesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=app_token")
    public String appToken;
    public GetEntitiesQueryParams withAppToken(String appToken) {
        this.appToken = appToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=entity_id")
    public String entityId;
    public GetEntitiesQueryParams withEntityId(String entityId) {
        this.entityId = entityId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=entity_name")
    public String entityName;
    public GetEntitiesQueryParams withEntityName(String entityName) {
        this.entityName = entityName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=entity_type")
    public String entityType;
    public GetEntitiesQueryParams withEntityType(String entityType) {
        this.entityType = entityType;
        return this;
    }
}