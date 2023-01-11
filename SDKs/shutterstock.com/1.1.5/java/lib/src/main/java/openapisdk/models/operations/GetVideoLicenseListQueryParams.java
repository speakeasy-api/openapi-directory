package openapisdk.models.operations;

import java.time.OffsetDateTime;
import openapisdk.utils.SpeakeasyMetadata;

public class GetVideoLicenseListQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=end_date")
    public OffsetDateTime endDate;
    public GetVideoLicenseListQueryParams withEndDate(OffsetDateTime endDate) {
        this.endDate = endDate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=license")
    public String license;
    public GetVideoLicenseListQueryParams withLicense(String license) {
        this.license = license;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Long page;
    public GetVideoLicenseListQueryParams withPage(Long page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=per_page")
    public Long perPage;
    public GetVideoLicenseListQueryParams withPerPage(Long perPage) {
        this.perPage = perPage;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort")
    public GetVideoLicenseListSortEnum sort;
    public GetVideoLicenseListQueryParams withSort(GetVideoLicenseListSortEnum sort) {
        this.sort = sort;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=start_date")
    public OffsetDateTime startDate;
    public GetVideoLicenseListQueryParams withStartDate(OffsetDateTime startDate) {
        this.startDate = startDate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=username")
    public String username;
    public GetVideoLicenseListQueryParams withUsername(String username) {
        this.username = username;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=video_id")
    public String videoId;
    public GetVideoLicenseListQueryParams withVideoId(String videoId) {
        this.videoId = videoId;
        return this;
    }
}