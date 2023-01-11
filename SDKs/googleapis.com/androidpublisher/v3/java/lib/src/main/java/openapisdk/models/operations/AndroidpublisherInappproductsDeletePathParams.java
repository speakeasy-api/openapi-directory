package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AndroidpublisherInappproductsDeletePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=packageName")
    public String packageName;
    public AndroidpublisherInappproductsDeletePathParams withPackageName(String packageName) {
        this.packageName = packageName;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=sku")
    public String sku;
    public AndroidpublisherInappproductsDeletePathParams withSku(String sku) {
        this.sku = sku;
        return this;
    }
}