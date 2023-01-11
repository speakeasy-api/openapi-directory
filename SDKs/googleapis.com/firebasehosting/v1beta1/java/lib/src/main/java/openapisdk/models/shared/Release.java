package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Release
 *  A `Release` is a particular [collection of configurations and files](sites.versions) that is set to be public at a particular time.
**/
public class Release {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("message")
    public String message;
    public Release withMessage(String message) {
        this.message = message;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public Release withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("releaseTime")
    public String releaseTime;
    public Release withReleaseTime(String releaseTime) {
        this.releaseTime = releaseTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("releaseUser")
    public ActingUser releaseUser;
    public Release withReleaseUser(ActingUser releaseUser) {
        this.releaseUser = releaseUser;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public ReleaseTypeEnum type;
    public Release withType(ReleaseTypeEnum type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("version")
    public Version version;
    public Release withVersion(Version version) {
        this.version = version;
        return this;
    }
}