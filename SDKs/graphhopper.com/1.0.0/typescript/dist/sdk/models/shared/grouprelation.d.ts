import { SpeakeasyBase } from "../../../internal/utils";
export declare class GroupRelation extends SpeakeasyBase {
    /**
     * An array of groups that should be related
     */
    groups: string[];
    /**
     * Specifies the type of relation. It must be either of type `in_sequence` or `in_direct_sequence`.
     *
     * @remarks
     *
     */
    type: string;
}
