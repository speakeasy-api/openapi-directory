package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AnalyticsadminPropertiesCustomMetricsArchivePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public AnalyticsadminPropertiesCustomMetricsArchivePathParams withName(String name) {
        this.name = name;
        return this;
    }
}