/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import java.time.OffsetDateTime;
import org.openapis.openapi.utils.DateTimeDeserializer;
import org.openapis.openapi.utils.DateTimeSerializer;

public class TflApiPresentationEntitiesRoadProject {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("boroughsBenefited")
    public String[] boroughsBenefited;

    public TflApiPresentationEntitiesRoadProject withBoroughsBenefited(String[] boroughsBenefited) {
        this.boroughsBenefited = boroughsBenefited;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("constructionEndDate")
    public OffsetDateTime constructionEndDate;

    public TflApiPresentationEntitiesRoadProject withConstructionEndDate(OffsetDateTime constructionEndDate) {
        this.constructionEndDate = constructionEndDate;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("constructionStartDate")
    public OffsetDateTime constructionStartDate;

    public TflApiPresentationEntitiesRoadProject withConstructionStartDate(OffsetDateTime constructionStartDate) {
        this.constructionStartDate = constructionStartDate;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("consultationEndDate")
    public OffsetDateTime consultationEndDate;

    public TflApiPresentationEntitiesRoadProject withConsultationEndDate(OffsetDateTime consultationEndDate) {
        this.consultationEndDate = consultationEndDate;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("consultationPageUrl")
    public String consultationPageUrl;

    public TflApiPresentationEntitiesRoadProject withConsultationPageUrl(String consultationPageUrl) {
        this.consultationPageUrl = consultationPageUrl;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("consultationStartDate")
    public OffsetDateTime consultationStartDate;

    public TflApiPresentationEntitiesRoadProject withConsultationStartDate(OffsetDateTime consultationStartDate) {
        this.consultationStartDate = consultationStartDate;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contactEmail")
    public String contactEmail;

    public TflApiPresentationEntitiesRoadProject withContactEmail(String contactEmail) {
        this.contactEmail = contactEmail;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contactName")
    public String contactName;

    public TflApiPresentationEntitiesRoadProject withContactName(String contactName) {
        this.contactName = contactName;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cycleSuperhighwayId")
    public String cycleSuperhighwayId;

    public TflApiPresentationEntitiesRoadProject withCycleSuperhighwayId(String cycleSuperhighwayId) {
        this.cycleSuperhighwayId = cycleSuperhighwayId;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("externalPageUrl")
    public String externalPageUrl;

    public TflApiPresentationEntitiesRoadProject withExternalPageUrl(String externalPageUrl) {
        this.externalPageUrl = externalPageUrl;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("phase")
    public TflApiPresentationEntitiesRoadProjectPhaseEnum phase;

    public TflApiPresentationEntitiesRoadProject withPhase(TflApiPresentationEntitiesRoadProjectPhaseEnum phase) {
        this.phase = phase;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("projectDescription")
    public String projectDescription;

    public TflApiPresentationEntitiesRoadProject withProjectDescription(String projectDescription) {
        this.projectDescription = projectDescription;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("projectId")
    public String projectId;

    public TflApiPresentationEntitiesRoadProject withProjectId(String projectId) {
        this.projectId = projectId;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("projectName")
    public String projectName;

    public TflApiPresentationEntitiesRoadProject withProjectName(String projectName) {
        this.projectName = projectName;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("projectPageUrl")
    public String projectPageUrl;

    public TflApiPresentationEntitiesRoadProject withProjectPageUrl(String projectPageUrl) {
        this.projectPageUrl = projectPageUrl;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("projectSummaryPageUrl")
    public String projectSummaryPageUrl;

    public TflApiPresentationEntitiesRoadProject withProjectSummaryPageUrl(String projectSummaryPageUrl) {
        this.projectSummaryPageUrl = projectSummaryPageUrl;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("schemeName")
    public String schemeName;

    public TflApiPresentationEntitiesRoadProject withSchemeName(String schemeName) {
        this.schemeName = schemeName;
        return this;
    }
    
    public TflApiPresentationEntitiesRoadProject(){}
}
