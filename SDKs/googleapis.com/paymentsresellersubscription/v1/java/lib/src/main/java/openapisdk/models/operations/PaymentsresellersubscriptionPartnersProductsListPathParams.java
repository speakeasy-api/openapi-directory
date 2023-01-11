package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PaymentsresellersubscriptionPartnersProductsListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public PaymentsresellersubscriptionPartnersProductsListPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}