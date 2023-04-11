import { SpeakeasyBase } from "../../../internal/utils";
import { NameMatchCandidatesOut } from "./namematchcandidatesout";
/**
 * A list of genderized names.
 */
export declare class BatchNameMatchCandidatesOut extends SpeakeasyBase {
    /**
     * Classified matched names
     */
    namesAndMatchCandidates?: NameMatchCandidatesOut[];
}
