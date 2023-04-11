import { SpeakeasyBase } from "../../../internal/utils";
import { Category } from "./category";
import { Identity } from "./identity";
/**
 * Windows Update represents the metadata about the update for the Windows operating system. The fields in this message come from the Windows Update API documented at https://docs.microsoft.com/en-us/windows/win32/api/wuapi/nn-wuapi-iupdate.
 */
export declare class WindowsUpdate extends SpeakeasyBase {
    /**
     * The list of categories to which the update belongs.
     */
    categories?: Category[];
    /**
     * The localized description of the update.
     */
    description?: string;
    /**
     * The unique identifier of the update.
     */
    identity?: Identity;
    /**
     * The Microsoft Knowledge Base article IDs that are associated with the update.
     */
    kbArticleIds?: string[];
    /**
     * The last published timestamp of the update.
     */
    lastPublishedTimestamp?: string;
    /**
     * The hyperlink to the support information for the update.
     */
    supportUrl?: string;
    /**
     * The localized title of the update.
     */
    title?: string;
}
