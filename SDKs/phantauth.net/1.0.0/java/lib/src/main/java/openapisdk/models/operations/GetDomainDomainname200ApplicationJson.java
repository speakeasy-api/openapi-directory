package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetDomainDomainname200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("@id")
    public String atId;
    public GetDomainDomainname200ApplicationJson withAtId(String atId) {
        this.atId = atId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("logo")
    public String logo;
    public GetDomainDomainname200ApplicationJson withLogo(String logo) {
        this.logo = logo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("members")
    public Object[] members;
    public GetDomainDomainname200ApplicationJson withMembers(Object[] members) {
        this.members = members;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public GetDomainDomainname200ApplicationJson withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("profile")
    public String profile;
    public GetDomainDomainname200ApplicationJson withProfile(String profile) {
        this.profile = profile;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sub")
    public String sub;
    public GetDomainDomainname200ApplicationJson withSub(String sub) {
        this.sub = sub;
        return this;
    }
}