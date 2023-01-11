package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MybusinessAccountsLocationsQuestionsCreatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public MybusinessAccountsLocationsQuestionsCreatePathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}