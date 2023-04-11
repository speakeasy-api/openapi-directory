import { SpeakeasyBase } from "../../../internal/utils";
import { RowAccessPolicyReference } from "./rowaccesspolicyreference";
/**
 * Represents access on a subset of rows on the specified table, defined by its filter predicate. Access to the subset of rows is controlled by its IAM policy.
 */
export declare class RowAccessPolicy extends SpeakeasyBase {
    /**
     * Output only. The time when this row access policy was created, in milliseconds since the epoch.
     */
    creationTime?: string;
    /**
     * Output only. A hash of this resource.
     */
    etag?: string;
    /**
     * Required. A SQL boolean expression that represents the rows defined by this row access policy, similar to the boolean expression in a WHERE clause of a SELECT query on a table. References to other tables, routines, and temporary functions are not supported. Examples: region="EU" date_field = CAST('2019-9-27' as DATE) nullable_field is not NULL numeric_field BETWEEN 1.0 AND 5.0
     */
    filterPredicate?: string;
    /**
     * Output only. The time when this row access policy was last modified, in milliseconds since the epoch.
     */
    lastModifiedTime?: string;
    rowAccessPolicyReference?: RowAccessPolicyReference;
}
