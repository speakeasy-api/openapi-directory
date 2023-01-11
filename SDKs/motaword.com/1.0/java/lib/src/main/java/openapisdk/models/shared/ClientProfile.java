package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class ClientProfile {
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("account_creation_date")
    public OffsetDateTime accountCreationDate;
    public ClientProfile withAccountCreationDate(OffsetDateTime accountCreationDate) {
        this.accountCreationDate = accountCreationDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("client_project_count")
    public Double clientProjectCount;
    public ClientProfile withClientProjectCount(Double clientProjectCount) {
        this.clientProjectCount = clientProjectCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("corporate")
    public String corporate;
    public ClientProfile withCorporate(String corporate) {
        this.corporate = corporate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("corporate_id")
    public Double corporateId;
    public ClientProfile withCorporateId(Double corporateId) {
        this.corporateId = corporateId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("corporate_user_count")
    public Double corporateUserCount;
    public ClientProfile withCorporateUserCount(Double corporateUserCount) {
        this.corporateUserCount = corporateUserCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("frequent_file_extension")
    public String frequentFileExtension;
    public ClientProfile withFrequentFileExtension(String frequentFileExtension) {
        this.frequentFileExtension = frequentFileExtension;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("frequent_language_pairs")
    public String[] frequentLanguagePairs;
    public ClientProfile withFrequentLanguagePairs(String[] frequentLanguagePairs) {
        this.frequentLanguagePairs = frequentLanguagePairs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("full_name")
    public String fullName;
    public ClientProfile withFullName(String fullName) {
        this.fullName = fullName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("growth")
    public Boolean growth;
    public ClientProfile withGrowth(Boolean growth) {
        this.growth = growth;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("is_complex")
    public Boolean isComplex;
    public ClientProfile withIsComplex(Boolean isComplex) {
        this.isComplex = isComplex;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("last_12_months_spending")
    public Float last12MonthsSpending;
    public ClientProfile withLast12MonthsSpending(Float last12MonthsSpending) {
        this.last12MonthsSpending = last12MonthsSpending;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("last_project")
    public Double lastProject;
    public ClientProfile withLastProject(Double lastProject) {
        this.lastProject = lastProject;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("last_project_time")
    public OffsetDateTime lastProjectTime;
    public ClientProfile withLastProjectTime(OffsetDateTime lastProjectTime) {
        this.lastProjectTime = lastProjectTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("last_proofreaders")
    public ProofreaderWithLanguage[] lastProofreaders;
    public ClientProfile withLastProofreaders(ProofreaderWithLanguage[] lastProofreaders) {
        this.lastProofreaders = lastProofreaders;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("notes")
    public String[] notes;
    public ClientProfile withNotes(String[] notes) {
        this.notes = notes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nps")
    public ClientProfileNps nps;
    public ClientProfile withNps(ClientProfileNps nps) {
        this.nps = nps;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("user_rank_in_project_count")
    public Double userRankInProjectCount;
    public ClientProfile withUserRankInProjectCount(Double userRankInProjectCount) {
        this.userRankInProjectCount = userRankInProjectCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("user_rank_in_spending")
    public Double userRankInSpending;
    public ClientProfile withUserRankInSpending(Double userRankInSpending) {
        this.userRankInSpending = userRankInSpending;
        return this;
    }
}