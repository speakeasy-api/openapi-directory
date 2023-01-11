package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DatacenterConnectorInput
 * DatacenterConnector message describes a connector between the Source and GCP, which is installed on a vmware datacenter (an OVA vm installed by the user) to connect the Datacenter to GCP and support vm migration data transfer.
**/
public class DatacenterConnectorInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("availableVersions")
    public AvailableUpdates availableVersions;
    public DatacenterConnectorInput withAvailableVersions(AvailableUpdates availableVersions) {
        this.availableVersions = availableVersions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("error")
    public Status error;
    public DatacenterConnectorInput withError(Status error) {
        this.error = error;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("registrationId")
    public String registrationId;
    public DatacenterConnectorInput withRegistrationId(String registrationId) {
        this.registrationId = registrationId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("serviceAccount")
    public String serviceAccount;
    public DatacenterConnectorInput withServiceAccount(String serviceAccount) {
        this.serviceAccount = serviceAccount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("upgradeStatus")
    public UpgradeStatus upgradeStatus;
    public DatacenterConnectorInput withUpgradeStatus(UpgradeStatus upgradeStatus) {
        this.upgradeStatus = upgradeStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("version")
    public String version;
    public DatacenterConnectorInput withVersion(String version) {
        this.version = version;
        return this;
    }
}