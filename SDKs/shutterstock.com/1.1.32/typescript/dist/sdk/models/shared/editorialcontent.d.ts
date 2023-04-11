import { SpeakeasyBase } from "../../../internal/utils";
import { EditorialAssets } from "./editorialassets";
import { EditorialCategory } from "./editorialcategory";
/**
 * Metadata about editorial content
 */
export declare class EditorialContent extends SpeakeasyBase {
    aspect?: number;
    /**
     * Asset information, including size and thumbnail URLs
     */
    assets?: EditorialAssets;
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
    specialInstructions?: string;
    title?: string;
}
