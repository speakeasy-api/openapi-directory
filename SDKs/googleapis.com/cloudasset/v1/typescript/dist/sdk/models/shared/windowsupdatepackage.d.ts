import { SpeakeasyBase } from "../../../internal/utils";
import { WindowsUpdateCategory } from "./windowsupdatecategory";
/**
 * Details related to a Windows Update package. Field data and names are taken from Windows Update API IUpdate Interface: https://docs.microsoft.com/en-us/windows/win32/api/_wua/ Descriptive fields like title, and description are localized based on the locale of the VM being updated.
 */
export declare class WindowsUpdatePackage extends SpeakeasyBase {
    /**
     * The categories that are associated with this update package.
     */
    categories?: WindowsUpdateCategory[];
    /**
     * The localized description of the update package.
     */
    description?: string;
    /**
     * A collection of Microsoft Knowledge Base article IDs that are associated with the update package.
     */
    kbArticleIds?: string[];
    /**
     * The last published date of the update, in (UTC) date and time.
     */
    lastDeploymentChangeTime?: string;
    /**
     * A collection of URLs that provide more information about the update package.
     */
    moreInfoUrls?: string[];
    /**
     * The revision number of this update package.
     */
    revisionNumber?: number;
    /**
     * A hyperlink to the language-specific support information for the update.
     */
    supportUrl?: string;
    /**
     * The localized title of the update package.
     */
    title?: string;
    /**
     * Gets the identifier of an update package. Stays the same across revisions.
     */
    updateId?: string;
}
