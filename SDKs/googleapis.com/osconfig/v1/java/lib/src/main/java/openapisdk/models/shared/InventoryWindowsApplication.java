package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * InventoryWindowsApplication
 * Contains information about a Windows application that is retrieved from the Windows Registry. For more information about these fields, see: https://docs.microsoft.com/en-us/windows/win32/msi/uninstall-registry-key
**/
public class InventoryWindowsApplication {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayName")
    public String displayName;
    public InventoryWindowsApplication withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayVersion")
    public String displayVersion;
    public InventoryWindowsApplication withDisplayVersion(String displayVersion) {
        this.displayVersion = displayVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("helpLink")
    public String helpLink;
    public InventoryWindowsApplication withHelpLink(String helpLink) {
        this.helpLink = helpLink;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("installDate")
    public Date installDate;
    public InventoryWindowsApplication withInstallDate(Date installDate) {
        this.installDate = installDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("publisher")
    public String publisher;
    public InventoryWindowsApplication withPublisher(String publisher) {
        this.publisher = publisher;
        return this;
    }
}