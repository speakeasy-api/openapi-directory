package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CustomLevel
 * `CustomLevel` is an `AccessLevel` using the Cloud Common Expression Language to represent the necessary conditions for the level to apply to a request. See CEL spec at: https://github.com/google/cel-spec
**/
public class CustomLevel {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("expr")
    public Expr expr;
    public CustomLevel withExpr(Expr expr) {
        this.expr = expr;
        return this;
    }
}