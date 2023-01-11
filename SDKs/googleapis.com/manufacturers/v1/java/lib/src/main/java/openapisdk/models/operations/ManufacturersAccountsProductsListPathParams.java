package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ManufacturersAccountsProductsListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public ManufacturersAccountsProductsListPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}