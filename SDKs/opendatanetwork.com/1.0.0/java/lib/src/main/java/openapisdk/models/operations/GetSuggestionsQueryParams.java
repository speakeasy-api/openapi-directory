package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetSuggestionsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=app_token")
    public String appToken;
    public GetSuggestionsQueryParams withAppToken(String appToken) {
        this.appToken = appToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=limit")
    public Double limit;
    public GetSuggestionsQueryParams withLimit(Double limit) {
        this.limit = limit;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=query")
    public String query;
    public GetSuggestionsQueryParams withQuery(String query) {
        this.query = query;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=variable_id")
    public String variableId;
    public GetSuggestionsQueryParams withVariableId(String variableId) {
        this.variableId = variableId;
        return this;
    }
}