package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AndroidpublisherInappproductsPatchPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=packageName")
    public String packageName;
    public AndroidpublisherInappproductsPatchPathParams withPackageName(String packageName) {
        this.packageName = packageName;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=sku")
    public String sku;
    public AndroidpublisherInappproductsPatchPathParams withSku(String sku) {
        this.sku = sku;
        return this;
    }
}