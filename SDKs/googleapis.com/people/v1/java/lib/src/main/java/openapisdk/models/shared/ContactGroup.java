package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ContactGroup
 * A contact group.
**/
public class ContactGroup {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clientData")
    public GroupClientData[] clientData;
    public ContactGroup withClientData(GroupClientData[] clientData) {
        this.clientData = clientData;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("etag")
    public String etag;
    public ContactGroup withEtag(String etag) {
        this.etag = etag;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("formattedName")
    public String formattedName;
    public ContactGroup withFormattedName(String formattedName) {
        this.formattedName = formattedName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("groupType")
    public ContactGroupGroupTypeEnum groupType;
    public ContactGroup withGroupType(ContactGroupGroupTypeEnum groupType) {
        this.groupType = groupType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("memberCount")
    public Integer memberCount;
    public ContactGroup withMemberCount(Integer memberCount) {
        this.memberCount = memberCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("memberResourceNames")
    public String[] memberResourceNames;
    public ContactGroup withMemberResourceNames(String[] memberResourceNames) {
        this.memberResourceNames = memberResourceNames;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("metadata")
    public ContactGroupMetadata metadata;
    public ContactGroup withMetadata(ContactGroupMetadata metadata) {
        this.metadata = metadata;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public ContactGroup withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resourceName")
    public String resourceName;
    public ContactGroup withResourceName(String resourceName) {
        this.resourceName = resourceName;
        return this;
    }
}