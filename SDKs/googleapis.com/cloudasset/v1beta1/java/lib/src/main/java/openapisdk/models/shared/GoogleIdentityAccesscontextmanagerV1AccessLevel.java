package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleIdentityAccesscontextmanagerV1AccessLevel
 * An `AccessLevel` is a label that can be applied to requests to Google Cloud services, along with a list of requirements necessary for the label to be applied.
**/
public class GoogleIdentityAccesscontextmanagerV1AccessLevel {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("basic")
    public GoogleIdentityAccesscontextmanagerV1BasicLevel basic;
    public GoogleIdentityAccesscontextmanagerV1AccessLevel withBasic(GoogleIdentityAccesscontextmanagerV1BasicLevel basic) {
        this.basic = basic;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("custom")
    public GoogleIdentityAccesscontextmanagerV1CustomLevel custom;
    public GoogleIdentityAccesscontextmanagerV1AccessLevel withCustom(GoogleIdentityAccesscontextmanagerV1CustomLevel custom) {
        this.custom = custom;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public GoogleIdentityAccesscontextmanagerV1AccessLevel withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public GoogleIdentityAccesscontextmanagerV1AccessLevel withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
    public String title;
    public GoogleIdentityAccesscontextmanagerV1AccessLevel withTitle(String title) {
        this.title = title;
        return this;
    }
}