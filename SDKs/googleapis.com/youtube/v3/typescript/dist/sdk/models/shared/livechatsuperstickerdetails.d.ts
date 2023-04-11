import { SpeakeasyBase } from "../../../internal/utils";
import { SuperStickerMetadata } from "./superstickermetadata";
export declare class LiveChatSuperStickerDetails extends SpeakeasyBase {
    /**
     * A rendered string that displays the fund amount and currency to the user.
     */
    amountDisplayString?: string;
    /**
     * The amount purchased by the user, in micros (1,750,000 micros = 1.75).
     */
    amountMicros?: string;
    /**
     * The currency in which the purchase was made.
     */
    currency?: string;
    superStickerMetadata?: SuperStickerMetadata;
    /**
     * The tier in which the amount belongs. Lower amounts belong to lower tiers. The lowest tier is 1.
     */
    tier?: number;
}
