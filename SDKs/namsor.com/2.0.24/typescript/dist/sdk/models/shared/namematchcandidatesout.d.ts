import { SpeakeasyBase } from "../../../internal/utils";
import { NameMatchCandidateOut } from "./namematchcandidateout";
/**
 * Classified matched names
 */
export declare class NameMatchCandidatesOut extends SpeakeasyBase {
    /**
     * The first name (also known as given name)
     */
    firstName?: string;
    id?: string;
    /**
     * The last name (also known as family name, or surname)
     */
    lastName?: string;
    /**
     * The ordered list of name matching candidates
     */
    matchCandidates?: NameMatchCandidateOut[];
    /**
     * The option for ordering
     */
    orderOption?: string;
    script?: string;
}
