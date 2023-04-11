import { SpeakeasyBase } from "../../../internal/utils";
import { Source, SourceInput } from "./source";
/**
 * Output only. **DEPRECATED** (Please use `person.metadata.sources.profileMetadata.objectType` instead) The type of the person object.
 */
export declare enum PersonMetadataObjectTypeEnum {
    ObjectTypeUnspecified = "OBJECT_TYPE_UNSPECIFIED",
    Person = "PERSON",
    Page = "PAGE"
}
/**
 * The metadata about a person.
 */
export declare class PersonMetadata extends SpeakeasyBase {
    /**
     * Output only. True if the person resource has been deleted. Populated only for `people.connections.list` and `otherContacts.list` sync requests.
     */
    deleted?: boolean;
    /**
     * Output only. Resource names of people linked to this resource.
     */
    linkedPeopleResourceNames?: string[];
    /**
     * Output only. **DEPRECATED** (Please use `person.metadata.sources.profileMetadata.objectType` instead) The type of the person object.
     */
    objectType?: PersonMetadataObjectTypeEnum;
    /**
     * Output only. Any former resource names this person has had. Populated only for `people.connections.list` requests that include a sync token. The resource name may change when adding or removing fields that link a contact and profile such as a verified email, verified phone number, or profile URL.
     */
    previousResourceNames?: string[];
    /**
     * The sources of data for the person.
     */
    sources?: Source[];
}
/**
 * The metadata about a person.
 */
export declare class PersonMetadataInput extends SpeakeasyBase {
    /**
     * The sources of data for the person.
     */
    sources?: SourceInput[];
}
