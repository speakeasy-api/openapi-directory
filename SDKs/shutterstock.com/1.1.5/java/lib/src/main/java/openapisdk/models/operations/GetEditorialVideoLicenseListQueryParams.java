package openapisdk.models.operations;

import java.time.OffsetDateTime;
import openapisdk.utils.SpeakeasyMetadata;

public class GetEditorialVideoLicenseListQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=end_date")
    public OffsetDateTime endDate;
    public GetEditorialVideoLicenseListQueryParams withEndDate(OffsetDateTime endDate) {
        this.endDate = endDate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=license")
    public String license;
    public GetEditorialVideoLicenseListQueryParams withLicense(String license) {
        this.license = license;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Long page;
    public GetEditorialVideoLicenseListQueryParams withPage(Long page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=per_page")
    public Long perPage;
    public GetEditorialVideoLicenseListQueryParams withPerPage(Long perPage) {
        this.perPage = perPage;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort")
    public GetEditorialVideoLicenseListSortEnum sort;
    public GetEditorialVideoLicenseListQueryParams withSort(GetEditorialVideoLicenseListSortEnum sort) {
        this.sort = sort;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=start_date")
    public OffsetDateTime startDate;
    public GetEditorialVideoLicenseListQueryParams withStartDate(OffsetDateTime startDate) {
        this.startDate = startDate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=username")
    public String username;
    public GetEditorialVideoLicenseListQueryParams withUsername(String username) {
        this.username = username;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=video_id")
    public String videoId;
    public GetEditorialVideoLicenseListQueryParams withVideoId(String videoId) {
        this.videoId = videoId;
        return this;
    }
}