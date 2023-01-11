package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ChromemanagementCustomersReportsCountChromeDevicesReachingAutoExpirationDatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=customer")
    public String customer;
    public ChromemanagementCustomersReportsCountChromeDevicesReachingAutoExpirationDatePathParams withCustomer(String customer) {
        this.customer = customer;
        return this;
    }
}