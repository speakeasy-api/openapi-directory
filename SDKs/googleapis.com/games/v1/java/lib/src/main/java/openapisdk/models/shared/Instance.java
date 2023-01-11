package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Instance
 * The Instance resource.
**/
public class Instance {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("acquisitionUri")
    public String acquisitionUri;
    public Instance withAcquisitionUri(String acquisitionUri) {
        this.acquisitionUri = acquisitionUri;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("androidInstance")
    public InstanceAndroidDetails androidInstance;
    public Instance withAndroidInstance(InstanceAndroidDetails androidInstance) {
        this.androidInstance = androidInstance;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("iosInstance")
    public InstanceIosDetails iosInstance;
    public Instance withIosInstance(InstanceIosDetails iosInstance) {
        this.iosInstance = iosInstance;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public Instance withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public Instance withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("platformType")
    public InstancePlatformTypeEnum platformType;
    public Instance withPlatformType(InstancePlatformTypeEnum platformType) {
        this.platformType = platformType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("realtimePlay")
    public Boolean realtimePlay;
    public Instance withRealtimePlay(Boolean realtimePlay) {
        this.realtimePlay = realtimePlay;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("turnBasedPlay")
    public Boolean turnBasedPlay;
    public Instance withTurnBasedPlay(Boolean turnBasedPlay) {
        this.turnBasedPlay = turnBasedPlay;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("webInstance")
    public InstanceWebDetails webInstance;
    public Instance withWebInstance(InstanceWebDetails webInstance) {
        this.webInstance = webInstance;
        return this;
    }
}