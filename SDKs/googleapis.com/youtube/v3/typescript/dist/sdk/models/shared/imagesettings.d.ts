import { SpeakeasyBase } from "../../../internal/utils";
import { LocalizedProperty } from "./localizedproperty";
/**
 * Branding properties for images associated with the channel.
 */
export declare class ImageSettings extends SpeakeasyBase {
    backgroundImageUrl?: LocalizedProperty;
    /**
     * This is generated when a ChannelBanner.Insert request has succeeded for the given channel.
     */
    bannerExternalUrl?: string;
    /**
     * Banner image. Desktop size (1060x175).
     */
    bannerImageUrl?: string;
    /**
     * Banner image. Mobile size high resolution (1440x395).
     */
    bannerMobileExtraHdImageUrl?: string;
    /**
     * Banner image. Mobile size high resolution (1280x360).
     */
    bannerMobileHdImageUrl?: string;
    /**
     * Banner image. Mobile size (640x175).
     */
    bannerMobileImageUrl?: string;
    /**
     * Banner image. Mobile size low resolution (320x88).
     */
    bannerMobileLowImageUrl?: string;
    /**
     * Banner image. Mobile size medium/high resolution (960x263).
     */
    bannerMobileMediumHdImageUrl?: string;
    /**
     * Banner image. Tablet size extra high resolution (2560x424).
     */
    bannerTabletExtraHdImageUrl?: string;
    /**
     * Banner image. Tablet size high resolution (2276x377).
     */
    bannerTabletHdImageUrl?: string;
    /**
     * Banner image. Tablet size (1707x283).
     */
    bannerTabletImageUrl?: string;
    /**
     * Banner image. Tablet size low resolution (1138x188).
     */
    bannerTabletLowImageUrl?: string;
    /**
     * Banner image. TV size high resolution (1920x1080).
     */
    bannerTvHighImageUrl?: string;
    /**
     * Banner image. TV size extra high resolution (2120x1192).
     */
    bannerTvImageUrl?: string;
    /**
     * Banner image. TV size low resolution (854x480).
     */
    bannerTvLowImageUrl?: string;
    /**
     * Banner image. TV size medium resolution (1280x720).
     */
    bannerTvMediumImageUrl?: string;
    largeBrandedBannerImageImapScript?: LocalizedProperty;
    largeBrandedBannerImageUrl?: LocalizedProperty;
    smallBrandedBannerImageImapScript?: LocalizedProperty;
    smallBrandedBannerImageUrl?: LocalizedProperty;
    /**
     * The URL for a 1px by 1px tracking pixel that can be used to collect statistics for views of the channel or video pages.
     */
    trackingImageUrl?: string;
    watchIconImageUrl?: string;
}
