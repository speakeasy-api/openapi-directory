package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class OutletsGetAllOutletsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=devid")
    public String devid;
    public OutletsGetAllOutletsQueryParams withDevid(String devid) {
        this.devid = devid;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=max_results")
    public Integer maxResults;
    public OutletsGetAllOutletsQueryParams withMaxResults(Integer maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=signature")
    public String signature;
    public OutletsGetAllOutletsQueryParams withSignature(String signature) {
        this.signature = signature;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=token")
    public String token;
    public OutletsGetAllOutletsQueryParams withToken(String token) {
        this.token = token;
        return this;
    }
}