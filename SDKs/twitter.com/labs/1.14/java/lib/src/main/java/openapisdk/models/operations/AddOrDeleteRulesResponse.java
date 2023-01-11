package openapisdk.models.operations;



public class AddOrDeleteRulesResponse {
    public String contentType;
    public AddOrDeleteRulesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object error;
    public AddOrDeleteRulesResponse withError(Object error) {
        this.error = error;
        return this;
    }
    public Object problem;
    public AddOrDeleteRulesResponse withProblem(Object problem) {
        this.problem = problem;
        return this;
    }
    public Long statusCode;
    public AddOrDeleteRulesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object addOrDeleteRules200ApplicationJSONOneOf;
    public AddOrDeleteRulesResponse withAddOrDeleteRules200ApplicationJsonOneOf(Object addOrDeleteRules200ApplicationJSONOneOf) {
        this.addOrDeleteRules200ApplicationJSONOneOf = addOrDeleteRules200ApplicationJSONOneOf;
        return this;
    }
}