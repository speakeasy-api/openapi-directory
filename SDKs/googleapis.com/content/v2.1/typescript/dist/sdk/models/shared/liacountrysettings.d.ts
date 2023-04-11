import { SpeakeasyBase } from "../../../internal/utils";
import { LiaAboutPageSettings } from "./liaaboutpagesettings";
import { LiaInventorySettings } from "./liainventorysettings";
import { LiaOnDisplayToOrderSettings } from "./liaondisplaytoordersettings";
import { LiaPosDataProvider } from "./liaposdataprovider";
export declare class LiaCountrySettings extends SpeakeasyBase {
    about?: LiaAboutPageSettings;
    /**
     * Required. CLDR country code (for example, "US").
     */
    country?: string;
    /**
     * The status of the "Merchant hosted local storefront" feature.
     */
    hostedLocalStorefrontActive?: boolean;
    inventory?: LiaInventorySettings;
    onDisplayToOrder?: LiaOnDisplayToOrderSettings;
    posDataProvider?: LiaPosDataProvider;
    /**
     * The status of the "Store pickup" feature.
     */
    storePickupActive?: boolean;
}
