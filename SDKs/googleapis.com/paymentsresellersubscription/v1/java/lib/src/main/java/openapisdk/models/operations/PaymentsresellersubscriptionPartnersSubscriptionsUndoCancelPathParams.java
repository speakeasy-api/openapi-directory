package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PaymentsresellersubscriptionPartnersSubscriptionsUndoCancelPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public PaymentsresellersubscriptionPartnersSubscriptionsUndoCancelPathParams withName(String name) {
        this.name = name;
        return this;
    }
}