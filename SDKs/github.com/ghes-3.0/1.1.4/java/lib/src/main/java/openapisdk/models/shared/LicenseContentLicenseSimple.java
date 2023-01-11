package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * LicenseContentLicenseSimple
 * License Simple
**/
public class LicenseContentLicenseSimple {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("html_url")
    public String htmlUrl;
    public LicenseContentLicenseSimple withHtmlUrl(String htmlUrl) {
        this.htmlUrl = htmlUrl;
        return this;
    }
    @JsonProperty("key")
    public String key;
    public LicenseContentLicenseSimple withKey(String key) {
        this.key = key;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public LicenseContentLicenseSimple withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("node_id")
    public String nodeId;
    public LicenseContentLicenseSimple withNodeId(String nodeId) {
        this.nodeId = nodeId;
        return this;
    }
    @JsonProperty("spdx_id")
    public String spdxId;
    public LicenseContentLicenseSimple withSpdxId(String spdxId) {
        this.spdxId = spdxId;
        return this;
    }
    @JsonProperty("url")
    public String url;
    public LicenseContentLicenseSimple withUrl(String url) {
        this.url = url;
        return this;
    }
}