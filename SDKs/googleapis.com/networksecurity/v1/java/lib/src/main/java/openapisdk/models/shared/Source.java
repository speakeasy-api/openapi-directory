package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Source
 * Specification of traffic source attributes.
**/
public class Source {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ipBlocks")
    public String[] ipBlocks;
    public Source withIpBlocks(String[] ipBlocks) {
        this.ipBlocks = ipBlocks;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("principals")
    public String[] principals;
    public Source withPrincipals(String[] principals) {
        this.principals = principals;
        return this;
    }
}