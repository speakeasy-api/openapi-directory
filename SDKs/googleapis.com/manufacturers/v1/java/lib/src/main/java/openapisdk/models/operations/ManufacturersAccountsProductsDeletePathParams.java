package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ManufacturersAccountsProductsDeletePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public ManufacturersAccountsProductsDeletePathParams withName(String name) {
        this.name = name;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public ManufacturersAccountsProductsDeletePathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}