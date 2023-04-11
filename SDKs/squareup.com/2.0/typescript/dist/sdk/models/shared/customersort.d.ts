import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Specifies how searched customers profiles are sorted, including the sort key and sort order.
 */
export declare class CustomerSort extends SpeakeasyBase {
    /**
     * Use one or more customer attributes as the sort key to sort searched customer profiles.
     *
     * @remarks
     * For example, use the creation date (`created_at`) of customers or default attributes as the sort key.
     *
     *
     * Default: `DEFAULT`.
     */
    field?: string;
    /**
     * Indicates the order in which results should be sorted based on the
     *
     * @remarks
     * sort field value. Strings use standard alphabetic comparison
     * to determine order. Strings representing numbers are sorted as strings.
     *
     * Default: `ASC`.
     */
    order?: string;
}
