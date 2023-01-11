package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Os {
    @JsonProperty("fullName")
    public String fullName;
    public Os withFullName(String fullName) {
        this.fullName = fullName;
        return this;
    }
    @JsonProperty("name")
    public OsNameEnum name;
    public Os withName(OsNameEnum name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("servicePack")
    public String servicePack;
    public Os withServicePack(String servicePack) {
        this.servicePack = servicePack;
        return this;
    }
    @JsonProperty("type")
    public OsTypeEnum type;
    public Os withType(OsTypeEnum type) {
        this.type = type;
        return this;
    }
    @JsonProperty("version")
    public String version;
    public Os withVersion(String version) {
        this.version = version;
        return this;
    }
}