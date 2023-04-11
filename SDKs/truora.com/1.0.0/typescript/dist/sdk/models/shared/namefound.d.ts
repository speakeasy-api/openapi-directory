import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents names found during the process
 */
export declare class NameFound extends SpeakeasyBase {
    /**
     * Times this name was found during the background check process
     */
    count: number;
    /**
     * First name found in the background check
     */
    firstName: string;
    /**
     * Last name found in the background check
     */
    lastName: string;
}
