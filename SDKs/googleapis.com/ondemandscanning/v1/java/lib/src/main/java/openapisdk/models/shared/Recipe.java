package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Recipe
 * Steps taken to build the artifact. For a TaskRun, typically each container corresponds to one step in the recipe.
**/
public class Recipe {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("arguments")
    public java.util.Map<String, Object>[] arguments;
    public Recipe withArguments(java.util.Map<String, Object>[] arguments) {
        this.arguments = arguments;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("definedInMaterial")
    public String definedInMaterial;
    public Recipe withDefinedInMaterial(String definedInMaterial) {
        this.definedInMaterial = definedInMaterial;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("entryPoint")
    public String entryPoint;
    public Recipe withEntryPoint(String entryPoint) {
        this.entryPoint = entryPoint;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("environment")
    public java.util.Map<String, Object>[] environment;
    public Recipe withEnvironment(java.util.Map<String, Object>[] environment) {
        this.environment = environment;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public Recipe withType(String type) {
        this.type = type;
        return this;
    }
}