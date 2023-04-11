import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDocumentaiV1beta2DocumentProvenanceParent } from "./googleclouddocumentaiv1beta2documentprovenanceparent";
/**
 * The type of provenance operation.
 */
export declare enum GoogleCloudDocumentaiV1beta2DocumentProvenanceTypeEnum {
    OperationTypeUnspecified = "OPERATION_TYPE_UNSPECIFIED",
    Add = "ADD",
    Remove = "REMOVE",
    Update = "UPDATE",
    Replace = "REPLACE",
    EvalRequested = "EVAL_REQUESTED",
    EvalApproved = "EVAL_APPROVED",
    EvalSkipped = "EVAL_SKIPPED"
}
/**
 * Structure to identify provenance relationships between annotations in different revisions.
 */
export declare class GoogleCloudDocumentaiV1beta2DocumentProvenance extends SpeakeasyBase {
    /**
     * The Id of this operation. Needs to be unique within the scope of the revision.
     */
    id?: number;
    /**
     * References to the original elements that are replaced.
     */
    parents?: GoogleCloudDocumentaiV1beta2DocumentProvenanceParent[];
    /**
     * The index of the revision that produced this element.
     */
    revision?: number;
    /**
     * The type of provenance operation.
     */
    type?: GoogleCloudDocumentaiV1beta2DocumentProvenanceTypeEnum;
}
