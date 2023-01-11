package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Site
 * Contains properties of a site.
**/
public class Site {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accountId")
    public String accountId;
    public Site withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("approved")
    public Boolean approved;
    public Site withApproved(Boolean approved) {
        this.approved = approved;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("directorySiteId")
    public String directorySiteId;
    public Site withDirectorySiteId(String directorySiteId) {
        this.directorySiteId = directorySiteId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("directorySiteIdDimensionValue")
    public DimensionValue directorySiteIdDimensionValue;
    public Site withDirectorySiteIdDimensionValue(DimensionValue directorySiteIdDimensionValue) {
        this.directorySiteIdDimensionValue = directorySiteIdDimensionValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public Site withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("idDimensionValue")
    public DimensionValue idDimensionValue;
    public Site withIdDimensionValue(DimensionValue idDimensionValue) {
        this.idDimensionValue = idDimensionValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("keyName")
    public String keyName;
    public Site withKeyName(String keyName) {
        this.keyName = keyName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public Site withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public Site withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("siteContacts")
    public SiteContact[] siteContacts;
    public Site withSiteContacts(SiteContact[] siteContacts) {
        this.siteContacts = siteContacts;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("siteSettings")
    public SiteSettings siteSettings;
    public Site withSiteSettings(SiteSettings siteSettings) {
        this.siteSettings = siteSettings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subaccountId")
    public String subaccountId;
    public Site withSubaccountId(String subaccountId) {
        this.subaccountId = subaccountId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("videoSettings")
    public SiteVideoSettings videoSettings;
    public Site withVideoSettings(SiteVideoSettings videoSettings) {
        this.videoSettings = videoSettings;
        return this;
    }
}