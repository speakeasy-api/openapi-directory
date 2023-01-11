package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DcimPlatformsListQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=limit")
    public Long limit;
    public DcimPlatformsListQueryParams withLimit(Long limit) {
        this.limit = limit;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=manufacturer")
    public String manufacturer;
    public DcimPlatformsListQueryParams withManufacturer(String manufacturer) {
        this.manufacturer = manufacturer;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=manufacturer_id")
    public String manufacturerId;
    public DcimPlatformsListQueryParams withManufacturerId(String manufacturerId) {
        this.manufacturerId = manufacturerId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=name")
    public String name;
    public DcimPlatformsListQueryParams withName(String name) {
        this.name = name;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=offset")
    public Long offset;
    public DcimPlatformsListQueryParams withOffset(Long offset) {
        this.offset = offset;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=slug")
    public String slug;
    public DcimPlatformsListQueryParams withSlug(String slug) {
        this.slug = slug;
        return this;
    }
}