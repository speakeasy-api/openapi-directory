package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsCreatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsCreatePathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}