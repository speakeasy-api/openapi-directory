import { SpeakeasyBase } from "../../../internal/utils";
import { EditorialCategory } from "./editorialcategory";
import { EditorialVideoAssets } from "./editorialvideoassets";
/**
 * Metadata about editorial content
 */
export declare class EditorialVideoContent extends SpeakeasyBase {
    aspect?: number;
    /**
     * Asset information, including size and thumbnail URLs
     */
    assets?: EditorialVideoAssets;
    byline?: string;
    caption?: string;
    /**
     * List of categories
     */
    categories?: EditorialCategory[];
    dateTaken?: Date;
    description?: string;
    id: string;
    keywords?: string[];
    title?: string;
}
