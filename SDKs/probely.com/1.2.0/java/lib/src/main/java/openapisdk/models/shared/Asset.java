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
 * Asset
 * Secondary domain of a target
**/
public class Asset {
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("changed")
    public OffsetDateTime changed;
    public Asset withChanged(OffsetDateTime changed) {
        this.changed = changed;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("changed_by")
    public ChangedBy changedBy;
    public Asset withChangedBy(ChangedBy changedBy) {
        this.changedBy = changedBy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cookies")
    public Cookies[] cookies;
    public Asset withCookies(Cookies[] cookies) {
        this.cookies = cookies;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("desc")
    public String desc;
    public Asset withDesc(String desc) {
        this.desc = desc;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("headers")
    public Headers[] headers;
    public Asset withHeaders(Headers[] headers) {
        this.headers = headers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("host")
    public String host;
    public Asset withHost(String host) {
        this.host = host;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public Asset withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("include")
    public Boolean include;
    public Asset withInclude(Boolean include) {
        this.include = include;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public Asset withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("stack")
    public String[] stack;
    public Asset withStack(String[] stack) {
        this.stack = stack;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("verification_date")
    public OffsetDateTime verificationDate;
    public Asset withVerificationDate(OffsetDateTime verificationDate) {
        this.verificationDate = verificationDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("verification_last_error")
    public String verificationLastError;
    public Asset withVerificationLastError(String verificationLastError) {
        this.verificationLastError = verificationLastError;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("verification_method")
    public VerificationMethodEnum verificationMethod;
    public Asset withVerificationMethod(VerificationMethodEnum verificationMethod) {
        this.verificationMethod = verificationMethod;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("verification_token")
    public String verificationToken;
    public Asset withVerificationToken(String verificationToken) {
        this.verificationToken = verificationToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("verified")
    public Boolean verified;
    public Asset withVerified(Boolean verified) {
        this.verified = verified;
        return this;
    }
}