package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetMatchSimplePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=match_key")
    public String matchKey;
    public GetMatchSimplePathParams withMatchKey(String matchKey) {
        this.matchKey = matchKey;
        return this;
    }
}