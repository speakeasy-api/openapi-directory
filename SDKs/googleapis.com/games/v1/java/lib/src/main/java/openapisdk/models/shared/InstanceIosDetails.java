package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * InstanceIosDetails
 * The iOS details resource.
**/
public class InstanceIosDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bundleIdentifier")
    public String bundleIdentifier;
    public InstanceIosDetails withBundleIdentifier(String bundleIdentifier) {
        this.bundleIdentifier = bundleIdentifier;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("itunesAppId")
    public String itunesAppId;
    public InstanceIosDetails withItunesAppId(String itunesAppId) {
        this.itunesAppId = itunesAppId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public InstanceIosDetails withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("preferredForIpad")
    public Boolean preferredForIpad;
    public InstanceIosDetails withPreferredForIpad(Boolean preferredForIpad) {
        this.preferredForIpad = preferredForIpad;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("preferredForIphone")
    public Boolean preferredForIphone;
    public InstanceIosDetails withPreferredForIphone(Boolean preferredForIphone) {
        this.preferredForIphone = preferredForIphone;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("supportIpad")
    public Boolean supportIpad;
    public InstanceIosDetails withSupportIpad(Boolean supportIpad) {
        this.supportIpad = supportIpad;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("supportIphone")
    public Boolean supportIphone;
    public InstanceIosDetails withSupportIphone(Boolean supportIphone) {
        this.supportIphone = supportIphone;
        return this;
    }
}