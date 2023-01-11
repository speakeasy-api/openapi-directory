package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * InventorySoftwarePackage
 * Software package information of the operating system.
**/
public class InventorySoftwarePackage {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("aptPackage")
    public InventoryVersionedPackage aptPackage;
    public InventorySoftwarePackage withAptPackage(InventoryVersionedPackage aptPackage) {
        this.aptPackage = aptPackage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cosPackage")
    public InventoryVersionedPackage cosPackage;
    public InventorySoftwarePackage withCosPackage(InventoryVersionedPackage cosPackage) {
        this.cosPackage = cosPackage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("googetPackage")
    public InventoryVersionedPackage googetPackage;
    public InventorySoftwarePackage withGoogetPackage(InventoryVersionedPackage googetPackage) {
        this.googetPackage = googetPackage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("qfePackage")
    public InventoryWindowsQuickFixEngineeringPackage qfePackage;
    public InventorySoftwarePackage withQfePackage(InventoryWindowsQuickFixEngineeringPackage qfePackage) {
        this.qfePackage = qfePackage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("windowsApplication")
    public InventoryWindowsApplication windowsApplication;
    public InventorySoftwarePackage withWindowsApplication(InventoryWindowsApplication windowsApplication) {
        this.windowsApplication = windowsApplication;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("wuaPackage")
    public InventoryWindowsUpdatePackage wuaPackage;
    public InventorySoftwarePackage withWuaPackage(InventoryWindowsUpdatePackage wuaPackage) {
        this.wuaPackage = wuaPackage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("yumPackage")
    public InventoryVersionedPackage yumPackage;
    public InventorySoftwarePackage withYumPackage(InventoryVersionedPackage yumPackage) {
        this.yumPackage = yumPackage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("zypperPackage")
    public InventoryVersionedPackage zypperPackage;
    public InventorySoftwarePackage withZypperPackage(InventoryVersionedPackage zypperPackage) {
        this.zypperPackage = zypperPackage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("zypperPatch")
    public InventoryZypperPatch zypperPatch;
    public InventorySoftwarePackage withZypperPatch(InventoryZypperPatch zypperPatch) {
        this.zypperPatch = zypperPatch;
        return this;
    }
}