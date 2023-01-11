package openapisdk.models.shared;

import java.time.LocalDate;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GroupEditRequestBusinessDetails
 * Details about business or industry of the group
**/
public class GroupEditRequestBusinessDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("company_description")
    public String companyDescription;
    public GroupEditRequestBusinessDetails withCompanyDescription(String companyDescription) {
        this.companyDescription = companyDescription;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("date_established")
    public LocalDate dateEstablished;
    public GroupEditRequestBusinessDetails withDateEstablished(LocalDate dateEstablished) {
        this.dateEstablished = dateEstablished;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("employer_type")
    public GroupEditRequestBusinessDetailsEmployerTypeEnum employerType;
    public GroupEditRequestBusinessDetails withEmployerType(GroupEditRequestBusinessDetailsEmployerTypeEnum employerType) {
        this.employerType = employerType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("entity_type")
    public GroupEditRequestBusinessDetailsEntityTypeEnum entityType;
    public GroupEditRequestBusinessDetails withEntityType(GroupEditRequestBusinessDetailsEntityTypeEnum entityType) {
        this.entityType = entityType;
        return this;
    }
}