package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MybusinessAccountsLocationsQuestionsAnswersDeletePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public MybusinessAccountsLocationsQuestionsAnswersDeletePathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}