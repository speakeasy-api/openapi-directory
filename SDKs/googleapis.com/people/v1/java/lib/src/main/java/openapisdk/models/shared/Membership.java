package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Membership
 * A person's membership in a group. Only contact group memberships can be modified.
**/
public class Membership {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contactGroupMembership")
    public ContactGroupMembership contactGroupMembership;
    public Membership withContactGroupMembership(ContactGroupMembership contactGroupMembership) {
        this.contactGroupMembership = contactGroupMembership;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("domainMembership")
    public DomainMembership domainMembership;
    public Membership withDomainMembership(DomainMembership domainMembership) {
        this.domainMembership = domainMembership;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("metadata")
    public FieldMetadata metadata;
    public Membership withMetadata(FieldMetadata metadata) {
        this.metadata = metadata;
        return this;
    }
}