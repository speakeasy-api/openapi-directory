package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * InventoryWindowsQuickFixEngineeringPackage
 * Information related to a Quick Fix Engineering package. Fields are taken from Windows QuickFixEngineering Interface and match the source names: https://docs.microsoft.com/en-us/windows/win32/cimwin32prov/win32-quickfixengineering
**/
public class InventoryWindowsQuickFixEngineeringPackage {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("caption")
    public String caption;
    public InventoryWindowsQuickFixEngineeringPackage withCaption(String caption) {
        this.caption = caption;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public InventoryWindowsQuickFixEngineeringPackage withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hotFixId")
    public String hotFixId;
    public InventoryWindowsQuickFixEngineeringPackage withHotFixId(String hotFixId) {
        this.hotFixId = hotFixId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("installTime")
    public String installTime;
    public InventoryWindowsQuickFixEngineeringPackage withInstallTime(String installTime) {
        this.installTime = installTime;
        return this;
    }
}