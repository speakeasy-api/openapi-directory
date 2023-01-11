package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PaymentsresellersubscriptionPartnersSubscriptionsCancelPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public PaymentsresellersubscriptionPartnersSubscriptionsCancelPathParams withName(String name) {
        this.name = name;
        return this;
    }
}