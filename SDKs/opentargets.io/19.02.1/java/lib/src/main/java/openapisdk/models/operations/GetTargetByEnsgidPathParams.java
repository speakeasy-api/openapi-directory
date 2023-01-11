package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetTargetByEnsgidPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=target")
    public String target;
    public GetTargetByEnsgidPathParams withTarget(String target) {
        this.target = target;
        return this;
    }
}