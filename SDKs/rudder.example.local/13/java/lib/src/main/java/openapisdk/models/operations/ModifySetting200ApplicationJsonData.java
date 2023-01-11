package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ModifySetting200ApplicationJsonData
 * Information about the setting
**/
public class ModifySetting200ApplicationJsonData {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("settingId")
    public String settingId;
    public ModifySetting200ApplicationJsonData withSettingId(String settingId) {
        this.settingId = settingId;
        return this;
    }
}