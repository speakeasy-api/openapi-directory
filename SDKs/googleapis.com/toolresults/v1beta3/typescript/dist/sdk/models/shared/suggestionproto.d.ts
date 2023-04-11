import { SpeakeasyBase } from "../../../internal/utils";
import { RegionProto } from "./regionproto";
import { SafeHtmlProto } from "./safehtmlproto";
/**
 * Relative importance of a suggestion. Always set.
 */
export declare enum SuggestionProtoPriorityEnum {
    UnknownPriority = "unknownPriority",
    Error = "error",
    Warning = "warning",
    Info = "info"
}
export declare class SuggestionProto extends SpeakeasyBase {
    /**
     * Reference to a help center article concerning this type of suggestion. Always set.
     */
    helpUrl?: string;
    /**
     * IMPORTANT: It is unsafe to accept this message from an untrusted source, since it's trivial for an attacker to forge serialized messages that don't fulfill the type's safety contract -- for example, it could contain attacker controlled script. A system which receives a SafeHtmlProto implicitly trusts the producer of the SafeHtmlProto. So, it's generally safe to return this message in RPC responses, but generally unsafe to accept it in RPC requests.
     */
    longMessage?: SafeHtmlProto;
    /**
     * Relative importance of a suggestion. Always set.
     */
    priority?: SuggestionProtoPriorityEnum;
    /**
     * A somewhat human readable identifier of the source view, if it does not have a resource_name. This is a path within the accessibility hierarchy, an element with resource name; similar to an XPath.
     */
    pseudoResourceId?: string;
    /**
     * A rectangular region.
     */
    region?: RegionProto;
    /**
     * Reference to a view element, identified by its resource name, if it has one.
     */
    resourceName?: string;
    /**
     * ID of the screen for the suggestion. It is used for getting the corresponding screenshot path. For example, screen_id "1" corresponds to "1.png" file in GCS. Always set.
     */
    screenId?: string;
    /**
     * Relative importance of a suggestion as compared with other suggestions that have the same priority and category. This is a meaningless value that can be used to order suggestions that are in the same category and have the same priority. The larger values have higher priority (i.e., are more important). Optional.
     */
    secondaryPriority?: number;
    /**
     * IMPORTANT: It is unsafe to accept this message from an untrusted source, since it's trivial for an attacker to forge serialized messages that don't fulfill the type's safety contract -- for example, it could contain attacker controlled script. A system which receives a SafeHtmlProto implicitly trusts the producer of the SafeHtmlProto. So, it's generally safe to return this message in RPC responses, but generally unsafe to accept it in RPC requests.
     */
    shortMessage?: SafeHtmlProto;
    /**
     * General title for the suggestion, in the user's language, without markup. Always set.
     */
    title?: string;
}
