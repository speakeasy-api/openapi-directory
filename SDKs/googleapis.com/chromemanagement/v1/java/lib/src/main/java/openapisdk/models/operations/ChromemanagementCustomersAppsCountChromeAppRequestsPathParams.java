package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ChromemanagementCustomersAppsCountChromeAppRequestsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=customer")
    public String customer;
    public ChromemanagementCustomersAppsCountChromeAppRequestsPathParams withCustomer(String customer) {
        this.customer = customer;
        return this;
    }
}