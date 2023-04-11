import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A setting for Glass.
 */
export declare class Setting extends SpeakeasyBase {
    /**
     * The setting's ID. The following IDs are valid:
     *
     * @remarks
     * - locale - The key to the user’s language/locale (BCP 47 identifier) that Glassware should use to render localized content.
     * - timezone - The key to the user’s current time zone region as defined in the tz database. Example: America/Los_Angeles.
     */
    id?: string;
    /**
     * The type of resource. This is always mirror#setting.
     */
    kind?: string;
    /**
     * The setting value, as a string.
     */
    value?: string;
}
