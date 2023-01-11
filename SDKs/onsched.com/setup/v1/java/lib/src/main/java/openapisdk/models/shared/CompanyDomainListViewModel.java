package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CompanyDomainListViewModel {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public CompanyDomainViewModel[] data;
    public CompanyDomainListViewModel withData(CompanyDomainViewModel[] data) {
        this.data = data;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("objectName")
    public String objectName;
    public CompanyDomainListViewModel withObjectName(String objectName) {
        this.objectName = objectName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public CompanyDomainListViewModel withUrl(String url) {
        this.url = url;
        return this;
    }
}