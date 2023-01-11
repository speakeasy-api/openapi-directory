import { SpeakeasyBase } from "../../../internal/utils";
import { Video } from "./video";
/**
 * Video search results
**/
export declare class VideoSearchResults extends SpeakeasyBase {
    data: Video[];
    message?: string;
    page?: number;
    perPage?: number;
    searchId: string;
    totalCount: number;
}
