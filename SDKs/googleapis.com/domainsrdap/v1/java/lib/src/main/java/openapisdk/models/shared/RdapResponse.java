package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RdapResponse
 * Response to a general RDAP query.
**/
public class RdapResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String[] description;
    public RdapResponse withDescription(String[] description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("errorCode")
    public Integer errorCode;
    public RdapResponse withErrorCode(Integer errorCode) {
        this.errorCode = errorCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("jsonResponse")
    public HttpBody jsonResponse;
    public RdapResponse withJsonResponse(HttpBody jsonResponse) {
        this.jsonResponse = jsonResponse;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lang")
    public String lang;
    public RdapResponse withLang(String lang) {
        this.lang = lang;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("notices")
    public Notice[] notices;
    public RdapResponse withNotices(Notice[] notices) {
        this.notices = notices;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rdapConformance")
    public String[] rdapConformance;
    public RdapResponse withRdapConformance(String[] rdapConformance) {
        this.rdapConformance = rdapConformance;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
    public String title;
    public RdapResponse withTitle(String title) {
        this.title = title;
        return this;
    }
}