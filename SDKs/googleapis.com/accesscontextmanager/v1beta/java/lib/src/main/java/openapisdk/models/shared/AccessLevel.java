package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AccessLevel
 * An `AccessLevel` is a label that can be applied to requests to Google Cloud services, along with a list of requirements necessary for the label to be applied.
**/
public class AccessLevel {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("basic")
    public BasicLevel basic;
    public AccessLevel withBasic(BasicLevel basic) {
        this.basic = basic;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("custom")
    public CustomLevel custom;
    public AccessLevel withCustom(CustomLevel custom) {
        this.custom = custom;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public AccessLevel withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public AccessLevel withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
    public String title;
    public AccessLevel withTitle(String title) {
        this.title = title;
        return this;
    }
}