package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ActionFunction
 * A serverless function associated with this custom workflow action.
**/
public class ActionFunction {
    @JsonProperty("functionSource")
    public String functionSource;
    public ActionFunction withFunctionSource(String functionSource) {
        this.functionSource = functionSource;
        return this;
    }
    @JsonProperty("functionType")
    public ActionFunctionFunctionTypeEnum functionType;
    public ActionFunction withFunctionType(ActionFunctionFunctionTypeEnum functionType) {
        this.functionType = functionType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public ActionFunction withId(String id) {
        this.id = id;
        return this;
    }
}