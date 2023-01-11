package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class LiasettingsCustomBatchResponseEntry {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("batchId")
    public Long batchId;
    public LiasettingsCustomBatchResponseEntry withBatchId(Long batchId) {
        this.batchId = batchId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("errors")
    public Errors errors;
    public LiasettingsCustomBatchResponseEntry withErrors(Errors errors) {
        this.errors = errors;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gmbAccounts")
    public GmbAccounts gmbAccounts;
    public LiasettingsCustomBatchResponseEntry withGmbAccounts(GmbAccounts gmbAccounts) {
        this.gmbAccounts = gmbAccounts;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public LiasettingsCustomBatchResponseEntry withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("liaSettings")
    public LiaSettings liaSettings;
    public LiasettingsCustomBatchResponseEntry withLiaSettings(LiaSettings liaSettings) {
        this.liaSettings = liaSettings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("posDataProviders")
    public PosDataProviders[] posDataProviders;
    public LiasettingsCustomBatchResponseEntry withPosDataProviders(PosDataProviders[] posDataProviders) {
        this.posDataProviders = posDataProviders;
        return this;
    }
}