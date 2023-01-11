package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsListPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}