package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * NodeFullManagementTechnologyDetails
 * Additional information about management technology
**/
public class NodeFullManagementTechnologyDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cfengineKeys")
    public String[] cfengineKeys;
    public NodeFullManagementTechnologyDetails withCfengineKeys(String[] cfengineKeys) {
        this.cfengineKeys = cfengineKeys;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cfengineUser")
    public String cfengineUser;
    public NodeFullManagementTechnologyDetails withCfengineUser(String cfengineUser) {
        this.cfengineUser = cfengineUser;
        return this;
    }
}