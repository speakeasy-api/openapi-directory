package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

/**
 * LinkTokenCreateRequestUser
 * An object specifying information about the end user who will be linking their account.
**/
public class LinkTokenCreateRequestUser {
    @JsonProperty("client_user_id")
    public String clientUserId;
    public LinkTokenCreateRequestUser withClientUserId(String clientUserId) {
        this.clientUserId = clientUserId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("date_of_birth")
    public OffsetDateTime dateOfBirth;
    public LinkTokenCreateRequestUser withDateOfBirth(OffsetDateTime dateOfBirth) {
        this.dateOfBirth = dateOfBirth;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("email_address")
    public String emailAddress;
    public LinkTokenCreateRequestUser withEmailAddress(String emailAddress) {
        this.emailAddress = emailAddress;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("email_address_verified_time")
    public OffsetDateTime emailAddressVerifiedTime;
    public LinkTokenCreateRequestUser withEmailAddressVerifiedTime(OffsetDateTime emailAddressVerifiedTime) {
        this.emailAddressVerifiedTime = emailAddressVerifiedTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("legal_name")
    public String legalName;
    public LinkTokenCreateRequestUser withLegalName(String legalName) {
        this.legalName = legalName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("phone_number")
    public String phoneNumber;
    public LinkTokenCreateRequestUser withPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("phone_number_verified_time")
    public OffsetDateTime phoneNumberVerifiedTime;
    public LinkTokenCreateRequestUser withPhoneNumberVerifiedTime(OffsetDateTime phoneNumberVerifiedTime) {
        this.phoneNumberVerifiedTime = phoneNumberVerifiedTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ssn")
    public String ssn;
    public LinkTokenCreateRequestUser withSsn(String ssn) {
        this.ssn = ssn;
        return this;
    }
}