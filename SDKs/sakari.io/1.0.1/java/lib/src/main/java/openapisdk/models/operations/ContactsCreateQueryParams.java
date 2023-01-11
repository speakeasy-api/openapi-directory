package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ContactsCreateQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=mergeStrategy")
    public openapisdk.models.shared.AccountIdEnum mergeStrategy;
    public ContactsCreateQueryParams withMergeStrategy(openapisdk.models.shared.AccountIdEnum mergeStrategy) {
        this.mergeStrategy = mergeStrategy;
        return this;
    }
}