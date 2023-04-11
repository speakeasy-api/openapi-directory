import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Properties specific to a linked Person.
 */
export declare class PersonProperties extends SpeakeasyBase {
    /**
     * Output only. The email address linked to this Person. This field is always present.
     */
    email?: string;
    /**
     * Output only. The name of the person if it's displayed in the link text instead of the person's email address.
     */
    name?: string;
}
