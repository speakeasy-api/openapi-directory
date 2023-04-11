import { SpeakeasyBase } from "../../../internal/utils";
import { KeyMaterial } from "./keymaterial";
export declare class DataNotification extends SpeakeasyBase {
    entries: any[];
    keyMaterial: KeyMaterial;
    /**
     * Total number of pages.
     */
    pageCount: number;
    /**
     * Current page number.
     */
    pageNumber: number;
    /**
     * Transaction Id issued when data requested.
     */
    transactionId: string;
}
