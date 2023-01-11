package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AppengineAppsFirewallIngressRulesDeletePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=appsId")
    public String appsId;
    public AppengineAppsFirewallIngressRulesDeletePathParams withAppsId(String appsId) {
        this.appsId = appsId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ingressRulesId")
    public String ingressRulesId;
    public AppengineAppsFirewallIngressRulesDeletePathParams withIngressRulesId(String ingressRulesId) {
        this.ingressRulesId = ingressRulesId;
        return this;
    }
}