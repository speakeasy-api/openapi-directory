package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CircuitsCircuitsListQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=cid")
    public String cid;
    public CircuitsCircuitsListQueryParams withCid(String cid) {
        this.cid = cid;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=commit_rate")
    public Double commitRate;
    public CircuitsCircuitsListQueryParams withCommitRate(Double commitRate) {
        this.commitRate = commitRate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=id__in")
    public String idIn;
    public CircuitsCircuitsListQueryParams withIdIn(String idIn) {
        this.idIn = idIn;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=install_date")
    public String installDate;
    public CircuitsCircuitsListQueryParams withInstallDate(String installDate) {
        this.installDate = installDate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=limit")
    public Long limit;
    public CircuitsCircuitsListQueryParams withLimit(Long limit) {
        this.limit = limit;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=offset")
    public Long offset;
    public CircuitsCircuitsListQueryParams withOffset(Long offset) {
        this.offset = offset;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=provider")
    public String provider;
    public CircuitsCircuitsListQueryParams withProvider(String provider) {
        this.provider = provider;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=provider_id")
    public String providerId;
    public CircuitsCircuitsListQueryParams withProviderId(String providerId) {
        this.providerId = providerId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=q")
    public String q;
    public CircuitsCircuitsListQueryParams withQ(String q) {
        this.q = q;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=site")
    public String site;
    public CircuitsCircuitsListQueryParams withSite(String site) {
        this.site = site;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=site_id")
    public String siteId;
    public CircuitsCircuitsListQueryParams withSiteId(String siteId) {
        this.siteId = siteId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=status")
    public String status;
    public CircuitsCircuitsListQueryParams withStatus(String status) {
        this.status = status;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=tag")
    public String tag;
    public CircuitsCircuitsListQueryParams withTag(String tag) {
        this.tag = tag;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=tenant")
    public String tenant;
    public CircuitsCircuitsListQueryParams withTenant(String tenant) {
        this.tenant = tenant;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=tenant_id")
    public String tenantId;
    public CircuitsCircuitsListQueryParams withTenantId(String tenantId) {
        this.tenantId = tenantId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=type")
    public String type;
    public CircuitsCircuitsListQueryParams withType(String type) {
        this.type = type;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=type_id")
    public String typeId;
    public CircuitsCircuitsListQueryParams withTypeId(String typeId) {
        this.typeId = typeId;
        return this;
    }
}