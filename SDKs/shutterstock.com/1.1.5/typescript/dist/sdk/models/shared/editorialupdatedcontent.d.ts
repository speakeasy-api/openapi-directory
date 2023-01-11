import { SpeakeasyBase } from "../../../internal/utils";
import { EditorialAssets } from "./editorialassets";
import { EditorialCategory } from "./editorialcategory";
export declare class EditorialUpdatedContentRights extends SpeakeasyBase {
    countries?: string;
}
/**
 * Metadata about updated editorial content
**/
export declare class EditorialUpdatedContent extends SpeakeasyBase {
    aspect?: number;
    assets?: EditorialAssets;
    byline?: string;
    caption?: string;
    categories?: EditorialCategory[];
    commercialStatus?: any;
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
