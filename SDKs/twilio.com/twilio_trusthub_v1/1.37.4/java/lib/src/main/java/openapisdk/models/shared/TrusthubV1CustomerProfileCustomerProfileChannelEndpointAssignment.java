package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class TrusthubV1CustomerProfileCustomerProfileChannelEndpointAssignment {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("account_sid")
    public String accountSid;
    public TrusthubV1CustomerProfileCustomerProfileChannelEndpointAssignment withAccountSid(String accountSid) {
        this.accountSid = accountSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("channel_endpoint_sid")
    public String channelEndpointSid;
    public TrusthubV1CustomerProfileCustomerProfileChannelEndpointAssignment withChannelEndpointSid(String channelEndpointSid) {
        this.channelEndpointSid = channelEndpointSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("channel_endpoint_type")
    public String channelEndpointType;
    public TrusthubV1CustomerProfileCustomerProfileChannelEndpointAssignment withChannelEndpointType(String channelEndpointType) {
        this.channelEndpointType = channelEndpointType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customer_profile_sid")
    public String customerProfileSid;
    public TrusthubV1CustomerProfileCustomerProfileChannelEndpointAssignment withCustomerProfileSid(String customerProfileSid) {
        this.customerProfileSid = customerProfileSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("date_created")
    public OffsetDateTime dateCreated;
    public TrusthubV1CustomerProfileCustomerProfileChannelEndpointAssignment withDateCreated(OffsetDateTime dateCreated) {
        this.dateCreated = dateCreated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sid")
    public String sid;
    public TrusthubV1CustomerProfileCustomerProfileChannelEndpointAssignment withSid(String sid) {
        this.sid = sid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public TrusthubV1CustomerProfileCustomerProfileChannelEndpointAssignment withUrl(String url) {
        this.url = url;
        return this;
    }
}