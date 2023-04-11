import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Created
 */
export declare class PreviewUnderstandAssistantQuery extends SpeakeasyBase {
    /**
     * The unique ID of the Account that created this Query.
     */
    accountSid?: string;
    /**
     * The unique ID of the parent Assistant.
     */
    assistantSid?: string;
    /**
     * The date that this resource was created
     */
    dateCreated?: Date;
    /**
     * The date that this resource was last updated
     */
    dateUpdated?: Date;
    /**
     * An ISO language-country string of the sample.
     */
    language?: string;
    /**
     * The unique ID of the Model Build queried.
     */
    modelBuildSid?: string;
    /**
     * The end-user's natural language input.
     */
    query?: string;
    /**
     * The natural language analysis results which include the Task recognized, the confidence score and a list of identified Fields.
     */
    results?: any;
    /**
     * An optional reference to the Sample created from this query.
     */
    sampleSid?: string;
    /**
     * A 34 character string that uniquely identifies this resource.
     */
    sid?: string;
    /**
     * The communication channel where this end-user input came from
     */
    sourceChannel?: string;
    /**
     * A string that described the query status. The values can be: pending_review, reviewed, discarded
     */
    status?: string;
    url?: string;
}
