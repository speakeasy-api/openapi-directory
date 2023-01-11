package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetMatchTimeseriesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=match_key")
    public String matchKey;
    public GetMatchTimeseriesPathParams withMatchKey(String matchKey) {
        this.matchKey = matchKey;
        return this;
    }
}