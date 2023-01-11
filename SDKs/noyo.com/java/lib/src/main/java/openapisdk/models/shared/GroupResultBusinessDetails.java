package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GroupResultBusinessDetails
 * Details about business or industry of the group
**/
public class GroupResultBusinessDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("company_description")
    public String companyDescription;
    public GroupResultBusinessDetails withCompanyDescription(String companyDescription) {
        this.companyDescription = companyDescription;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("date_established")
    public String dateEstablished;
    public GroupResultBusinessDetails withDateEstablished(String dateEstablished) {
        this.dateEstablished = dateEstablished;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("employer_type")
    public GroupResultBusinessDetailsEmployerTypeEnum employerType;
    public GroupResultBusinessDetails withEmployerType(GroupResultBusinessDetailsEmployerTypeEnum employerType) {
        this.employerType = employerType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("entity_type")
    public GroupResultBusinessDetailsEntityTypeEnum entityType;
    public GroupResultBusinessDetails withEntityType(GroupResultBusinessDetailsEntityTypeEnum entityType) {
        this.entityType = entityType;
        return this;
    }
}