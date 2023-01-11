package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AndroidVersion
 * A version of the Android OS.
**/
public class AndroidVersion {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("apiLevel")
    public Integer apiLevel;
    public AndroidVersion withApiLevel(Integer apiLevel) {
        this.apiLevel = apiLevel;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("codeName")
    public String codeName;
    public AndroidVersion withCodeName(String codeName) {
        this.codeName = codeName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("distribution")
    public Distribution distribution;
    public AndroidVersion withDistribution(Distribution distribution) {
        this.distribution = distribution;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public AndroidVersion withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("releaseDate")
    public Date releaseDate;
    public AndroidVersion withReleaseDate(Date releaseDate) {
        this.releaseDate = releaseDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public String[] tags;
    public AndroidVersion withTags(String[] tags) {
        this.tags = tags;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("versionString")
    public String versionString;
    public AndroidVersion withVersionString(String versionString) {
        this.versionString = versionString;
        return this;
    }
}