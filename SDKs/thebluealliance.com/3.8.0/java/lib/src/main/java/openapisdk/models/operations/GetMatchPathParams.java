package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetMatchPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=match_key")
    public String matchKey;
    public GetMatchPathParams withMatchKey(String matchKey) {
        this.matchKey = matchKey;
        return this;
    }
}