import { SpeakeasyBase } from "../../../internal/utils";
import { ContributorProfileSocialMedia } from "./contributorprofilesocialmedia";
/**
 * Contributor profile data
**/
export declare class ContributorProfile extends SpeakeasyBase {
    about?: string;
    contributorType?: string[];
    displayName?: string;
    equipment?: string[];
    id: string;
    location?: string;
    portfolioUrl?: string;
    socialMedia?: ContributorProfileSocialMedia;
    styles?: string[];
    subjects?: string[];
    website?: string;
}
