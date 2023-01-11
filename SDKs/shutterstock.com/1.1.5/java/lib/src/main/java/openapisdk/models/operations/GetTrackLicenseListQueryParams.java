package openapisdk.models.operations;

import java.time.OffsetDateTime;
import openapisdk.utils.SpeakeasyMetadata;

public class GetTrackLicenseListQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=audio_id")
    public String audioId;
    public GetTrackLicenseListQueryParams withAudioId(String audioId) {
        this.audioId = audioId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=end_date")
    public OffsetDateTime endDate;
    public GetTrackLicenseListQueryParams withEndDate(OffsetDateTime endDate) {
        this.endDate = endDate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=license")
    public String license;
    public GetTrackLicenseListQueryParams withLicense(String license) {
        this.license = license;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Long page;
    public GetTrackLicenseListQueryParams withPage(Long page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=per_page")
    public Long perPage;
    public GetTrackLicenseListQueryParams withPerPage(Long perPage) {
        this.perPage = perPage;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort")
    public GetTrackLicenseListSortEnum sort;
    public GetTrackLicenseListQueryParams withSort(GetTrackLicenseListSortEnum sort) {
        this.sort = sort;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=start_date")
    public OffsetDateTime startDate;
    public GetTrackLicenseListQueryParams withStartDate(OffsetDateTime startDate) {
        this.startDate = startDate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=username")
    public String username;
    public GetTrackLicenseListQueryParams withUsername(String username) {
        this.username = username;
        return this;
    }
}