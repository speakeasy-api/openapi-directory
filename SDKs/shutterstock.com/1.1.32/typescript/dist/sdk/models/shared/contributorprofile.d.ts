import { SpeakeasyBase } from "../../../internal/utils";
import { ContributorProfileSocialMedia } from "./contributorprofilesocialmedia";
/**
 * Contributor profile data
 */
export declare class ContributorProfile extends SpeakeasyBase {
    /**
     * Short description of the contributors' library
     */
    about?: string;
    /**
     * Type of content that the contributor specializes in (photographer, illustrator, etc)
     */
    contributorType?: string[];
    /**
     * Preferred name to be displayed for the contributor
     */
    displayName?: string;
    /**
     * List of equipment used by the contributor (Canon EOS 5D Mark II, etc)
     */
    equipment?: string[];
    /**
     * Contributor ID
     */
    id: string;
    /**
     * Country code representing the contributor's locale
     */
    location?: string;
    /**
     * Web URL for the contributors' profile
     */
    portfolioUrl?: string;
    /**
     * Contributor profile social media links
     */
    socialMedia?: ContributorProfileSocialMedia;
    /**
     * List of styles that the contributor specializes in (lifestyle, mixed media, etc)
     */
    styles?: string[];
    /**
     * Generic list of subjects for contributors' work (food_and_drink, holiday, people, etc)
     */
    subjects?: string[];
    /**
     * Personal website for the contributor
     */
    website?: string;
}
