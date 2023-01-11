package openapisdk.models.operations;

import java.time.OffsetDateTime;
import openapisdk.utils.SpeakeasyMetadata;

public class ListBundleQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=FriendlyName")
    public String friendlyName;
    public ListBundleQueryParams withFriendlyName(String friendlyName) {
        this.friendlyName = friendlyName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=HasValidUntilDate")
    public Boolean hasValidUntilDate;
    public ListBundleQueryParams withHasValidUntilDate(Boolean hasValidUntilDate) {
        this.hasValidUntilDate = hasValidUntilDate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=IsoCountry")
    public String isoCountry;
    public ListBundleQueryParams withIsoCountry(String isoCountry) {
        this.isoCountry = isoCountry;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=NumberType")
    public String numberType;
    public ListBundleQueryParams withNumberType(String numberType) {
        this.numberType = numberType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PageSize")
    public Long pageSize;
    public ListBundleQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=RegulationSid")
    public String regulationSid;
    public ListBundleQueryParams withRegulationSid(String regulationSid) {
        this.regulationSid = regulationSid;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=SortBy")
    public openapisdk.models.shared.BundleEnumSortByEnum sortBy;
    public ListBundleQueryParams withSortBy(openapisdk.models.shared.BundleEnumSortByEnum sortBy) {
        this.sortBy = sortBy;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=SortDirection")
    public openapisdk.models.shared.BundleEnumSortDirectionEnum sortDirection;
    public ListBundleQueryParams withSortDirection(openapisdk.models.shared.BundleEnumSortDirectionEnum sortDirection) {
        this.sortDirection = sortDirection;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Status")
    public openapisdk.models.shared.BundleEnumStatusEnum status;
    public ListBundleQueryParams withStatus(openapisdk.models.shared.BundleEnumStatusEnum status) {
        this.status = status;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ValidUntilDate")
    public OffsetDateTime validUntilDate;
    public ListBundleQueryParams withValidUntilDate(OffsetDateTime validUntilDate) {
        this.validUntilDate = validUntilDate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ValidUntilDate<")
    public OffsetDateTime validUntilDateLessThan;
    public ListBundleQueryParams withValidUntilDateLessThan(OffsetDateTime validUntilDateLessThan) {
        this.validUntilDateLessThan = validUntilDateLessThan;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ValidUntilDate>")
    public OffsetDateTime validUntilDateGreaterThan;
    public ListBundleQueryParams withValidUntilDateGreaterThan(OffsetDateTime validUntilDateGreaterThan) {
        this.validUntilDateGreaterThan = validUntilDateGreaterThan;
        return this;
    }
}