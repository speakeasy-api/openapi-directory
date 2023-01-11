package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetShowsIdQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=expand")
    public String[] expand;
    public GetShowsIdQueryParams withExpand(String[] expand) {
        this.expand = expand;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fields")
    public String[] fields;
    public GetShowsIdQueryParams withFields(String[] fields) {
        this.fields = fields;
        return this;
    }
}