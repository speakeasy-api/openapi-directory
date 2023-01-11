package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetMatchZebraPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=match_key")
    public String matchKey;
    public GetMatchZebraPathParams withMatchKey(String matchKey) {
        this.matchKey = matchKey;
        return this;
    }
}