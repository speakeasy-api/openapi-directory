package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetBelegeQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=after")
    public String after;
    public GetBelegeQueryParams withAfter(String after) {
        this.after = after;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=before")
    public String before;
    public GetBelegeQueryParams withBefore(String before) {
        this.before = before;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=format")
    public GetBelegeFormatEnum format;
    public GetBelegeQueryParams withFormat(GetBelegeFormatEnum format) {
        this.format = format;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=gte")
    public Long gte;
    public GetBelegeQueryParams withGte(Long gte) {
        this.gte = gte;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=limit")
    public Long limit;
    public GetBelegeQueryParams withLimit(Long limit) {
        this.limit = limit;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=lte")
    public Long lte;
    public GetBelegeQueryParams withLte(Long lte) {
        this.lte = lte;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=offset")
    public Long offset;
    public GetBelegeQueryParams withOffset(Long offset) {
        this.offset = offset;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=order")
    public GetBelegeOrderEnum order;
    public GetBelegeQueryParams withOrder(GetBelegeOrderEnum order) {
        this.order = order;
        return this;
    }
}