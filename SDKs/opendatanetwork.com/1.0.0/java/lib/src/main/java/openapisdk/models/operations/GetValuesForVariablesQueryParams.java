package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetValuesForVariablesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=app_token")
    public String appToken;
    public GetValuesForVariablesQueryParams withAppToken(String appToken) {
        this.appToken = appToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=describe")
    public Boolean describe;
    public GetValuesForVariablesQueryParams withDescribe(Boolean describe) {
        this.describe = describe;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=entity_id")
    public String entityId;
    public GetValuesForVariablesQueryParams withEntityId(String entityId) {
        this.entityId = entityId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=forecast")
    public Double forecast;
    public GetValuesForVariablesQueryParams withForecast(Double forecast) {
        this.forecast = forecast;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=format")
    public GetValuesForVariablesFormatEnum format;
    public GetValuesForVariablesQueryParams withFormat(GetValuesForVariablesFormatEnum format) {
        this.format = format;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=variable")
    public String variable;
    public GetValuesForVariablesQueryParams withVariable(String variable) {
        this.variable = variable;
        return this;
    }
}