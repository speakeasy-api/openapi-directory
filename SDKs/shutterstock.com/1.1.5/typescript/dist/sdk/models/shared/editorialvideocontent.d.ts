import { SpeakeasyBase } from "../../../internal/utils";
import { EditorialVideoAssets } from "./editorialvideoassets";
import { EditorialCategory } from "./editorialcategory";
/**
 * Metadata about editorial content
**/
export declare class EditorialVideoContent extends SpeakeasyBase {
    aspect?: number;
    assets?: EditorialVideoAssets;
    byline?: string;
    caption?: string;
    categories?: EditorialCategory[];
    dateTaken?: Date;
    description?: string;
    id: string;
    keywords?: string[];
    title?: string;
}
