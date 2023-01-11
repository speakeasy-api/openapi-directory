package openapisdk.models.operations;

import java.time.OffsetDateTime;
import openapisdk.utils.SpeakeasyMetadata;

public class FetchVerificationAttemptsSummaryQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Channel")
    public openapisdk.models.shared.VerificationAttemptsSummaryEnumChannelsEnum channel;
    public FetchVerificationAttemptsSummaryQueryParams withChannel(openapisdk.models.shared.VerificationAttemptsSummaryEnumChannelsEnum channel) {
        this.channel = channel;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Country")
    public String country;
    public FetchVerificationAttemptsSummaryQueryParams withCountry(String country) {
        this.country = country;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DateCreatedAfter")
    public OffsetDateTime dateCreatedAfter;
    public FetchVerificationAttemptsSummaryQueryParams withDateCreatedAfter(OffsetDateTime dateCreatedAfter) {
        this.dateCreatedAfter = dateCreatedAfter;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DateCreatedBefore")
    public OffsetDateTime dateCreatedBefore;
    public FetchVerificationAttemptsSummaryQueryParams withDateCreatedBefore(OffsetDateTime dateCreatedBefore) {
        this.dateCreatedBefore = dateCreatedBefore;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DestinationPrefix")
    public String destinationPrefix;
    public FetchVerificationAttemptsSummaryQueryParams withDestinationPrefix(String destinationPrefix) {
        this.destinationPrefix = destinationPrefix;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=VerifyServiceSid")
    public String verifyServiceSid;
    public FetchVerificationAttemptsSummaryQueryParams withVerifyServiceSid(String verifyServiceSid) {
        this.verifyServiceSid = verifyServiceSid;
        return this;
    }
}