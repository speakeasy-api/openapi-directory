package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Apk
 * An Android package file to install.
**/
public class Apk {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("location")
    public FileReference location;
    public Apk withLocation(FileReference location) {
        this.location = location;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("packageName")
    public String packageName;
    public Apk withPackageName(String packageName) {
        this.packageName = packageName;
        return this;
    }
}