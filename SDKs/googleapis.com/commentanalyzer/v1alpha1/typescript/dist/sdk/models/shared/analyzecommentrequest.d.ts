import { SpeakeasyBase } from "../../../internal/utils";
import { AttributeParameters } from "./attributeparameters";
import { Context } from "./context";
import { TextEntry } from "./textentry";
/**
 * The comment analysis request message. Next ID: 11
 */
export declare class AnalyzeCommentRequest extends SpeakeasyBase {
    /**
     * Opaque token that is echoed from the request to the response.
     */
    clientToken?: string;
    /**
     * Represents a body of text.
     */
    comment?: TextEntry;
    /**
     * Optional identifier associating this AnalyzeCommentRequest with a particular client's community. Different communities may have different norms and rules. Specifying this value enables us to explore building community-specific models for clients.
     */
    communityId?: string;
    /**
     * Context is typically something that a Comment is referencing or replying to (such as an article, or previous comment). Note: Populate only ONE OF the following fields. The oneof syntax cannot be used because that would require nesting entries inside another message and breaking backwards compatibility. The server will return an error if more than one of the following fields is present.
     */
    context?: Context;
    /**
     * Do not store the comment or context sent in this request. By default, the service may store comments/context for debugging purposes.
     */
    doNotStore?: boolean;
    /**
     * If specified, any requested attribute that is requested but not supported for the language detected will be dropped from the returned scores instead of returning an error.
     */
    dropUnsupportedAttributes?: boolean;
    /**
     * The language(s) of the comment and context. If none are specified, we attempt to automatically detect the language. Specifying multiple languages means the text contains multiple lanugages. Both ISO and BCP-47 language codes are accepted. The server returns an error if no language was specified and language detection fails. The server also returns an error if the languages (either specified by the caller, or auto-detected) are not *all* supported by the service.
     */
    languages?: string[];
    /**
     * Specification of requested attributes. The AttributeParameters serve as configuration for each associated attribute. The map keys are attribute names. The available attributes may be different on each RFE installation, and can be seen by calling ListAttributes (see above). For the prod installation, known as Perspective API, see https://developers.perspectiveapi.com/s/about-the-api-model-cards.
     */
    requestedAttributes?: Record<string, AttributeParameters>;
    /**
     * Session ID. Used to join related RPCs into a single session. For example, an interactive tool that calls both the AnalyzeComment and SuggestCommentScore RPCs should set all invocations of both RPCs to the same Session ID, typically a random 64-bit integer.
     */
    sessionId?: string;
    /**
     * An advisory parameter that will return span annotations if the model is capable of providing scores with sub-comment resolution. This will likely increase the size of the returned message.
     */
    spanAnnotations?: boolean;
}
