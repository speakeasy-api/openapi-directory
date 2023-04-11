import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A Lien represents an encumbrance on the actions that can be performed on a resource.
 */
export declare class Lien extends SpeakeasyBase {
    /**
     * The creation time of this Lien.
     */
    createTime?: string;
    /**
     * A system-generated unique identifier for this Lien. Example: `liens/1234abcd`
     */
    name?: string;
    /**
     * A stable, user-visible/meaningful string identifying the origin of the Lien, intended to be inspected programmatically. Maximum length of 200 characters. Example: 'compute.googleapis.com'
     */
    origin?: string;
    /**
     * A reference to the resource this Lien is attached to. The server will validate the parent against those for which Liens are supported. Example: `projects/1234`
     */
    parent?: string;
    /**
     * Concise user-visible strings indicating why an action cannot be performed on a resource. Maximum length of 200 characters. Example: 'Holds production API key'
     */
    reason?: string;
    /**
     * The types of operations which should be blocked as a result of this Lien. Each value should correspond to an IAM permission. The server will validate the permissions against those for which Liens are supported. An empty list is meaningless and will be rejected. Example: ['resourcemanager.projects.delete']
     */
    restrictions?: string[];
}
