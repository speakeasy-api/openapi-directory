package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AppengineAppsFirewallIngressRulesPatchPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=appsId")
    public String appsId;
    public AppengineAppsFirewallIngressRulesPatchPathParams withAppsId(String appsId) {
        this.appsId = appsId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ingressRulesId")
    public String ingressRulesId;
    public AppengineAppsFirewallIngressRulesPatchPathParams withIngressRulesId(String ingressRulesId) {
        this.ingressRulesId = ingressRulesId;
        return this;
    }
}