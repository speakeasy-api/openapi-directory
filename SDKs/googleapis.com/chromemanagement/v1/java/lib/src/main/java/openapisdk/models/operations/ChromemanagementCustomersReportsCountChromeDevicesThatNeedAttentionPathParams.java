package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ChromemanagementCustomersReportsCountChromeDevicesThatNeedAttentionPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=customer")
    public String customer;
    public ChromemanagementCustomersReportsCountChromeDevicesThatNeedAttentionPathParams withCustomer(String customer) {
        this.customer = customer;
        return this;
    }
}