package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FindAllAvailableDataForSomeEntitiesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=app_token")
    public String appToken;
    public FindAllAvailableDataForSomeEntitiesQueryParams withAppToken(String appToken) {
        this.appToken = appToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=entity_id")
    public String entityId;
    public FindAllAvailableDataForSomeEntitiesQueryParams withEntityId(String entityId) {
        this.entityId = entityId;
        return this;
    }
}