package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DatasourceTypeParameters
 * You can use Rudder variable expansion (`${rudder.node`, `${node.properties...}`)
**/
public class DatasourceTypeParameters {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("checkSsl")
    public Boolean checkSsl;
    public DatasourceTypeParameters withCheckSsl(Boolean checkSsl) {
        this.checkSsl = checkSsl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("headers")
    public DatasourceTypeParametersHeaders[] headers;
    public DatasourceTypeParameters withHeaders(DatasourceTypeParametersHeaders[] headers) {
        this.headers = headers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("path")
    public String path;
    public DatasourceTypeParameters withPath(String path) {
        this.path = path;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("requestMethod")
    public DatasourceTypeParametersRequestMethodEnum requestMethod;
    public DatasourceTypeParameters withRequestMethod(DatasourceTypeParametersRequestMethodEnum requestMethod) {
        this.requestMethod = requestMethod;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("requestMode")
    public DatasourceTypeParametersRequestMode requestMode;
    public DatasourceTypeParameters withRequestMode(DatasourceTypeParametersRequestMode requestMode) {
        this.requestMode = requestMode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("requestTimeout")
    public Long requestTimeout;
    public DatasourceTypeParameters withRequestTimeout(Long requestTimeout) {
        this.requestTimeout = requestTimeout;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public DatasourceTypeParameters withUrl(String url) {
        this.url = url;
        return this;
    }
}