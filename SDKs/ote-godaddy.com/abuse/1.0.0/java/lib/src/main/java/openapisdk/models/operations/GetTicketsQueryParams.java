package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetTicketsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=closed")
    public Boolean closed;
    public GetTicketsQueryParams withClosed(Boolean closed) {
        this.closed = closed;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=createdEnd")
    public String createdEnd;
    public GetTicketsQueryParams withCreatedEnd(String createdEnd) {
        this.createdEnd = createdEnd;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=createdStart")
    public String createdStart;
    public GetTicketsQueryParams withCreatedStart(String createdStart) {
        this.createdStart = createdStart;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=limit")
    public Long limit;
    public GetTicketsQueryParams withLimit(Long limit) {
        this.limit = limit;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=offset")
    public Long offset;
    public GetTicketsQueryParams withOffset(Long offset) {
        this.offset = offset;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sourceDomainOrIp")
    public String sourceDomainOrIp;
    public GetTicketsQueryParams withSourceDomainOrIp(String sourceDomainOrIp) {
        this.sourceDomainOrIp = sourceDomainOrIp;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=target")
    public String target;
    public GetTicketsQueryParams withTarget(String target) {
        this.target = target;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=type")
    public GetTicketsTypeEnum type;
    public GetTicketsQueryParams withType(GetTicketsTypeEnum type) {
        this.type = type;
        return this;
    }
}