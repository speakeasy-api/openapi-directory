package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ChromemanagementCustomersReportsFindInstalledAppDevicesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=customer")
    public String customer;
    public ChromemanagementCustomersReportsFindInstalledAppDevicesPathParams withCustomer(String customer) {
        this.customer = customer;
        return this;
    }
}