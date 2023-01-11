package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Getemailinfo200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Code")
    public String code;
    public Getemailinfo200ApplicationJson withCode(String code) {
        this.code = code;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Credits")
    public String credits;
    public Getemailinfo200ApplicationJson withCredits(String credits) {
        this.credits = credits;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Email")
    public String email;
    public Getemailinfo200ApplicationJson withEmail(String email) {
        this.email = email;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Geolocation")
    public String geolocation;
    public Getemailinfo200ApplicationJson withGeolocation(String geolocation) {
        this.geolocation = geolocation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Info")
    public String info;
    public Getemailinfo200ApplicationJson withInfo(String info) {
        this.info = info;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("IsDisposable")
    public String isDisposable;
    public Getemailinfo200ApplicationJson withIsDisposable(String isDisposable) {
        this.isDisposable = isDisposable;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("IsEducational")
    public String isEducational;
    public Getemailinfo200ApplicationJson withIsEducational(String isEducational) {
        this.isEducational = isEducational;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("IsGeneric")
    public String isGeneric;
    public Getemailinfo200ApplicationJson withIsGeneric(String isGeneric) {
        this.isGeneric = isGeneric;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("IsGovernment")
    public String isGovernment;
    public Getemailinfo200ApplicationJson withIsGovernment(String isGovernment) {
        this.isGovernment = isGovernment;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("IsOrganizational")
    public String isOrganizational;
    public Getemailinfo200ApplicationJson withIsOrganizational(String isOrganizational) {
        this.isOrganizational = isOrganizational;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("IsVulgar")
    public String isVulgar;
    public Getemailinfo200ApplicationJson withIsVulgar(String isVulgar) {
        this.isVulgar = isVulgar;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Response")
    public String response;
    public Getemailinfo200ApplicationJson withResponse(String response) {
        this.response = response;
        return this;
    }
}