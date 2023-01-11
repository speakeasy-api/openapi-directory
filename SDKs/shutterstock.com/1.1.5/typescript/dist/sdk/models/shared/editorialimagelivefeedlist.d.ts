import { SpeakeasyBase } from "../../../internal/utils";
import { EditorialLivefeed } from "./editoriallivefeed";
/**
 * List of editorial livefeeds
**/
export declare class EditorialImageLivefeedList extends SpeakeasyBase {
    data: EditorialLivefeed[];
    message?: string;
    page?: number;
    perPage?: number;
    totalCount: number;
}
