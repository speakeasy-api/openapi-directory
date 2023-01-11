package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class Project {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("average_scores")
    public java.util.Map<String, Double> averageScores;
    public Project withAverageScores(java.util.Map<String, Double> averageScores) {
        this.averageScores = averageScores;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("budget_code")
    public String budgetCode;
    public Project withBudgetCode(String budgetCode) {
        this.budgetCode = budgetCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("callback_url")
    public String callbackUrl;
    public Project withCallbackUrl(String callbackUrl) {
        this.callbackUrl = callbackUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("client")
    public User client;
    public Project withClient(User client) {
        this.client = client;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("completed_on")
    public OffsetDateTime completedOn;
    public Project withCompletedOn(OffsetDateTime completedOn) {
        this.completedOn = completedOn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("continuous_project_type")
    public String continuousProjectType;
    public Project withContinuousProjectType(String continuousProjectType) {
        this.continuousProjectType = continuousProjectType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("created_at")
    public Long createdAt;
    public Project withCreatedAt(Long createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("custom")
    public java.util.Map<String, Object> custom;
    public Project withCustom(java.util.Map<String, Object> custom) {
        this.custom = custom;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("delivery_at")
    public Long deliveryAt;
    public Project withDeliveryAt(Long deliveryAt) {
        this.deliveryAt = deliveryAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("errors")
    public Error[] errors;
    public Project withErrors(Error[] errors) {
        this.errors = errors;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Long id;
    public Project withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("is_api_project")
    public Boolean isApiProject;
    public Project withIsApiProject(Boolean isApiProject) {
        this.isApiProject = isApiProject;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("is_certified")
    public Boolean isCertified;
    public Project withIsCertified(Boolean isCertified) {
        this.isCertified = isCertified;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("is_continuous")
    public Boolean isContinuous;
    public Project withIsContinuous(Boolean isContinuous) {
        this.isContinuous = isContinuous;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("is_manual")
    public Boolean isManual;
    public Project withIsManual(Boolean isManual) {
        this.isManual = isManual;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("links")
    public ProjectLinks links;
    public Project withLinks(ProjectLinks links) {
        this.links = links;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pairs")
    public VendorProjectPair[] pairs;
    public Project withPairs(VendorProjectPair[] pairs) {
        this.pairs = pairs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("price")
    public ProjectPrice price;
    public Project withPrice(ProjectPrice price) {
        this.price = price;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("price_without_discount")
    public ProjectPriceWithoutDiscount priceWithoutDiscount;
    public Project withPriceWithoutDiscount(ProjectPriceWithoutDiscount priceWithoutDiscount) {
        this.priceWithoutDiscount = priceWithoutDiscount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("role")
    public VendorProjectRoleEnum role;
    public Project withRole(VendorProjectRoleEnum role) {
        this.role = role;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("should_send_client_survey")
    public Boolean shouldSendClientSurvey;
    public Project withShouldSendClientSurvey(Boolean shouldSendClientSurvey) {
        this.shouldSendClientSurvey = shouldSendClientSurvey;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("source")
    public ProjectSourceEnum source;
    public Project withSource(ProjectSourceEnum source) {
        this.source = source;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("source_language")
    public String sourceLanguage;
    public Project withSourceLanguage(String sourceLanguage) {
        this.sourceLanguage = sourceLanguage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public ProjectStatusEnum status;
    public Project withStatus(ProjectStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subjects")
    public String[] subjects;
    public Project withSubjects(String[] subjects) {
        this.subjects = subjects;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("target_languages")
    public String[] targetLanguages;
    public Project withTargetLanguages(String[] targetLanguages) {
        this.targetLanguages = targetLanguages;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tms_name")
    public String tmsName;
    public Project withTmsName(String tmsName) {
        this.tmsName = tmsName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("valid_until")
    public Long validUntil;
    public Project withValidUntil(Long validUntil) {
        this.validUntil = validUntil;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vendor_word_count")
    public Long vendorWordCount;
    public Project withVendorWordCount(Long vendorWordCount) {
        this.vendorWordCount = vendorWordCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("word_count")
    public Long wordCount;
    public Project withWordCount(Long wordCount) {
        this.wordCount = wordCount;
        return this;
    }
}