package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MybusinessAccountsLocationsQuestionsAnswersUpsertPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public MybusinessAccountsLocationsQuestionsAnswersUpsertPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}