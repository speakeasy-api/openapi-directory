package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Statement
 * Describes a reliable statement that has been made about the relationship between a source asset and a target asset. Statements are always made by the source asset, either directly or by delegating to a statement list that is stored elsewhere. For more detailed definitions of statements and assets, please refer to our [API documentation landing page](/digital-asset-links/v1/getting-started).
**/
public class Statement {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("relation")
    public String relation;
    public Statement withRelation(String relation) {
        this.relation = relation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("source")
    public Asset source;
    public Statement withSource(Asset source) {
        this.source = source;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("target")
    public Asset target;
    public Statement withTarget(Asset target) {
        this.target = target;
        return this;
    }
}