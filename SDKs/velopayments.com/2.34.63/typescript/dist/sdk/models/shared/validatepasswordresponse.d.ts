import { SpeakeasyBase } from "../../../internal/utils";
/**
 * the password was checked and a score returned
 */
export declare class ValidatePasswordResponse extends SpeakeasyBase {
    /**
     * More secure passwords are given a higher score. <P>
     *
     * @remarks
     * For a password to be acceptable for use in Velo, it must score at least 3
     *
     */
    score?: number;
    suggestions?: string[];
    /**
     * if true then the password can be accepted
     */
    valid?: boolean;
    /**
     * Any warning message as a reason for the given score.
     */
    warning?: string;
}
