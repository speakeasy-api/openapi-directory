package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetFleetFleetname200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("@id")
    public String atId;
    public GetFleetFleetname200ApplicationJson withAtId(String atId) {
        this.atId = atId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("logo")
    public String logo;
    public GetFleetFleetname200ApplicationJson withLogo(String logo) {
        this.logo = logo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("logo_email")
    public String logoEmail;
    public GetFleetFleetname200ApplicationJson withLogoEmail(String logoEmail) {
        this.logoEmail = logoEmail;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("members")
    public Object[] members;
    public GetFleetFleetname200ApplicationJson withMembers(Object[] members) {
        this.members = members;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public GetFleetFleetname200ApplicationJson withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("profile")
    public String profile;
    public GetFleetFleetname200ApplicationJson withProfile(String profile) {
        this.profile = profile;
        return this;
    }
    @JsonProperty("sub")
    public String sub;
    public GetFleetFleetname200ApplicationJson withSub(String sub) {
        this.sub = sub;
        return this;
    }
}