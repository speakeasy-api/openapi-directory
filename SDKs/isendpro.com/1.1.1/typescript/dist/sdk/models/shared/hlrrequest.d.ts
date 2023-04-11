import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Doit valoir "1"
 */
export declare enum HLRrequestGetHLREnum {
    One = "1"
}
export declare class HLRrequest extends SpeakeasyBase {
    /**
     * Doit valoir "1"
     */
    getHLR: HLRrequestGetHLREnum;
    /**
     * Clé API
     */
    keyid: string;
    /**
     * liste de numéros de téléphone
     */
    num: string[];
}
