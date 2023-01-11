import { SpeakeasyBase } from "../../../internal/utils";
import { Image } from "./image";
/**
 * Image search results
**/
export declare class ImageSearchResults extends SpeakeasyBase {
    data: Image[];
    message?: string;
    page?: number;
    perPage?: number;
    searchId: string;
    spellcheckInfo?: Record<string, any>;
    totalCount: number;
}
