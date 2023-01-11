package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ConstraintViolation {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("constraintType")
    public ConstraintViolationConstraintTypeEnum constraintType;
    public ConstraintViolation withConstraintType(ConstraintViolationConstraintTypeEnum constraintType) {
        this.constraintType = constraintType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("developerMessage")
    public String developerMessage;
    public ConstraintViolation withDeveloperMessage(String developerMessage) {
        this.developerMessage = developerMessage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("expected")
    public String expected;
    public ConstraintViolation withExpected(String expected) {
        this.expected = expected;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("propertyName")
    public String propertyName;
    public ConstraintViolation withPropertyName(String propertyName) {
        this.propertyName = propertyName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("value")
    public String value;
    public ConstraintViolation withValue(String value) {
        this.value = value;
        return this;
    }
}