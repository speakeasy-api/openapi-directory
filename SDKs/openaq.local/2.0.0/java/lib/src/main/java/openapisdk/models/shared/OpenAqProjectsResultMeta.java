package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class OpenAqProjectsResultMeta {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("found")
    public Long found;
    public OpenAqProjectsResultMeta withFound(Long found) {
        this.found = found;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("license")
    public String license;
    public OpenAqProjectsResultMeta withLicense(String license) {
        this.license = license;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("limit")
    public Long limit;
    public OpenAqProjectsResultMeta withLimit(Long limit) {
        this.limit = limit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public OpenAqProjectsResultMeta withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("page")
    public Long page;
    public OpenAqProjectsResultMeta withPage(Long page) {
        this.page = page;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("website")
    public String website;
    public OpenAqProjectsResultMeta withWebsite(String website) {
        this.website = website;
        return this;
    }
}