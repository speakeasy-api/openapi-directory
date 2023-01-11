package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ServingContext
 * The serving context for this restriction.
**/
public class ServingContext {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("all")
    public ServingContextAllEnum all;
    public ServingContext withAll(ServingContextAllEnum all) {
        this.all = all;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("appType")
    public AppContext appType;
    public ServingContext withAppType(AppContext appType) {
        this.appType = appType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("auctionType")
    public AuctionContext auctionType;
    public ServingContext withAuctionType(AuctionContext auctionType) {
        this.auctionType = auctionType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("location")
    public LocationContext location;
    public ServingContext withLocation(LocationContext location) {
        this.location = location;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("platform")
    public PlatformContext platform;
    public ServingContext withPlatform(PlatformContext platform) {
        this.platform = platform;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("securityType")
    public SecurityContext securityType;
    public ServingContext withSecurityType(SecurityContext securityType) {
        this.securityType = securityType;
        return this;
    }
}