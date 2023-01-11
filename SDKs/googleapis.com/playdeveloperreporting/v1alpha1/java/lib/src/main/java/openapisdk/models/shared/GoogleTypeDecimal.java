package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleTypeDecimal
 * A representation of a decimal value, such as 2.5. Clients may convert values into language-native decimal formats, such as Java's BigDecimal or Python's decimal.Decimal. [BigDecimal]: https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/math/BigDecimal.html [decimal.Decimal]: https://docs.python.org/3/library/decimal.html
**/
public class GoogleTypeDecimal {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("value")
    public String value;
    public GoogleTypeDecimal withValue(String value) {
        this.value = value;
        return this;
    }
}