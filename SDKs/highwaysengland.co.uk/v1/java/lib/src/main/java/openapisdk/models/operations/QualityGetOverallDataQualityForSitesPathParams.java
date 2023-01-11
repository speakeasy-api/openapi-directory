package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class QualityGetOverallDataQualityForSitesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=version")
    public String version;
    public QualityGetOverallDataQualityForSitesPathParams withVersion(String version) {
        this.version = version;
        return this;
    }
}