package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AndroidpublisherMonetizationConvertRegionPricesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=packageName")
    public String packageName;
    public AndroidpublisherMonetizationConvertRegionPricesPathParams withPackageName(String packageName) {
        this.packageName = packageName;
        return this;
    }
}