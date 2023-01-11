package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ActionFunctionIdentifier
 * A serverless function associated with this custom workflow action.
**/
public class ActionFunctionIdentifier {
    @JsonProperty("functionType")
    public ActionFunctionIdentifierFunctionTypeEnum functionType;
    public ActionFunctionIdentifier withFunctionType(ActionFunctionIdentifierFunctionTypeEnum functionType) {
        this.functionType = functionType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public ActionFunctionIdentifier withId(String id) {
        this.id = id;
        return this;
    }
}