import { SpeakeasyBase } from "../../../internal/utils";
import { PosDataProviders } from "./posdataproviders";
/**
 * Successful response
 */
export declare class LiasettingsListPosDataProvidersResponse extends SpeakeasyBase {
    /**
     * Identifies what kind of resource this is. Value: the fixed string "`content#liasettingsListPosDataProvidersResponse`".
     */
    kind?: string;
    /**
     * The list of POS data providers for each eligible country
     */
    posDataProviders?: PosDataProviders[];
}
