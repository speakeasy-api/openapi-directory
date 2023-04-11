import { SpeakeasyBase } from "../../../internal/utils";
import { GiftCardActivityActivate } from "./giftcardactivityactivate";
import { GiftCardActivityAdjustDecrement } from "./giftcardactivityadjustdecrement";
import { GiftCardActivityAdjustIncrement } from "./giftcardactivityadjustincrement";
import { GiftCardActivityBlock } from "./giftcardactivityblock";
import { GiftCardActivityClearBalance } from "./giftcardactivityclearbalance";
import { GiftCardActivityDeactivate } from "./giftcardactivitydeactivate";
import { GiftCardActivityImport } from "./giftcardactivityimport";
import { GiftCardActivityImportReversal } from "./giftcardactivityimportreversal";
import { GiftCardActivityLoad } from "./giftcardactivityload";
import { GiftCardActivityRedeem } from "./giftcardactivityredeem";
import { GiftCardActivityRefund } from "./giftcardactivityrefund";
import { GiftCardActivityUnblock } from "./giftcardactivityunblock";
import { GiftCardActivityUnlinkedActivityRefund } from "./giftcardactivityunlinkedactivityrefund";
import { Money } from "./money";
/**
 * Represents an action performed on a gift card that affects its state or balance.
 */
export declare class GiftCardActivity extends SpeakeasyBase {
    /**
     * Describes a gift card activity of the ACTIVATE type.
     */
    activateActivityDetails?: GiftCardActivityActivate;
    /**
     * Describes a gift card activity of the ADJUST_DECREMENT type.
     */
    adjustDecrementActivityDetails?: GiftCardActivityAdjustDecrement;
    /**
     * Describes a gift card activity of the ADJUST_INCREMENT type.
     */
    adjustIncrementActivityDetails?: GiftCardActivityAdjustIncrement;
    /**
     * Describes a gift card activity of the BLOCK type.
     */
    blockActivityDetails?: GiftCardActivityBlock;
    /**
     * Describes a gift card activity of the CLEAR_BALANCE type.
     */
    clearBalanceActivityDetails?: GiftCardActivityClearBalance;
    /**
     * The timestamp when the gift card activity was created, in RFC 3339 format.
     */
    createdAt?: string;
    /**
     * Describes a gift card activity of the DEACTIVATE type.
     */
    deactivateActivityDetails?: GiftCardActivityDeactivate;
    /**
     * Represents an amount of money. `Money` fields can be signed or unsigned.
     *
     * @remarks
     * Fields that do not explicitly define whether they are signed or unsigned are
     * considered unsigned and can only hold positive amounts. For signed fields, the
     * sign of the value indicates the purpose of the money transfer. See
     * [Working with Monetary Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts)
     * for more information.
     */
    giftCardBalanceMoney?: Money;
    /**
     * The gift card GAN. The GAN is not required if `gift_card_id` is present.
     */
    giftCardGan?: string;
    /**
     * The gift card ID. The ID is not required if a GAN is present.
     */
    giftCardId?: string;
    /**
     * The unique ID of the gift card activity.
     */
    id?: string;
    /**
     * Describes a gift card activity of the IMPORT type and the `GiftCardGANSource` is OTHER
     *
     * @remarks
     * (a third-party gift card).
     */
    importActivityDetails?: GiftCardActivityImport;
    /**
     * Present only when GiftCardActivityType is IMPORT_REVERSAL and GiftCardGANSource is OTHER
     */
    importReversalActivityDetails?: GiftCardActivityImportReversal;
    /**
     * Present only when `GiftCardActivityType` is LOAD.
     */
    loadActivityDetails?: GiftCardActivityLoad;
    /**
     * The ID of the location at which the activity occurred.
     */
    locationId: string;
    /**
     * Present only when `GiftCardActivityType` is REDEEM.
     */
    redeemActivityDetails?: GiftCardActivityRedeem;
    /**
     * Present only when `GiftCardActivityType` is REFUND.
     */
    refundActivityDetails?: GiftCardActivityRefund;
    type: any;
    /**
     * Present only when `GiftCardActivityType` is UNBLOCK.
     */
    unblockActivityDetails?: GiftCardActivityUnblock;
    /**
     * Present only when `GiftCardActivityType` is UNLINKED_ACTIVITY_REFUND.
     */
    unlinkedActivityRefundActivityDetails?: GiftCardActivityUnlinkedActivityRefund;
}
