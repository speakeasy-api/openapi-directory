import { SpeakeasyBase } from "../../../internal/utils";
import { Audio } from "./audio";
/**
 * Audio search results
**/
export declare class AudioSearchResults extends SpeakeasyBase {
    data: Audio[];
    message?: string;
    page?: number;
    perPage?: number;
    searchId: string;
    totalCount: number;
}
