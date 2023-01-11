package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CidrBlock
 * CIDR block with an optional name.
**/
public class CidrBlock {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cidrBlock")
    public String cidrBlock;
    public CidrBlock withCidrBlock(String cidrBlock) {
        this.cidrBlock = cidrBlock;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayName")
    public String displayName;
    public CidrBlock withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
}