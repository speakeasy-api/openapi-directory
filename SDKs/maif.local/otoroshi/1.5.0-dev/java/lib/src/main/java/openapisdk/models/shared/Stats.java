package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * Stats
 * Live stats for a service or globally
**/
public class Stats {
    @JsonProperty("calls")
    public Long calls;
    public Stats withCalls(Long calls) {
        this.calls = calls;
        return this;
    }
    @JsonProperty("concurrentHandledRequests")
    public Long concurrentHandledRequests;
    public Stats withConcurrentHandledRequests(Long concurrentHandledRequests) {
        this.concurrentHandledRequests = concurrentHandledRequests;
        return this;
    }
    @JsonProperty("dataIn")
    public Long dataIn;
    public Stats withDataIn(Long dataIn) {
        this.dataIn = dataIn;
        return this;
    }
    @JsonProperty("dataInRate")
    public Double dataInRate;
    public Stats withDataInRate(Double dataInRate) {
        this.dataInRate = dataInRate;
        return this;
    }
    @JsonProperty("dataOut")
    public Long dataOut;
    public Stats withDataOut(Long dataOut) {
        this.dataOut = dataOut;
        return this;
    }
    @JsonProperty("dataOutRate")
    public Double dataOutRate;
    public Stats withDataOutRate(Double dataOutRate) {
        this.dataOutRate = dataOutRate;
        return this;
    }
    @JsonProperty("duration")
    public Double duration;
    public Stats withDuration(Double duration) {
        this.duration = duration;
        return this;
    }
    @JsonProperty("overhead")
    public Double overhead;
    public Stats withOverhead(Double overhead) {
        this.overhead = overhead;
        return this;
    }
    @JsonProperty("rate")
    public Double rate;
    public Stats withRate(Double rate) {
        this.rate = rate;
        return this;
    }
}