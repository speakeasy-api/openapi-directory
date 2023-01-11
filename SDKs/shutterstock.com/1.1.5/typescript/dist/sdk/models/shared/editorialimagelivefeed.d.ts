import { SpeakeasyBase } from "../../../internal/utils";
import { EditorialCoverItem } from "./editorialcoveritem";
/**
 * Metadata about editorial livefeed
**/
export declare class EditorialImageLivefeed extends SpeakeasyBase {
    coverItem?: EditorialCoverItem;
    createdTime?: Date;
    id: string;
    name: string;
    totalItemCount: number;
}
