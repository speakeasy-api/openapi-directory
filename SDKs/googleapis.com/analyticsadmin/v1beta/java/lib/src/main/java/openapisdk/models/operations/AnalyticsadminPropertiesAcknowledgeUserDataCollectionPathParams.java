package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AnalyticsadminPropertiesAcknowledgeUserDataCollectionPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=property")
    public String property;
    public AnalyticsadminPropertiesAcknowledgeUserDataCollectionPathParams withProperty(String property) {
        this.property = property;
        return this;
    }
}