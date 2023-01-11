package openapisdk.models.operations;

import java.time.OffsetDateTime;
import openapisdk.utils.SpeakeasyMetadata;

public class GetCmsV3DomainsGetPageQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=after")
    public String after;
    public GetCmsV3DomainsGetPageQueryParams withAfter(String after) {
        this.after = after;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=archived")
    public Boolean archived;
    public GetCmsV3DomainsGetPageQueryParams withArchived(Boolean archived) {
        this.archived = archived;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=createdAfter")
    public OffsetDateTime createdAfter;
    public GetCmsV3DomainsGetPageQueryParams withCreatedAfter(OffsetDateTime createdAfter) {
        this.createdAfter = createdAfter;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=createdAt")
    public OffsetDateTime createdAt;
    public GetCmsV3DomainsGetPageQueryParams withCreatedAt(OffsetDateTime createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=createdBefore")
    public OffsetDateTime createdBefore;
    public GetCmsV3DomainsGetPageQueryParams withCreatedBefore(OffsetDateTime createdBefore) {
        this.createdBefore = createdBefore;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=limit")
    public Integer limit;
    public GetCmsV3DomainsGetPageQueryParams withLimit(Integer limit) {
        this.limit = limit;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort")
    public String[] sort;
    public GetCmsV3DomainsGetPageQueryParams withSort(String[] sort) {
        this.sort = sort;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=updatedAfter")
    public OffsetDateTime updatedAfter;
    public GetCmsV3DomainsGetPageQueryParams withUpdatedAfter(OffsetDateTime updatedAfter) {
        this.updatedAfter = updatedAfter;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=updatedAt")
    public OffsetDateTime updatedAt;
    public GetCmsV3DomainsGetPageQueryParams withUpdatedAt(OffsetDateTime updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=updatedBefore")
    public OffsetDateTime updatedBefore;
    public GetCmsV3DomainsGetPageQueryParams withUpdatedBefore(OffsetDateTime updatedBefore) {
        this.updatedBefore = updatedBefore;
        return this;
    }
}