/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

public class OfferingBadge {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("badgeExpiry")
    public BadgeExpiry badgeExpiry;

    public OfferingBadge withBadgeExpiry(BadgeExpiry badgeExpiry) {
        this.badgeExpiry = badgeExpiry;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;

    public OfferingBadge withDescription(String description) {
        this.description = description;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("requiresApproval")
    public Boolean requiresApproval;

    public OfferingBadge withRequiresApproval(Boolean requiresApproval) {
        this.requiresApproval = requiresApproval;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
    public String title;

    public OfferingBadge withTitle(String title) {
        this.title = title;
        return this;
    }
    
    public OfferingBadge(){}
}
