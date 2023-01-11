package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ManufacturersAccountsProductsUpdatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public ManufacturersAccountsProductsUpdatePathParams withName(String name) {
        this.name = name;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public ManufacturersAccountsProductsUpdatePathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}