package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CpuInfo {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cpuProcessor")
    public String cpuProcessor;
    public CpuInfo withCpuProcessor(String cpuProcessor) {
        this.cpuProcessor = cpuProcessor;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cpuSpeedInGhz")
    public Float cpuSpeedInGhz;
    public CpuInfo withCpuSpeedInGhz(Float cpuSpeedInGhz) {
        this.cpuSpeedInGhz = cpuSpeedInGhz;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("numberOfCores")
    public Integer numberOfCores;
    public CpuInfo withNumberOfCores(Integer numberOfCores) {
        this.numberOfCores = numberOfCores;
        return this;
    }
}