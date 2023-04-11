import { SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";
/**
 * The body of a version resource. A version resource represents a collection of components, such as files and other data. This may correspond to a version in many package management schemes.
 */
export declare class Version extends SpeakeasyBase {
    /**
     * The time when the version was created.
     */
    createTime?: string;
    /**
     * Optional. Description of the version, as specified in its metadata.
     */
    description?: string;
    /**
     * The name of the version, for example: "projects/p1/locations/us-central1/repositories/repo1/packages/pkg1/versions/art1". If the package or version ID parts contain slashes, the slashes are escaped.
     */
    name?: string;
    /**
     * Output only. A list of related tags. Will contain up to 100 tags that reference this version.
     */
    relatedTags?: Tag[];
    /**
     * The time when the version was last updated.
     */
    updateTime?: string;
}
