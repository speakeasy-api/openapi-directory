package openapisdk.models.shared;



/**
 * IngestionResult
 * This class defines the IngestionResult on the Publish API
**/
public class IngestionResult {
    public String id;
    public IngestionResult withId(String id) {
        this.id = id;
        return this;
    }
    public java.util.Map<String, java.util.Map<String, Object>> ignoredProperties;
    public IngestionResult withIgnoredProperties(java.util.Map<String, java.util.Map<String, Object>> ignoredProperties) {
        this.ignoredProperties = ignoredProperties;
        return this;
    }
    public java.util.Map<String, java.util.Map<String, Object>> invalidProperties;
    public IngestionResult withInvalidProperties(java.util.Map<String, java.util.Map<String, Object>> invalidProperties) {
        this.invalidProperties = invalidProperties;
        return this;
    }
    public java.util.Map<String, java.util.Map<String, Object>> invalidValues;
    public IngestionResult withInvalidValues(java.util.Map<String, java.util.Map<String, Object>> invalidValues) {
        this.invalidValues = invalidValues;
        return this;
    }
    public java.util.Map<String, java.util.Map<String, Object>> missingProperties;
    public IngestionResult withMissingProperties(java.util.Map<String, java.util.Map<String, Object>> missingProperties) {
        this.missingProperties = missingProperties;
        return this;
    }
    public IngestionResultStatusEnum status;
    public IngestionResult withStatus(IngestionResultStatusEnum status) {
        this.status = status;
        return this;
    }
    public java.util.Map<String, java.util.Map<String, Object>> unknownProperties;
    public IngestionResult withUnknownProperties(java.util.Map<String, java.util.Map<String, Object>> unknownProperties) {
        this.unknownProperties = unknownProperties;
        return this;
    }
}