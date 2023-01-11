package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetSingleReferenceReferencesEntryIdGetQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=api_hint")
    public String apiHint;
    public GetSingleReferenceReferencesEntryIdGetQueryParams withApiHint(String apiHint) {
        this.apiHint = apiHint;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=email_address")
    public String emailAddress;
    public GetSingleReferenceReferencesEntryIdGetQueryParams withEmailAddress(String emailAddress) {
        this.emailAddress = emailAddress;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=include")
    public String include;
    public GetSingleReferenceReferencesEntryIdGetQueryParams withInclude(String include) {
        this.include = include;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=response_fields")
    public String responseFields;
    public GetSingleReferenceReferencesEntryIdGetQueryParams withResponseFields(String responseFields) {
        this.responseFields = responseFields;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=response_format")
    public String responseFormat;
    public GetSingleReferenceReferencesEntryIdGetQueryParams withResponseFormat(String responseFormat) {
        this.responseFormat = responseFormat;
        return this;
    }
}