package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListSettingsUpdateListSettingsUpdateResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public ListSettingsUpdateListSettingsUpdateResponseMeta meta;
    public ListSettingsUpdateListSettingsUpdateResponse withMeta(ListSettingsUpdateListSettingsUpdateResponseMeta meta) {
        this.meta = meta;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("settings_updates")
    public openapisdk.models.shared.SupersimV1SettingsUpdate[] settingsUpdates;
    public ListSettingsUpdateListSettingsUpdateResponse withSettingsUpdates(openapisdk.models.shared.SupersimV1SettingsUpdate[] settingsUpdates) {
        this.settingsUpdates = settingsUpdates;
        return this;
    }
}