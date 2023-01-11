package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ChromemanagementCustomersReportsCountInstalledAppsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=customer")
    public String customer;
    public ChromemanagementCustomersReportsCountInstalledAppsPathParams withCustomer(String customer) {
        this.customer = customer;
        return this;
    }
}