import { SpeakeasyBase } from "../../../internal/utils";
import { EditorialAssets } from "./editorialassets";
import { EditorialCategory } from "./editorialcategory";
export declare class EditorialUpdatedContentCommercialStatus extends SpeakeasyBase {
    reason?: string;
    status?: string;
}
export declare class EditorialUpdatedContentRights extends SpeakeasyBase {
    countries?: string;
}
/**
 * Metadata about updated editorial content
 */
export declare class EditorialUpdatedContent extends SpeakeasyBase {
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
    commercialStatus?: EditorialUpdatedContentCommercialStatus;
    createdTime?: Date;
    dateTaken?: Date;
    description?: string;
    id: string;
    keywords?: string[];
    rights?: EditorialUpdatedContentRights;
    specialInstructions?: string;
    supplierCode?: string;
    title?: string;
    updatedTime?: Date;
    updates?: string[];
}
