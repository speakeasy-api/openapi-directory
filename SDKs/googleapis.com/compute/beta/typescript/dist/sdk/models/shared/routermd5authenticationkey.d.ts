import { SpeakeasyBase } from "../../../internal/utils";
export declare class RouterMd5AuthenticationKey extends SpeakeasyBase {
    /**
     * [Input only] Value of the key. For patch and update calls, it can be skipped to copy the value from the previous configuration. This is allowed if the key with the same name existed before the operation. Maximum length is 80 characters. Can only contain printable ASCII characters.
     */
    key?: string;
    /**
     * Name used to identify the key. Must be unique within a router. Must be referenced by at least one bgpPeer. Must comply with RFC1035.
     */
    name?: string;
}
