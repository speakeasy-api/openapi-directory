import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The user's legal name
 */
export declare class SignalPersonName extends SpeakeasyBase {
    /**
     * The user's family name / surname
     */
    familyName?: string;
    /**
     * The user's given name. If the user has a one-word name, it should be provided in this field.
     */
    givenName?: string;
    /**
     * The user's middle name
     */
    middleName?: string;
    /**
     * The user's name prefix (e.g. "Mr.")
     */
    prefix?: string;
    /**
     * The user's name suffix (e.g. "II")
     */
    suffix?: string;
}
