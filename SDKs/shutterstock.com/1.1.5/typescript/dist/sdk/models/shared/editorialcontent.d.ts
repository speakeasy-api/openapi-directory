import { SpeakeasyBase } from "../../../internal/utils";
import { EditorialAssets } from "./editorialassets";
import { EditorialCategory } from "./editorialcategory";
/**
 * Metadata about editorial content
**/
export declare class EditorialContent extends SpeakeasyBase {
    aspect?: number;
    assets?: EditorialAssets;
    byline?: string;
    caption?: string;
    categories?: EditorialCategory[];
    dateTaken?: Date;
    description?: string;
    id: string;
    keywords?: string[];
    specialInstructions?: string;
    title?: string;
}
