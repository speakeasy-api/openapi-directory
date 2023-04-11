import { SpeakeasyBase } from "../../../internal/utils";
import { NestedParameter } from "./nestedparameter";
/**
 * User doing the action.
 */
export declare class ActivityActor extends SpeakeasyBase {
    /**
     * The type of actor.
     */
    callerType?: string;
    /**
     * The primary email address of the actor. May be absent if there is no email address associated with the actor.
     */
    email?: string;
    /**
     * Only present when `callerType` is `KEY`. Can be the `consumer_key` of the requestor for OAuth 2LO API requests or an identifier for robot accounts.
     */
    key?: string;
    /**
     * The unique Google Workspace profile ID of the actor. This value might be absent if the actor is not a Google Workspace user, or may be the number 105250506097979753968 which acts as a placeholder ID.
     */
    profileId?: string;
}
/**
 * Nested parameter value pairs associated with this parameter. Complex value type for a parameter are returned as a list of parameter values. For example, the address parameter may have a value as `[{parameter: [{name: city, value: abc}]}]`
 */
export declare class ActivityEventsParametersMessageValue extends SpeakeasyBase {
    /**
     * Parameter values
     */
    parameter?: NestedParameter[];
}
export declare class ActivityEventsParametersMultiMessageValue extends SpeakeasyBase {
    /**
     * Parameter values
     */
    parameter?: NestedParameter[];
}
export declare class ActivityEventsParameters extends SpeakeasyBase {
    /**
     * Boolean value of the parameter.
     */
    boolValue?: boolean;
    /**
     * Integer value of the parameter.
     */
    intValue?: string;
    /**
     * Nested parameter value pairs associated with this parameter. Complex value type for a parameter are returned as a list of parameter values. For example, the address parameter may have a value as `[{parameter: [{name: city, value: abc}]}]`
     */
    messageValue?: ActivityEventsParametersMessageValue;
    /**
     * Integer values of the parameter.
     */
    multiIntValue?: string[];
    /**
     * List of `messageValue` objects.
     */
    multiMessageValue?: ActivityEventsParametersMultiMessageValue[];
    /**
     * String values of the parameter.
     */
    multiValue?: string[];
    /**
     * The name of the parameter.
     */
    name?: string;
    /**
     * String value of the parameter.
     */
    value?: string;
}
export declare class ActivityEvents extends SpeakeasyBase {
    /**
     * Name of the event. This is the specific name of the activity reported by the API. And each `eventName` is related to a specific Google Workspace service or feature which the API organizes into types of events. For `eventName` request parameters in general: - If no `eventName` is given, the report returns all possible instances of an `eventName`. - When you request an `eventName`, the API's response returns all activities which contain that `eventName`. It is possible that the returned activities will have other `eventName` properties in addition to the one requested. For more information about `eventName` properties, see the list of event names for various applications above in `applicationName`.
     */
    name?: string;
    /**
     * Parameter value pairs for various applications. For more information about `eventName` parameters, see the list of event names for various applications above in `applicationName`.
     */
    parameters?: ActivityEventsParameters[];
    /**
     * Type of event. The Google Workspace service or feature that an administrator changes is identified in the `type` property which identifies an event using the `eventName` property. For a full list of the API's `type` categories, see the list of event names for various applications above in `applicationName`.
     */
    type?: string;
}
/**
 * Unique identifier for each activity record.
 */
export declare class ActivityId extends SpeakeasyBase {
    /**
     * Application name to which the event belongs. For possible values see the list of applications above in `applicationName`.
     */
    applicationName?: string;
    /**
     * The unique identifier for a Google Workspace account.
     */
    customerId?: string;
    /**
     * Time of occurrence of the activity. This is in UNIX epoch time in seconds.
     */
    time?: Date;
    /**
     * Unique qualifier if multiple events have the same time.
     */
    uniqueQualifier?: string;
}
/**
 * JSON template for the activity resource.
 */
export declare class Activity extends SpeakeasyBase {
    /**
     * User doing the action.
     */
    actor?: ActivityActor;
    /**
     * ETag of the entry.
     */
    etag?: string;
    /**
     * Activity events in the report.
     */
    events?: ActivityEvents[];
    /**
     * Unique identifier for each activity record.
     */
    id?: ActivityId;
    /**
     * IP address of the user doing the action. This is the Internet Protocol (IP) address of the user when logging into Google Workspace, which may or may not reflect the user's physical location. For example, the IP address can be the user's proxy server's address or a virtual private network (VPN) address. The API supports IPv4 and IPv6.
     */
    ipAddress?: string;
    /**
     * The type of API resource. For an activity report, the value is `audit#activity`.
     */
    kind?: string;
    /**
     * This is the domain that is affected by the report's event. For example domain of Admin console or the Drive application's document owner.
     */
    ownerDomain?: string;
}
