import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A classification object with a product type and value.
 */
export declare class CaseClassification extends SpeakeasyBase {
    /**
     * The display name of the classification.
     */
    displayName?: string;
    /**
     * The unique ID for a classification. Must be specified for case creation. To retrieve valid classification IDs for case creation, use `caseClassifications.search`.
     */
    id?: string;
}
