import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleTypeDecimal } from "./googletypedecimal";
/**
 * Represents the confidence interval of a metric.
 */
export declare class GooglePlayDeveloperReportingV1beta1DecimalConfidenceInterval extends SpeakeasyBase {
    /**
     * A representation of a decimal value, such as 2.5. Clients may convert values into language-native decimal formats, such as Java's BigDecimal or Python's decimal.Decimal. [BigDecimal]: https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/math/BigDecimal.html [decimal.Decimal]: https://docs.python.org/3/library/decimal.html
     */
    lowerBound?: GoogleTypeDecimal;
    /**
     * A representation of a decimal value, such as 2.5. Clients may convert values into language-native decimal formats, such as Java's BigDecimal or Python's decimal.Decimal. [BigDecimal]: https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/math/BigDecimal.html [decimal.Decimal]: https://docs.python.org/3/library/decimal.html
     */
    upperBound?: GoogleTypeDecimal;
}
