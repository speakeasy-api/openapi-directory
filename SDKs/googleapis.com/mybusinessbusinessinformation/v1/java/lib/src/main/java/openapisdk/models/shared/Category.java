package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Category
 * A category describing what this business is (not what it does). For a list of valid category IDs, and the mappings to their human-readable names, see `categories.list`.
**/
public class Category {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayName")
    public String displayName;
    public Category withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("moreHoursTypes")
    public MoreHoursType[] moreHoursTypes;
    public Category withMoreHoursTypes(MoreHoursType[] moreHoursTypes) {
        this.moreHoursTypes = moreHoursTypes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public Category withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("serviceTypes")
    public ServiceType[] serviceTypes;
    public Category withServiceTypes(ServiceType[] serviceTypes) {
        this.serviceTypes = serviceTypes;
        return this;
    }
}