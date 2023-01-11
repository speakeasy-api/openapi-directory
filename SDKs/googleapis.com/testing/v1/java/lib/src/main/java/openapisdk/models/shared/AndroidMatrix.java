package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AndroidMatrix
 * A set of Android device configuration permutations is defined by the the cross-product of the given axes. Internally, the given AndroidMatrix will be expanded into a set of AndroidDevices. Only supported permutations will be instantiated. Invalid permutations (e.g., incompatible models/versions) are ignored.
**/
public class AndroidMatrix {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("androidModelIds")
    public String[] androidModelIds;
    public AndroidMatrix withAndroidModelIds(String[] androidModelIds) {
        this.androidModelIds = androidModelIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("androidVersionIds")
    public String[] androidVersionIds;
    public AndroidMatrix withAndroidVersionIds(String[] androidVersionIds) {
        this.androidVersionIds = androidVersionIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("locales")
    public String[] locales;
    public AndroidMatrix withLocales(String[] locales) {
        this.locales = locales;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("orientations")
    public String[] orientations;
    public AndroidMatrix withOrientations(String[] orientations) {
        this.orientations = orientations;
        return this;
    }
}