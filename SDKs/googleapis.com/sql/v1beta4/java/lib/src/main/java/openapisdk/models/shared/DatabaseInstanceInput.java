package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DatabaseInstanceInput
 * A Cloud SQL instance resource.
**/
public class DatabaseInstanceInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("availableMaintenanceVersions")
    public String[] availableMaintenanceVersions;
    public DatabaseInstanceInput withAvailableMaintenanceVersions(String[] availableMaintenanceVersions) {
        this.availableMaintenanceVersions = availableMaintenanceVersions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("backendType")
    public DatabaseInstanceBackendTypeEnum backendType;
    public DatabaseInstanceInput withBackendType(DatabaseInstanceBackendTypeEnum backendType) {
        this.backendType = backendType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("connectionName")
    public String connectionName;
    public DatabaseInstanceInput withConnectionName(String connectionName) {
        this.connectionName = connectionName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("currentDiskSize")
    public String currentDiskSize;
    public DatabaseInstanceInput withCurrentDiskSize(String currentDiskSize) {
        this.currentDiskSize = currentDiskSize;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("databaseVersion")
    public DatabaseInstanceDatabaseVersionEnum databaseVersion;
    public DatabaseInstanceInput withDatabaseVersion(DatabaseInstanceDatabaseVersionEnum databaseVersion) {
        this.databaseVersion = databaseVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("diskEncryptionConfiguration")
    public DiskEncryptionConfiguration diskEncryptionConfiguration;
    public DatabaseInstanceInput withDiskEncryptionConfiguration(DiskEncryptionConfiguration diskEncryptionConfiguration) {
        this.diskEncryptionConfiguration = diskEncryptionConfiguration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("diskEncryptionStatus")
    public DiskEncryptionStatus diskEncryptionStatus;
    public DatabaseInstanceInput withDiskEncryptionStatus(DiskEncryptionStatus diskEncryptionStatus) {
        this.diskEncryptionStatus = diskEncryptionStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("etag")
    public String etag;
    public DatabaseInstanceInput withEtag(String etag) {
        this.etag = etag;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("failoverReplica")
    public DatabaseInstanceFailoverReplica failoverReplica;
    public DatabaseInstanceInput withFailoverReplica(DatabaseInstanceFailoverReplica failoverReplica) {
        this.failoverReplica = failoverReplica;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gceZone")
    public String gceZone;
    public DatabaseInstanceInput withGceZone(String gceZone) {
        this.gceZone = gceZone;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("instanceType")
    public DatabaseInstanceInstanceTypeEnum instanceType;
    public DatabaseInstanceInput withInstanceType(DatabaseInstanceInstanceTypeEnum instanceType) {
        this.instanceType = instanceType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ipAddresses")
    public IpMapping[] ipAddresses;
    public DatabaseInstanceInput withIpAddresses(IpMapping[] ipAddresses) {
        this.ipAddresses = ipAddresses;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ipv6Address")
    public String ipv6Address;
    public DatabaseInstanceInput withIpv6Address(String ipv6Address) {
        this.ipv6Address = ipv6Address;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public DatabaseInstanceInput withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maintenanceVersion")
    public String maintenanceVersion;
    public DatabaseInstanceInput withMaintenanceVersion(String maintenanceVersion) {
        this.maintenanceVersion = maintenanceVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("masterInstanceName")
    public String masterInstanceName;
    public DatabaseInstanceInput withMasterInstanceName(String masterInstanceName) {
        this.masterInstanceName = masterInstanceName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxDiskSize")
    public String maxDiskSize;
    public DatabaseInstanceInput withMaxDiskSize(String maxDiskSize) {
        this.maxDiskSize = maxDiskSize;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public DatabaseInstanceInput withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("onPremisesConfiguration")
    public OnPremisesConfiguration onPremisesConfiguration;
    public DatabaseInstanceInput withOnPremisesConfiguration(OnPremisesConfiguration onPremisesConfiguration) {
        this.onPremisesConfiguration = onPremisesConfiguration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("outOfDiskReport")
    public SqlOutOfDiskReport outOfDiskReport;
    public DatabaseInstanceInput withOutOfDiskReport(SqlOutOfDiskReport outOfDiskReport) {
        this.outOfDiskReport = outOfDiskReport;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("project")
    public String project;
    public DatabaseInstanceInput withProject(String project) {
        this.project = project;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("region")
    public String region;
    public DatabaseInstanceInput withRegion(String region) {
        this.region = region;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("replicaConfiguration")
    public ReplicaConfiguration replicaConfiguration;
    public DatabaseInstanceInput withReplicaConfiguration(ReplicaConfiguration replicaConfiguration) {
        this.replicaConfiguration = replicaConfiguration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("replicaNames")
    public String[] replicaNames;
    public DatabaseInstanceInput withReplicaNames(String[] replicaNames) {
        this.replicaNames = replicaNames;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rootPassword")
    public String rootPassword;
    public DatabaseInstanceInput withRootPassword(String rootPassword) {
        this.rootPassword = rootPassword;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("satisfiesPzs")
    public Boolean satisfiesPzs;
    public DatabaseInstanceInput withSatisfiesPzs(Boolean satisfiesPzs) {
        this.satisfiesPzs = satisfiesPzs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("scheduledMaintenance")
    public SqlScheduledMaintenance scheduledMaintenance;
    public DatabaseInstanceInput withScheduledMaintenance(SqlScheduledMaintenance scheduledMaintenance) {
        this.scheduledMaintenance = scheduledMaintenance;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("secondaryGceZone")
    public String secondaryGceZone;
    public DatabaseInstanceInput withSecondaryGceZone(String secondaryGceZone) {
        this.secondaryGceZone = secondaryGceZone;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("selfLink")
    public String selfLink;
    public DatabaseInstanceInput withSelfLink(String selfLink) {
        this.selfLink = selfLink;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("serverCaCert")
    public SslCert serverCaCert;
    public DatabaseInstanceInput withServerCaCert(SslCert serverCaCert) {
        this.serverCaCert = serverCaCert;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("serviceAccountEmailAddress")
    public String serviceAccountEmailAddress;
    public DatabaseInstanceInput withServiceAccountEmailAddress(String serviceAccountEmailAddress) {
        this.serviceAccountEmailAddress = serviceAccountEmailAddress;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("settings")
    public Settings settings;
    public DatabaseInstanceInput withSettings(Settings settings) {
        this.settings = settings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("state")
    public DatabaseInstanceStateEnum state;
    public DatabaseInstanceInput withState(DatabaseInstanceStateEnum state) {
        this.state = state;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("suspensionReason")
    public DatabaseInstanceSuspensionReasonEnum[] suspensionReason;
    public DatabaseInstanceInput withSuspensionReason(DatabaseInstanceSuspensionReasonEnum[] suspensionReason) {
        this.suspensionReason = suspensionReason;
        return this;
    }
}