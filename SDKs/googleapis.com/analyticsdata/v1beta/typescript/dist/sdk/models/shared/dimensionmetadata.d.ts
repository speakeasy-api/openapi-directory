import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Explains a dimension.
 */
export declare class DimensionMetadata extends SpeakeasyBase {
    /**
     * This dimension's name. Useable in [Dimension](#Dimension)'s `name`. For example, `eventName`.
     */
    apiName?: string;
    /**
     * The display name of the category that this dimension belongs to. Similar dimensions and metrics are categorized together.
     */
    category?: string;
    /**
     * True if the dimension is a custom dimension for this property.
     */
    customDefinition?: boolean;
    /**
     * Still usable but deprecated names for this dimension. If populated, this dimension is available by either `apiName` or one of `deprecatedApiNames` for a period of time. After the deprecation period, the dimension will be available only by `apiName`.
     */
    deprecatedApiNames?: string[];
    /**
     * Description of how this dimension is used and calculated.
     */
    description?: string;
    /**
     * This dimension's name within the Google Analytics user interface. For example, `Event name`.
     */
    uiName?: string;
}
