import { SpeakeasyBase } from "../../../internal/utils";
/**
 * User settings in sub-objects, each for different purposes.
 */
export declare class UsersettingsNotesExport extends SpeakeasyBase {
    folderName?: string;
    isEnabled?: boolean;
}
export declare class UsersettingsNotificationMatchMyInterests extends SpeakeasyBase {
    optedState?: string;
}
export declare class UsersettingsNotificationMoreFromAuthors extends SpeakeasyBase {
    optedState?: string;
}
export declare class UsersettingsNotificationMoreFromSeries extends SpeakeasyBase {
    optedState?: string;
}
export declare class UsersettingsNotificationPriceDrop extends SpeakeasyBase {
    optedState?: string;
}
export declare class UsersettingsNotificationRewardExpirations extends SpeakeasyBase {
    optedState?: string;
}
export declare class UsersettingsNotification extends SpeakeasyBase {
    matchMyInterests?: UsersettingsNotificationMatchMyInterests;
    moreFromAuthors?: UsersettingsNotificationMoreFromAuthors;
    moreFromSeries?: UsersettingsNotificationMoreFromSeries;
    priceDrop?: UsersettingsNotificationPriceDrop;
    rewardExpirations?: UsersettingsNotificationRewardExpirations;
}
/**
 * Successful response
 */
export declare class Usersettings extends SpeakeasyBase {
    /**
     * Resource type.
     */
    kind?: string;
    /**
     * User settings in sub-objects, each for different purposes.
     */
    notesExport?: UsersettingsNotesExport;
    notification?: UsersettingsNotification;
}
