import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The app store the app belongs to. Can be used to filter the response of the publisherProfiles.list method.
 */
export declare enum PublisherProfileMobileApplicationAppStoreEnum {
    AppStoreTypeUnspecified = "APP_STORE_TYPE_UNSPECIFIED",
    AppleItunes = "APPLE_ITUNES",
    GooglePlay = "GOOGLE_PLAY",
    Roku = "ROKU",
    AmazonFireTv = "AMAZON_FIRE_TV",
    Playstation = "PLAYSTATION",
    Xbox = "XBOX",
    SamsungTv = "SAMSUNG_TV",
    Amazon = "AMAZON",
    Oppo = "OPPO",
    Samsung = "SAMSUNG",
    Vivo = "VIVO",
    Xiaomi = "XIAOMI"
}
/**
 * A mobile application that contains a external app ID, name, and app store.
 */
export declare class PublisherProfileMobileApplication extends SpeakeasyBase {
    /**
     * The app store the app belongs to. Can be used to filter the response of the publisherProfiles.list method.
     */
    appStore?: PublisherProfileMobileApplicationAppStoreEnum;
    /**
     * The external ID for the app from its app store. Can be used to filter the response of the publisherProfiles.list method.
     */
    externalAppId?: string;
    /**
     * The name of the app.
     */
    name?: string;
}
