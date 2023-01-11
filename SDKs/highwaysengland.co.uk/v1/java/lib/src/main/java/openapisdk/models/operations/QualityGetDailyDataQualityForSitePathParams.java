package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class QualityGetDailyDataQualityForSitePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=version")
    public String version;
    public QualityGetDailyDataQualityForSitePathParams withVersion(String version) {
        this.version = version;
        return this;
    }
}