package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AppengineAppsFirewallIngressRulesListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=appsId")
    public String appsId;
    public AppengineAppsFirewallIngressRulesListPathParams withAppsId(String appsId) {
        this.appsId = appsId;
        return this;
    }
}