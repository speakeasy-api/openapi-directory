import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Whether text copied from one profile (personal or work) can be pasted in the other profile.
 */
export declare enum CrossProfilePoliciesCrossProfileCopyPasteEnum {
    CrossProfileCopyPasteUnspecified = "CROSS_PROFILE_COPY_PASTE_UNSPECIFIED",
    CopyFromWorkToPersonalDisallowed = "COPY_FROM_WORK_TO_PERSONAL_DISALLOWED",
    CrossProfileCopyPasteAllowed = "CROSS_PROFILE_COPY_PASTE_ALLOWED"
}
/**
 * Whether data from one profile (personal or work) can be shared with apps in the other profile. Specifically controls simple data sharing via intents. Management of other cross-profile communication channels, such as contact search, copy/paste, or connected work & personal apps, are configured separately.
 */
export declare enum CrossProfilePoliciesCrossProfileDataSharingEnum {
    CrossProfileDataSharingUnspecified = "CROSS_PROFILE_DATA_SHARING_UNSPECIFIED",
    CrossProfileDataSharingDisallowed = "CROSS_PROFILE_DATA_SHARING_DISALLOWED",
    DataSharingFromWorkToPersonalDisallowed = "DATA_SHARING_FROM_WORK_TO_PERSONAL_DISALLOWED",
    CrossProfileDataSharingAllowed = "CROSS_PROFILE_DATA_SHARING_ALLOWED"
}
/**
 * Whether contacts stored in the work profile can be shown in personal profile contact searches and incoming calls.
 */
export declare enum CrossProfilePoliciesShowWorkContactsInPersonalProfileEnum {
    ShowWorkContactsInPersonalProfileUnspecified = "SHOW_WORK_CONTACTS_IN_PERSONAL_PROFILE_UNSPECIFIED",
    ShowWorkContactsInPersonalProfileDisallowed = "SHOW_WORK_CONTACTS_IN_PERSONAL_PROFILE_DISALLOWED",
    ShowWorkContactsInPersonalProfileAllowed = "SHOW_WORK_CONTACTS_IN_PERSONAL_PROFILE_ALLOWED"
}
/**
 * Specifies the default behaviour for work profile widgets. If the policy does not specify work_profile_widgets for a specific application, it will behave according to the value specified here.
 */
export declare enum CrossProfilePoliciesWorkProfileWidgetsDefaultEnum {
    WorkProfileWidgetsDefaultUnspecified = "WORK_PROFILE_WIDGETS_DEFAULT_UNSPECIFIED",
    WorkProfileWidgetsDefaultAllowed = "WORK_PROFILE_WIDGETS_DEFAULT_ALLOWED",
    WorkProfileWidgetsDefaultDisallowed = "WORK_PROFILE_WIDGETS_DEFAULT_DISALLOWED"
}
/**
 * Cross-profile policies applied on the device.
 */
export declare class CrossProfilePolicies extends SpeakeasyBase {
    /**
     * Whether text copied from one profile (personal or work) can be pasted in the other profile.
     */
    crossProfileCopyPaste?: CrossProfilePoliciesCrossProfileCopyPasteEnum;
    /**
     * Whether data from one profile (personal or work) can be shared with apps in the other profile. Specifically controls simple data sharing via intents. Management of other cross-profile communication channels, such as contact search, copy/paste, or connected work & personal apps, are configured separately.
     */
    crossProfileDataSharing?: CrossProfilePoliciesCrossProfileDataSharingEnum;
    /**
     * Whether contacts stored in the work profile can be shown in personal profile contact searches and incoming calls.
     */
    showWorkContactsInPersonalProfile?: CrossProfilePoliciesShowWorkContactsInPersonalProfileEnum;
    /**
     * Specifies the default behaviour for work profile widgets. If the policy does not specify work_profile_widgets for a specific application, it will behave according to the value specified here.
     */
    workProfileWidgetsDefault?: CrossProfilePoliciesWorkProfileWidgetsDefaultEnum;
}
