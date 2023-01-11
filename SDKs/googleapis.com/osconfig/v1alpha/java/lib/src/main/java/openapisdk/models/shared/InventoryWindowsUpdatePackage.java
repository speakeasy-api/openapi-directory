package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * InventoryWindowsUpdatePackage
 * Details related to a Windows Update package. Field data and names are taken from Windows Update API IUpdate Interface: https://docs.microsoft.com/en-us/windows/win32/api/_wua/ Descriptive fields like title, and description are localized based on the locale of the VM being updated.
**/
public class InventoryWindowsUpdatePackage {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("categories")
    public InventoryWindowsUpdatePackageWindowsUpdateCategory[] categories;
    public InventoryWindowsUpdatePackage withCategories(InventoryWindowsUpdatePackageWindowsUpdateCategory[] categories) {
        this.categories = categories;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public InventoryWindowsUpdatePackage withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kbArticleIds")
    public String[] kbArticleIds;
    public InventoryWindowsUpdatePackage withKbArticleIds(String[] kbArticleIds) {
        this.kbArticleIds = kbArticleIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lastDeploymentChangeTime")
    public String lastDeploymentChangeTime;
    public InventoryWindowsUpdatePackage withLastDeploymentChangeTime(String lastDeploymentChangeTime) {
        this.lastDeploymentChangeTime = lastDeploymentChangeTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("moreInfoUrls")
    public String[] moreInfoUrls;
    public InventoryWindowsUpdatePackage withMoreInfoUrls(String[] moreInfoUrls) {
        this.moreInfoUrls = moreInfoUrls;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("revisionNumber")
    public Integer revisionNumber;
    public InventoryWindowsUpdatePackage withRevisionNumber(Integer revisionNumber) {
        this.revisionNumber = revisionNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("supportUrl")
    public String supportUrl;
    public InventoryWindowsUpdatePackage withSupportUrl(String supportUrl) {
        this.supportUrl = supportUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
    public String title;
    public InventoryWindowsUpdatePackage withTitle(String title) {
        this.title = title;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updateId")
    public String updateId;
    public InventoryWindowsUpdatePackage withUpdateId(String updateId) {
        this.updateId = updateId;
        return this;
    }
}