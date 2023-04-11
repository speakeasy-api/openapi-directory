import { SpeakeasyBase } from "../../../internal/utils";
import { PeopleSuggestion } from "./peoplesuggestion";
import { Source } from "./source";
/**
 * One suggestion result.
 */
export declare class SuggestResult extends SpeakeasyBase {
    /**
     * This field contains information about the person being suggested.
     */
    peopleSuggestion?: PeopleSuggestion;
    /**
     * This field does not contain anything as of now and is just used as an indicator that the suggest result was a phrase completion.
     */
    querySuggestion?: Record<string, any>;
    /**
     * Defines sources for the suggest/search APIs.
     */
    source?: Source;
    /**
     * The suggested query that will be used for search, when the user clicks on the suggestion
     */
    suggestedQuery?: string;
}
