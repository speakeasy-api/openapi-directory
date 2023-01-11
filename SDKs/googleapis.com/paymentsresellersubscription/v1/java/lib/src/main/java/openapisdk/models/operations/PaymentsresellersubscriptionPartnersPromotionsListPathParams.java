package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PaymentsresellersubscriptionPartnersPromotionsListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public PaymentsresellersubscriptionPartnersPromotionsListPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}