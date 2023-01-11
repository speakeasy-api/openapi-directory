package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * V2Restrictions
 * Describes the restrictions on the key.
**/
public class V2Restrictions {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("androidKeyRestrictions")
    public V2AndroidKeyRestrictions androidKeyRestrictions;
    public V2Restrictions withAndroidKeyRestrictions(V2AndroidKeyRestrictions androidKeyRestrictions) {
        this.androidKeyRestrictions = androidKeyRestrictions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("apiTargets")
    public V2ApiTarget[] apiTargets;
    public V2Restrictions withApiTargets(V2ApiTarget[] apiTargets) {
        this.apiTargets = apiTargets;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("browserKeyRestrictions")
    public V2BrowserKeyRestrictions browserKeyRestrictions;
    public V2Restrictions withBrowserKeyRestrictions(V2BrowserKeyRestrictions browserKeyRestrictions) {
        this.browserKeyRestrictions = browserKeyRestrictions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("iosKeyRestrictions")
    public V2IosKeyRestrictions iosKeyRestrictions;
    public V2Restrictions withIosKeyRestrictions(V2IosKeyRestrictions iosKeyRestrictions) {
        this.iosKeyRestrictions = iosKeyRestrictions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("serverKeyRestrictions")
    public V2ServerKeyRestrictions serverKeyRestrictions;
    public V2Restrictions withServerKeyRestrictions(V2ServerKeyRestrictions serverKeyRestrictions) {
        this.serverKeyRestrictions = serverKeyRestrictions;
        return this;
    }
}