package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetResourcesSourcesIdSyndicateFormatPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=format")
    public String format;
    public GetResourcesSourcesIdSyndicateFormatPathParams withFormat(String format) {
        this.format = format;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Long id;
    public GetResourcesSourcesIdSyndicateFormatPathParams withId(Long id) {
        this.id = id;
        return this;
    }
}