import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A DHL Express account settings
**/
export declare class UpdateDhlExpressSettingsRequestBody extends SpeakeasyBase {
    isPrimaryAccount?: boolean;
    nickname?: string;
    shouldHideAccountNumberOnArchiveDoc?: boolean;
}
