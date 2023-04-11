import { SpeakeasyBase } from "../../../internal/utils";
/**
 * First / last name structure corresponding to the most likely parsing.
 */
export declare class FirstLastNameOut extends SpeakeasyBase {
    /**
     * The first name (also known as given name)
     */
    firstName?: string;
    id?: string;
    /**
     * The last name (also known as family name, or surname)
     */
    lastName?: string;
    script?: string;
}
