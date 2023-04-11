import { SpeakeasyBase } from "../../../internal/utils";
export declare class Zahlung extends SpeakeasyBase {
    /**
     * The amount in cents
     */
    betrag: number;
    bezeichnung: string;
    referenz?: string;
}
