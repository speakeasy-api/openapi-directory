package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsGetPathParams withName(String name) {
        this.name = name;
        return this;
    }
}