package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ConfigManagementConfigSyncVersion
 * Specific versioning information pertaining to ConfigSync's Pods
**/
public class ConfigManagementConfigSyncVersion {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("admissionWebhook")
    public String admissionWebhook;
    public ConfigManagementConfigSyncVersion withAdmissionWebhook(String admissionWebhook) {
        this.admissionWebhook = admissionWebhook;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gitSync")
    public String gitSync;
    public ConfigManagementConfigSyncVersion withGitSync(String gitSync) {
        this.gitSync = gitSync;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("importer")
    public String importer;
    public ConfigManagementConfigSyncVersion withImporter(String importer) {
        this.importer = importer;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("monitor")
    public String monitor;
    public ConfigManagementConfigSyncVersion withMonitor(String monitor) {
        this.monitor = monitor;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reconcilerManager")
    public String reconcilerManager;
    public ConfigManagementConfigSyncVersion withReconcilerManager(String reconcilerManager) {
        this.reconcilerManager = reconcilerManager;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rootReconciler")
    public String rootReconciler;
    public ConfigManagementConfigSyncVersion withRootReconciler(String rootReconciler) {
        this.rootReconciler = rootReconciler;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("syncer")
    public String syncer;
    public ConfigManagementConfigSyncVersion withSyncer(String syncer) {
        this.syncer = syncer;
        return this;
    }
}