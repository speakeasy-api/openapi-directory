import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Output only. The profile object type.
 */
export declare enum ProfileMetadataObjectTypeEnum {
    ObjectTypeUnspecified = "OBJECT_TYPE_UNSPECIFIED",
    Person = "PERSON",
    Page = "PAGE"
}
export declare enum ProfileMetadataUserTypesEnum {
    UserTypeUnknown = "USER_TYPE_UNKNOWN",
    GoogleUser = "GOOGLE_USER",
    GplusUser = "GPLUS_USER",
    GoogleAppsUser = "GOOGLE_APPS_USER"
}
/**
 * The metadata about a profile.
 */
export declare class ProfileMetadata extends SpeakeasyBase {
    /**
     * Output only. The profile object type.
     */
    objectType?: ProfileMetadataObjectTypeEnum;
    /**
     * Output only. The user types.
     */
    userTypes?: ProfileMetadataUserTypesEnum[];
}
