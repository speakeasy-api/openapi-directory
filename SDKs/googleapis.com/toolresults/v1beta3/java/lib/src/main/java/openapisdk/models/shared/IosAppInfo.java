package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * IosAppInfo
 * iOS app information
**/
public class IosAppInfo {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public IosAppInfo withName(String name) {
        this.name = name;
        return this;
    }
}