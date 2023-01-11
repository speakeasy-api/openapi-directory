package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudResourcesettingsV1ValueStringMap
 * A string->string map value that can hold a map of string keys to string values. The maximum length of each string is 200 characters and there can be a maximum of 50 key-value pairs in the map.
**/
public class GoogleCloudResourcesettingsV1ValueStringMap {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mappings")
    public java.util.Map<String, String> mappings;
    public GoogleCloudResourcesettingsV1ValueStringMap withMappings(java.util.Map<String, String> mappings) {
        this.mappings = mappings;
        return this;
    }
}