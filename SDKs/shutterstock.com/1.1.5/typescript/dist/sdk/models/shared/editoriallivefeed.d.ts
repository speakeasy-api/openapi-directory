import { SpeakeasyBase } from "../../../internal/utils";
import { EditorialCoverItem } from "./editorialcoveritem";
/**
 * Metadata about editorial livefeed
**/
export declare class EditorialLivefeed extends SpeakeasyBase {
    coverItem?: EditorialCoverItem;
    createdTime?: Date;
    id: string;
    name: string;
    totalItemCount: number;
}
