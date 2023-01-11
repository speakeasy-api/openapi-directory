package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostGeomarksNewRequestBody {
    @SpeakeasyMetadata("form:name=allowOverlap")
    public Boolean allowOverlap;
    public PostGeomarksNewRequestBody withAllowOverlap(Boolean allowOverlap) {
        this.allowOverlap = allowOverlap;
        return this;
    }
    @SpeakeasyMetadata("form:name=body")
    public String body;
    public PostGeomarksNewRequestBody withBody(String body) {
        this.body = body;
        return this;
    }
    @SpeakeasyMetadata("form:name=bufferCap")
    public PostGeomarksNewRequestBodyBufferCapEnum bufferCap;
    public PostGeomarksNewRequestBody withBufferCap(PostGeomarksNewRequestBodyBufferCapEnum bufferCap) {
        this.bufferCap = bufferCap;
        return this;
    }
    @SpeakeasyMetadata("form:name=bufferJoin")
    public PostGeomarksNewRequestBodyBufferJoinEnum bufferJoin;
    public PostGeomarksNewRequestBody withBufferJoin(PostGeomarksNewRequestBodyBufferJoinEnum bufferJoin) {
        this.bufferJoin = bufferJoin;
        return this;
    }
    @SpeakeasyMetadata("form:name=bufferMetres")
    public Long bufferMetres;
    public PostGeomarksNewRequestBody withBufferMetres(Long bufferMetres) {
        this.bufferMetres = bufferMetres;
        return this;
    }
    @SpeakeasyMetadata("form:name=bufferMitreLimit")
    public Long bufferMitreLimit;
    public PostGeomarksNewRequestBody withBufferMitreLimit(Long bufferMitreLimit) {
        this.bufferMitreLimit = bufferMitreLimit;
        return this;
    }
    @SpeakeasyMetadata("form:name=bufferSegments")
    public Long bufferSegments;
    public PostGeomarksNewRequestBody withBufferSegments(Long bufferSegments) {
        this.bufferSegments = bufferSegments;
        return this;
    }
    @SpeakeasyMetadata("form:name=callback")
    public String callback;
    public PostGeomarksNewRequestBody withCallback(String callback) {
        this.callback = callback;
        return this;
    }
    @SpeakeasyMetadata("form:name=failureRedirectUrl")
    public String failureRedirectUrl;
    public PostGeomarksNewRequestBody withFailureRedirectUrl(String failureRedirectUrl) {
        this.failureRedirectUrl = failureRedirectUrl;
        return this;
    }
    @SpeakeasyMetadata("form:name=format")
    public PostGeomarksNewRequestBodyFormatEnum format;
    public PostGeomarksNewRequestBody withFormat(PostGeomarksNewRequestBodyFormatEnum format) {
        this.format = format;
        return this;
    }
    @SpeakeasyMetadata("form:name=multiple")
    public Boolean multiple;
    public PostGeomarksNewRequestBody withMultiple(Boolean multiple) {
        this.multiple = multiple;
        return this;
    }
    @SpeakeasyMetadata("form:name=redirectUrl")
    public String redirectUrl;
    public PostGeomarksNewRequestBody withRedirectUrl(String redirectUrl) {
        this.redirectUrl = redirectUrl;
        return this;
    }
    @SpeakeasyMetadata("form:name=resultFormat")
    public PostGeomarksNewRequestBodyResultFormatEnum resultFormat;
    public PostGeomarksNewRequestBody withResultFormat(PostGeomarksNewRequestBodyResultFormatEnum resultFormat) {
        this.resultFormat = resultFormat;
        return this;
    }
    @SpeakeasyMetadata("form:name=srid")
    public Long srid;
    public PostGeomarksNewRequestBody withSrid(Long srid) {
        this.srid = srid;
        return this;
    }
}