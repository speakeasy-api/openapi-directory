package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ServingConfig
 * The configuration for how incoming requests to a site should be routed and processed before serving content. The URL request paths are matched against the specified URL patterns in the configuration, then Hosting applies the applicable configuration according to a specific [priority order](https://firebase.google.com/docs/hosting/full-config#hosting_priority_order).
**/
public class ServingConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("appAssociation")
    public ServingConfigAppAssociationEnum appAssociation;
    public ServingConfig withAppAssociation(ServingConfigAppAssociationEnum appAssociation) {
        this.appAssociation = appAssociation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cleanUrls")
    public Boolean cleanUrls;
    public ServingConfig withCleanUrls(Boolean cleanUrls) {
        this.cleanUrls = cleanUrls;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("headers")
    public Header[] headers;
    public ServingConfig withHeaders(Header[] headers) {
        this.headers = headers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("i18n")
    public I18nConfig i18n;
    public ServingConfig withI18n(I18nConfig i18n) {
        this.i18n = i18n;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("redirects")
    public Redirect[] redirects;
    public ServingConfig withRedirects(Redirect[] redirects) {
        this.redirects = redirects;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rewrites")
    public Rewrite[] rewrites;
    public ServingConfig withRewrites(Rewrite[] rewrites) {
        this.rewrites = rewrites;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("trailingSlashBehavior")
    public ServingConfigTrailingSlashBehaviorEnum trailingSlashBehavior;
    public ServingConfig withTrailingSlashBehavior(ServingConfigTrailingSlashBehaviorEnum trailingSlashBehavior) {
        this.trailingSlashBehavior = trailingSlashBehavior;
        return this;
    }
}