import { SpeakeasyBase } from "../../../internal/utils";
export declare class SecurityOption1 extends SpeakeasyBase {
    jwt: string;
    apiKey: string;
    streamAuthType: string;
}
export declare class SecurityOption2 extends SpeakeasyBase {
    apiKey: string;
    streamAuthType: string;
}
export declare class Security extends SpeakeasyBase {
    option1?: SecurityOption1;
    option2?: SecurityOption2;
}
