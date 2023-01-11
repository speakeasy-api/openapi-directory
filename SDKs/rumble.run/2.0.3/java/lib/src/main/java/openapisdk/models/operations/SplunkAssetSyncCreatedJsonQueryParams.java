package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SplunkAssetSyncCreatedJsonQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fields")
    public String fields;
    public SplunkAssetSyncCreatedJsonQueryParams withFields(String fields) {
        this.fields = fields;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search")
    public String search;
    public SplunkAssetSyncCreatedJsonQueryParams withSearch(String search) {
        this.search = search;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=since")
    public Long since;
    public SplunkAssetSyncCreatedJsonQueryParams withSince(Long since) {
        this.since = since;
        return this;
    }
}