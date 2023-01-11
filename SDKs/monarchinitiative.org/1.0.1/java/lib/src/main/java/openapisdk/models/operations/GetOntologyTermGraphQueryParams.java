package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetOntologyTermGraphQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=graph_type")
    public GetOntologyTermGraphGraphTypeEnum graphType;
    public GetOntologyTermGraphQueryParams withGraphType(GetOntologyTermGraphGraphTypeEnum graphType) {
        this.graphType = graphType;
        return this;
    }
}