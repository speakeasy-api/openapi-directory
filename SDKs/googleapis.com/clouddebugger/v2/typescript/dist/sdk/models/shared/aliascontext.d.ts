import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The alias kind.
 */
export declare enum AliasContextKindEnum {
    Any = "ANY",
    Fixed = "FIXED",
    Movable = "MOVABLE",
    Other = "OTHER"
}
/**
 * An alias to a repo revision.
 */
export declare class AliasContext extends SpeakeasyBase {
    /**
     * The alias kind.
     */
    kind?: AliasContextKindEnum;
    /**
     * The alias name.
     */
    name?: string;
}
