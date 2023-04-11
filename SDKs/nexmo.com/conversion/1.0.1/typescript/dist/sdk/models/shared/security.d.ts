import { SpeakeasyBase } from "../../../internal/utils";
export declare class SecurityOption1 extends SpeakeasyBase {
    apiKey: string;
    apiSecret: string;
}
export declare class SecurityOption2 extends SpeakeasyBase {
    apiKey: string;
    apiSig: string;
}
export declare class Security extends SpeakeasyBase {
    option1?: SecurityOption1;
    option2?: SecurityOption2;
}
