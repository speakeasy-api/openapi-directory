import { SpeakeasyBase } from "../../../internal/utils";
export declare enum RabattSatzEnum {
    Normal = "NORMAL",
    Ermaessigt1 = "ERMAESSIGT1",
    Ermaessigt2 = "ERMAESSIGT2",
    Besonders = "BESONDERS",
    Null = "NULL"
}
export declare class Rabatt extends SpeakeasyBase {
    /**
     * The amount in cents
     */
    betragBrutto: number;
    /**
     * The amount in cents
     */
    betragNetto: number;
    bezeichnung: string;
    satz?: RabattSatzEnum;
}
