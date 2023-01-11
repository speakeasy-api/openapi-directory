package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostGeomarksCopyQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=allowOverlap")
    public Boolean allowOverlap;
    public PostGeomarksCopyQueryParams withAllowOverlap(Boolean allowOverlap) {
        this.allowOverlap = allowOverlap;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=bufferCap")
    public PostGeomarksCopyBufferCapEnum bufferCap;
    public PostGeomarksCopyQueryParams withBufferCap(PostGeomarksCopyBufferCapEnum bufferCap) {
        this.bufferCap = bufferCap;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=bufferJoin")
    public PostGeomarksCopyBufferJoinEnum bufferJoin;
    public PostGeomarksCopyQueryParams withBufferJoin(PostGeomarksCopyBufferJoinEnum bufferJoin) {
        this.bufferJoin = bufferJoin;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=bufferMetres")
    public Long bufferMetres;
    public PostGeomarksCopyQueryParams withBufferMetres(Long bufferMetres) {
        this.bufferMetres = bufferMetres;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=bufferMitreLimit")
    public Long bufferMitreLimit;
    public PostGeomarksCopyQueryParams withBufferMitreLimit(Long bufferMitreLimit) {
        this.bufferMitreLimit = bufferMitreLimit;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=bufferSegments")
    public Long bufferSegments;
    public PostGeomarksCopyQueryParams withBufferSegments(Long bufferSegments) {
        this.bufferSegments = bufferSegments;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=callback")
    public String callback;
    public PostGeomarksCopyQueryParams withCallback(String callback) {
        this.callback = callback;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=failureRedirectUrl")
    public String failureRedirectUrl;
    public PostGeomarksCopyQueryParams withFailureRedirectUrl(String failureRedirectUrl) {
        this.failureRedirectUrl = failureRedirectUrl;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=geomarkUrl")
    public String geomarkUrl;
    public PostGeomarksCopyQueryParams withGeomarkUrl(String geomarkUrl) {
        this.geomarkUrl = geomarkUrl;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=redirectUrl")
    public String redirectUrl;
    public PostGeomarksCopyQueryParams withRedirectUrl(String redirectUrl) {
        this.redirectUrl = redirectUrl;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=resultFormat")
    public PostGeomarksCopyResultFormatEnum resultFormat;
    public PostGeomarksCopyQueryParams withResultFormat(PostGeomarksCopyResultFormatEnum resultFormat) {
        this.resultFormat = resultFormat;
        return this;
    }
}