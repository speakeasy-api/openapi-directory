package openapisdk.models.operations;

import java.time.OffsetDateTime;
import openapisdk.utils.SpeakeasyMetadata;

public class ListVerificationAttemptQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Channel")
    public openapisdk.models.shared.VerificationAttemptEnumChannelsEnum channel;
    public ListVerificationAttemptQueryParams withChannel(openapisdk.models.shared.VerificationAttemptEnumChannelsEnum channel) {
        this.channel = channel;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ChannelData.To")
    public String channelDataTo;
    public ListVerificationAttemptQueryParams withChannelDataTo(String channelDataTo) {
        this.channelDataTo = channelDataTo;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Country")
    public String country;
    public ListVerificationAttemptQueryParams withCountry(String country) {
        this.country = country;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DateCreatedAfter")
    public OffsetDateTime dateCreatedAfter;
    public ListVerificationAttemptQueryParams withDateCreatedAfter(OffsetDateTime dateCreatedAfter) {
        this.dateCreatedAfter = dateCreatedAfter;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DateCreatedBefore")
    public OffsetDateTime dateCreatedBefore;
    public ListVerificationAttemptQueryParams withDateCreatedBefore(OffsetDateTime dateCreatedBefore) {
        this.dateCreatedBefore = dateCreatedBefore;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PageSize")
    public Long pageSize;
    public ListVerificationAttemptQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Status")
    public openapisdk.models.shared.VerificationAttemptEnumConversionStatusEnum status;
    public ListVerificationAttemptQueryParams withStatus(openapisdk.models.shared.VerificationAttemptEnumConversionStatusEnum status) {
        this.status = status;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=VerificationSid")
    public String verificationSid;
    public ListVerificationAttemptQueryParams withVerificationSid(String verificationSid) {
        this.verificationSid = verificationSid;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=VerifyServiceSid")
    public String verifyServiceSid;
    public ListVerificationAttemptQueryParams withVerifyServiceSid(String verifyServiceSid) {
        this.verifyServiceSid = verifyServiceSid;
        return this;
    }
}