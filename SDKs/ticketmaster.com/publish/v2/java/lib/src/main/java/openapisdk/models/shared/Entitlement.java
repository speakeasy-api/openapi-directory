package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Entitlement
 * This class defines an entitlement data on the Publish API
**/
public class Entitlement {
    @JsonProperty("data")
    public java.util.Map<String, Object> data;
    public Entitlement withData(java.util.Map<String, Object> data) {
        this.data = data;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("relatedEntityId")
    public String relatedEntityId;
    public Entitlement withRelatedEntityId(String relatedEntityId) {
        this.relatedEntityId = relatedEntityId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("relatedEntitySource")
    public Source relatedEntitySource;
    public Entitlement withRelatedEntitySource(Source relatedEntitySource) {
        this.relatedEntitySource = relatedEntitySource;
        return this;
    }
    @JsonProperty("relatedEntityType")
    public EntitlementRelatedEntityTypeEnum relatedEntityType;
    public Entitlement withRelatedEntityType(EntitlementRelatedEntityTypeEnum relatedEntityType) {
        this.relatedEntityType = relatedEntityType;
        return this;
    }
    @JsonProperty("source")
    public EntitlementSourceEnum source;
    public Entitlement withSource(EntitlementSourceEnum source) {
        this.source = source;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("versionNumber")
    public Long versionNumber;
    public Entitlement withVersionNumber(Long versionNumber) {
        this.versionNumber = versionNumber;
        return this;
    }
}