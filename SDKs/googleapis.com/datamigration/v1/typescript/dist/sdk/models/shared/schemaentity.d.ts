import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Schema typically has no parent entity, but can have a parent entity DatabaseInstance (for database engines which support it). For some database engines, the terms schema and user can be used interchangeably when they refer to a namespace or a collection of other database entities. Can store additional information which is schema specific.
 */
export declare class SchemaEntity extends SpeakeasyBase {
    /**
     * Custom engine specific features.
     */
    customFeatures?: Record<string, any>;
}
