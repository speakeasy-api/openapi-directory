import { SpeakeasyBase } from "../../../internal/utils";
export declare enum HlRrequestGetHlrEnum {
    One = "1"
}
export declare class HlRrequest extends SpeakeasyBase {
    getHLR: HlRrequestGetHlrEnum;
    keyid: string;
    num: string[];
}
