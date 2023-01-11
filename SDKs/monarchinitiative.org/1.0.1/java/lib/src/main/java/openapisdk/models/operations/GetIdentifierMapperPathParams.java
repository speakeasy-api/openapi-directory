package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetIdentifierMapperPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=source")
    public String source;
    public GetIdentifierMapperPathParams withSource(String source) {
        this.source = source;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=target")
    public String target;
    public GetIdentifierMapperPathParams withTarget(String target) {
        this.target = target;
        return this;
    }
}