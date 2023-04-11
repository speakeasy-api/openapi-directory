import { SpeakeasyBase } from "../../../internal/utils";
export declare enum QueryInterpretationInterpretationTypeEnum {
    None = "NONE",
    Blend = "BLEND",
    Replace = "REPLACE"
}
/**
 * The reason for interpretation of the query. This field will not be UNSPECIFIED if the interpretation type is not NONE.
 */
export declare enum QueryInterpretationReasonEnum {
    Unspecified = "UNSPECIFIED",
    QueryHasNaturalLanguageIntent = "QUERY_HAS_NATURAL_LANGUAGE_INTENT",
    NotEnoughResultsFoundForUserQuery = "NOT_ENOUGH_RESULTS_FOUND_FOR_USER_QUERY"
}
export declare class QueryInterpretation extends SpeakeasyBase {
    interpretationType?: QueryInterpretationInterpretationTypeEnum;
    /**
     * The interpretation of the query used in search. For example, queries with natural language intent like "email from john" will be interpreted as "from:john source:mail". This field will not be filled when the reason is NOT_ENOUGH_RESULTS_FOUND_FOR_USER_QUERY.
     */
    interpretedQuery?: string;
    /**
     * The reason for interpretation of the query. This field will not be UNSPECIFIED if the interpretation type is not NONE.
     */
    reason?: QueryInterpretationReasonEnum;
}
