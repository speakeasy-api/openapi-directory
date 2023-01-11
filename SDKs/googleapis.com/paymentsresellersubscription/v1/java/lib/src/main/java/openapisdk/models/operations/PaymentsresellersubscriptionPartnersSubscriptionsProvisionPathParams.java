package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PaymentsresellersubscriptionPartnersSubscriptionsProvisionPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public PaymentsresellersubscriptionPartnersSubscriptionsProvisionPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}