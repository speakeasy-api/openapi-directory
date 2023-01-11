package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * InventoryWindowsUpdatePackageWindowsUpdateCategory
 * Categories specified by the Windows Update.
**/
public class InventoryWindowsUpdatePackageWindowsUpdateCategory {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public InventoryWindowsUpdatePackageWindowsUpdateCategory withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public InventoryWindowsUpdatePackageWindowsUpdateCategory withName(String name) {
        this.name = name;
        return this;
    }
}