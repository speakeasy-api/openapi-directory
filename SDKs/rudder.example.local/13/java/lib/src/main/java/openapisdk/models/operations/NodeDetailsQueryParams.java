package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class NodeDetailsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=include")
    public String include;
    public NodeDetailsQueryParams withInclude(String include) {
        this.include = include;
        return this;
    }
}