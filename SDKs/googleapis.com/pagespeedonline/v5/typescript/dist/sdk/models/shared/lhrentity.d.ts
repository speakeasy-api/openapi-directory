import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Message containing an Entity.
 */
export declare class LhrEntity extends SpeakeasyBase {
    /**
     * Optional. An optional category name for the entity.
     */
    category?: string;
    /**
     * Optional. An optional homepage URL of the entity.
     */
    homepage?: string;
    /**
     * Optional. An optional flag indicating if the entity is the first party.
     */
    isFirstParty?: boolean;
    /**
     * Optional. An optional flag indicating if the entity is not recognized.
     */
    isUnrecognized?: boolean;
    /**
     * Required. Name of the entity.
     */
    name?: string;
    /**
     * Required. A list of URL origin strings that belong to this entity.
     */
    origins?: string[];
}
