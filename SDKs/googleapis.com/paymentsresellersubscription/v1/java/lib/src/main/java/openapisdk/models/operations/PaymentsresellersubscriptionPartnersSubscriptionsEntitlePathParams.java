package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PaymentsresellersubscriptionPartnersSubscriptionsEntitlePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public PaymentsresellersubscriptionPartnersSubscriptionsEntitlePathParams withName(String name) {
        this.name = name;
        return this;
    }
}