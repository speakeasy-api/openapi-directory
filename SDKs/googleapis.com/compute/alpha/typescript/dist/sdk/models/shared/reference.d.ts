import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents a reference to a resource.
 */
export declare class Reference extends SpeakeasyBase {
    /**
     * [Output Only] Type of the resource. Always compute#reference for references.
     */
    kind?: string;
    /**
     * A description of the reference type with no implied semantics. Possible values include: 1. MEMBER_OF
     */
    referenceType?: string;
    /**
     * URL of the resource which refers to the target.
     */
    referrer?: string;
    /**
     * URL of the resource to which this reference points.
     */
    target?: string;
}
