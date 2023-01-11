package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AndroidpublisherOrdersRefundPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=orderId")
    public String orderId;
    public AndroidpublisherOrdersRefundPathParams withOrderId(String orderId) {
        this.orderId = orderId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=packageName")
    public String packageName;
    public AndroidpublisherOrdersRefundPathParams withPackageName(String packageName) {
        this.packageName = packageName;
        return this;
    }
}