import { SpeakeasyBase } from "../../../internal/utils";
import { PosDataProvidersPosDataProvider } from "./posdataprovidersposdataprovider";
export declare class PosDataProviders extends SpeakeasyBase {
    /**
     * Country code.
     */
    country?: string;
    /**
     * A list of POS data providers.
     */
    posDataProviders?: PosDataProvidersPosDataProvider[];
}
