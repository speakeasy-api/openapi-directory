import { SpeakeasyBase } from "../../../internal/utils";
import { Actor, ActorInput } from "./actor";
import { CaseClassification } from "./caseclassification";
/**
 * The priority of this case. If this is set, do not set severity.
 */
export declare enum CasePriorityEnum {
    PriorityUnspecified = "PRIORITY_UNSPECIFIED",
    P0 = "P0",
    P1 = "P1",
    P2 = "P2",
    P3 = "P3",
    P4 = "P4"
}
/**
 * The severity of this case. Deprecated. Use priority instead.
 */
export declare enum CaseSeverityEnum {
    SeverityUnspecified = "SEVERITY_UNSPECIFIED",
    S0 = "S0",
    S1 = "S1",
    S2 = "S2",
    S3 = "S3",
    S4 = "S4"
}
/**
 * A support case.
 */
export declare class CaseInput extends SpeakeasyBase {
    /**
     * A classification object with a product type and value.
     */
    classification?: CaseClassification;
    /**
     * An object containing information about the effective user and authenticated principal responsible for an action.
     */
    creator?: ActorInput;
    /**
     * A broad description of the issue.
     */
    description?: string;
    /**
     * The short summary of the issue reported in this case.
     */
    displayName?: string;
    /**
     * Whether the case is currently escalated.
     */
    escalated?: boolean;
    /**
     * The language the user has requested to receive support in. This should be a BCP 47 language code (e.g., `"en"`, `"zh-CN"`, `"zh-TW"`, `"ja"`, `"ko"`). If no language or an unsupported language is specified, this field defaults to English (en). Language selection during case creation may affect your available support options. For a list of supported languages and their support working hours, see: https://cloud.google.com/support/docs/language-working-hours
     */
    languageCode?: string;
    /**
     * The resource name for the case.
     */
    name?: string;
    /**
     * The priority of this case. If this is set, do not set severity.
     */
    priority?: CasePriorityEnum;
    /**
     * The severity of this case. Deprecated. Use priority instead.
     */
    severity?: CaseSeverityEnum;
    /**
     * The email addresses to receive updates on this case.
     */
    subscriberEmailAddresses?: string[];
    /**
     * Whether this case was created for internal API testing and should not be acted on by the support team.
     */
    testCase?: boolean;
    /**
     * The timezone of the user who created the support case. It should be in a format IANA recognizes: https://www.iana.org/time-zones. There is no additional validation done by the API.
     */
    timeZone?: string;
}
/**
 * Output only. The current status of the support case.
 */
export declare enum CaseStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    New = "NEW",
    InProgressGoogleSupport = "IN_PROGRESS_GOOGLE_SUPPORT",
    ActionRequired = "ACTION_REQUIRED",
    SolutionProvided = "SOLUTION_PROVIDED",
    Closed = "CLOSED"
}
/**
 * A support case.
 */
export declare class Case extends SpeakeasyBase {
    /**
     * A classification object with a product type and value.
     */
    classification?: CaseClassification;
    /**
     * Output only. The time this case was created.
     */
    createTime?: string;
    /**
     * An object containing information about the effective user and authenticated principal responsible for an action.
     */
    creator?: Actor;
    /**
     * A broad description of the issue.
     */
    description?: string;
    /**
     * The short summary of the issue reported in this case.
     */
    displayName?: string;
    /**
     * Whether the case is currently escalated.
     */
    escalated?: boolean;
    /**
     * The language the user has requested to receive support in. This should be a BCP 47 language code (e.g., `"en"`, `"zh-CN"`, `"zh-TW"`, `"ja"`, `"ko"`). If no language or an unsupported language is specified, this field defaults to English (en). Language selection during case creation may affect your available support options. For a list of supported languages and their support working hours, see: https://cloud.google.com/support/docs/language-working-hours
     */
    languageCode?: string;
    /**
     * The resource name for the case.
     */
    name?: string;
    /**
     * The priority of this case. If this is set, do not set severity.
     */
    priority?: CasePriorityEnum;
    /**
     * The severity of this case. Deprecated. Use priority instead.
     */
    severity?: CaseSeverityEnum;
    /**
     * Output only. The current status of the support case.
     */
    state?: CaseStateEnum;
    /**
     * The email addresses to receive updates on this case.
     */
    subscriberEmailAddresses?: string[];
    /**
     * Whether this case was created for internal API testing and should not be acted on by the support team.
     */
    testCase?: boolean;
    /**
     * The timezone of the user who created the support case. It should be in a format IANA recognizes: https://www.iana.org/time-zones. There is no additional validation done by the API.
     */
    timeZone?: string;
    /**
     * Output only. The time this case was last updated.
     */
    updateTime?: string;
}
