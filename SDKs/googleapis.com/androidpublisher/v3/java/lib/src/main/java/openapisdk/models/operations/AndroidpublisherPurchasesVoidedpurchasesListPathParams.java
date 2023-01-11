package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AndroidpublisherPurchasesVoidedpurchasesListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=packageName")
    public String packageName;
    public AndroidpublisherPurchasesVoidedpurchasesListPathParams withPackageName(String packageName) {
        this.packageName = packageName;
        return this;
    }
}