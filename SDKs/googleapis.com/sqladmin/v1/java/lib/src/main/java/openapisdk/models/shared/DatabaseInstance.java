package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DatabaseInstance
 * A Cloud SQL instance resource.
**/
public class DatabaseInstance {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("availableMaintenanceVersions")
    public String[] availableMaintenanceVersions;
    public DatabaseInstance withAvailableMaintenanceVersions(String[] availableMaintenanceVersions) {
        this.availableMaintenanceVersions = availableMaintenanceVersions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("backendType")
    public DatabaseInstanceBackendTypeEnum backendType;
    public DatabaseInstance withBackendType(DatabaseInstanceBackendTypeEnum backendType) {
        this.backendType = backendType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("connectionName")
    public String connectionName;
    public DatabaseInstance withConnectionName(String connectionName) {
        this.connectionName = connectionName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("createTime")
    public String createTime;
    public DatabaseInstance withCreateTime(String createTime) {
        this.createTime = createTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("currentDiskSize")
    public String currentDiskSize;
    public DatabaseInstance withCurrentDiskSize(String currentDiskSize) {
        this.currentDiskSize = currentDiskSize;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("databaseInstalledVersion")
    public String databaseInstalledVersion;
    public DatabaseInstance withDatabaseInstalledVersion(String databaseInstalledVersion) {
        this.databaseInstalledVersion = databaseInstalledVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("databaseVersion")
    public DatabaseInstanceDatabaseVersionEnum databaseVersion;
    public DatabaseInstance withDatabaseVersion(DatabaseInstanceDatabaseVersionEnum databaseVersion) {
        this.databaseVersion = databaseVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("diskEncryptionConfiguration")
    public DiskEncryptionConfiguration diskEncryptionConfiguration;
    public DatabaseInstance withDiskEncryptionConfiguration(DiskEncryptionConfiguration diskEncryptionConfiguration) {
        this.diskEncryptionConfiguration = diskEncryptionConfiguration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("diskEncryptionStatus")
    public DiskEncryptionStatus diskEncryptionStatus;
    public DatabaseInstance withDiskEncryptionStatus(DiskEncryptionStatus diskEncryptionStatus) {
        this.diskEncryptionStatus = diskEncryptionStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("etag")
    public String etag;
    public DatabaseInstance withEtag(String etag) {
        this.etag = etag;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("failoverReplica")
    public DatabaseInstanceFailoverReplica failoverReplica;
    public DatabaseInstance withFailoverReplica(DatabaseInstanceFailoverReplica failoverReplica) {
        this.failoverReplica = failoverReplica;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gceZone")
    public String gceZone;
    public DatabaseInstance withGceZone(String gceZone) {
        this.gceZone = gceZone;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("instanceType")
    public DatabaseInstanceInstanceTypeEnum instanceType;
    public DatabaseInstance withInstanceType(DatabaseInstanceInstanceTypeEnum instanceType) {
        this.instanceType = instanceType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ipAddresses")
    public IpMapping[] ipAddresses;
    public DatabaseInstance withIpAddresses(IpMapping[] ipAddresses) {
        this.ipAddresses = ipAddresses;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ipv6Address")
    public String ipv6Address;
    public DatabaseInstance withIpv6Address(String ipv6Address) {
        this.ipv6Address = ipv6Address;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public DatabaseInstance withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maintenanceVersion")
    public String maintenanceVersion;
    public DatabaseInstance withMaintenanceVersion(String maintenanceVersion) {
        this.maintenanceVersion = maintenanceVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("masterInstanceName")
    public String masterInstanceName;
    public DatabaseInstance withMasterInstanceName(String masterInstanceName) {
        this.masterInstanceName = masterInstanceName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxDiskSize")
    public String maxDiskSize;
    public DatabaseInstance withMaxDiskSize(String maxDiskSize) {
        this.maxDiskSize = maxDiskSize;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public DatabaseInstance withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("onPremisesConfiguration")
    public OnPremisesConfiguration onPremisesConfiguration;
    public DatabaseInstance withOnPremisesConfiguration(OnPremisesConfiguration onPremisesConfiguration) {
        this.onPremisesConfiguration = onPremisesConfiguration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("outOfDiskReport")
    public SqlOutOfDiskReport outOfDiskReport;
    public DatabaseInstance withOutOfDiskReport(SqlOutOfDiskReport outOfDiskReport) {
        this.outOfDiskReport = outOfDiskReport;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("project")
    public String project;
    public DatabaseInstance withProject(String project) {
        this.project = project;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("region")
    public String region;
    public DatabaseInstance withRegion(String region) {
        this.region = region;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("replicaConfiguration")
    public ReplicaConfiguration replicaConfiguration;
    public DatabaseInstance withReplicaConfiguration(ReplicaConfiguration replicaConfiguration) {
        this.replicaConfiguration = replicaConfiguration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("replicaNames")
    public String[] replicaNames;
    public DatabaseInstance withReplicaNames(String[] replicaNames) {
        this.replicaNames = replicaNames;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rootPassword")
    public String rootPassword;
    public DatabaseInstance withRootPassword(String rootPassword) {
        this.rootPassword = rootPassword;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("satisfiesPzs")
    public Boolean satisfiesPzs;
    public DatabaseInstance withSatisfiesPzs(Boolean satisfiesPzs) {
        this.satisfiesPzs = satisfiesPzs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("scheduledMaintenance")
    public SqlScheduledMaintenance scheduledMaintenance;
    public DatabaseInstance withScheduledMaintenance(SqlScheduledMaintenance scheduledMaintenance) {
        this.scheduledMaintenance = scheduledMaintenance;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("secondaryGceZone")
    public String secondaryGceZone;
    public DatabaseInstance withSecondaryGceZone(String secondaryGceZone) {
        this.secondaryGceZone = secondaryGceZone;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("selfLink")
    public String selfLink;
    public DatabaseInstance withSelfLink(String selfLink) {
        this.selfLink = selfLink;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("serverCaCert")
    public SslCert serverCaCert;
    public DatabaseInstance withServerCaCert(SslCert serverCaCert) {
        this.serverCaCert = serverCaCert;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("serviceAccountEmailAddress")
    public String serviceAccountEmailAddress;
    public DatabaseInstance withServiceAccountEmailAddress(String serviceAccountEmailAddress) {
        this.serviceAccountEmailAddress = serviceAccountEmailAddress;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("settings")
    public Settings settings;
    public DatabaseInstance withSettings(Settings settings) {
        this.settings = settings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("state")
    public DatabaseInstanceStateEnum state;
    public DatabaseInstance withState(DatabaseInstanceStateEnum state) {
        this.state = state;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("suspensionReason")
    public DatabaseInstanceSuspensionReasonEnum[] suspensionReason;
    public DatabaseInstance withSuspensionReason(DatabaseInstanceSuspensionReasonEnum[] suspensionReason) {
        this.suspensionReason = suspensionReason;
        return this;
    }
}