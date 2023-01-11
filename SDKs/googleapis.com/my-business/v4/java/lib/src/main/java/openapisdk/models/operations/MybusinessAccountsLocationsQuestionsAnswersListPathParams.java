package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MybusinessAccountsLocationsQuestionsAnswersListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public MybusinessAccountsLocationsQuestionsAnswersListPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}