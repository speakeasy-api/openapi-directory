package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GistsListCommitsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=gist_id")
    public String gistId;
    public GistsListCommitsPathParams withGistId(String gistId) {
        this.gistId = gistId;
        return this;
    }
}