import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Details about the space including description and rules.
 */
export declare class SpaceDetails extends SpeakeasyBase {
    /**
     * Optional. A description of the space. It could describe the space's discussion topic, functional purpose, or participants. Supports up to 150 characters.
     */
    description?: string;
    /**
     * Optional. The space's rules, expectations, and etiquette. Supports up to 5,000 characters.
     */
    guidelines?: string;
}
