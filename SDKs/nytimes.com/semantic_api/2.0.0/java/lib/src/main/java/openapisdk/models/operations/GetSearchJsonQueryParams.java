package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetSearchJsonQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fields")
    public GetSearchJsonFieldsEnum fields;
    public GetSearchJsonQueryParams withFields(GetSearchJsonFieldsEnum fields) {
        this.fields = fields;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=offset")
    public Long offset;
    public GetSearchJsonQueryParams withOffset(Long offset) {
        this.offset = offset;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=query")
    public String query;
    public GetSearchJsonQueryParams withQuery(String query) {
        this.query = query;
        return this;
    }
}