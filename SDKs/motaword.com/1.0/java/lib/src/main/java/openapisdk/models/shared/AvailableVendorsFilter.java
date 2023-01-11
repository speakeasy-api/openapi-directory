package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AvailableVendorsFilter {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("corporateId")
    public Double corporateId;
    public AvailableVendorsFilter withCorporateId(Double corporateId) {
        this.corporateId = corporateId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("manualWorkPermission")
    public Boolean manualWorkPermission;
    public AvailableVendorsFilter withManualWorkPermission(Boolean manualWorkPermission) {
        this.manualWorkPermission = manualWorkPermission;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sourceLanguage")
    public String sourceLanguage;
    public AvailableVendorsFilter withSourceLanguage(String sourceLanguage) {
        this.sourceLanguage = sourceLanguage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("targetLanguages")
    public String[] targetLanguages;
    public AvailableVendorsFilter withTargetLanguages(String[] targetLanguages) {
        this.targetLanguages = targetLanguages;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("types")
    public AvailableVendorsFilterTypesEnum[] types;
    public AvailableVendorsFilter withTypes(AvailableVendorsFilterTypesEnum[] types) {
        this.types = types;
        return this;
    }
}