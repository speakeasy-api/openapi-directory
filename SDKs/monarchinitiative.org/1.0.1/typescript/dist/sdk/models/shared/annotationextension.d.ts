import { SpeakeasyBase } from "../../../internal/utils";
import { NamedObject } from "./namedobject";
import { Relation } from "./relation";
export declare class AnnotationExtension extends SpeakeasyBase {
    filler?: NamedObject;
    relationChain?: Relation[];
}
