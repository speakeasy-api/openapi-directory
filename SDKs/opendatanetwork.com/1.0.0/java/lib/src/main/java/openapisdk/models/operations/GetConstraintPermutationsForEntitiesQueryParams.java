package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetConstraintPermutationsForEntitiesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=app_token")
    public String appToken;
    public GetConstraintPermutationsForEntitiesQueryParams withAppToken(String appToken) {
        this.appToken = appToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=constraint")
    public String constraint;
    public GetConstraintPermutationsForEntitiesQueryParams withConstraint(String constraint) {
        this.constraint = constraint;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=entity_id")
    public String entityId;
    public GetConstraintPermutationsForEntitiesQueryParams withEntityId(String entityId) {
        this.entityId = entityId;
        return this;
    }
}