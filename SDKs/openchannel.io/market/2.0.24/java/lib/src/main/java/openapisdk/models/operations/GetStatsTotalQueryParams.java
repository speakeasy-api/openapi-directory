package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetStatsTotalQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=end")
    public Long end;
    public GetStatsTotalQueryParams withEnd(Long end) {
        this.end = end;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fields")
    public String fields;
    public GetStatsTotalQueryParams withFields(String fields) {
        this.fields = fields;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=query")
    public String query;
    public GetStatsTotalQueryParams withQuery(String query) {
        this.query = query;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=start")
    public Long start;
    public GetStatsTotalQueryParams withStart(Long start) {
        this.start = start;
        return this;
    }
}