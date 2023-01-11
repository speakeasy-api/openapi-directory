package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class NodeFullProcessors {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("arch")
    public String arch;
    public NodeFullProcessors withArch(String arch) {
        this.arch = arch;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("core")
    public Long core;
    public NodeFullProcessors withCore(Long core) {
        this.core = core;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cpuid")
    public String cpuid;
    public NodeFullProcessors withCpuid(String cpuid) {
        this.cpuid = cpuid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public NodeFullProcessors withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("externalClock")
    public String externalClock;
    public NodeFullProcessors withExternalClock(String externalClock) {
        this.externalClock = externalClock;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("familyName")
    public String familyName;
    public NodeFullProcessors withFamilyName(String familyName) {
        this.familyName = familyName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("manufacturer")
    public String manufacturer;
    public NodeFullProcessors withManufacturer(String manufacturer) {
        this.manufacturer = manufacturer;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("model")
    public Long model;
    public NodeFullProcessors withModel(Long model) {
        this.model = model;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public NodeFullProcessors withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("quantity")
    public Long quantity;
    public NodeFullProcessors withQuantity(Long quantity) {
        this.quantity = quantity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("speed")
    public Long speed;
    public NodeFullProcessors withSpeed(Long speed) {
        this.speed = speed;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("stepping")
    public Long stepping;
    public NodeFullProcessors withStepping(Long stepping) {
        this.stepping = stepping;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("thread")
    public Long thread;
    public NodeFullProcessors withThread(Long thread) {
        this.thread = thread;
        return this;
    }
}