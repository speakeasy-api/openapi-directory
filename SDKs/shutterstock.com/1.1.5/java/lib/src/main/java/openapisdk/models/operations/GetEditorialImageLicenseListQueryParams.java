package openapisdk.models.operations;

import java.time.OffsetDateTime;
import openapisdk.utils.SpeakeasyMetadata;

public class GetEditorialImageLicenseListQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=end_date")
    public OffsetDateTime endDate;
    public GetEditorialImageLicenseListQueryParams withEndDate(OffsetDateTime endDate) {
        this.endDate = endDate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=image_id")
    public String imageId;
    public GetEditorialImageLicenseListQueryParams withImageId(String imageId) {
        this.imageId = imageId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=license")
    public String license;
    public GetEditorialImageLicenseListQueryParams withLicense(String license) {
        this.license = license;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Long page;
    public GetEditorialImageLicenseListQueryParams withPage(Long page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=per_page")
    public Long perPage;
    public GetEditorialImageLicenseListQueryParams withPerPage(Long perPage) {
        this.perPage = perPage;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort")
    public GetEditorialImageLicenseListSortEnum sort;
    public GetEditorialImageLicenseListQueryParams withSort(GetEditorialImageLicenseListSortEnum sort) {
        this.sort = sort;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=start_date")
    public OffsetDateTime startDate;
    public GetEditorialImageLicenseListQueryParams withStartDate(OffsetDateTime startDate) {
        this.startDate = startDate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=username")
    public String username;
    public GetEditorialImageLicenseListQueryParams withUsername(String username) {
        this.username = username;
        return this;
    }
}