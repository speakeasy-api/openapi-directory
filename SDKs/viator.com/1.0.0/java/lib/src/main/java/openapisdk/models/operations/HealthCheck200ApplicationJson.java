package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class HealthCheck200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allGood")
    public Boolean allGood;
    public HealthCheck200ApplicationJson withAllGood(Boolean allGood) {
        this.allGood = allGood;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("capiOk")
    public Boolean capiOk;
    public HealthCheck200ApplicationJson withCapiOk(Boolean capiOk) {
        this.capiOk = capiOk;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dbOk")
    public Boolean dbOk;
    public HealthCheck200ApplicationJson withDbOk(Boolean dbOk) {
        this.dbOk = dbOk;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("memcachedOk")
    public Boolean memcachedOk;
    public HealthCheck200ApplicationJson withMemcachedOk(Boolean memcachedOk) {
        this.memcachedOk = memcachedOk;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("message")
    public String message;
    public HealthCheck200ApplicationJson withMessage(String message) {
        this.message = message;
        return this;
    }
}