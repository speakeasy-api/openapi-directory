package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class IpamAggregatesListQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=date_added")
    public String dateAdded;
    public IpamAggregatesListQueryParams withDateAdded(String dateAdded) {
        this.dateAdded = dateAdded;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=family")
    public String family;
    public IpamAggregatesListQueryParams withFamily(String family) {
        this.family = family;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=id__in")
    public String idIn;
    public IpamAggregatesListQueryParams withIdIn(String idIn) {
        this.idIn = idIn;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=limit")
    public Long limit;
    public IpamAggregatesListQueryParams withLimit(Long limit) {
        this.limit = limit;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=offset")
    public Long offset;
    public IpamAggregatesListQueryParams withOffset(Long offset) {
        this.offset = offset;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=q")
    public String q;
    public IpamAggregatesListQueryParams withQ(String q) {
        this.q = q;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=rir")
    public String rir;
    public IpamAggregatesListQueryParams withRir(String rir) {
        this.rir = rir;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=rir_id")
    public String rirId;
    public IpamAggregatesListQueryParams withRirId(String rirId) {
        this.rirId = rirId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=tag")
    public String tag;
    public IpamAggregatesListQueryParams withTag(String tag) {
        this.tag = tag;
        return this;
    }
}