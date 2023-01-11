package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DcimDeviceRolesListQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=color")
    public String color;
    public DcimDeviceRolesListQueryParams withColor(String color) {
        this.color = color;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=limit")
    public Long limit;
    public DcimDeviceRolesListQueryParams withLimit(Long limit) {
        this.limit = limit;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=name")
    public String name;
    public DcimDeviceRolesListQueryParams withName(String name) {
        this.name = name;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=offset")
    public Long offset;
    public DcimDeviceRolesListQueryParams withOffset(Long offset) {
        this.offset = offset;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=slug")
    public String slug;
    public DcimDeviceRolesListQueryParams withSlug(String slug) {
        this.slug = slug;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=vm_role")
    public String vmRole;
    public DcimDeviceRolesListQueryParams withVmRole(String vmRole) {
        this.vmRole = vmRole;
        return this;
    }
}