package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AppengineAppsFirewallIngressRulesBatchUpdatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=appsId")
    public String appsId;
    public AppengineAppsFirewallIngressRulesBatchUpdatePathParams withAppsId(String appsId) {
        this.appsId = appsId;
        return this;
    }
}