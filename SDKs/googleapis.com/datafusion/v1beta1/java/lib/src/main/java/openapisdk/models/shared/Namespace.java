package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Namespace
 * Represents the information of a namespace
**/
public class Namespace {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("iamPolicy")
    public IamPolicy iamPolicy;
    public Namespace withIamPolicy(IamPolicy iamPolicy) {
        this.iamPolicy = iamPolicy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public Namespace withName(String name) {
        this.name = name;
        return this;
    }
}