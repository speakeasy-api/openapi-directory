import { SpeakeasyBase } from "../../../internal/utils";
import { Card } from "./card";
/**
 * A User's credit card details
 */
export declare class Cards extends SpeakeasyBase {
    /**
     * An array of credit cards added by this user
     */
    cards: Card[];
    /**
     * The id of this user
     */
    userId: string;
}
