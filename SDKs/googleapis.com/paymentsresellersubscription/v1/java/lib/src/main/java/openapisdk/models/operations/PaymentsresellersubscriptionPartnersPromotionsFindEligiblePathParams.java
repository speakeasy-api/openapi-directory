package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PaymentsresellersubscriptionPartnersPromotionsFindEligiblePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public PaymentsresellersubscriptionPartnersPromotionsFindEligiblePathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}