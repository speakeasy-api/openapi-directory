import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The URL associated with any bill or legislative reference included in the description.
 */
export declare class LawReference extends SpeakeasyBase {
    /**
     * The context of the reference
     */
    description: string;
    /**
     * The url linking to the reference.
     */
    url: string;
}
