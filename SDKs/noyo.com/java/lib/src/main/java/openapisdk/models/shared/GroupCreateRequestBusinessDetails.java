package openapisdk.models.shared;

import java.time.LocalDate;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GroupCreateRequestBusinessDetails
 * Details about business or industry of the group
**/
public class GroupCreateRequestBusinessDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("company_description")
    public String companyDescription;
    public GroupCreateRequestBusinessDetails withCompanyDescription(String companyDescription) {
        this.companyDescription = companyDescription;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("date_established")
    public LocalDate dateEstablished;
    public GroupCreateRequestBusinessDetails withDateEstablished(LocalDate dateEstablished) {
        this.dateEstablished = dateEstablished;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("employer_type")
    public GroupCreateRequestBusinessDetailsEmployerTypeEnum employerType;
    public GroupCreateRequestBusinessDetails withEmployerType(GroupCreateRequestBusinessDetailsEmployerTypeEnum employerType) {
        this.employerType = employerType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("entity_type")
    public GroupCreateRequestBusinessDetailsEntityTypeEnum entityType;
    public GroupCreateRequestBusinessDetails withEntityType(GroupCreateRequestBusinessDetailsEntityTypeEnum entityType) {
        this.entityType = entityType;
        return this;
    }
}