import { SpeakeasyBase } from "../../../internal/utils";
import { GooglePlayDeveloperReportingV1alpha1DecimalConfidenceInterval } from "./googleplaydeveloperreportingv1alpha1decimalconfidenceinterval";
import { GoogleTypeDecimal } from "./googletypedecimal";
/**
 * Represents the value of a metric.
 */
export declare class GooglePlayDeveloperReportingV1alpha1MetricValue extends SpeakeasyBase {
    /**
     * A representation of a decimal value, such as 2.5. Clients may convert values into language-native decimal formats, such as Java's BigDecimal or Python's decimal.Decimal. [BigDecimal]: https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/math/BigDecimal.html [decimal.Decimal]: https://docs.python.org/3/library/decimal.html
     */
    decimalValue?: GoogleTypeDecimal;
    /**
     * Represents the confidence interval of a metric.
     */
    decimalValueConfidenceInterval?: GooglePlayDeveloperReportingV1alpha1DecimalConfidenceInterval;
    /**
     * Name of the metric.
     */
    metric?: string;
}
