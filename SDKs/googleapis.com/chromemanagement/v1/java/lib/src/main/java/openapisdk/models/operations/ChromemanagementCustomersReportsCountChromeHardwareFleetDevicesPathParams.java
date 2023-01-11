package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ChromemanagementCustomersReportsCountChromeHardwareFleetDevicesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=customer")
    public String customer;
    public ChromemanagementCustomersReportsCountChromeHardwareFleetDevicesPathParams withCustomer(String customer) {
        this.customer = customer;
        return this;
    }
}