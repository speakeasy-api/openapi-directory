package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetRelationByEnsgidPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=target")
    public String target;
    public GetRelationByEnsgidPathParams withTarget(String target) {
        this.target = target;
        return this;
    }
}