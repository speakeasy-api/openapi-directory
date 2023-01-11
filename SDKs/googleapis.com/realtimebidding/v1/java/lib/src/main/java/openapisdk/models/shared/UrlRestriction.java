package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UrlRestriction
 * Represents the URL restriction (for the URL captured by the pixel callback) for a user list.
**/
public class UrlRestriction {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("endDate")
    public Date endDate;
    public UrlRestriction withEndDate(Date endDate) {
        this.endDate = endDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("restrictionType")
    public UrlRestrictionRestrictionTypeEnum restrictionType;
    public UrlRestriction withRestrictionType(UrlRestrictionRestrictionTypeEnum restrictionType) {
        this.restrictionType = restrictionType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("startDate")
    public Date startDate;
    public UrlRestriction withStartDate(Date startDate) {
        this.startDate = startDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public UrlRestriction withUrl(String url) {
        this.url = url;
        return this;
    }
}