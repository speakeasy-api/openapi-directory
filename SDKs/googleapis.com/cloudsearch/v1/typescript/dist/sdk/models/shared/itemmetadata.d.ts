import { SpeakeasyBase } from "../../../internal/utils";
import { ContextAttribute } from "./contextattribute";
import { Interaction } from "./interaction";
import { SearchQualityMetadata } from "./searchqualitymetadata";
/**
 * Available metadata fields for the item.
 */
export declare class ItemMetadata extends SpeakeasyBase {
    /**
     * The name of the container for this item. Deletion of the container item leads to automatic deletion of this item. Note: ACLs are not inherited from a container item. To provide ACL inheritance for an item, use the inheritAclFrom field. The maximum length is 1536 characters.
     */
    containerName?: string;
    /**
     * The BCP-47 language code for the item, such as "en-US" or "sr-Latn". For more information, see http://www.unicode.org/reports/tr35/#Unicode_locale_identifier. The maximum length is 32 characters.
     */
    contentLanguage?: string;
    /**
     * A set of named attributes associated with the item. This can be used for influencing the ranking of the item based on the context in the request. The maximum number of elements is 10.
     */
    contextAttributes?: ContextAttribute[];
    /**
     * The time when the item was created in the source repository.
     */
    createTime?: string;
    /**
     * Hashing value provided by the API caller. This can be used with the items.push method to calculate modified state. The maximum length is 2048 characters.
     */
    hash?: string;
    /**
     * A list of interactions for the item. Interactions are used to improve Search quality, but are not exposed to end users. The maximum number of elements is 1000.
     */
    interactions?: Interaction[];
    /**
     * Additional keywords or phrases that should match the item. Used internally for user generated content. The maximum number of elements is 100. The maximum length is 8192 characters.
     */
    keywords?: string[];
    /**
     * The original mime-type of ItemContent.content in the source repository. The maximum length is 256 characters.
     */
    mimeType?: string;
    /**
     * The type of the item. This should correspond to the name of an object definition in the schema registered for the data source. For example, if the schema for the data source contains an object definition with name 'document', then item indexing requests for objects of that type should set objectType to 'document'. The maximum length is 256 characters.
     */
    objectType?: string;
    /**
     * Additional search quality metadata of the item.
     */
    searchQualityMetadata?: SearchQualityMetadata;
    /**
     * Link to the source repository serving the data. Seach results apply this link to the title. Whitespace or special characters may cause Cloud Seach result links to trigger a redirect notice; to avoid this, encode the URL. The maximum length is 2048 characters.
     */
    sourceRepositoryUrl?: string;
    /**
     * The title of the item. If given, this will be the displayed title of the Search result. The maximum length is 2048 characters.
     */
    title?: string;
    /**
     * The time when the item was last modified in the source repository.
     */
    updateTime?: string;
}
