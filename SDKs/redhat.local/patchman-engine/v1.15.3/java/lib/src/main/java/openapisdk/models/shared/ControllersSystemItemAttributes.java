package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ControllersSystemItemAttributes {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("created")
    public String created;
    public ControllersSystemItemAttributes withCreated(String created) {
        this.created = created;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("culled_timestamp")
    public String culledTimestamp;
    public ControllersSystemItemAttributes withCulledTimestamp(String culledTimestamp) {
        this.culledTimestamp = culledTimestamp;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("display_name")
    public String displayName;
    public ControllersSystemItemAttributes withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("insights_id")
    public String insightsId;
    public ControllersSystemItemAttributes withInsightsId(String insightsId) {
        this.insightsId = insightsId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("last_evaluation")
    public String lastEvaluation;
    public ControllersSystemItemAttributes withLastEvaluation(String lastEvaluation) {
        this.lastEvaluation = lastEvaluation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("last_upload")
    public String lastUpload;
    public ControllersSystemItemAttributes withLastUpload(String lastUpload) {
        this.lastUpload = lastUpload;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("os_major")
    public String osMajor;
    public ControllersSystemItemAttributes withOsMajor(String osMajor) {
        this.osMajor = osMajor;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("os_minor")
    public String osMinor;
    public ControllersSystemItemAttributes withOsMinor(String osMinor) {
        this.osMinor = osMinor;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("os_name")
    public String osName;
    public ControllersSystemItemAttributes withOsName(String osName) {
        this.osName = osName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("other_count")
    public Long otherCount;
    public ControllersSystemItemAttributes withOtherCount(Long otherCount) {
        this.otherCount = otherCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("packages_installed")
    public Long packagesInstalled;
    public ControllersSystemItemAttributes withPackagesInstalled(Long packagesInstalled) {
        this.packagesInstalled = packagesInstalled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("packages_updatable")
    public Long packagesUpdatable;
    public ControllersSystemItemAttributes withPackagesUpdatable(Long packagesUpdatable) {
        this.packagesUpdatable = packagesUpdatable;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rhba_count")
    public Long rhbaCount;
    public ControllersSystemItemAttributes withRhbaCount(Long rhbaCount) {
        this.rhbaCount = rhbaCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rhea_count")
    public Long rheaCount;
    public ControllersSystemItemAttributes withRheaCount(Long rheaCount) {
        this.rheaCount = rheaCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rhsa_count")
    public Long rhsaCount;
    public ControllersSystemItemAttributes withRhsaCount(Long rhsaCount) {
        this.rhsaCount = rhsaCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rhsm")
    public String rhsm;
    public ControllersSystemItemAttributes withRhsm(String rhsm) {
        this.rhsm = rhsm;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("stale")
    public Boolean stale;
    public ControllersSystemItemAttributes withStale(Boolean stale) {
        this.stale = stale;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("stale_timestamp")
    public String staleTimestamp;
    public ControllersSystemItemAttributes withStaleTimestamp(String staleTimestamp) {
        this.staleTimestamp = staleTimestamp;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("stale_warning_timestamp")
    public String staleWarningTimestamp;
    public ControllersSystemItemAttributes withStaleWarningTimestamp(String staleWarningTimestamp) {
        this.staleWarningTimestamp = staleWarningTimestamp;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("third_party")
    public Boolean thirdParty;
    public ControllersSystemItemAttributes withThirdParty(Boolean thirdParty) {
        this.thirdParty = thirdParty;
        return this;
    }
}