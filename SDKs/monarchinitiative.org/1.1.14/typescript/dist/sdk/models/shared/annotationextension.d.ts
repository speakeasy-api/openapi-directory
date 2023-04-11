import { SpeakeasyBase } from "../../../internal/utils";
import { NamedObject } from "./namedobject";
import { Relation } from "./relation";
export declare class AnnotationExtension extends SpeakeasyBase {
    /**
     * Extension interpreted as OWL expression (r1 some r2 some .. some filler).
     */
    filler?: NamedObject;
    /**
     * Relationship type. If more than one value, interpreted as chain
     */
    relationChain?: Relation[];
}
