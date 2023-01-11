package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class OrganizationNameList {
    @JsonProperty("name")
    public String name;
    public OrganizationNameList withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("org_guid")
    public String orgGuid;
    public OrganizationNameList withOrgGuid(String orgGuid) {
        this.orgGuid = orgGuid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("org_verbose_name")
    public String orgVerboseName;
    public OrganizationNameList withOrgVerboseName(String orgVerboseName) {
        this.orgVerboseName = orgVerboseName;
        return this;
    }
}