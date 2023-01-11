package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateAMapQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=app_token")
    public String appToken;
    public CreateAMapQueryParams withAppToken(String appToken) {
        this.appToken = appToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=constraint")
    public String constraint;
    public CreateAMapQueryParams withConstraint(String constraint) {
        this.constraint = constraint;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=entity_id")
    public String entityId;
    public CreateAMapQueryParams withEntityId(String entityId) {
        this.entityId = entityId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=variable")
    public String variable;
    public CreateAMapQueryParams withVariable(String variable) {
        this.variable = variable;
        return this;
    }
}