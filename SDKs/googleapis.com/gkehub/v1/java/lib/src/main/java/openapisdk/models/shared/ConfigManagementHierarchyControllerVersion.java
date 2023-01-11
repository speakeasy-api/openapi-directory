package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ConfigManagementHierarchyControllerVersion
 * Version for Hierarchy Controller
**/
public class ConfigManagementHierarchyControllerVersion {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("extension")
    public String extension;
    public ConfigManagementHierarchyControllerVersion withExtension(String extension) {
        this.extension = extension;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hnc")
    public String hnc;
    public ConfigManagementHierarchyControllerVersion withHnc(String hnc) {
        this.hnc = hnc;
        return this;
    }
}