package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * OsPolicyResourceRepositoryResourceGooRepository
 * Represents a Goo package repository. These are added to a repo file that is managed at `C:/ProgramData/GooGet/repos/google_osconfig.repo`.
**/
public class OsPolicyResourceRepositoryResourceGooRepository {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public OsPolicyResourceRepositoryResourceGooRepository withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public OsPolicyResourceRepositoryResourceGooRepository withUrl(String url) {
        this.url = url;
        return this;
    }
}