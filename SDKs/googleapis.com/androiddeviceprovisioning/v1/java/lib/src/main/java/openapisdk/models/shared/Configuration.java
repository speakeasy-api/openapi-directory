package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Configuration
 * A configuration collects the provisioning options for Android devices. Each configuration combines the following: * The EMM device policy controller (DPC) installed on the devices. * EMM policies enforced on the devices. * Metadata displayed on the device to help users during setup. Customers can add as many configurations as they need. However, zero-touch enrollment works best when a customer sets a default configuration that's applied to any new devices the organization purchases.
**/
public class Configuration {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("companyName")
    public String companyName;
    public Configuration withCompanyName(String companyName) {
        this.companyName = companyName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("configurationId")
    public String configurationId;
    public Configuration withConfigurationId(String configurationId) {
        this.configurationId = configurationId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("configurationName")
    public String configurationName;
    public Configuration withConfigurationName(String configurationName) {
        this.configurationName = configurationName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contactEmail")
    public String contactEmail;
    public Configuration withContactEmail(String contactEmail) {
        this.contactEmail = contactEmail;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contactPhone")
    public String contactPhone;
    public Configuration withContactPhone(String contactPhone) {
        this.contactPhone = contactPhone;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customMessage")
    public String customMessage;
    public Configuration withCustomMessage(String customMessage) {
        this.customMessage = customMessage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dpcExtras")
    public String dpcExtras;
    public Configuration withDpcExtras(String dpcExtras) {
        this.dpcExtras = dpcExtras;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dpcResourcePath")
    public String dpcResourcePath;
    public Configuration withDpcResourcePath(String dpcResourcePath) {
        this.dpcResourcePath = dpcResourcePath;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isDefault")
    public Boolean isDefault;
    public Configuration withIsDefault(Boolean isDefault) {
        this.isDefault = isDefault;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public Configuration withName(String name) {
        this.name = name;
        return this;
    }
}