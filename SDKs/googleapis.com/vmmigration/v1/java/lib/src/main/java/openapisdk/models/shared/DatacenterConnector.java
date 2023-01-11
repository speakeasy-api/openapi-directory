package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DatacenterConnector
 * DatacenterConnector message describes a connector between the Source and GCP, which is installed on a vmware datacenter (an OVA vm installed by the user) to connect the Datacenter to GCP and support vm migration data transfer.
**/
public class DatacenterConnector {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("applianceInfrastructureVersion")
    public String applianceInfrastructureVersion;
    public DatacenterConnector withApplianceInfrastructureVersion(String applianceInfrastructureVersion) {
        this.applianceInfrastructureVersion = applianceInfrastructureVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("applianceSoftwareVersion")
    public String applianceSoftwareVersion;
    public DatacenterConnector withApplianceSoftwareVersion(String applianceSoftwareVersion) {
        this.applianceSoftwareVersion = applianceSoftwareVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("availableVersions")
    public AvailableUpdates availableVersions;
    public DatacenterConnector withAvailableVersions(AvailableUpdates availableVersions) {
        this.availableVersions = availableVersions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bucket")
    public String bucket;
    public DatacenterConnector withBucket(String bucket) {
        this.bucket = bucket;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("createTime")
    public String createTime;
    public DatacenterConnector withCreateTime(String createTime) {
        this.createTime = createTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("error")
    public Status error;
    public DatacenterConnector withError(Status error) {
        this.error = error;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public DatacenterConnector withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("registrationId")
    public String registrationId;
    public DatacenterConnector withRegistrationId(String registrationId) {
        this.registrationId = registrationId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("serviceAccount")
    public String serviceAccount;
    public DatacenterConnector withServiceAccount(String serviceAccount) {
        this.serviceAccount = serviceAccount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("state")
    public DatacenterConnectorStateEnum state;
    public DatacenterConnector withState(DatacenterConnectorStateEnum state) {
        this.state = state;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("stateTime")
    public String stateTime;
    public DatacenterConnector withStateTime(String stateTime) {
        this.stateTime = stateTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updateTime")
    public String updateTime;
    public DatacenterConnector withUpdateTime(String updateTime) {
        this.updateTime = updateTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("upgradeStatus")
    public UpgradeStatus upgradeStatus;
    public DatacenterConnector withUpgradeStatus(UpgradeStatus upgradeStatus) {
        this.upgradeStatus = upgradeStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("version")
    public String version;
    public DatacenterConnector withVersion(String version) {
        this.version = version;
        return this;
    }
}