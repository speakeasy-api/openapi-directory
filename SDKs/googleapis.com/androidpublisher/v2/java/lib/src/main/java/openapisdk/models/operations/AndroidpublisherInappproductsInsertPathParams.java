package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AndroidpublisherInappproductsInsertPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=packageName")
    public String packageName;
    public AndroidpublisherInappproductsInsertPathParams withPackageName(String packageName) {
        this.packageName = packageName;
        return this;
    }
}