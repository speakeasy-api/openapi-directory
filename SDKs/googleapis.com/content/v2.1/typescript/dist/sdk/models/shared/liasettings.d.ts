import { SpeakeasyBase } from "../../../internal/utils";
import { LiaCountrySettings } from "./liacountrysettings";
/**
 * Local Inventory ads (LIA) settings. All methods except listposdataproviders require the admin role.
 */
export declare class LiaSettings extends SpeakeasyBase {
    /**
     * The ID of the account to which these LIA settings belong. Ignored upon update, always present in get request responses.
     */
    accountId?: string;
    /**
     * The LIA settings for each country.
     */
    countrySettings?: LiaCountrySettings[];
    /**
     * Identifies what kind of resource this is. Value: the fixed string "`content#liaSettings`"
     */
    kind?: string;
}
