package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Application
 * An Application resource contains the top-level configuration of an App Engine application.
**/
public class Application {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("authDomain")
    public String authDomain;
    public Application withAuthDomain(String authDomain) {
        this.authDomain = authDomain;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("codeBucket")
    public String codeBucket;
    public Application withCodeBucket(String codeBucket) {
        this.codeBucket = codeBucket;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("databaseType")
    public ApplicationDatabaseTypeEnum databaseType;
    public Application withDatabaseType(ApplicationDatabaseTypeEnum databaseType) {
        this.databaseType = databaseType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("defaultBucket")
    public String defaultBucket;
    public Application withDefaultBucket(String defaultBucket) {
        this.defaultBucket = defaultBucket;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("defaultCookieExpiration")
    public String defaultCookieExpiration;
    public Application withDefaultCookieExpiration(String defaultCookieExpiration) {
        this.defaultCookieExpiration = defaultCookieExpiration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("defaultHostname")
    public String defaultHostname;
    public Application withDefaultHostname(String defaultHostname) {
        this.defaultHostname = defaultHostname;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dispatchRules")
    public UrlDispatchRule[] dispatchRules;
    public Application withDispatchRules(UrlDispatchRule[] dispatchRules) {
        this.dispatchRules = dispatchRules;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("featureSettings")
    public FeatureSettings featureSettings;
    public Application withFeatureSettings(FeatureSettings featureSettings) {
        this.featureSettings = featureSettings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gcrDomain")
    public String gcrDomain;
    public Application withGcrDomain(String gcrDomain) {
        this.gcrDomain = gcrDomain;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("iap")
    public IdentityAwareProxy iap;
    public Application withIap(IdentityAwareProxy iap) {
        this.iap = iap;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public Application withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("locationId")
    public String locationId;
    public Application withLocationId(String locationId) {
        this.locationId = locationId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public Application withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("serviceAccount")
    public String serviceAccount;
    public Application withServiceAccount(String serviceAccount) {
        this.serviceAccount = serviceAccount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("servingStatus")
    public ApplicationServingStatusEnum servingStatus;
    public Application withServingStatus(ApplicationServingStatusEnum servingStatus) {
        this.servingStatus = servingStatus;
        return this;
    }
}