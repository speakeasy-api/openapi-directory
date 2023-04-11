import { SpeakeasyBase } from "../../../internal/utils";
export declare enum AppContextAppTypesEnum {
    Native = "NATIVE",
    Web = "WEB"
}
/**
 * Output only. The app type the restriction applies to for mobile device.
 */
export declare class AppContext extends SpeakeasyBase {
    /**
     * The app types this restriction applies to.
     */
    appTypes?: AppContextAppTypesEnum[];
}
