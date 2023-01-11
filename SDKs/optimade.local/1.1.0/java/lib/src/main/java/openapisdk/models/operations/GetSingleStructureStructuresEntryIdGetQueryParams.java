package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetSingleStructureStructuresEntryIdGetQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=api_hint")
    public String apiHint;
    public GetSingleStructureStructuresEntryIdGetQueryParams withApiHint(String apiHint) {
        this.apiHint = apiHint;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=email_address")
    public String emailAddress;
    public GetSingleStructureStructuresEntryIdGetQueryParams withEmailAddress(String emailAddress) {
        this.emailAddress = emailAddress;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=include")
    public String include;
    public GetSingleStructureStructuresEntryIdGetQueryParams withInclude(String include) {
        this.include = include;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=response_fields")
    public String responseFields;
    public GetSingleStructureStructuresEntryIdGetQueryParams withResponseFields(String responseFields) {
        this.responseFields = responseFields;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=response_format")
    public String responseFormat;
    public GetSingleStructureStructuresEntryIdGetQueryParams withResponseFormat(String responseFormat) {
        this.responseFormat = responseFormat;
        return this;
    }
}