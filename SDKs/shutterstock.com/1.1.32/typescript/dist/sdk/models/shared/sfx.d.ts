import { SpeakeasyBase } from "../../../internal/utils";
import { Contributor } from "./contributor";
import { SFXAssets } from "./sfxassets";
/**
 * SFX metadata
 */
export declare class Sfx extends SpeakeasyBase {
    /**
     * Date this sound effect was added to the Shutterstock library
     */
    addedDate?: Date;
    /**
     * Affiliate referral link; appears only for registered affiliate partners
     */
    affiliateUrl?: string;
    /**
     * Artist of the sound effect
     */
    artist?: string;
    /**
     * Files that are available as part of an sound effect asset
     */
    assets?: SFXAssets;
    /**
     * Information about a contributor
     */
    contributor: Contributor;
    /**
     * Description of this sound effect
     */
    description?: string;
    /**
     * Duration of this sound effect in seconds
     */
    duration?: number;
    /**
     * Shutterstock ID of this sound effect
     */
    id: string;
    /**
     * List of all keywords for this sound effect
     */
    keywords?: string[];
    /**
     * Media type of this track; should always be "sfx"
     */
    mediaType: string;
    /**
     * List of all releases of this sound effect
     */
    releases?: string[];
    /**
     * Title of this sound effect
     */
    title?: string;
    /**
     * Time this sound effect was last updated
     */
    updatedTime?: Date;
    url?: string;
}
