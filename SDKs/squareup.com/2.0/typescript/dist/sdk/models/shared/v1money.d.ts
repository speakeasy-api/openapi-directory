import { SpeakeasyBase } from "../../../internal/utils";
export declare class V1Money extends SpeakeasyBase {
    /**
     * Amount in the lowest denominated value of this Currency. E.g. in USD
     *
     * @remarks
     * these are cents, in JPY they are Yen (which do not have a 'cent' concept).
     */
    amount?: number;
    currencyCode?: string;
}
