package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ManufacturersAccountsProductsGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public ManufacturersAccountsProductsGetPathParams withName(String name) {
        this.name = name;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public ManufacturersAccountsProductsGetPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}