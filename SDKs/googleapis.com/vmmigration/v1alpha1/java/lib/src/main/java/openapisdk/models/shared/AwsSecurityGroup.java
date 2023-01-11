package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AwsSecurityGroup
 * AwsSecurityGroup describes a security group of an AWS VM.
**/
public class AwsSecurityGroup {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public AwsSecurityGroup withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public AwsSecurityGroup withName(String name) {
        this.name = name;
        return this;
    }
}