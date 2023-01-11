package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AndroidpublisherInappproductsUpdatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=packageName")
    public String packageName;
    public AndroidpublisherInappproductsUpdatePathParams withPackageName(String packageName) {
        this.packageName = packageName;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=sku")
    public String sku;
    public AndroidpublisherInappproductsUpdatePathParams withSku(String sku) {
        this.sku = sku;
        return this;
    }
}