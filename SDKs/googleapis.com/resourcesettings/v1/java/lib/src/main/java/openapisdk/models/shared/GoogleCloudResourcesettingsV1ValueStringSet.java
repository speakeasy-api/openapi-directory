package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudResourcesettingsV1ValueStringSet
 * A string set value that can hold a set of strings. The maximum length of each string is 200 characters and there can be a maximum of 50 strings in the string set.
**/
public class GoogleCloudResourcesettingsV1ValueStringSet {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("values")
    public String[] values;
    public GoogleCloudResourcesettingsV1ValueStringSet withValues(String[] values) {
        this.values = values;
        return this;
    }
}