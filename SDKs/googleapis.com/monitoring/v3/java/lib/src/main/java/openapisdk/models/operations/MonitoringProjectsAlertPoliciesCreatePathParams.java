package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MonitoringProjectsAlertPoliciesCreatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public MonitoringProjectsAlertPoliciesCreatePathParams withName(String name) {
        this.name = name;
        return this;
    }
}