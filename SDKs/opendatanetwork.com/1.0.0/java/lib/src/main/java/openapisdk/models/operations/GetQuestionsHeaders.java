package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetQuestionsHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-App-Token")
    public String xAppToken;
    public GetQuestionsHeaders withXAppToken(String xAppToken) {
        this.xAppToken = xAppToken;
        return this;
    }
}