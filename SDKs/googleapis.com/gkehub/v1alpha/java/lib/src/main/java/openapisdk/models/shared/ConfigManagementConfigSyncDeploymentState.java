package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ConfigManagementConfigSyncDeploymentState
 * The state of ConfigSync's deployment on a cluster
**/
public class ConfigManagementConfigSyncDeploymentState {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("admissionWebhook")
    public ConfigManagementConfigSyncDeploymentStateAdmissionWebhookEnum admissionWebhook;
    public ConfigManagementConfigSyncDeploymentState withAdmissionWebhook(ConfigManagementConfigSyncDeploymentStateAdmissionWebhookEnum admissionWebhook) {
        this.admissionWebhook = admissionWebhook;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gitSync")
    public ConfigManagementConfigSyncDeploymentStateGitSyncEnum gitSync;
    public ConfigManagementConfigSyncDeploymentState withGitSync(ConfigManagementConfigSyncDeploymentStateGitSyncEnum gitSync) {
        this.gitSync = gitSync;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("importer")
    public ConfigManagementConfigSyncDeploymentStateImporterEnum importer;
    public ConfigManagementConfigSyncDeploymentState withImporter(ConfigManagementConfigSyncDeploymentStateImporterEnum importer) {
        this.importer = importer;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("monitor")
    public ConfigManagementConfigSyncDeploymentStateMonitorEnum monitor;
    public ConfigManagementConfigSyncDeploymentState withMonitor(ConfigManagementConfigSyncDeploymentStateMonitorEnum monitor) {
        this.monitor = monitor;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reconcilerManager")
    public ConfigManagementConfigSyncDeploymentStateReconcilerManagerEnum reconcilerManager;
    public ConfigManagementConfigSyncDeploymentState withReconcilerManager(ConfigManagementConfigSyncDeploymentStateReconcilerManagerEnum reconcilerManager) {
        this.reconcilerManager = reconcilerManager;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rootReconciler")
    public ConfigManagementConfigSyncDeploymentStateRootReconcilerEnum rootReconciler;
    public ConfigManagementConfigSyncDeploymentState withRootReconciler(ConfigManagementConfigSyncDeploymentStateRootReconcilerEnum rootReconciler) {
        this.rootReconciler = rootReconciler;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("syncer")
    public ConfigManagementConfigSyncDeploymentStateSyncerEnum syncer;
    public ConfigManagementConfigSyncDeploymentState withSyncer(ConfigManagementConfigSyncDeploymentStateSyncerEnum syncer) {
        this.syncer = syncer;
        return this;
    }
}