package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Product200ApplicationJsonDataPassengerAttributes {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customAttribute_kgs")
    public String customAttributeKgs;
    public Product200ApplicationJsonDataPassengerAttributes withCustomAttributeKgs(String customAttributeKgs) {
        this.customAttributeKgs = customAttributeKgs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customAttribute_lbs")
    public String customAttributeLbs;
    public Product200ApplicationJsonDataPassengerAttributes withCustomAttributeLbs(String customAttributeLbs) {
        this.customAttributeLbs = customAttributeLbs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("errorMissingMessage")
    public String errorMissingMessage;
    public Product200ApplicationJsonDataPassengerAttributes withErrorMissingMessage(String errorMissingMessage) {
        this.errorMissingMessage = errorMissingMessage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("errorValidationMessage")
    public String errorValidationMessage;
    public Product200ApplicationJsonDataPassengerAttributes withErrorValidationMessage(String errorValidationMessage) {
        this.errorValidationMessage = errorValidationMessage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("questionId")
    public String questionId;
    public Product200ApplicationJsonDataPassengerAttributes withQuestionId(String questionId) {
        this.questionId = questionId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("required")
    public Boolean required;
    public Product200ApplicationJsonDataPassengerAttributes withRequired(Boolean required) {
        this.required = required;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
    public String title;
    public Product200ApplicationJsonDataPassengerAttributes withTitle(String title) {
        this.title = title;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("validateType")
    public String validateType;
    public Product200ApplicationJsonDataPassengerAttributes withValidateType(String validateType) {
        this.validateType = validateType;
        return this;
    }
}