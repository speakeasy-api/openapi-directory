import { SpeakeasyBase } from "../../../internal/utils";
import { Field } from "./field";
/**
 * Schema of a runtime entity.
 */
export declare class RuntimeEntitySchema extends SpeakeasyBase {
    /**
     * Output only. Name of the entity.
     */
    entity?: string;
    /**
     * Output only. List of fields in the entity.
     */
    fields?: Field[];
}
