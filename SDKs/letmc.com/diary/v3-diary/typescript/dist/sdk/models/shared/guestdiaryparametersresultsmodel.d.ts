import { SpeakeasyBase } from "../../../internal/utils";
import { BaseHypermediaLink } from "./basehypermedialink";
import { GuestDiaryParametersModel } from "./guestdiaryparametersmodel";
/**
 * Contacts Person Model Results:-
 */
export declare class GuestDiaryParametersResultsModel extends SpeakeasyBase {
    /**
     * Results count:-
     */
    count?: number;
    /**
     * Results data:-
     */
    data?: GuestDiaryParametersModel[];
    /**
     * Results links:-
     */
    links?: BaseHypermediaLink[];
}
