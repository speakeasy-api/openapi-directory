package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PaymentsresellersubscriptionPartnersSubscriptionsGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public PaymentsresellersubscriptionPartnersSubscriptionsGetPathParams withName(String name) {
        this.name = name;
        return this;
    }
}