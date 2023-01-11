package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FindTheRelativesOfAnEntityQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=app_token")
    public String appToken;
    public FindTheRelativesOfAnEntityQueryParams withAppToken(String appToken) {
        this.appToken = appToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=entity_id")
    public String entityId;
    public FindTheRelativesOfAnEntityQueryParams withEntityId(String entityId) {
        this.entityId = entityId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=limit")
    public Double limit;
    public FindTheRelativesOfAnEntityQueryParams withLimit(Double limit) {
        this.limit = limit;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=variable_id")
    public String variableId;
    public FindTheRelativesOfAnEntityQueryParams withVariableId(String variableId) {
        this.variableId = variableId;
        return this;
    }
}