package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class IpamPrefixesListQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=contains")
    public String contains;
    public IpamPrefixesListQueryParams withContains(String contains) {
        this.contains = contains;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=family")
    public String family;
    public IpamPrefixesListQueryParams withFamily(String family) {
        this.family = family;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=id__in")
    public String idIn;
    public IpamPrefixesListQueryParams withIdIn(String idIn) {
        this.idIn = idIn;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=is_pool")
    public String isPool;
    public IpamPrefixesListQueryParams withIsPool(String isPool) {
        this.isPool = isPool;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=limit")
    public Long limit;
    public IpamPrefixesListQueryParams withLimit(Long limit) {
        this.limit = limit;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=mask_length")
    public Double maskLength;
    public IpamPrefixesListQueryParams withMaskLength(Double maskLength) {
        this.maskLength = maskLength;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=offset")
    public Long offset;
    public IpamPrefixesListQueryParams withOffset(Long offset) {
        this.offset = offset;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=q")
    public String q;
    public IpamPrefixesListQueryParams withQ(String q) {
        this.q = q;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=role")
    public String role;
    public IpamPrefixesListQueryParams withRole(String role) {
        this.role = role;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=role_id")
    public String roleId;
    public IpamPrefixesListQueryParams withRoleId(String roleId) {
        this.roleId = roleId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=site")
    public String site;
    public IpamPrefixesListQueryParams withSite(String site) {
        this.site = site;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=site_id")
    public String siteId;
    public IpamPrefixesListQueryParams withSiteId(String siteId) {
        this.siteId = siteId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=status")
    public String status;
    public IpamPrefixesListQueryParams withStatus(String status) {
        this.status = status;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=tag")
    public String tag;
    public IpamPrefixesListQueryParams withTag(String tag) {
        this.tag = tag;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=tenant")
    public String tenant;
    public IpamPrefixesListQueryParams withTenant(String tenant) {
        this.tenant = tenant;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=tenant_id")
    public String tenantId;
    public IpamPrefixesListQueryParams withTenantId(String tenantId) {
        this.tenantId = tenantId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=vlan_id")
    public String vlanId;
    public IpamPrefixesListQueryParams withVlanId(String vlanId) {
        this.vlanId = vlanId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=vlan_vid")
    public Double vlanVid;
    public IpamPrefixesListQueryParams withVlanVid(Double vlanVid) {
        this.vlanVid = vlanVid;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=vrf")
    public String vrf;
    public IpamPrefixesListQueryParams withVrf(String vrf) {
        this.vrf = vrf;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=vrf_id")
    public String vrfId;
    public IpamPrefixesListQueryParams withVrfId(String vrfId) {
        this.vrfId = vrfId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=within")
    public String within;
    public IpamPrefixesListQueryParams withWithin(String within) {
        this.within = within;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=within_include")
    public String withinInclude;
    public IpamPrefixesListQueryParams withWithinInclude(String withinInclude) {
        this.withinInclude = withinInclude;
        return this;
    }
}