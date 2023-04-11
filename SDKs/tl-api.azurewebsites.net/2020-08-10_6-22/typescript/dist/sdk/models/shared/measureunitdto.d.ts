import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Mesure unit to represent article mesure unit
 */
export declare class MeasureUnitDTO extends SpeakeasyBase {
    /**
     * Id of the table
     */
    id?: number;
    /**
     * Mesure Unit Type
     */
    name?: string;
    /**
     * Type of the article used with (all, service, item)
     */
    type?: string;
}
